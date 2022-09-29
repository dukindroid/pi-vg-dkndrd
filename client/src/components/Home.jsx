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
import Paginator from './Paginator'
import WhiteContainer from './WhiteContainer'
// import genres from '../../../api/src/routes/genres'
// import Paginator from './Paginator'
import NavWrapper from './NavWrapper'

const Home = (props) => {
  // const queryId = props.match.params.id
  const videogames = useSelector(state => state.videogames)
  const genresArray = useSelector(state => state.genres)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogames('?page=1'))
    dispatch(getAllGenres())
    console.dir(genresArray)
  }, [dispatch])

  return (<>
    <NavWrapper>

    <h1>Henry PI: Videogames </h1>
    <WhiteContainer>
      <div className="nes-field nes-select is-inline is-dark">
        <Select label="Género: ">
          <option className="is-inline" defaultValue>Elige...</option>){
            genresArray.map((unGenero, key) => {
              return (
                <option className="is-inline" key={key} value={key}>
                {unGenero}
              </option>)
            })
          }</Select>
          <button type="button" className="nes-btn is-inline">+</button>
      </div>
      <div className="nes-field is-inline is-dark">
        <Select className="nes-select is-inline is-dark" label="Filtrar por: ">
          <option className="is-inline" value='coso' defaultValue >Orden alfabético</option>)
          <option className="is-inline" value='coso'>Rating</option>)
          <option className="is-inline" value='coso'>Origen</option>)
        </Select>
        <button type="button" className="nes-btn is-inline">↗</button>
        <button type="button" className="nes-btn is-inline">↘</button>
      </div>
    </WhiteContainer>
    <Paginator />
    <WhiteContainer >
      <div className="basic-grid">

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
      </div>
    </WhiteContainer>
  </NavWrapper>
  </>)
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
