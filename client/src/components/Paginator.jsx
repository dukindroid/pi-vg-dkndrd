/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

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

const Paginator = ({ pagina, total, query }) => {
  // const page = (query.get('page') !== null) ? query.get('page') : 1
  // console.log(`El paginador opina que page vale ${page}`)
  const array1 = []
  for (let index = 1; index < total; index++) {
    array1[index] = index
  }
  // console.log('args de pagntr: ' + pagina + ' ' + total + ' ' + query)
  return (
    <div className="nes-container is-dark is-centered card">
    {
      array1 && array1.map((el) => {
        return (
          <Link key={el} to={'/home/' + el + '?' + query} >
            {el + ' '}
          </Link>
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
