const gamesrequest = require  ('./games.page1.json');
const gamesrequest2 = require ('./games.page2.json');
const gamesrequest3 = require ('./games.page3.json');
const gamesrequest4 = require ('./games.page4.json');
const gamesrequest5 = require ('./games.page5.json');

const parsePage = (page) => {
  return page.results.map((el) => { 
    const buffer = {
      id: el.id,
      name: el.name, 
      description: "%%description placeholder%%",
      released: el.released, 
      rating: el.rating,
      platforms: el.parent_platforms.map(lel => lel.platform.name),
      genres: el.genres.map(lol => lol.name),
    }
    return buffer;
  })
};

let archivos = [gamesrequest,gamesrequest2,gamesrequest3,gamesrequest4,gamesrequest5];

module.exports = archivos.map(el => parsePage(el)).flat();