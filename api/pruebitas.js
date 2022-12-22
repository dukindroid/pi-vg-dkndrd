// const { Sequelize } = require('sequelize');
// const { Op } = require('sequelize')
const { QueryAndCount } = require('./src/controllers/videogameController')
const sequelize = require('./src/db/index')
const { Videogame } = require('./src/models/index');
(
  async () => {
    await sequelize.sync({ force: false, logging: true })
    const data = await QueryAndCount(new URLSearchParams('genres=Adventure'))
    console.log(`Así pues las cosas: ${JSON.stringify(data)} y ${await Videogame.count()}`)
  })()
