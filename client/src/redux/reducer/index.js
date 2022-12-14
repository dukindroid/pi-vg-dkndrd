import { CREATE_VIDEOGAME, GET_ALL_GENRES, GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL, DELETE_VIDEOGAME, GET_ONE_GENRE } from '../actions'
if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'

}
const consolog = require('debug')('dev')
const initialState = {
  videogames: [],
  genres: [],
  videogameDetail: {}
}

const rootReducer = (state = initialState, action) => {
  // consolog(`OYE! llamaste al reducer con ${action}`)
  // consolog(action)

  switch (action.type) {
  case GET_VIDEOGAMES:
    return {
      ...state,
      videogames: action.payload
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
    consolog(action.payload)
    return
  case DELETE_VIDEOGAME:
    consolog(action.payload)
    return
  default: return state
  };
}

export default rootReducer
