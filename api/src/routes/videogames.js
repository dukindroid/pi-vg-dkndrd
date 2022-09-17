// Ruta /videogames.js
const express = require('express');
// const {Videogame, Query, QueryAndCount} = require('../models/index');
const Videogame = require('../models/Videogame')
const videogames = express.Router();
const {Query} = require('../controllers/videogameController');

// GET /videogames?name= ; Búsqueda

// POST /videogames Crear videogame 

// GET /videogames: Listado de todos los videogames
videogames.route('/')
  .get( async (req, res) => {
    // const settings = {
    //   s
    
    //   filter: 'name',
    //   order: '-',
    //   page: 1
    // }; 
    const resultado = await Query({page: 1});
    
    res.status(200).json(resultado.map(el => {
      return `${el.name} ${el.rating}`
    })
);
  });
module.exports = videogames;