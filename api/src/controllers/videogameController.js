const { Videogame } = require("../models");
const { Op } = require("sequelize");
const db = require("../db");
const TAMANIO_PAGINA = 3;

/*----------------------------------------------------------------
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
  const config = {
  search: 'limbo',
    filter: 'name',
    order: '+',
    page: 1
  }
  let rows = Query(config)
  let {count, rows} = await QueryAndCount(config);
  console.log(`Se encontraron: ${count} videojuegos:`);
  console.log(await (await rows).map(el=>el.name))
  })();
  ----------------------------------------------------------------*/
  const buscar = ({search}) => {
  return search? {
    where: { 
      name: { 
        [Op.iLike]: search 
      } 
    }
  } : null;
};
const filtrar = ({ filter, order }) => {
  const orden = (order === '+') ? 'ASC' : 'DESC';
  return filter ? {
    order: [[filter, orden]],
  } : null;
};
const paginar = ({ page }) => {
  const offset = (page-1) * TAMANIO_PAGINA;
  const limit = TAMANIO_PAGINA;

  return page ? {
    offset,
    limit,
  } : null;
};
const QueryAndCount = async (settings) => {
  const config = {
    ...buscar(settings),
    ...filtrar(settings),
    ...paginar(settings),
  }
  return await Videogame.findAndCountAll( config );
};
const Query = async (settings) => {
  const config = {
    ...buscar(settings),
    ...filtrar(settings),
    ...paginar(settings),
  }
  return await Videogame.findAll( config );
};

module.exports = {
  Query,
  QueryAndCount
}