const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 5-starwars_characters.js <Movie_ID>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  try {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;

    if (characterUrls.length === 0) {
      console.log('No characters found for this movie.');
    } else {
      characterUrls.forEach((characterUrl) => {
        request(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            console.error(charError.message);
          } else if (charResponse.statusCode === 200) {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          }
        });
      });
    }
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError.message);
    process.exit(1);
  }
});

