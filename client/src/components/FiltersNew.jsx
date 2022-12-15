/* eslint-disable react/prop-types */
import GenresArray from './GenresArray'
import React, { useEffect } from 'react'
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOneGenre } from '../redux/actions'
if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'

}
// const console.log = require('debug')('dev')
import Paginator from './Paginator'

function useQuery () {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

/*
  Componente DropDownFilters
*/
const Filters = (props) => {
  const dispatch = useDispatch()
  const query = useQuery()

  const [input, setInput] = React.useState({
    searchQuery: '',
    filterOrder: ''
  })
  const [select, setSelect] = React.useState({
    filter: ''
  })
  
  let [searchParams, setSearchParams] = useSearchParams()
  
  const handleSearchChange = (evento) => {
    setInput(prev => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }))
    console.log('Filtros tiene estos params: ' + searchParams)
    console.log(input.searchQuery)
    
  }
  // Escuchador para el select de filtro
  const onChange = (evento) => {
    setSelect(prev => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }))
    query.set('filter',evento.target.value)
    console.log('query:' + query)
    console.log('select:' + JSON.stringify(select))
    // console.dir({query, input, select})
    // const newparams = createSearchParams({
    //   ...searchParams,
    //   filter: e.target.value 
    // })

    // console.dir(newparams)
    // if (query.has('filter')) query.set('filter', e.target.value)
    // else query.append('filter', e.target.value)
    // console.log('Al query le agregamos esto: ' + query.toString())
    // props.history.push(`/home?${query.toString()}`)
  }

  const handleGenre = (evento) => {
    console.log(evento.target.value)
    dispatch(getOneGenre(evento.target.value))
  }
  // Escuchador para elegir en qué orden se desplegará el filtro
  const onSort = (e) => {
    setInput(prev => ({
      ...prev,
      filterOrder: e.target.value
    }))
    query.set('order',e.target.value)
    console.log('query:' + query.toString())
    navigateHandler(query.toString())
    // setSearchParams(
    //   ...searchParams,
    //   createSearchParams({order: e.target.value })
    // )
    // console.log('Los params ahora: ' + searchParams)
    // query.set('order', e.target.value)
    // query.delete('page')
    // query.delete('search')
    // console.log('Al query le agregamos esto: ' + query.toString())
    // props.history.push(`/home?${query.toString()}`)
  }
  const useNavigateParams = () => {
    const navigate = useNavigate()
  
    return (pathname, params) => {
      const path = {
        pathname,
        search: createSearchParams(params).toString()
      }
      navigate(path)
    }
  }
  const navigate = useNavigateParams()

  const navigateHandler = (where) => {
    console.dir(where)
    navigate(".", where)
  }
  const onSubmit = (e) => {
    // alert('buscar: ' + input.searchQuery)
    // if (query.has('search')) query.set('search', e.target.value)
    // else
    setInput(prev => ({
      ...prev,
      filterOrder: query.get('order')
    }))
    query.append('search', input.searchQuery)
    console.log('Al query le agregamos esto: ' + query.toString() + input.searchQuery)
    navigateHandler(query.toString())
  }
  useEffect(() => {
    console.dir({query, input, select})
    // console.dir(params)
    if (query.has('search')) {
      setInput(prev => ({
        ...prev,
        searchQuery: query.get('search')
      }))
    }
    if (query.has('filter')) {
      setSelect(prev => ({
        ...prev,
        filter: query.get('filter')
      }))
      setInput(prev => ({
        ...prev,
        filterOrder: query.get('order')
      }))
    }
  }, [query])
  // console.log('Desde el dropdown, page vale: ' + query.get('page'))
  return (<>
    <div >
      <div className='nes-field is-inline' >
        <input onChange={handleSearchChange} onSubmit={onSubmit} type="text" name="searchQuery" id="inline_field" className='nes-input is-dark nes-input' value={input.searchQuery} />
        <button onClick={onSubmit} type="button" name='botonEnviar' className="nes-btn inline-field"> Buscar </button>
      </div>
      <div className="nes-field nes-select is-dark is-inline" >
        <select onChange={onChange} name='filter' value={select.filter} title="Filtrar...:">
          <option value={'NULL'} >Filtrar...</option>
          <option value={'name'} >Por nombre</option>
          <option value={'rating'} >Por Rating</option>
          <option value={'isLocal'} >Por origen de creaciòn</option>
        </select>&nbsp;
      </div>
      <label >
        <input onClick={onSort} type="radio" className="nes-radio is-dark inline-field" name="filterOrder" id='asc' value='asc' defaultChecked/>
        <span>↗</span>
      </label>
      &nbsp;
      <label>
        <input onChange={onSort} type="radio" className="nes-radio is-dark inline-field" name="filterOrder" id='desc' value='desc' />
        <span>↘</span>
      </label>
    </div>
    <div className="nes-field nes-select is-dark is-inline" >
      <select id="myGenre" label="Género: " onChange={handleGenre}>
        <option value={'NULL'} >Por genero...</option>
        {
          GenresArray.map((unGenero, key) => {
            return (
              <option className="is-inline" key={key} value={unGenero}>
                {unGenero}
              </option>)
          })
        }
      </select>
    </div>
    {/* Paginador */}
    <Paginator pagina={query.get('page')} total={15} query={query.toString()} />
  </>)
}

export default Filters
