// Importa las actions types que necesites acá:

import CONST from '../actions'

const initialState = {
  videogames: [],
  videogame: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
    case CONST.GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload
      }
    default: return state
  };
}

export default rootReducer
