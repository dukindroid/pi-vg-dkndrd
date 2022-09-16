const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const QueryByGenre = require('../controllers/genresController');

class Genre extends Model {};

Genre.init({
  name: {
    type: DataTypes.STRING,
    primaryKey: true
  }
},{
  sequelize,
  timestamps: false
})

module.exports = {
  Genre,
  QueryByGenre
};