var pool = require('./dbConnection.js');

exports.addPhoto = (locationId, userId, uri, cb) => {
  var query = "INSERT INTO photos (location_id, user_id, uri, date) VALUES ($1, $2, $3, CURRENT_TIMESTAMP);";
  pool.query(query, [locationId, userId, uri], function (err, result) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, true);
    }
  });
}
