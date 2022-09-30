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
  return (
  <>
    <NavWrapper >
      <div className="nes-container is-dark with-title">
        <p className="title">{videogameDetail.name}</p>
        <p>Fecha de lanzamiento: {videogameDetail.released}</p>
        <p>Genero(s): 😜</p>
        <p>Descripción: {videogameDetail.description}</p>
        <div className="nes-field">
        <p htmlFor="inline_field">Plataformas: {videogameDetail.platforms}</p>
          <label htmlFor="inline_field">Rating: {videogameDetail.rating}</label>
          <hr />
          <i className="nes-icon is-medium star is-half"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
        </div>
      </div>
    </NavWrapper>
  </>
  )
}

export default detailVG
