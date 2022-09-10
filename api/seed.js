const consolog = require('debug')('dev');
const {Sequelize} = require('sequelize');
const db = require('./src/db');
const sequelize = require('./src/db')
const { Genre, Videogame } = require('./src/models');
const genresSeed = require('./src/models/seed/genresSeed');
const videogamesSeed = require('./src/models/seed/videogamesSeed');

/*----------------------------------------------------------------
      Controller: Filtering functions
----------------------------------------------------------------*/
// Filter by Genre:
// Returns [Videogames
const filterByGenre = async (which) => {
  let juegosPorGenero = await Genre.findByPk(which, {
    include: {
      model: Videogame, 
      attributes: ['name'],
    },
  });
  return juegosPorGenero.toJSON().Videogames.map(el => el.name)
};
// Filter by API Author (rawr api/henry api)
const filterByAuthor = async (which) => {
  // if (id typeof integer || typeof UUID)
  // TODO:

  return '💩';
};

// Sort videogames alphabetically
const sortAlphabetically = async (ascdesc) => {
  // Debería de regresar toooooda la lista de video juegos?
  // asc/desc para ordenar desde la a a la z o vercevisa
  // returns videogames ordenados albaféticamente
  let todosLosVideogames = await Videogame.findAll({ order:[['name',ascdesc]] });
  // todosLosVideogames.Videogame 
  return todosLosVideogames;
};

// Sort by rating 
const sortByRating = async (ascdesc) => {
  // Debería de ordenar los videogames por rating ascendente o descendente
  // returns videogames ordenados por rating
  let todosLosVideogames = await Videogame.findAll({ order:[['rating',ascdesc]] });
  return todosLosVideogames;
};

/*----------------------------------------------------------------
      Initial load
----------------------------------------------------------------*/
( async () => {
  await sequelize.sync({force: true});
  consolog('Conexión a posgres exitosa!')  
  // Bulk Create 'Genres' table:
  await Promise.all( genresSeed.map( 
      async (singleGenre) => 
        await Genre.create( { name: singleGenre } )
  )) ;
  
  // Bulk Create 'Videogame' table:
  await Promise.all(videogamesSeed.map( async ( oneGame ) => {
    const { name, description, released, rating, platforms, genres } = oneGame;
    const newVideogame = await Videogame.create({ name, description, released, rating, platforms });  
    // Fill VideogameGenre n:n associations table:
    await Promise.all(genres.map( async ( genre ) => {
      await newVideogame.addGenre( genre, { through: 'VideogameGenre' })
    }))
  }));

  // Filter By genre test:
  // let coso = await filterByGenre('Shooter')
  // console.log(coso);

  // Filter by Name, alphabetically
  // let coso2 = await sortAlphabetically('DESC');
  // coso2.map( el => {
  //   console.log(el.toJSON().name)
  // })

  // Filter by rating
  let coso3 = await sortByRating('ASC');
  coso3.map( el => {
    console.log(el.toJSON().name + " Rating: " + el.toJSON().rating)
  })

})();
