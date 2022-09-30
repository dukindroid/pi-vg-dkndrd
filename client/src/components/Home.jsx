/* eslint-disable react/prop-types */
// import WhiteContainer from './WhiteContainer'
// import HomeHeader from './HomeHeader'
// import { Link } from 'react-router-dom'
import DropDownFilters from './DropdownFilters'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames, getAllGenres } from '../redux/actions'
import { useLocation, withRouter } from 'react-router-dom'
import Videogame from './Videogame'
import Paginator from './Paginator'
import WhiteContainer from './WhiteContainer'
import NavWrapper from './NavWrapper'

function useQuery () {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const Home = (props) => {
  const query = useQuery()
  let page = query.get('page')
  if (page === undefined) {
    console.log('NOS ESTÁN CAGANDO, TENÉS QUE DARTE CUENTA!!!')
    page = 1
  }
  console.log('La página: ' + page)

  const videogames = useSelector(state => state.videogames)
  const genresArray = useSelector(state => state.genres)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideogames('?page=' + page))
    dispatch(getAllGenres())
    console.dir(genresArray)
  }, [dispatch, query])

  const CosoParaLosFiltros = withRouter(DropDownFilters)

  return (<>
    <NavWrapper>
    <h1>Henry PI: Videogames </h1>

    {/* Header: Selects para filtrar y así */}
    <WhiteContainer>
      <CosoParaLosFiltros />
    </WhiteContainer>

    {/* Paginador Chidito */}
    <Paginator />

    {/* Sección principal: Basic Grid de Videogame(s) */}
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

  </NavWrapper></>)
}

export default Home

/*

      const Select = (props) => {
        const { label } = props
        return (
          <div className="nes-field is-inline">
            <label htmlFor="default_select">{label}</label>
            <div className="nes-select is-inline is-dark">
              <select required id="{label}">
                <option value="" disabled selected hidden>Select...</option>
                {props.children}
              </select>
            </div>
            <button type="button" className="nes-btn is-inline">+</button>
            </div>
            )
          }
          export default Select
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
      <Dropdown />
      <div className="nes-field nes-select is-inline is-dark">
        <Dropdown label="Género: ">
          <option className="is-inline" defaultValue={'DEFAULT'}>Elige...</option>){
            genresArray.map((unGenero, key) => {
              return (
                <option className="is-inline" key={key} value={key}>
                {unGenero}
              </option>)
            })
          }</Dropdown>
          <button type="button" className="nes-btn is-inline">+</button>
      </div>
    */
