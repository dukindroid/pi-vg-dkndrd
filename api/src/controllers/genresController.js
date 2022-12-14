const { Videogame, Genre } = require('../models/index')

const QueryByGenre = async (oneGenre) => {
  consolog(`Buscar este género: ${oneGenre}`)
  const generoPorVideogame = await Genre.findByPk(oneGenre, {
    include: {
      model: Videogame,
      attributes: ['name']
    }
  })
  return generoPorVideogame
}

module.exports = QueryByGenre
