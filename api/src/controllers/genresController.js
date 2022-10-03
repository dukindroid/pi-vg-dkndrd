const { Videogame, Genre } = require('../models/index')

const QueryByGenre = async (oneGenre) => {
  const generoPorVideogame = await Genre.findByPk(oneGenre, {
    include: {
      model: Videogame,
      attributes: ['name', 'img', 'id', 'genres']
    }
  })
  return generoPorVideogame
}

module.exports = QueryByGenre
