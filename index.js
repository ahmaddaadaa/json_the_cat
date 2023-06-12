const fetchBreedDescription = require('./breedFetcher.js');

const breedName = 'sib';

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});





//process.argv.slice(2)[0].substring(0, 3);