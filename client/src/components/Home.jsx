/* eslint-disable react/prop-types */
// import { getAllVideogames } from '../redux/actions'
// import { Component } from 'react'
// import { connect } from 'react-redux'
// import WhiteContainer from './WhiteContainer'
// import HomeHeader from './HomeHeader'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames, getAllGenres } from '../redux/actions'
// import { Link } from 'react-router-dom'
import Videogame from './Videogame'
import Select from './Select'

import WhiteContainer from './WhiteContainer'
// import genres from '../../../api/src/routes/genres'
// import Paginator from './Paginator'

const Home = () => {
  const videogames = useSelector(state => state.videogames)
  const genresArray = useSelector(state => state.genres)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogames('?page=1'))
    dispatch(getAllGenres())
    console.dir(genresArray)
  }, [dispatch])

  return (<>
    <h1>Henry PI: Videogames </h1>
    <WhiteContainer title="container::HomeHeader" >
      <p>Acá iría algún texto y los filtros. Abajo el grid de Videogames.</p>
      <Select label="Género: ">{
        genresArray.map((unGenero, key) => {
          return (
            <option className="is-inline" key={key} value={key}>
              {unGenero}
            </option>)
        })
      }</Select>
    </WhiteContainer>
    <WhiteContainer title="container::Videogames" >
      {
        videogames && videogames.map((el) => {
          return (
            <Videogame
              id={el.id}
              name={el.name}
              img={el.img}
              genres={el.genres}
              key= {el.id}
            />
          )
        })
      }
    </WhiteContainer>
    </>
  )
}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home

/*
    <div className="lists">
      <ul className="nes-list is-disc">
        <li>
          Filtrar...:
        </li>
      </ul>
    </div>
    <div className="lists">
      <ul className="nes-list is-circle">
        <li>Por género: [select]&nbsp;&nbsp;&nbsp;   Por autor:  [select]&nbsp;&nbsp;&nbsp;    Por Rating
        &nbsp;<i className="nes-icon is-small star is-half"></i>
      <i className="nes-icon is-small is-transparent star"></i>
      <i className="nes-icon is-small is-transparent star"></i>
      <i className="nes-icon is-small is-transparent star"></i>
      <i className="nes-icon is-small is-transparent star"></i>
        </li>
      </ul>
    </div>
// export function mapStateToProps (state) {
//   return {
//     videogames: state.videogames
//   }
// }

// export function mapDispatchToProps (dispatch) {
//   return {
//     getAllVideogames: (query) => dispatch(getAllVideogames(query))
//     // deleteHouse: (cual) => dispatch(deleteHouse(cual))
//   }
// }

// export class Home extends Component {
  // componentDidMount () {
  //   this.props.getAllVideogames('?page=1')
  // }

  // render () {

    */
