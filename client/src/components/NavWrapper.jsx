/* eslint-disable react/prop-types */
// import React from 'react';
import Nav from './Nav'
// import { Route } from 'react-router-dom'
// import { Children } from 'react'

const NavWrapper = (props) => {
  return (<>
    <div className="nav-wrapper">
      <Nav />
      { props.children }
    </div>
  </>)
}

export default NavWrapper
