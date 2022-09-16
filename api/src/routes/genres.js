// Ruta /genres.js
const express = require('express');
const genres = express.Router();
const Genre = require('../models/Genre');

// Genre.QueryByGenre('Action');

genres.route('/')

module.exports = genres;