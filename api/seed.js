// const { Sequelize } = require('sequelize');
const sequelize = require('./src/db/index')
// const console.log = require('debug')('dev')
const { Videogame, Genre } = require('./src/models/index')
const genresSeed = require('./src/models/seed/genresSeed')
const videogamesSeed = require('./src/models/seed/videogamesSeed')
const https = require('https');
// const fetch = require('node-fetch')
// const QueryByGenre = require('./controllers/genresController');
// const GenresArray = require('../../client/src/components/GenresArray');
// const { Query, QueryAndCount } = require('./controllers/videogameController');
// const QueryByGenre = require('./controllers/genresController');
// const db = require('./db/index');

(
  async () => {
    console.log('Cargando datos iniciales...')

    await sequelize.sync({ force: true })
    // consolo g('Conexión a posgres exitosa!')
    // Bulk Create 'Genres' table:
    console.log('Cargando Generos...')

    await Promise.all(genresSeed.map(async (singleGenre) =>
      await Genre.create({
        name: singleGenre
      })
    ))

    // Bulk Create 'Videogame' table:
    console.log('Cargando Videogames...')
    let algo = false
    let data = ''
    await Promise.all(videogamesSeed.map(async (oneGame) => {
      // console.log(`Trabajando con ${oneGame.name}`)
      // oneGame.description = await (await fetch(`https://api.rawg.io/api/games/${oneGame.id}?key=0f8d95788d644ba9ac601311b87d302d`)).json()
      const coso = https.get(`https://api.rawg.io/api/games/${oneGame.id}?key=0f8d95788d644ba9ac601311b87d302d`, res => {
        res.on('data', chunk => {
          data += chunk
        })
        res.on('end', () => {
          data = JSON.parse(data)
          // console.log(data)
          oneGame.description = data.description
        })
      }).end()
      // console.log('Datecuenta Amica: ' + JSON.stringify(coso))
      const {
        id,
        img,
        name,
        description,
        released,
        rating,
        platforms,
        genres
      } = oneGame

      const newVideogame = await Videogame.create({
        id,
        img,
        name,
        description,
        released,
        rating,
        platforms,
        genres
      })
      // console.log("Hemos creado este videogame: ")
      // console.log(newVideogame.toJSON());

      // Fill VideogameGenre n:n associations table:
      if (!algo) {
        console.log('Creando tabla intermedia...')
        algo = true
      }

      await Promise.all(
        genres.map(async (genre) => {
          await newVideogame.addGenre(String(genre).toLowerCase(), {
            through: 'VideogameGenre'
          })
        })
      )
    }))

    if (parseInt(await Videogame.count()) === 100) console.log('Carga exitosa.')
    // console.log("Estos videogames tenemos: " + await Videogame.count());
    // sequelize.close()

    // console.log(JSON.stringify(await QueryByGenre('puzzle')))
  })()
