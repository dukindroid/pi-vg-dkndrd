/* eslint-disable react/prop-types */
// import React from 'react'
// import PropTypes from 'prop-types'

const Videogame = (props) => {
  const { title, subtitle, content } = props
  return (
    <>
      <div className="nes-container is-dark with-title is-primary" >
        <h3 className="title">{title}</h3>
        <h2>{subtitle}</h2>
        <p className="content">{content}</p>
      </div>
    </>
  )
}

export default Videogame
/*
<WhiteContainer title="Videogames" >
        eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
      </WhiteContainer>
      <WhiteContainer title="Los cosos" >
        eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
      </WhiteContainer>
      <WhiteContainer title="Puras fallas" >
      eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
      </WhiteContainer>
        <Videogame title="1ero" subtitle="vg.name" content="eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"/>
        <Videogame title="3ro" subtitle="vg.name" content="eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" />
        */
