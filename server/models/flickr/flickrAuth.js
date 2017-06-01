var apiKeys = require('../../../apiKeys.js');
var Flickr = require("flickrapi");

var flickrOptions = {
  api_key: process.env.FLICKR_API_KEY || apiKeys.flickr.apiKey,
  secret: process.env.FLICKR_API_SECRET || apiKeys.flickr.secret,
  permissions: "delete",
  nobrowser: true
};

Flickr.authenticate(flickrOptions, function(error, flickr) {
  if (error) {
    console.log(error);
  }
});
