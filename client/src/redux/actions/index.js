// import axios from 'axios'

export const GET_ALL_GENRES = 'GET_ALL_GENRES'
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'
export const GET_VIDEOGAME = 'GET_VIDEOGAME'
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME'

export const getAllGenres = () => async dispatch => {
  const res = await fetch.get('http://localhost:3001/genres')
  dispatch( {
    type: GET_ALL_GENRES,
    payload: res.data
  })
}

// export const getHouse = (id) => async dispatch => {
//   const res = await axios.get(`http://localhost:3000/houses/${id}`)
//   dispatch( {
//       type: GET_HOUSE,
//       payload: res.data
//   })
// }