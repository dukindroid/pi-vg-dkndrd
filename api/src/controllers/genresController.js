const { Videogame, Genre } = require('../models/index')

const QueryByGenre = async (actividad) => {
  const generoPorVideogame = await Genre.findByPk(actividad, {
    include: {
      model: Videogame,
      attributes: ['name']
    },
  })
  return generoPorVideogame
}

module.exports = QueryByGenre
