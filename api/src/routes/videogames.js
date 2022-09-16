// Ruta /videogames.js
const express = require('express');
const {Videogame, Query, QueryAndCount} = require('../models/Videogame');
const videogames = express.Router();

// GET /videogames: Listado de todos los videogames
// GET /videogames?name= ; Búsqueda
// POST /videogames Crear videogame 

videogames.route('/')

module.exports = videogames;