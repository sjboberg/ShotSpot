var models = require('../models/models.js');

module.exports = {
  tilePane: {
    post: function(req, res) {
      console.log('This is the search bar result from the server: ', req.body);
    }
  }
};