import { GET_ALL_GENRES, GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL } from '../actions'

const initialState = {
  videogames: [],
  genres: [],
  videogameDetail: {},
  page: null
}

const rootReducer = (state = initialState, action) => {
  console.log(`OYE! llamaste al reducer con ${action}`)
  console.dir(action)

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
    default: return state
  };
}

export default rootReducer
