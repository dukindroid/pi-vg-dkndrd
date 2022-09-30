/* eslint-disable react/prop-types */
import React from 'react'
import { useLocation } from 'react-router-dom'

function useQuery () {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const DropDownFilters = (props) => {
  const onChange = (e) => {
    props.history.push(`/${e.target.value}`)
  }
  const query = useQuery()
  console.log(query)
  return (<>
    <select onChange={onChange} title="Filtrar...:">
      <option value={'cosas'} >Por nombre</option>
      <option value={'cosas'} >Por Rating</option>
      <option value={'cosas'} >Por origen de creaciòn</option>
    </select>
  </>)
}

export default DropDownFilters
