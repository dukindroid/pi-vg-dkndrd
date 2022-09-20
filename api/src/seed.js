// const consolog = require('debug')('dev');
const {Sequelize} = require('sequelize');
const sequelize = require('./db/index')
const consolog = require('debug')('dev');
const {Videogame, Genre} = require('./models/index');
const genresSeed = require('./models/seed/genresSeed');
const videogamesSeed = require('./models/seed/videogamesSeed');
// const { Query, QueryAndCount } = require('./controllers/videogameController');
const QueryByGenre = require('./controllers/genresController');
const db = require('./db/index');

/*----------------------------------------------------------------
      Initial load
----------------------------------------------------------------*/
( 
  async () => {
  
  
  consolog("Cargando datos iniciales...");

  await sequelize.sync({force: true});
  // consolog('Conexión a posgres exitosa!')  
  // Bulk Create 'Genres' table:
  consolog("Cargando Generos...");

  await Promise.all( genresSeed.map( async (singleGenre) => 
    await Genre.create({
      name: singleGenre 
    })
  ));
    
  // Bulk Create 'Videogame' table:
  consolog("Cargando Videogames...");
  var algo = false;
  await Promise.all( videogamesSeed.map( async ( oneGame ) => {
    const {
      id,
      img,
      name, 
      description, 
      released, 
      rating, 
      platforms, 
      genres 
    } = oneGame;
    
    const newVideogame = await Videogame.create({
      id,
      img,
      name, 
      description, 
      released, 
      rating, 
      platforms 
    });
    // consolog("Hemos creado este videogame: ")
    // consolog(newVideogame.toJSON());

    // Fill VideogameGenre n:n associations table:
    if (!algo) {
      consolog("Creando tabla intermedia...");
      algo = true;
    }

    await Promise.all( 
      genres.map( async ( genre ) => {
        await newVideogame.addGenre( String( genre ).toLowerCase(), {
          through: 'VideogameGenre' 
        })
      })
    )
  }));
  
if (parseInt(await Videogame.count()) == 100) consolog("Carga exitosa.")
// console.log("Estos videogames tenemos: " + await Videogame.count());
sequelize.close();
})();
