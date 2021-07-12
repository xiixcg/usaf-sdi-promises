/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  // TODO
  const myPromise = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', function (err, content) {
      if (err) {
        reject(err);
      } else {
        let lines = content.split('\n');
        resolve(lines[0]);
      };
    });
  })

  return myPromise;
};



// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  const myPromise = new Promise((resolve, reject) => {
    request.get(url, function (error, response) {
      if (error) {
        reject(error);
      } else {
        resolve(response.statusCode);
      }
    })
  })

  return myPromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
