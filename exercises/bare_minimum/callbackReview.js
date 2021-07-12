/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      callback(err);
    } else {
      let lines = content.split('\n');
      callback(err, lines[0]);
    };
  });
}

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  try {
    request.get(url).on('response', function (request) {
      let statusCode = request.statusCode;
      //console.log(statusCode); // 200
        callback(request.error, statusCode);
    });
  }
  catch (err) {
    callback(err)
  }
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
