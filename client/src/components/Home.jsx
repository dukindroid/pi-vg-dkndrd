/* eslint-disable react/prop-types */
// import React from 'react'
import HomeHeader from './HomeHeader'
// import WhiteContainer from './WhiteContainer'
import Videogames from './Videogames'
import WhiteContainer from './WhiteContainer'
import Paginator from './Paginator'
const home = () => {
  return (
    <>
      <h1>
        Henry PI: Videogames
      </h1>
        <WhiteContainer title="container::HomeHeader" >
          <p>Acá iría algún texto y los filtros. Abajo el grid de Videogames.</p>
          <HomeHeader />
        </WhiteContainer>
        <WhiteContainer title="container::Videogames">
          <Videogames />
        </WhiteContainer>
        <Paginator />
    </>
  )
}

export default home

/*
    <div className="lists">
      <ul className="nes-list is-disc">
        <li>
          Filtrar...:
        </li>
      </ul>
    </div>
    <div className="lists">
      <ul className="nes-list is-circle">
        <li>Por género: [select]&nbsp;&nbsp;&nbsp;   Por autor:  [select]&nbsp;&nbsp;&nbsp;    Por Rating
        &nbsp;<i className="nes-icon is-small star is-half"></i>
      <i className="nes-icon is-small is-transparent star"></i>
      <i className="nes-icon is-small is-transparent star"></i>
      <i className="nes-icon is-small is-transparent star"></i>
      <i className="nes-icon is-small is-transparent star"></i>
        </li>
      </ul>
    </div>
*/
