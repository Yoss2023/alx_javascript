const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <api_url>');
  process.exit(1);
}

const apiUrl = process.argv[2];

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
    const filmsData = JSON.parse(body).results;
    const wedgeAntillesCount = filmsData.filter((film) =>
      film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    ).length;

    console.log(wedgeAntillesCount);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError.message);
    process.exit(1);
  }
});

