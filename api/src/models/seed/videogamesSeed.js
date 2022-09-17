import gamesrequest from  './games.page1.json';
import gamesrequest2 from './games.page2.json';
import gamesrequest3 from './games.page3.json';
import gamesrequest4 from './games.page4.json';
import gamesrequest5 from './games.page5.json';

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