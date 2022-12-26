const express = require('express')
const Router = express.Router()
const videogame = require('./videogame')
const genres = require('./genres')
const mail = require('./mail')
Router.use('/videogame', videogame)
Router.use('/genres', genres)
Router.use('/mail', mail)
module.exports = Router

// const videogames = require('./videogame')
// Router.use('/videogames', videogames)
