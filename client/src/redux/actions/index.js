// import axios from 'axios'


if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'

}
// const console.log = require('debug')('dev')
// const url = 'https://henryhealthy.shop/pi-vg-dkndrd/api/'
const url = 'http://localhost:3041'

export const createVideogame = (videogame) => async (dispatch) => {
  try {
    const response = await fetch(`${url}/videogame`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(videogame)

    })
    console.log(response.json())
    dispatch({
      type: CREATE_VIDEOGAME,
      payload: response.json()
    })
  } catch (error) {
    console.log(JSON.stringify(error))
  }
}

export const deleteVideogame = (videogame) => async (dispatch) => {
  try {
    const response = await fetch(`${url}/videogame/${videogame}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response.json())
    dispatch({
      type: DELETE_VIDEOGAME,
      payload: response.json()
    })
  } catch (error) {
    console.log(JSON.stringify(error))
  }
}

export const getAllGenres = () => async (dispatch) => {
  // const res = await axios.get('localhost:3001/genres')
  // console.log('Despacharé los géneros desde las actions:')
  const res = await (await fetch(`${url}/genres`)).json()
  // console.log(res)
  dispatch({
    type: GET_ALL_GENRES,
    payload: res
  })
}

export const getOneGenre = (cual) => async (dispatch) => {
  console.log(`Bueno, voy a pedir esta dirección por fetch: ${url}/genres/${cual}`)
  const res = await (await fetch(`${url}/genres/${cual}`, { mode: 'cors' })).json()
  console.log(res)
  dispatch({ type: GET_ONE_GENRE, payload: res })
}

export const getCount = () => async (dispatch) => {
  // console.log(`getCount fetch --> : ${url}/videogame/count`)
  const res = await (await fetch(`${url}/videogame/count`, { mode: 'cors' })).json()
  // console.log(res)
  dispatch({ type: GET_COUNT, payload: res })
}

export const getVideogames = (query) => async (dispatch) => {
  // console.log('Recibí: ' + query)
  // console.log(`⤵: ${(`${url}/videogame?${query}`)}`)
  let res = await (await fetch(`${url}/videogame?${query}`, { mode: 'cors' })).json()
  // if (query) {
  // res = 
  // } else {
  // res = await (await fetch(`${url}/videogame?page=` + pagina, { method: 'GET' }, { headers: { 'Content-Type': 'application/json' } })).json()
  // }
  // console.log(res)
  dispatch({ type: GET_VIDEOGAMES, payload: res })
}

export const getVideogameDetail = (id) => async (dispatch) => {
  const res = await (await fetch(`${url}/videogame/` + id)).json()
  // console.log('Action: Voy a tratar de hacer un fetch de la ruta detalle del back')
  dispatch({ type: GET_VIDEOGAME_DETAIL, payload: res })
}
export const GET_ALL_GENRES = 'GET_ALL_GENRES'
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME'
export const GET_ONE_GENRE = 'GET_ONE_GENRE'
export const GET_COUNT = 'GET_COUNT'

// export const getHouse = (id) => async dispatch => {
//   const res = await axios.get(`http://localhost:3000/houses/${id}`)
//   dispatch( {
//       type: GET_HOUSE,
//       payload: res.data
//   })
// }
