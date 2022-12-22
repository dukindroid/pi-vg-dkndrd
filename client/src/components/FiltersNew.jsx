/* eslint-disable react/prop-types */
import GenresArray from './GenresArray'
import React, { useEffect } from 'react'
import { createSearchParams, useLocation, useNavigate} from 'react-router-dom'
if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'

}
// const console.log = require('debug')('dev')
import Paginator from './Paginator'

function useQuery () {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const Filters = (props) => {
  const query = useQuery()
  const [input, setInput] = React.useState({
    searchQuery: '',
    filterOrder: ''
  })
  const [select, setSelect] = React.useState({
    filter: '',
    genres: ''
  })

  const handleSearchChange = (evento) => {
    setInput(prev => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }))
  }
  // Escuchador para el select de filtro
  const onChange = (evento) => {
    setSelect(prev => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }))
    query.set('filter',evento.target.value)
  }
  // Escuchador para elegir en qué orden se desplegará el filtro

  const handleGenre = (e) => {
    // console.log(evento.target.value)
    setSelect(prev => ({
      ...prev,
      genres: query.get( e.target.value)
    }))
    // Deletes de query TEMPORALES
    // query.delete('order')
    // query.delete('filter')
    query.set('genres', e.target.value)
    navigateHandler(query.toString())
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
    // console.dir(where)
    navigate(".",where)
  }
  const ChecksParaOrdenar = () => {
    const onSort = (e) => {
      setInput(prev => ({
        ...prev,
        filterOrder: e.target.value
      }))
      query.set('order',e.target.value)
      console.log('query:' + query.toString())
      navigateHandler(query.toString())
    }
    return (
      <div className="paginatorDiv  ">
        <label >
          <input onClick={onSort}
            type="checkbox"
            className="nes-checkbox is-dark"
            name="filterOrder" 
            id='asc' 
            value='ASC' 
            checked = { input.filterOrder ==='ASC' ? true : false }/>
          <span>↗ Ascend.</span>
        </label>&nbsp;
        <label>
          <input onChange={onSort}
            type="checkbox"
            className="nes-checkbox is-dark"
            name="filterOrder" 
            id='desc' 
            value='DESC' 
            checked = { input.filterOrder ==='DESC' ? true : false }
          />
          <span>↘ Descend.</span>
        </label>
      </div>
    )
  }
  
  useEffect(() => {
    // console.dir({query, input, select})
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
    if (query.has('genres')) {
      setSelect(prev => ({
        ...prev,
        genres: query.get('genres')
      }))
    }
  }, [query])
  // console.log('Desde el dropdown, select vale: ' + select.genres)
  return (<>
    <div className='nes-container is-dark basic-grid2 ' >
      <div className='nes-field is-inline two-columns basic-grid2' >
        <input onChange={handleSearchChange} onSubmit={onSubmit} type="text" name="searchQuery" id="inline_field" className='nes-input is-dark nes-input' value={input.searchQuery} />
        <button onClick={onSubmit} type="button" name='botonEnviar' className="nes-btn inline-field"> Buscar </button>
      </div>
      <div className="nes-field nes-select is-dark is-inline" >
        <select value={select.genres} id="myGenre" label="Género: " onChange={handleGenre} name="genres">
          <option  >Por genero...</option>
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
      <div className="nes-field nes-select is-dark two-columns is-inline" >
        <select onChange={onChange} name='filter' value={select.filter} title="Filtrar...:">
          <option className="is-inline" value={''} >Filtrar...</option>
          <option className="is-inline" value={'name'} >Por nombre</option>
          <option className="is-inline" value={'rating'} >Por Rating</option>
          <option className="is-inline" value={'isLocal'} >Por origen de creaciòn</option>
        </select>
      </div>
      {
        select.filter!=='' ? <ChecksParaOrdenar /> : null
      }
      
    </div>
    <div className='paginatorContainer'>
      <Paginator  pagina={query.get('page')} />
    </div>
    {/* Paginador */}
  </>)
}

export default Filters
