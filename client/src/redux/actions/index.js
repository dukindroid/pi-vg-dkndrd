// import axios from 'axios'
export const getAllGenres = () => async (dispatch) => {
  // const res = await axios.get('localhost:3001/genres')
  const res = await (await fetch('http://localhost:3041/genres')).json()
  // console.log('Generos desde el reducer')
  // console.dir(res)
  dispatch({
    type: GET_ALL_GENRES,
    payload: res
  })
}

export const getVideogames = (pagina, query) => async (dispatch) => {
  console.log(`Bueno, voy a pedir esta dirección por fetch: ${('http://localhost:3041/videogames?page=' + pagina)}`)
  let res = null
  if (query) {
    res = await (await fetch('http://localhost:3041/videogames?page=' + pagina + '&' + query)).json()
  } else {
    res = await (await fetch('http://localhost:3041/videogames?page=' + pagina)).json()
  }
  // console.log(res)
  dispatch({ type: GET_VIDEOGAMES, payload: res })
}

export const getVideogameDetail = (id) => async (dispatch) => {
  const res = await (await fetch('http://localhost:3041/videogame/' + id)).json()
  // console.log('Action: Voy a tratar de hacer un fetch de la ruta detalle del back')
  dispatch({ type: GET_VIDEOGAME_DETAIL, payload: res })
}
export const GET_ALL_GENRES = 'GET_ALL_GENRES'
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'
// export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME'

// export const getHouse = (id) => async dispatch => {
//   const res = await axios.get(`http://localhost:3000/houses/${id}`)
//   dispatch( {
//       type: GET_HOUSE,
//       payload: res.data
//   })
// }
