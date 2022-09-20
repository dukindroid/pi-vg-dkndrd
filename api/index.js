const server = require('./src/app')
const consolog = require('debug')('dev')

server.listen(3000, () => {
  consolog('Videogames API escuchando al puerto 3000')
})
