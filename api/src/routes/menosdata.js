const menosdata = require('./menosdata.json')
const unacosa = menosdata[0].Videogames.map(videogame => videogame.name)

consolog(unacosa)
