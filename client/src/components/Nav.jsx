// import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Nav = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  return (
    <div className='nav'>
      <ul>
        <li className='Home'>
          { 
            (pathname === '/videogames') ?
              <NavLink to={'/videogames'} end>Home</NavLink>
              : <NavLink onClick={() => navigate(-1) } end>&lt;&lt; Back</NavLink>
          }
        </li>
        {/* <li className='Detail'><NavLink to={'/videogame'}>Detail Videogame</NavLink></li> */}
        <li className='Create'><NavLink to={'create'} >Create Videogame</NavLink></li>
        <li className='About'><NavLink to={'about'} >About</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
