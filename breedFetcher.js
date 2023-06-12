const request = require('request');
const args = process.argv.slice(2)[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;

request(url, (error, response, body) => {
  try {
    if (error) {
      throw new Error(`Error: ${error}`);
    } else if (response.statusCode !== 200) {
      throw new Error(`Status: ${response.statusCode}`);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        console.log('Description:', data[0]['description']);
      } else {
        throw new Error('Data not found');
      }
    }
  } catch (err) {
    console.error(err.message);
  }
});