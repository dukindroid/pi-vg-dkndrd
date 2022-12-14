// import axios from 'axios'


if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'

}
const consolog = require('debug')('dev')
const url = 'http://127.0.0.1:3041'

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
    consolog(response.json())
    dispatch({
      type: CREATE_VIDEOGAME,
      payload: response.json()
    })
  } catch (error) {
    consolog(JSON.stringify(error))
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
    consolog(response.json())
    dispatch({
      type: DELETE_VIDEOGAME,
      payload: response.json()
    })
  } catch (error) {
    consolog(JSON.stringify(error))
  }
}

export const getAllGenres = () => async (dispatch) => {
  // const res = await axios.get('localhost:3001/genres')
  consolog('Despacharé los géneros desde las actions:')
  const res = await (await fetch(`${url}/genres`)).json()
  consolog(res)
  dispatch({
    type: GET_ALL_GENRES,
    payload: res
  })
}

export const getOneGenre = (cual) => async (dispatch) => {
  consolog(`Bueno, voy a pedir esta dirección por fetch: ${(`${url}/genres/` + cual)}`)
  const res = await (await fetch('/genres/' + cual, { mode: 'cors' })).json()
  consolog(res)
  dispatch({ type: GET_ONE_GENRE, payload: res })
}

export const getVideogames = (pagina, query) => async (dispatch) => {
  consolog(`Bueno, voy a pedir esta dirección por fetch: ${(`${url}/videogame?page=` + pagina)}`)
  let res = null
  if (query) {
    res = await (await fetch(`${url}/videogame?page=` + pagina + '&' + query, { mode: 'cors' })).json()
  } else {
    res = await (await fetch(`${url}/videogame?page=` + pagina, { method: 'GET' }, { headers: { 'Content-Type': 'application/json' } })).json()
  }
  consolog(res)
  dispatch({ type: GET_VIDEOGAMES, payload: res })
}

export const getVideogameDetail = (id) => async (dispatch) => {
  const res = await (await fetch(`${url}/videogame/` + id)).json()
  // consolog('Action: Voy a tratar de hacer un fetch de la ruta detalle del back')
  dispatch({ type: GET_VIDEOGAME_DETAIL, payload: res })
}
export const GET_ALL_GENRES = 'GET_ALL_GENRES'
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'
export const DELETE_VIDEOGAME = 'DELETE_VIDEOGAME'
export const GET_ONE_GENRE = 'GET_ONE_GENRE'

// export const getHouse = (id) => async dispatch => {
//   const res = await axios.get(`http://localhost:3000/houses/${id}`)
//   dispatch( {
//       type: GET_HOUSE,
//       payload: res.data
//   })
// }
