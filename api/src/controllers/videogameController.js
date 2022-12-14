const { Videogame, Genre } = require('../models/index')
// const Videogame = require('../models/Videogame')
// const Genre = require('../models/Genre')
// const db = require('../db')
const { Op } = require('sequelize')
const TAMANIO_PAGINA = 9
const consolog = require('debug')('dev')

/*
      Controller: Filtering functions

 * What is required:
  - filter using intermediate table (By Genre)
  - filter alphabetically ('name' column)
  - filter by rating ('rating' column)
  - filter by source (rawr or local, 'id' column)
  - filter by search query

  - We get all this from a query string
  settings: {
    search: searchQuery,
    filter: filterQuery // (rating, name, source),
    order: orderQuery, // ( -, +)
    page: pageQuery // (int)
  }
  - I.e.:
  const settings = {
    search: 'Bio',
    filter: 'rating',
    order: '-',
    page: 3
  }
  // Tests:
  (async () => {
  db.sync();
  let rows = Query(config)
  let {count, rows} = await QueryAndCount(config);
  consolog(`Se encontraron: ${count} videojuegos:`);
  consolog(await (await rows).map(el=>el.name))
})();
*/

// const GenreByVideogame2 = async (id) => await db.models

const GenreByVideogame = async (actividad) => {
  const GeneroPorVideogame = await Genre.findByPk(actividad, {
    include: {
      model: Videogame,
      attributes: ['name']
    }
  })
  // consolog(`La funcioncita devuelve: ${JSON.stringify(GeneroPorVideogame)}`)
  return GeneroPorVideogame
}
const GenreByVideogame2 = async (cual) => {
  Videogame.findAll({
    where: {
      genres: 'action'
    }
  })
}
const buscar = ({ search }) => {
  return search ? { where: { name: { [Op.iLike]: '%' + search + '%' } } } : null
}
const filtrar = ({ filter, order }) => {
  // const orden = (order === '+') ? 'ASC' : 'DESC';
  return filter ? { order: [[filter, order]] } : null
}
const paginar = ({ page }) => {
  const offset = (page - 1) * TAMANIO_PAGINA
  const limit = TAMANIO_PAGINA

  return page ? { offset, limit } : null
}
const QueryAndCount = async (settings) => {
  const config = {
    ...buscar(settings),
    ...filtrar(settings),
    ...paginar(settings)
  }
  return await Videogame.findAndCountAll(config)
}
// LA FUNCIONCITA
const Query = async (settings) => {
  const config = {
    ...buscar(settings),
    ...filtrar(settings),
    ...paginar(settings)
  }
  try {
    consolog(config)
    return await Videogame.findAll(config)
  } catch (error) {
    consolog(error)
  }
}

/*
const settings = {
  search: 'Bio',
  filter: 'name',
  order: '+',
  page: 3
}
const consulta = Query(settings)
consolog(consulta)
*/

module.exports = {
  Query,
  QueryAndCount,
  GenreByVideogame,
  GenreByVideogame2
}
