// Ruta /genres.js
// const { Op } = require('sequelize')
const express = require('express')
const { Genre } = require('../models')
const genres = express.Router()
// const Videogame = require('../models/Videogame')
// const { QueryByGenre } = require('../controllers/genresController')
const { GenreByVideogame2 } = require('../controllers/videogameController')
// const { REAL } = require('sequelize')
// const console.log = require('debug')('dev')

// Genre.QueryByGenre('Action');
// Devuelve un arreglo con todos los 'genres'
// Esta originalmente haría un filtrado con varios géneros en orden
// pero ocuparía más estilado en el front así que mejor no
/*
genres.route('/')
  .get(async (req, res) => {
    const genresRequested = req.query.filter?.split(',')
    const generos = (await Genre.findAll()).map(el => el.name)
    if (!req.query.filter) {
      // map(e => String(e.name[0]).toUpperCase() + e.name.slice(1)
      return res.status(200).json(generos)
    }
    const algo = []
    for (const oneGenre of genresRequested) {
      const oneQuery = await QueryByGenre(oneGenre)
      const esteArrayDeGames = oneQuery.Videogames.map((videogame) => videogame.name)
      // console.log(`${JSON.stringify(oneGenre)} devolvió: ${esteArrayDeGames}`)
      const pushedElement = {}
      pushedElement[oneGenre] = esteArrayDeGames
      algo.push(pushedElement)
    }
    // const algo = await Promise.all(genresRequested.map(async (el) => await QueryByGenre(el)))
    return res.status(200).json(algo)
  })
*/
// En su lugar haremos lo mismo pero para un solo género
genres.route('/')
  .get(async (req, res) => {
    try {
      // Sin params devolvería toda la lista de genres
      const generos = (await Genre.findAll()).map(el => el.name)
      res.status(200).json(generos)
    } catch (error) {
      console.error(error.message)
      console.error(error.stack)
    }
  })

genres.route('/:genre')
  .get(async (req, res) => {
    try {
      // Si no, devolvemos todos los videogames de ese género
      console.log(req.params.genre)
      // const juegosDeUnGenero = await GenreByVideogame2(req.params.genre)
      // const oneQuery = await QueryByGenre(req.params.genre)
      // console.loge.dir(await juegosDeUnGenero)
      res.status(200).json(
        await GenreByVideogame2(req.params.genre)
      //   juegosDeUnGenero.map(el => {
      //   const obj = {
      //     id: el.id,
      //     name: el.name,
      //     img: el.img,
      //     genres: el.genres
      //   }
      //   return obj
      // })
      )
    } catch (error) {
      console.error(error.message)
      console.error(error.stack)
    }
  })

/*

// La ruta anterior no toma :params
genres.route('/pocilga')
  .get(async (req, res) => {
    // const miResQuery = req.query.filter.split(',').map(el => QueryByGenre(el))
    // const genresRequested = req.query.filter.split(',').map(el => el)
    const genresRequested = req.query.filter.split(',')
    console.log(`Recibí query: ${JSON.stringify(genresRequested)}`)
    const oneQuery = []
    for (const oneGenre of genresRequested) {
      const oneQuery = await Videogame.findAll({
        include: {
          model: Genres
        }
      })
      console.log(`${JSON.stringify(oneGenre)} devolvió: ${esteArrayDeGames}`)
      algo.push(esteArrayDeGames)
    }
    // const algo = await Promise.all(genresRequested.map(async (el) => await QueryByGenre(el)))
    if (!req.query) {
      return res.status(200).json(await Genre.findAll().map(e => String(e.name[0]).toUpperCase() + e.name.slice(1)))
    }

    return res.status(200).json(algo)
  })

// genresSeed.route(/:oneGenre) {
//   await QueryByGenre(oneGenre).then( re)
// }
*/

module.exports = genres
