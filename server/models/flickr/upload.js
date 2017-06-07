var Flickr = require("flickrapi");
var apiKeys = require('../../../apiKeys.js');
var request = require('request');

var flickrOptions = {
  api_key: process.env.FLICKR_API_KEY || apiKeys.flickr.apiKey,
  secret: process.env.FLICKR_API_SECRET || apiKeys.flickr.secret,
  permissions: "delete",
  user_id: process.env.FLICKR_USER_ID || apiKeys.flickr.userId,
  access_token: process.env.FLICKR_ACCESS_TOKEN || apiKeys.flickr.accessToken,
  access_token_secret: process.env.FLICKR_ACCESS_TOKEN_SECRET || apiKeys.flickr.accessTokenSecret
};

var getPhotoUrl = function(photoId, cb) {
  var endpoint = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=' + flickrOptions.api_key + '&photo_id=' + photoId +'&format=json&nojsoncallback=1';
  request(endpoint, function (err, response, body) {
    if (err) {
      cb (err, null);
    } else {
      body = JSON.parse(body).photo;
      var photoUrl = 'https://farm' + body.farm + '.staticflickr.com/' + body.server + '/' + body.id + '_' + body.secret + '.jpg';
      cb (null, photoUrl);
    }
  });
}

exports.upload = function(title, fileLocation) {
  var uploadOptions = {
    photos: [{
      title: title,
      photo: fileLocation
    }]
  };

  Flickr.upload(uploadOptions, flickrOptions, function(err, result) {
    if(err) {
      console.log(err);
    } else {
      getPhotoUrl(result, (err, url) => {
        if (err) {
          console.log(err);
        } else {
          console.log(url);
          return url;
        }
      });
    }
  });
}
