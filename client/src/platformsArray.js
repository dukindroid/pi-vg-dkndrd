const platformsObject = require('./platforms.example.json')
const platformsArray = []
platformsObject.results.forEach(platform => platformsArray.push(platform.name))
module.exports = platformsArray
