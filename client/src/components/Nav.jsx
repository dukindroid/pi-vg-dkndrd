// import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li className='Home'><NavLink to={'/'} exact={true}>Home</NavLink></li>
        <li className='Detail'><NavLink to={'/videogame'}>Detail Videogame</NavLink></li>
        <li className='Create'><NavLink to={'/videogames/create'} >Create Videogame</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
