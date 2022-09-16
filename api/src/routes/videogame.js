// Ruta /videogames.js
const express = require('express');
const {Videogame, Query, QueryAndCount} = require('../models/Videogame');
const videogame = express.Router();

// GET /videogame/{idVideogame} Detalle de {idVideogame} 

videogame.route('/')

module.exports = videogame;