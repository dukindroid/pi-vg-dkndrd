const server = require('./src/app')
// .log = require('debug')('dev')

server.listen(3041, () => {
  console.log('Videogames API escuchando al puerto 3041')
})
