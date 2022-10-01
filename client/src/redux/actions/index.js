// import axios from 'axios'

export const createVideogame = (videogame) => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3041/videogames', {
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

export const getAllGenres = () => async (dispatch) => {
  // const res = await axios.get('localhost:3001/genres')
  console.log('Despacharé los géneros desde las actions:')
  const res = await (await fetch('http://127.0.0.1:3041/genres')).json()
  console.dir(res)
  dispatch({
    type: GET_ALL_GENRES,
    payload: res
  })
}

export const getVideogames = (pagina, query) => async (dispatch) => {
  console.log(`Bueno, voy a pedir esta dirección por fetch: ${('http://127.0.0.1:3041/videogames?page=' + pagina)}`)
  let res = null
  if (query) {
    res = await (await fetch('http://localhost:3041/videogames?page=' + pagina + '&' + query, { mode: 'cors' })).json()
  } else {
    res = await (await fetch('http://127.0.0.1:3041/videogames?page=' + pagina, { method: 'GET' }, { headers: { 'Content-Type': 'application/json' } })).json()
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
