// const Videogame = require('../models/Videogame')
// const Genre = require('../models/Genre')
const { Videogame, Genre } = require('../models/index')
// const consolog = require('debug')('dev')

const QueryByGenre = async (which) => {
  const generoPorJuego = await Genre.findByPk(which, {
    include: {
      model: Videogame,
      attributes: ['name']
    }
  })
  // consolog(`Desde genresController: Recibí ${which} mando: ${JSON.stringify(juegosPorGenero)}`)
  return generoPorJuego
  // .Videogames.map(videogame => videogame.name) // .toJSON().Videogames.map(el => el.name)
}
// const coso = QueryByGenre('action')

module.exports = QueryByGenre
/*
const {Country, Activity} = require('../models/index')

const QueryByActivity = async (actividad) =>{
  const actividadPorPais = await Activity.findByPk(actividad, {
    include: { 
      model: Country, 
      attributes: ['name']
    }  
  })
  return actividadPorPais 
}
// console.log(QueryByActivity('nadar')) //?

module.exports = QueryByActivity

*/