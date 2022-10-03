import { CREATE_VIDEOGAME, GET_ALL_GENRES, GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL, DELETE_VIDEOGAME, GET_ONE_GENRE } from '../actions'

const initialState = {
  videogames: [],
  genres: [],
  videogameDetail: {}
}

const rootReducer = (state = initialState, action) => {
  // console.log(`OYE! llamaste al reducer con ${action}`)
  // console.dir(action)

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
      console.log(action.payload)
      return
    case DELETE_VIDEOGAME:
      console.log(action.payload)
      return
    default: return state
  };
}

export default rootReducer
