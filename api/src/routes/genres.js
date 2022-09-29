// Ruta /genres.js
const express = require('express')
const genres = express.Router()
const Genre = require('../models/Genre')
// const Videogame = require('../models/Videogame')
const consolog = require('debug')('dev')
const QueryByGenre = require('../controllers/genresController')
// const { REAL } = require('sequelize')

// Genre.QueryByGenre('Action'); 
// Devuelve un arreglo con todos los 'genres'
genres.route('/')
  .get(async (req, res) => {
    const genresRequested = req.query.filter?.split(',')
    const generos = (await Genre.findAll()).map(el => el.name)
    if (!req.query.filter) {
      consolog(`Recibí query: ${JSON.stringify(req.query)}`)
      consolog(`Devuelvo: ${generos}`)
      // map(e => String(e.name[0]).toUpperCase() + e.name.slice(1)
      return res.status(200).json(generos)
    }
    const algo = []
    for (const oneGenre of genresRequested) {
      const oneQuery = await QueryByGenre(oneGenre)
      const esteArrayDeGames = oneQuery.Videogames.map((videogame) => videogame.name)
      consolog(`${JSON.stringify(oneGenre)} devolvió: ${esteArrayDeGames}`)
      const pushedElement = {}
      pushedElement[oneGenre] = esteArrayDeGames
      algo.push(pushedElement)
    }
    // const algo = await Promise.all(genresRequested.map(async (el) => await QueryByGenre(el)))
    return res.status(200).json(algo)
  })
/*
// La ruta anterior no toma :params
genres.route('/pocilga')
  .get(async (req, res) => {
    // const miResQuery = req.query.filter.split(',').map(el => QueryByGenre(el))
    // const genresRequested = req.query.filter.split(',').map(el => el)
    const genresRequested = req.query.filter.split(',')
    consolog(`Recibí query: ${JSON.stringify(genresRequested)}`)
    const oneQuery = []
    for (const oneGenre of genresRequested) {
      const oneQuery = await Videogame.findAll({
        include: {
          model: Genres
        }
      })
      consolog(`${JSON.stringify(oneGenre)} devolvió: ${esteArrayDeGames}`)
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
