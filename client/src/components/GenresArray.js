const losGeneros = require('./genres.example.json')
const GenresArray = losGeneros.results.map(unGenero => unGenero.name)
module.exports = GenresArray
