/* eslint-disable react/prop-types */
import GenresArray from './GenresArray'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
const DropDownFilters = (props) => {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState({
    searchQuery: ''
  })
  // Hook para traernos el query en /home?blablabla
  const query = useQuery()

  // REFACTOR KILOMBO DE ÚLTIMO MOMENTO:
  // Separar interacciones por aquellas que:
  // handleEvent: solo reciben un evento y lo guardan
  // handleSubmit: reciben un evento y hacen history.push o
  // Escuchaddor para el campo de búsqueda
  const handleSearchChange = (evento) => {
    setInput(prev => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }))
    console.log(input.searchQuery)
  }
  // Escuchador para el select de filtro
  const onChange = (e) => {
    if (query.has('filter')) query.set('filter', e.target.value)
    else query.append('filter', e.target.value)
    // console.log('Al query le agregamos esto: ' + query.toString())
    // console.log(query.keys)
    // props.history.push(`/home?${query.toString()}`)
  }

  const handleGenre = (evento) => {
    alert(evento.target.value)
    dispatch(getOneGenre(evento.target.value))
  }
  // Escuchador para elegir en qué orden se desplegará el filtro
  const onSort = (e) => {
    query.set('order', e.target.value)
    query.delete('page')
    query.delete('search')
    console.log('Al query le agregamos esto: ' + query.toString())
    props.history.push(`/home?${query.toString()}`)
  }

  const onSubmit = (e) => {
    // alert('buscar: ' + input.searchQuery)
    // if (query.has('search')) query.set('search', e.target.value)
    // else
    query.append('search', input.searchQuery)
    console.log('Al query le agregamos esto: ' + query.toString() + input.searchQuery)
    props.history.push(`/home?${query.toString()}`)
  }
  useEffect(() => {
    if (query.has('search')) {
      setInput(prev => ({
        ...prev,
        searchQuery: query.get('search')
      }))
    }
  }, [])
  // console.log('Desde el dropdown, page vale: ' + query.get('page'))
  return (<>
    <div >
      <div className='nes-field is-inline' >
        <input onChange={handleSearchChange} onSubmit={onSubmit} type="text" name="searchQuery" id="inline_field" className='nes-input is-dark nes-input' value={input.searchQuery} />
        <button onClick={onSubmit} type="button" name='botonEnviar' className="nes-btn inline-field"> Buscar </button>
      </div>
      <div className="nes-field nes-select is-dark is-inline" >
        <select onChange={onChange} title="Filtrar...:">
          <option value={'NULL'} >Filtrar...</option>
          <option value={'name'} >Por nombre</option>
          <option value={'rating'} >Por Rating</option>
          <option value={'isLocal'} >Por origen de creaciòn</option>
        </select>&nbsp;
      </div>
      <label >
        <input onClick={onSort} type="radio" className="nes-radio is-dark inline-field" name="answer-dark" id='order' value='asc' defaultChecked/>
        <span>↗</span>
      </label>
      &nbsp;
      <label>
        <input onChange={onSort} type="radio" className="nes-radio is-dark inline-field" name="answer-dark" id='order' value='desc' />
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

export default DropDownFilters
