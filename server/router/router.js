var router = require('express').Router();
var bodyParser = require('body-parser');
var controllers = require('../controllers/controllers.js');

router.post('/search/result', controllers.tilePane.post);

module.exports = router;