const {Sequelize} = require('sequelize');
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
  return juegosPorGenero.toJSON();
};

// Filter by API Author (rawr api/henry api)
const filterByAuthor = async (which) => {
  return '💩';
};

// Sort videogames alphabetically
const sortAlphabetically = async (ascdesc) => {
  // Debería de regresar toooooda la lista de video juegos?
  // asc/desc para ordenar desde la a a la z o vercevisa
  // returns videogames ordenados albaféticamente
};

// Sort by rating 
const sortByRating = async (ascdesc) => {
  // Debería de ordenar los videogames por rating ascendente o descendente
  // returns videogames ordenados por rating
};

/*----------------------------------------------------------------
      Initial load
----------------------------------------------------------------*/
( async () => {
  await sequelize.sync({force: true});
  // Bulk Create 'Genres' table:
  let generos = await Promise.all( genresSeed.map( 
      async (singleGenre) => 
        await Genre.create( { name: singleGenre } )
  )) ;
  // Bulk Create 'Videogame' table:
  let juegos = await Promise.all(videogamesSeed.map( async ( oneGame ) => {
    const { name, description, released, rating, platforms, genres } = oneGame;
    const newVideogame = await Videogame.create({ name, description, released, rating, platforms });
    
    // Fill VideogameGenre n:n associations table:
    await Promise.all(genres.map( async ( genre ) => {
      await newVideogame.addGenre( genre, { through: 'VideogameGenre' })
    }))
  }));
  // Filter By genre test:
  // console.log(filterByGenre('Puzzle'));
  // consulta.Videogames.forEach(videogame => videogame.name)
  let {arregloDeVideogames} = await filterByGenre('Puzzle')
  console.log(    arregloDeVideogames    );
  console.log(await filterByGenre('Puzzle'))
})();

  /*
  { name: 'Puzzle',
    Videogames: [ 
      { name: 'Portal 2', VideogameGenre: { VideogameId: 3, GenreName: 'Puzzle' } },
      { name: 'Portal', VideogameGenre: { VideogameId: 8, GenreName: 'Puzzle' } },
      { name: 'Limbo', VideogameGenre: { VideogameId: 15, GenreName: 'Puzzle' } } 
    ] 
  }
  */