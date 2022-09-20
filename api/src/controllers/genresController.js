const Videogame = require('../models/Videogame')
const Genre = require('../models/Genre')
// const consolog = require('debug')('dev')

const QueryByGenre = async (which) => {
  const juegosPorGenero = await Videogame.findByPk(which, {
    include: {
      model: Genre,
      attributes: ['name']
    },
    limit: 1
  })
  // consolog(`Desde genresController: Recibí ${which} mando: ${JSON.stringify(juegosPorGenero)}`)
  return (await juegosPorGenero).toJSON()
  // .Videogames.map(videogame => videogame.name) // .toJSON().Videogames.map(el => el.name)
}

module.exports = QueryByGenre
