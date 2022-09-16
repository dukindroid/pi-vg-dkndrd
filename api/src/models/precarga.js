// const consolog = require('debug')('dev');
const {Sequelize} = require('sequelize');
const sequelize = require('../db/index')
const {Videogame, Genre} = require('./index');

const genresSeed = require('./seed/genresSeed');
const videogamesSeed = require('./seed/videogamesSeed');
const { search } = require('../controllers/videogameController');
/*----------------------------------------------------------------
      Initial load
----------------------------------------------------------------*/
( async () => {
  await sequelize.sync({force: true});
  // consolog('Conexión a posgres exitosa!')  
  // Bulk Create 'Genres' table:
  await Promise.all( genresSeed.map( async (singleGenre) => await Genre.create( { name: singleGenre } )
  )) ;
  
  // Bulk Create 'Videogame' table:
  await Promise.all(videogamesSeed.map( async ( oneGame ) => {
    const { name, description, released, rating, platforms, genres } = oneGame;
    const newVideogame = await Videogame.create({ name, description, released, rating, platforms });  
    // Fill VideogameGenre n:n associations table:
    await Promise.all(genres.map( async ( genre ) => {
      await newVideogame.addGenre( genre, { through: 'VideogameGenre' })
    }))
    await filterByGenre('Shooter');
    console.log((await todosLosCountries).toJSON())
  }));
  

})();
