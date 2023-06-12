const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    try {
      if (error) {
        callback(new Error(`Error: ${error}`));
      } else if (response.statusCode !== 200) {
        callback(new Error(`Status: ${response.statusCode}`));
      } else {
        const data = JSON.parse(body);
        if (data.length > 0) {
          callback(null, data[0]['description']);
        } else {
          callback(new Error('Data not found'));
        }
      }
    } catch (err) {
      callback(err);
    }
  });
};



module.exports = fetchBreedDescription;