var router = require('express').Router();
var bodyParser = require('body-parser');
var controllers = require('../controllers/controllers.js');

router.post('/search/results', controllers.tilePane.post);

module.exports = router;