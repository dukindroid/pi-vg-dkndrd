
/*----------------------------------------------------------------
      Controller: Filtering functions

 * What is required:
  - filter using intermediate table (By Genre)
  - filter alphabetically ('name' column)
  - filter by rating ('rating' column)
  - filter by source (rawr or local, 'id' column)
  - filter by search query

----------------------------------------------------------------*/
// Filter by Genre:
const { Videogame, Genre } = require("../models");
const { Op } = require("sequelize");
const db = require("../db");
const TAMANIO_PAGINA = 3;


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

/*
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
*/
const Query = async (settings) => {
  const config = {
    ...buscar(settings),
    ...filtrar(settings),
    ...paginar(settings),
  }
  return config;
  // console.log(config);
  // return await Videogame.findAll({
  // });
};



(async () => {
  db.sync();
  
  const config = {
    // search: 'limbo',
    filter: 'name',
    order: '+',
    page: 1
  }
  const settings = await Query(config);
  // const result = Videogame.findAll(settings); //
  const {count, rows} = await Videogame.findAndCountAll(settings); //
  console.log(`Se encontraron: ${count} videojuegos:`);
  // console.log(allVG.map(el => {`\n * ${el.name} ${el.rating}`}))
  console.log(rows.map(el => el.name))
  // (await result).map(el=> el.name)

  // console.log(allVG);

  // await result.map(el => {console.log(`- ${el.name}`)});
  console.log();
  
  
})();

  // module.exports = {
  //   pager,
  //   search,
  //   sortByRating,
  //   sortAlphabetically,
  //   filterByAuthor,
  //   filterByGenre
  // }