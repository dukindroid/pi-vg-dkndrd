import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogameDetail } from '../redux/actions'
import NavWrapper from '../components/NavWrapper'
import { useLoaderData, useParams } from 'react-router-dom'
/*
const obj = {
        id: el.id,
        name: el.name,
        description: el.description,
        released: el.released,
        rating: el.rating,
        platforms: el.platforms,
        img: el.img
      }
*/

const detailVG = () => {
  const params = useParams()
  // console.log('params? :' + params)
  // console.dir(params)
  // console.dir(useLoaderData())
  // const queryId = params.id
  // console.log(props)
  const videogameDetail = useSelector(state => state.videogameDetail)
  // const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogameDetail(params.id))
    // console.log('Este detalle nos las trajo el dispatch: ')
    // console.log(videogameDetail)
  }, [])

  const deleteGame = () => dispatch(deleteGame(videogameDetail.id))

  return (
    <>
      <div className="nes-container tinted is-dark bkgnd_detail" style={{
        backgroundImage: 'url(' + videogameDetail.img + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'multiply'
      }} >
        <div >

          <p className="title">{videogameDetail.name} <span style={{ display: videogameDetail.isLocal ? 'inline' : 'none' }} onClick={deleteGame} >❌</span></p>
          <p>Fecha de lanzamiento: {videogameDetail.released}</p>
          <p>Genero(s): {videogameDetail.genres}</p>
          <p>Descripción: {videogameDetail.description}</p>
          <div className="genre-select nes-field is-inline rating">
            <label htmlFor="inline_field">Rating: {videogameDetail.rating}</label>
            <i id="1" name="rating" value="1" className={(videogameDetail.rating >= 1) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
            <i id="2" name="rating" value="2" className={(videogameDetail.rating >= 2) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
            <i id="3" name="rating" value="3" className={(videogameDetail.rating >= 3) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
            <i id="4" name="rating" value="4" className={(videogameDetail.rating >= 4) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
            <i id="5" name="rating" value="5" className={(videogameDetail.rating >= 5) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default detailVG
