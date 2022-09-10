const gamesrequest = require('./games.page1.json');
const gamesrequest2 = require('./games.page2.json');

const parsePage = (page) => {
  return page.results.map(el => { 
    const buffer = {
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

let myInfo= parsePage(gamesrequest);
// myInfo.concat(parsePage(gamesrequest2));

module.exports = myInfo;

// .forEach(element => { element.name  }); 
// myInfo
// for (let key of gamesrequest.results) {
//   console.log(key) 
// }
// const {name + platforms} = element;
// const objeto = require('./gta.json');
// console.log(objeto)
// let {name, released, rating, genres, parent_platforms}= myInfo;
// let  mensaje = `Nombre del juego: ${name},`
//  Rating: ${{rating}},  Released:  ${released}\n
// Género: ${JSON.stringify(genres)}, Plataformas ${JSON.stringify(parent_platforms)}`
// console.log(mensaje)
