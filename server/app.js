var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./router/router.js');

var app = express();

app.use(bodyParser.json());
app.use(router);

var IP = process.env.IP || 'localhost';

var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function () {
  console.log('listening to port', port);
});
