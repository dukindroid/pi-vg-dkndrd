const express = require('express')
const Router = express.Router()
const videogame = require('./videogame')
const genres = require('./genres')
Router.use('/videogame', videogame)
Router.use('/genres', genres)
module.exports = Router

// const videogames = require('./videogame')
// Router.use('/videogames', videogames)
