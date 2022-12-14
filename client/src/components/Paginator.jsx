/* eslint-disable react/prop-types */
import { useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
if (process.env.debug = 'dev') {
  localStorage.debug = 'dev'

}
import {
  // useLocation,
  useNavigate,
  // useParams,
  // useSearchParams,
  createSearchParams
} from "react-router-dom"
// const console.log = require('debug')('dev')
// console.log(typeof query)
// console.log('DESDE PALLA ' + query.toString())
// console.log('pagina: ' + JSON.stringify(pagina))
// console.log(typeof query)
// console.log('DESDE PALLA ' + query.toString())
// console.log('pagina: ' + JSON.stringify(pagina))
// const Palla = (pagina) => {
//   if (pagina === 1) return (<Link to={'/home?page=' + pagina - 1} >&lt;&lt;&nbsp;</Link>)
//   return <div></div>
// }
// const Paca = (pagina) => {
//   if (pagina < 6) return (<Link to={'/home?'} >&gt;&gt;</Link>)
//   return <div></div>
// }
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
const Paginator = ({ pagina, total, query }) => {
  const navigate = useNavigateParams()
  
  const navigateHandler = (onePage) => {
    console.dir(onePage)
    navigate(".", { page: onePage })
  }
  
  // console.log('args de pagntr --> + query:' + query + ' pagina: ' + pagina + ' total:' + total )
  const array1 = []
  for (let index = 1; index < total; index++) {
    array1[index] = index
  }
  return (
    <div className="nes-container is-dark is-centered card">
      {
        array1 && array1.map((el) => {
          // const renderTo = '/videogames?page=' + el
          return (<div key={el} className='paginatorDiv' >
            <button type='button' onClick={() => navigateHandler(el)} >
              {el}
            </button>
          </div>
          )
        })
      }
    </div>
  )
}

export default Paginator
/* <Palla pagina={pagina}/> */
/* <Paca pagina={pagina}/> */
/*
<a href={'?page=' + (page - 1)}>
  <p> &lt; PREV 1 2 3 4 5 ... 999 NEXT &gt; </p>
*/
