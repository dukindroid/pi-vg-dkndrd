/* eslint-disable react/prop-types */
// import React from 'react';
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
// import { Children } from 'react'

const NavWrapper = (props) => {
  return (<>
    <div className="nav-wrapper">
      <Nav />
      <Outlet />
    </div>
  </>)
}

export default NavWrapper
