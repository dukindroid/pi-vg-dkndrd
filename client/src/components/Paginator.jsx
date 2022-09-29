import { Link } from 'react-router-dom'

const Paginator = () => {
  const array1 = []
  for (let index = 1; index < 27; index++) {
    array1[index] = index
  }

  return (
<div className="nes-container is-dark is-centered">
    <div className="card">
    <Link to={'/home'} >
    &lt;&lt;&nbsp;
    </Link>
      {
        array1 && array1.map((el) => {
          return (
            <Link key={el} to={'/home/' + el} >
              {el + ' '}
            </Link>
          )
        })
      }
      <Link to={'/home'} >
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
