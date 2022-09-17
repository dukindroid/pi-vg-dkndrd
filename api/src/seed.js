// const consolog = require('debug')('dev');
const {Sequelize} = require('sequelize');
const sequelize = require('./db/index')
const {Videogame, Genre} = require('./models/index');
const genresSeed = require('./models/seed/genresSeed');
const videogamesSeed = require('./models/seed/videogamesSeed');
// const { Query, QueryAndCount } = require('./controllers/videogameController');
const QueryByGenre = require('./controllers/genresController');
/*----------------------------------------------------------------
      Initial load
----------------------------------------------------------------*/
( 

  async () => {
    try {
      
    } catch (error) {
      
    }
    
  await sequelize.sync({force: true});
  // consolog('Conexión a posgres exitosa!')  
  // Bulk Create 'Genres' table:
  await Promise.all( genresSeed.map( async (singleGenre) => 
    await Genre.create({
      name: singleGenre 
    })
  ));
    
  // Bulk Create 'Videogame' table:
  await Promise.all( videogamesSeed.map( async ( oneGame ) => {
    const {
      // id,
      name, 
      description, 
      released, 
      rating, 
      platforms, 
      genres 
    } = oneGame;
 
    const newVideogame = await Videogame.create({
      // id,
      name, 
      description, 
      released, 
      rating, 
      platforms 
    });
    console.log("Hemos creado este videogame: ")
    console.log(newVideogame.toJSON());

    // Fill VideogameGenre n:n associations table:
    await Promise.all( 
      genres.map( async ( genre ) => {
        await newVideogame.addGenre( genre, {
          through: 'VideogameGenre' 
        })
      })
    )
  }));
  

})();
