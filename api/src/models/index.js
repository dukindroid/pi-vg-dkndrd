const Videogame = require('./Videogame');
const Genre = require('./Genre');
const sequelize = require('../db')

Videogame.belongsToMany( Genre, { through: 'VideogameGenre', timestamps: false })
Genre.belongsToMany( Videogame, { through: 'VideogameGenre', timestamps: false })

module.exports = {
  Videogame,
  Genre
}