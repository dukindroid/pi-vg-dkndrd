import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function useQuery () {
  const { search } = useLocation()

  return React.useMemo(() => new URLSearchParams(search), [search])
}

const Paginator = () => {
  const query = useQuery()
  const page = query.get('page')
  const array1 = []
  for (let index = 1; index < 9; index++) {
    array1[index] = index
  }

  return (
<div className="nes-container is-dark is-centered">
    <div className="card">
    <Link to={'/home?page=' + (page - 1)} >
    &lt;&lt;&nbsp;
    </Link>
      {
        array1 && array1.map((el) => {
          return (
            <Link key={el} to={'/home?page=' + el} >
              {el + ' '}
            </Link>
          )
        })
      }
      <Link to={`/home?page=${parseInt(page) + 1}`} >
      &gt;&gt;
    </Link>
    </div>
</div>
  )
}

export default Paginator
/*
<a href={'?page=' + (page - 1)}>
  <p> &lt; PREV 1 2 3 4 5 ... 999 NEXT &gt; </p>
*/
