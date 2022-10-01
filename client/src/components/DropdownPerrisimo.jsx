/* eslint-disable react/prop-types */
import React from 'react'
import { useLocation } from 'react-router-dom'
function useQuery () {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}
const DropDownFilters = (props) => {
  // Hook para traernos el query en /home?blablabla
  const query = useQuery()
  // Escuchador para el select de filtro
  const onChange = (e) => {
    if (query.has('filter')) query.set('filter', e.target.value)
    else query.append('filter', e.target.value)
    // console.log('Al query le agregamos esto: ' + query.toString())
    // console.dir(query.keys)
    // props.history.push(`/home?${query.toString()}`)
  }
  // Escuchador para elegir en qué orden se desplegará el filtro
  const onSort = (e) => {
    query.set('order', e.target.value)
    query.delete('page')
    console.log('Al query le agregamos esto: ' + query.toString())
    props.history.push(`/home?${query.toString()}`)
  }
  // console.log('Desde el dropdown, page vale: ' + query.get('page'))
  return (<>
    <div >
      <select onChange={onChange} title="Filtrar...:">
        <option value={'NULL'} >Filtrar...</option>
        <option value={'name'} >Por nombre</option>
        <option value={'rating'} >Por Rating</option>
        <option value={'isLocal'} >Por origen de creaciòn</option>
      </select>&nbsp;
      <label >
        <input onClick={onSort} type="radio" className="nes-radio is-dark" name="answer-dark" id='order' value='asc' defaultChecked/>
        <span>↗</span>
      </label>
      &nbsp;
      <label>
        <input onChange={onSort} type="radio" className="nes-radio is-dark" name="answer-dark" id='order' value='desc' />
        <span>↘</span>
      </label>
    </div>
  </>)
}

export default DropDownFilters
