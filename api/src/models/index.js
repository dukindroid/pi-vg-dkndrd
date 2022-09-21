const Videogame = require('./Videogame')
const Genre = require('./Genre')
const { QueryAndCount, Query } = require('../controllers/videogameController')
const QueryByGenre = require('../controllers/genresController')

Videogame.belongsToMany(Genre, { through: 'VideogameGenre', timestamps: false })
Genre.belongsToMany(Videogame, { through: 'VideogameGenre', timestamps: false })

module.exports = {
  Videogame,
  Genre,
  QueryAndCount,
  Query,
  QueryByGenre
}