var Flickr = require("flickrapi");

var flickrOptions = {
  api_key: process.env.FLICKR_API_KEY,
  secret: process.env.FLICKR_API_SECRET,
  permissions: "delete",
  nobrowser: true
};

Flickr.authenticate(flickrOptions, function(error, flickr) {
  if (error) {
    console.log(error);
  }
});
