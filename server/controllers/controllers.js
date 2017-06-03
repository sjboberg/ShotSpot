var models = require('../models/models.js');
var dbHelpers = require('../models/dbHelpers.js');

module.exports = {
  tilePane: {
    post: function(req, res) {
      console.log('This is the search bar result from the controller: ', req.body);
      res.send(true);
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
  }
};