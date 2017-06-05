var router = require('express').Router();
var bodyParser = require('body-parser');
var controllers = require('../controllers/controllers.js');

router.post('/search/results', controllers.tilePane.post);

router.get('/tilePage/getAllDb', controllers.listPhotos.get);

router.post('/tilePage/getPhotosInRange', controllers.listPhotos.post);

router.post('/images/upload', controllers.imageUpload.post);

router.post('/locationPage/getContent', controllers.getLocationContent.post);



module.exports = router;