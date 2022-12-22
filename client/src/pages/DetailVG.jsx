import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogameDetail, deleteVideogame } from '../redux/actions'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

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
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getVideogameDetail(params.id))
    // console.log('Este detalle nos las trajo el dispatch: ')
    // console.log(videogameDetail)
  }, [])

  const miSwal = Swal.mixin({
    background: "#212529",
    color: "#CCC",
  })
  
  
  const handleDeleteGame = () => {
    miSwal.fire({
      icon: 'warning',
      title: 'Borrar?',
      text: `Estás  seguro de que quieres borrar ${videogameDetail.name}`,
      showDenyButton: true,
      confirmButtonText: 'Mejor no...',
      denyButtonText: `Borrar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        miSwal.fire('Ok!', '', 'success')
      } else if (result.isDenied) {
        miSwal.fire(`${videogameDetail.name} borrado!`, '', 'info')
        dispatch(deleteVideogame(videogameDetail.id))
        navigate(-2)
        // location.reload()
      }
    })
  }
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

          <p className="title">{videogameDetail.name} <span style={{ display: videogameDetail.isLocal ? 'inline' : 'none' }} onClick={handleDeleteGame} >❌</span></p>
          <p>Fecha de lanzamiento: {videogameDetail.released}</p>
          <p>Genero(s): {videogameDetail.genres ? videogameDetail.genres.map( (e) => e + ' ') : undefined}</p>
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
