/* eslint-disable react/prop-types */
// import './App.css'
import React, { Component, lazy, Suspense } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import DetailVG from './pages/DetailVG'
import CreateVG from './pages/CreateVG'
import Splash from './pages/Splash'
import NavWrapper from './components/NavWrapper'
// import WhiteContainer from './components/WhiteContainer'

const App = () => {
  return (<>
    <Route path={'/videogame/:id'} component={DetailVG} />
    <Route path={'/videogame/create'} >
      <NavWrapper ><CreateVG /></NavWrapper>
    </Route>
    <Route path={['/home', '/home/:pagina']} component={Home} />
    <Route path={'/'} exact component={Splash} />
  </>)
}  

export default App
