const pg = require('pg');

var config = {
  user: process.env.USER,
  password: null,
  database: 'snapspots',
  host: 'localhost',
  port: 5432
};

const client = new pg.Client(config);
client.connect();

module.exports = client;