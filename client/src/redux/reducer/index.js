import { CREATE_VIDEOGAME, GET_ALL_GENRES, GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL, DELETE_VIDEOGAME, GET_ONE_GENRE, GET_COUNT } from '../actions'
if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'

}
// const console.log = require('debug')('dev')
const initialState = {
  count: null,
  videogames: [],
  genres: [],
  videogameDetail: {}
}

const rootReducer = (state = initialState, action) => {
  // console.log(`OYE! llamaste al reducer con ${action}`)
  // console.log(action)

  switch (action.type) {
  case GET_VIDEOGAMES:
    return {
      ...state,
      videogames: action.payload.items,
      count: action.payload.count
    }
  case GET_VIDEOGAME_DETAIL:
    return {
      ...state,
      videogameDetail: action.payload
    }
  case GET_ALL_GENRES:
    return {
      ...state,
      genres: action.payload
    }
  case GET_ONE_GENRE:
    return {
      ...state,
      videogames: action.payload
    }
  case CREATE_VIDEOGAME:
    console.log("Creando videojuego: " + JSON.stringify(action.payload))
    return
  case DELETE_VIDEOGAME:
    console.log(action.payload)
    return
  default: return state
  };
}

export default rootReducer
