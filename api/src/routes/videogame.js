// Ruta /videogames.js
const express = require('express')
const Videogame = require('../models/Videogame')
const videogame = express.Router()

// GET /videogame/{idVideogame} Detalle de {idVideogame}

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
