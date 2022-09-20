// import React from 'react'

const detailVG = () => {
  return (
    <>
      <h1>Videogame Name</h1>
      <p className="nes-container is-dark with-title">
        <p className="title">container::DetailVG</p>
          <p>Here be the video game detail</p>
          <p>Fecha de lanzamiento: 99/99/9999</p>
          <div className="nes-field">
            <label htmlFor="inline_field">Rating:</label>
            <i className="nes-icon is-medium star is-half"></i>
            <i className="nes-icon is-medium is-transparent star"></i>
            <i className="nes-icon is-medium is-transparent star"></i>
            <i className="nes-icon is-medium is-transparent star"></i>
            <i className="nes-icon is-medium is-transparent star"></i>
            <hr />
          </div>
          <div className="nes-field">
            <label htmlFor="inline_field">Plataformas:</label>
            <p>[Arreglo con las plataformas]</p>
          </div>
          <section className="icon-list">
          <i className="nes-mario"></i>
        </section>
        </p>
    </>
  )
}

export default detailVG
