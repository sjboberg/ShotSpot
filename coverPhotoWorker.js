var dbHelpers = require('./server/models/dbHelpers.js');

dbHelpers.updateCoverPhotos((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result.command + ' ' + result.rowCount);
  }
});
