const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Videogame extends Model {};

Videogame.init({
  name: {
    type: DataTypes.STRING,
    allownull: false
  },
  description: {
    type: DataTypes.STRING,
    allownull: false
  },
  released: {
    type: DataTypes.DATE
  },
  rating: {
    type: DataTypes.FLOAT,
  },
  platforms: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  img: {
    type: DataTypes.STRING
  }
},{
  sequelize,
  timestamps: false
})

module.exports = Videogame;