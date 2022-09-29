const Videogame = require('./Videogame')
const Genre = require('./Genre')
// const db = require('../db/index')

Videogame.belongsToMany(Genre, { through: 'VideogameGenre', timestamps: false })
Genre.belongsToMany(Videogame, { through: 'VideogameGenre', timestamps: false })

module.exports = { Videogame, Genre }
