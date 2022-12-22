/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVideogames, getAllGenres } from '../redux/actions'
import Filters from '../components/FiltersNew'
import Videogame from '../components/Videogame'
import WhiteContainer from '../components/WhiteContainer'
if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'
}
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
  createSearchParams
} from "react-router-dom"

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }

  return ComponentWithRouterProp
}
// const console.log = require('debug')('dev')

function useQuery () {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const Home = (props) => {
  const { search } = useLocation()
  const dispatch = useDispatch()
  const query = useQuery()
  let [searchParams, setSearchParams] = useSearchParams()
  const videogames = useSelector(state => state.videogames)
  const page = searchParams.get('page') // props.location.pathname.split('/')[2]

  useEffect(() => {
    if (!page) {
      console.log('Page no existe ' + page)
      setSearchParams(
        createSearchParams({page: 1})
      )
    }
    // console.log('searchParams: ' + searchParams + ' page: ' + page)
    dispatch(getVideogames(searchParams))
    dispatch(getAllGenres())
  }, [query])

  const FilterContainer = withRouter(Filters) // Enlaza el Filters con el Router

  return (<>
    <h1>Henry PI: Videogames</h1>
    {/* Header: Búsqueda y filtros */}
    
    <FilterContainer />
    

    {/* Sección principal: Basic Grid de Videogame(s) */}
    <WhiteContainer >
      <div className="basic-grid"> {
        videogames && videogames.map((el) => { 
          return (
            <Videogame 
              key= {el.id} 
              id={el.id}
              name={el.name}
              img={el.img}
              genres={el.genres} 
            />
          ) 
        })
      }
      </div>
    </WhiteContainer>
  </>)
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
        <li>Por género: [select]&nbsp&nbsp&nbsp   Por autor:  [select]&nbsp&nbsp&nbsp    Por Rating
        &nbsp<i className="nes-icon is-small star is-half"></i>
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
console.log('useParams nos tiro esto: ' + props.location.pathname.split('/')[2])
      */
