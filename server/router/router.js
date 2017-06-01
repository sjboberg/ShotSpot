var router = require('express').Router();
var controllers = require('../controllers/controllers.js');

router.post('/search/result', controllers.tilePane.get);

module.exports = router;