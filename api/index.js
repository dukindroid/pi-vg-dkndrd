const server = require('./src/app')
const consolog = require('debug')('dev')

server.listen(3041, () => { 
  consolog('Videogames API escuchando al puerto 3041')
})
