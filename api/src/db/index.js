require('dotenv').config()
const consolog = require('debug')('dev')

const { Sequelize } = require('sequelize')

// const myEnviroment = process.env.DB_NAME + ' ' + process.env.DB_USER + ' ' + process.env.DB_PASSWORD
consolog(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`)
// console.dir(process.env)
// const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'postgres',
//   logging: false
// })

const db = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`,
  // 'postgres://process.env.DB_USER:process.env.DB_PASSWORD@process.env.DB_HOST:5432/process.env.DB_NAME',
  {
    force: true,
    logging: false
  }
)
module.exports = db
// aka conn, sequelize
// let connection_string = 'postgres://postgres:ccolnm01@localhost:5432/simpsons_sequelize';
// const db = new Sequelize( `postgres://${postgres_user}:${postgres_pwd}@${postgres_host}:5432/${postgres_database}`, {force:true, logging:false}); //?
