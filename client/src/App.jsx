/* eslint-disable react/prop-types */
// import './App.css'
import React, { Component, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DetailVG from './pages/DetailVG'
import CreateVG from './pages/CreateVG'
import Splash from './pages/Splash'
import NavWrapper from './components/NavWrapper'
// import WhiteContainer from './components/WhiteContainer'

const NoMatch = () => {
  return (
    <div>
      <h1>
        404!
      </h1>
      <p>
        Nothing to see here!!!
      </p>
    </div>
  )
}

const App = () => {
  return (<>
    <Routes>
      <Route index element={<Splash />} />
      <Route path={'videogames'} element={<NavWrapper/>} >
        <Route index element={<Home />} />
        <Route path={'create'} element={<CreateVG/>} />
        <Route path={':id'} element={<DetailVG/>} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>)
}  

export default App
