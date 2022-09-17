
const Genre = require('../models/Genre');


const QueryByGenre = async (which) => {
  let juegosPorGenero = await Genre.findByPk(which, {
    include: { 
      model: Videogame, 
      attributes: ['name']
    }
  });
  return juegosPorGenero.toJSON()
    .Videogames.map(el => {
      el.name, el.img, el.description
    });
};

module.exports = QueryByGenre;