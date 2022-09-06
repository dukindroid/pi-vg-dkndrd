let platformsObject = require('./platforms.example.json');
let platformsArray = [];
platformsObject.results.forEach((platform => platformsArray.push(platform.name)));
module.exports = platformsArray;