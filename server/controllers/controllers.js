var models = require('../models/models.js');
var dbHelpers = require('../models/dbHelpers.js');
var NodeGeocoder = require('node-geocoder');
var distance = require('gps-distance');

var options = {
  provider: 'google'
};
var geocoder = NodeGeocoder(options);

module.exports = {
  tilePane: {
    post: function(req, res) {
      var coordinates = {};
      geocoder.geocode(req.body.search, function(error, result) {
        coordinates['Latitude'] = result[0].latitude;
        coordinates['Longitude'] = result[0].longitude;
        coordinates['Search'] = true;
        console.log('These are the coordinates: ', coordinates);
        console.log('This is the search bar result from the controller: ', req.body);
        res.send(coordinates);
      });
    }
  },
  listPhotos: {
    get: function(req, res) {
      var photoArray = [];
      dbHelpers.getAllPhotos(function(err, result) {
        if (err) {
          console.log('This is an error inside controllers for getting all photos: ', err);
        }
        result.forEach(function(value) {
          photoArray.push(value.uri);
        });
        res.send(photoArray);
      });
    },
    post: function(req, res) {
      let radiustoSearch = 25; //Miles
      console.log('This should be the latitude: ', req.body);
      let locationstosend = [];
      dbHelpers.getLocationCoordinates((err, result) => {
        if (err) {
          console.log('There is an error in the controller on getLocationCoordinates: ', err);
        } else {
          result.forEach(function(location) {
            let content = {
              id: '',
              name: '',
              coordinates: '',
              photos: [],
              comments: []
            };
            let splitcoords = location.coordinates.split(',');
            let result = distance(req.body.latitude, req.body.longitude, splitcoords[0], splitcoords[1]);
            let milediff = result * 0.621371;
            if (milediff < radiustoSearch) {
              content.id = location.id;
              content.name = location.name;
              content.coordinates = {latitude: splitcoords[0], longitude: splitcoords[1]};
              locationstosend.push(content);
            }
          });
          dbHelpers.getAllPhotos( (err2, result2) => {
            if (err2) {
              console.log('this is an error in getAllPhotos handler call in controllers: ', err2);
            } else {
              locationstosend.forEach(function(locationvalue) {
                result2.forEach(function(photoresult) {
                  if (parseInt(locationvalue.id, 10) === photoresult.location_id) {
                    locationvalue.photos.push(photoresult.uri);
                  }
                });
              });
            }
            res.send(locationstosend);
          });
        }
      });
    }
  },
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
  }
};