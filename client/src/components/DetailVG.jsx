import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogameDetail } from '../redux/actions'
import NavWrapper from './NavWrapper'
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

const detailVG = (props) => {
  const queryId = props.match.params.id
  // console.log('params? ')
  // console.dir(props)
  const videogameDetail = useSelector(state => state.videogameDetail)
  // const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogameDetail(queryId))
    console.log('Este detalle nos las trajo el dispatch: ')
    console.dir(videogameDetail)
  }, [])

  const deleteGame = () => dispatch(deleteGame(videogameDetail.id))

  return (
  <>
    <NavWrapper >
      <div className="nes-container is-dark with-title bkgnd_detail" style={{
        backgroundImage: 'url(' + videogameDetail.img + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
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
    </NavWrapper>
  </>
  )
}

export default detailVG
