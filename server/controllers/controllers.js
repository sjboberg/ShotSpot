require('dotenv').config()
var flick = require('../models/flickr/upload.js');
var models = require('../models/models.js');
var dbHelpers = require('../models/dbHelpers.js');
var NodeGeocoder = require('node-geocoder');
var distance = require('gps-distance');
var path = require('path');
var fs = require('fs');
var options = {
  provider: 'google'
};
var geocoder = NodeGeocoder(options);
var flick = require('../models/flickr/upload.js');

var shortid = require('shortid');
 
module.exports = {
  tilePane: {
    post: function(req, res) {
      var coordinates = {};
      geocoder.geocode(req.body.search, function(error, result) {
        coordinates['Latitude'] = result[0].latitude;
        coordinates['Longitude'] = result[0].longitude;
        coordinates['Search'] = true;
        res.send(coordinates);
      });
    }
  },
  // this should be updated to get cover photos for each location, not just all photos
  // as multiple photos can point to one location
  listPhotos: {
    get: function(req, res) {
      var photoArray = [];
      dbHelpers.getAllPhotos(function(err, result) {
        if (err) {
          console.log('This is an error inside controllers for getting all photos: ', err);
        }
        result.forEach(function(value) {
          photoArray.push({uri: value.uri, locationId: value.location_id});
        });
        res.send(photoArray);
      });
    },
    post: function(req, res) {
      let radiustoSearch = 25; //Miles
      let locationstosend = {
        locations: [],
        searchCoordinates: [req.body.latitude, req.body.longitude]
      };
      dbHelpers.getLocationsAndCoverPhotos((err, result) => {
        if (err) {
          console.log('There is an error in the controller on getLocationsAndCoverPhotos: ', err);
        } else {
          result.forEach(function(location) {
            let content = {
              id: '',
              name: '',
              category: '',
              coordinates: '',
              coverPhoto: [],
              comments: []
            };
            let splitcoords = location.coordinates.split(',');
            let result = distance(req.body.latitude, req.body.longitude, splitcoords[0], splitcoords[1]);
            let milediff = result * 0.621371;
            if (milediff < radiustoSearch) {
              content.id = location.id;
              content.name = location.name;
              content.category = location.category;
              content.coverPhoto.push(location.uri);
              content.coordinates = {latitude: splitcoords[0], longitude: splitcoords[1]};
              locationstosend.locations.push(content);
            }
          });
          res.send(locationstosend);
        }
      });
    }
  },
  // Should refactor this to use promises to avoid the cb pyramid
  getLocationContent: {
    post: (req, res) => {
      var content = {
        id: '',
        name: '',
        coordinates: '',
        comments: [],
        photos: []
      };
      dbHelpers.getLocationInfo(req.body.locationId, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          result.forEach((location) => {
            content.id = location.id;
            content.name = location.name;
            content.coordinates = location.coordinates;
          });
        }
        dbHelpers.getLocationComments(req.body.locationId, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            result.forEach((comment) => {
              content.comments.push(comment);
            });
          }
          dbHelpers.getLocationPhotos(req.body.locationId, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              result.forEach((photo) => {
                content.photos.push(photo);
              });
            }
            res.send(content);
          });
        });
      });
    }
  },
  imageUpload: {
    post: (req, res) => {
      if(!req.files){
        res.send('There was no image selected! Please try again');
      }
      let image = req.files.imageToUpload;
      let newName = shortid.generate();
      let testimage = image.name.split('.')
      image.mv(path.join(__dirname, '../../public/images/') + image.name, function(err) {
        if(err) {
          return res.send(err);
        }
        res.redirect(200, 'http://localhost:3000/')
      })
      
      var uniqueFileName = path.join(__dirname, '../../public/images/' + newName + '.' + testimage[1])
      fs.renameSync(path.join(__dirname, '../../public/images/'+ image.name), uniqueFileName)
      flick.upload(image.name, uniqueFileName)
      fs.unlink(uniqueFileName, (err) => {
        if (err) {
            console.log("failed to delete local image:"+err);
        } else {
            console.log('successfully deleted local image');                                
        }
      });
    }
  }
};