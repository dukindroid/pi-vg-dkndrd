// import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li className='Home'><NavLink to={'/videogames'} end>Home</NavLink></li>
        {/* <li className='Detail'><NavLink to={'/videogame'}>Detail Videogame</NavLink></li> */}
        <li className='Create'><NavLink to={'create'} >Create Videogame</NavLink></li>
        <li className='About'><NavLink to={'about'} >About</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
