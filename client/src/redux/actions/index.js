// import axios from 'axios'
export const CONST = {
  GET_ALL_GENRES: 'GET_ALL_GENRES',
  GET_VIDEOGAME_DETAIL: 'GET_VIDEOGAME_DETAIL',
  GET_VIDEOGAMES: 'GET_VIDEOGAMES',
  CREATE_VIDEOGAME: 'CREATE_VIDEOGAME',
  DELETE_VIDEOGAME: 'DELETE_VIDEOGAME'
}

export const getAllGenres = () => {
  async (dispatch) => {
    const res = await fetch.get('http://localhost:3001/genres')
    dispatch({
      type: CONST.GET_ALL_GENRES,
      payload: res.data
    })
  }
}

export const getVideogameDetail = (payload) => ({
  type: CONST.GET_VIDEOGAME_DETAIL,
  payload
})

export const getVideogames = async (payload) => ({
  const res = await fetch.get('http://localhost:3001/videog')
  type: CONST.GET_VIDEOGAMES,
  payload
})

export const getAllVideogames = () => {
  async (dispatch) => {
    const res = await fetch.get('http://localhost:3001/videogames')
    dispatch({
      type: CONST.GET_ALL_GENRES,
      payload: res.data
    })
  }
}

// export const getHouse = (id) => async dispatch => {
//   const res = await axios.get(`http://localhost:3000/houses/${id}`)
//   dispatch( {
//       type: GET_HOUSE,
//       payload: res.data
//   })
// }
