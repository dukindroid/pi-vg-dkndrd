const express = require('express');
const Router = express.Router();
const videogames = require('./videogames');
const videogame = require('./videogame');
const genres = require('./genres');

Router.use('/videogames', videogames);
Router.use('/videogame', videogame);
Router.use('/genres', genres);

module.exports = Router;
