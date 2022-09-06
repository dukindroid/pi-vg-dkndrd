let losGeneros = require('./genres.example.json');

let GenresArray = losGeneros.results.map(unGenero => unGenero.name);

module.exports = GenresArray;