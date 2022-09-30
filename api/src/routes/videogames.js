// Ruta /videogames.js
const express = require('express')
// const {Videogame, Query, QueryAndCount} = require('../models/index')
// const Videogame = require('../models/Videogame'
const { Videogame } = require('../models/index')
const videogames = express.Router()
const { Query } = require('../controllers/videogameController')

// GET /videogames?name= ; Búsqueda
// GET /videogames: Listado de todos los videogames
// const settings = {
//   search: 'someValue',
//   filter: 'name',
//   order: '-',
//   page: 1
// };
// Le pasamos a la funcioncita Query() el req.query tal como viene...
// Y listo, ya está! Nos devuelve búsquedas, filtrados y hasta paginado.

videogames.route('/')
  .get(async (req, res) => {
    try {
      console.log(`Request GET a /videogames: ${JSON.stringify(req.query)}`)
      const resultado = await Query(req.query)
      res.status(200).json(resultado.map(el => {
        const obj = {
          id: el.id,
          name: el.name,
          img: el.img,
          genres: el.genres
        }
        return obj
      }))
    } catch (error) {
      res.status(500).send(error)
    }
  })

  // POST /videogames Crear videogame
  .post(async (req, res) => {
    console.log(`Request POST a /videogames: ${JSON.stringify(req.body)}`)
    const { name, description, released, rating, platforms, genres } = req.body
    const newVideogame = await Videogame.create({ name, description, released, rating, platforms })
    genres.map(async (genre) => {
      await newVideogame.addGenre(genre, { through: 'VideogameGenre' })
    })
    res.status(200).json({ msg: `Se creó: ${newVideogame.name}` })
  })
module.exports = videogames
