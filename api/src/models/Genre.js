const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

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

module.exports = Genre;