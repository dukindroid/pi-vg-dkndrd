// let genresSeed = require('./genresSeed.json').results.map(unGenero => unGenero.name);
// let GenresArray = genresSeed.results.map(unGenero => unGenero.name);

module.exports = require('./genresSeed.json')
  .results.map(unGenero => unGenero.name.toLowerCase())
