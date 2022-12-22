// Ruta /videogames.js
const express = require('express')
// const {Videogame, Query, QueryAndCount} = require('../models/index')
// const Videogame = require('../models/Videogame'
const { Videogame, Genre } = require('../models/index')
const videogame = express.Router()
const db = require('../db')
const { QueryAndCount } = require('../controllers/videogameController')
const fetch = (url) => import('node-fetch')
  .then(({ default: fetch }) => fetch(url))
// const console.log = require('debug')('dev')

// const fetch = require('node-fetch')
// import fetch from 'node-fetch'
// const { Router } = require('express')
// GET /videogame?name= ; Búsqueda
// GET /videogame: Listado de todos los videogame
// const settings = {
//   search: 'someValue',
//   filter: 'name',
//   order: '-',
//   page: 1
// };
// Le pasamos a la funcioncita Query() el req.query tal como viene...
// Y listo, ya está! Nos devuelve búsquedas, filtrados y hasta paginado.

const loadApiPage = async (page, misGenres) => {
  const apiPage = await fetch(`https://api.rawg.io/api/games?key=0f8d95788d644ba9ac601311b87d302d&page_size=40&page=${page}`)
  const pageJson = await apiPage.json()
  const respuesta = pageJson.results.map(async (el) => {
    const masData = await fetch(`https://api.rawg.io/api/games/${el.id}?key=0f8d95788d644ba9ac601311b87d302d`)
    const otraRespuesta = await masData.json()
    const nuevoRegistro = {
      id: el.id,
      img: el.background_image,
      name: el.name,
      description: otraRespuesta.description,
      released: el.released,
      rating: el.rating,
      platforms: el.parent_platforms.map(e => e.platform.name),
      genres: el.genres.map(e => e.name)
    }
    const newVideogame = await Videogame.create(nuevoRegistro)
    await Promise.all(
      misGenres.map(async (genre) => {
        await newVideogame.addGenre(String(genre).toLowerCase(), {
          through: 'VideogameGenre'
        })
      })
    )
    return respuesta
  })
}

videogame.route('/')
  .get(async (req, res) => {
    try {
      // if (!req.params.page) {
      //   console.log('página mis huevos')
      // }
      // console.log('Request GET a /videogame')
      console.log(`Request GET a /videogame/ con ${JSON.stringify(req.query)}`)
      // const resultado = await Query(req.query)
      const { count, rows } = await QueryAndCount(req.query)
      // console.log(`Data de /videogame/ con ${JSON.stringify(rows)}`)
      res.status(200).json({
        count,
        items: rows && rows.map(el => {
          const obj = {
            id: el.id,
            name: el.name,
            img: el.img,
            genres: el.genres
          }
          return obj
        })
      })
    } catch (error) {
      console.log(`EH CHALAO! que tienes un error al surtir videogame: ${error} ${error.stack}`)
      res.status(500).send(error)
    }
  })

  // POST /videogame Crear videogame
  .post(async (req, res) => {
    console.log(`Request POST a /videogame: ${JSON.stringify(req.body)}`)
    try {
      const { name, description, released, rating, platforms, genres, isLocal } = req.body
      const newVideogame = await Videogame.create({ name, description, released, rating, platforms, genres, isLocal })
      genres.map(async (genre) => {
        await newVideogame.addGenre(genre, { through: 'VideogameGenre' })
      })
      res.status(200).json({ msg: `Se creó: ${newVideogame.name}` })
    } catch (error) {
      console.log(`Alguien quizo crear mal un videogame: ${error} Stack call: ${error.stack} `)
    }
  })

// console.log(`Fetcheando https://api.rawg.io/api/games?key=0f8d95788d644ba9ac601311b87d302d&page_size=${req.params.howmany}`)
videogame.route('/reseed/:howmany')
  .get(async (req, res) => {
    console.log('Creando los genres: ')
    await db.sync({ force: true })
    require('../models/index')
    // Carga de genres
    const menosData = await fetch('https://api.rawg.io/api/genres?key=0f8d95788d644ba9ac601311b87d302d')
    const cosas = await menosData.json()
    const misGenres = cosas.results.map(unGenero => unGenero.name.toLowerCase())
    await Promise.all(misGenres.map(async (singleGenre) =>
      await Genre.create({
        name: singleGenre
      })
    ))
    const numeroDeRequests = Math.ceil(req.params.howmany / 40)
    const arrayDeRequests = []
    for (let index = 0; index < numeroDeRequests; index++) {
      arrayDeRequests[index] = index + 1
    }
    const respuesta = Promise.all(arrayDeRequests.map(
      async (pagina) => await loadApiPage(pagina, misGenres)
    ))
    // console.log(`Data: ${respuesta}`)
    res.status(200).send(respuesta)
  })

videogame.route('/count')
  .get(async (req, res) => {
    const count = await Videogame.count()
    console.log(`Me piden la cuenta, tenemos ${count} videogames.`)
    res.status(200).json({ count })
  })

videogame.route('/:id')
  .get(async (req, res) => {
    try {
      console.log(`Request GET a /videogame: ${JSON.stringify(req.params.id)}`)
      const resultado = await Videogame.findByPk(req.params.id)
      res.status(200).json(resultado)
    } catch (error) {
      res.status(500).send(error)
    }
  })
  .delete(async (req, res) => {
    console.log(`Request DELETE a /videogame: ${req.params.id}`)
    const eliminado = Videogame.findByPk(req.params.id)
    res.status(204).send(await eliminado.destroy())
  })

module.exports = videogame
