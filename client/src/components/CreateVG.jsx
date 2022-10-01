import React from 'react'
import GenresArray from './GenresArray'
import PlatformsArray from './platformsArray'
import WhiteContainer from './WhiteContainer'
// import DropdownFilters from './DropdownFilters'

const createVG = () => {
  const [input, setInput] = React.useState({
    title: '',
    description: '',
    released: null,
    rating: 0
  })

  const [error, setError] = React.useState({})

  const validate = (input) => {
    const error = {}
    if (!input.title) error.title = 'El campo de título es obligatorio'
    if (!input.description) error.description = 'El campo de descripción es obligatorio'
    if (!input.released) error.released = 'El campo de fecha original de salida es obligatorio'
    if (!input.rating) error.rating = 'El campo de rating es obligatorio'
  }

  const handleInputChange = (evento) => {
    console.log(input)
    console.log(evento)
    setInput(prev => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }))
    const errorObj = validate({ ...input, [evento.target.name]: evento.target.value })
    setError(errorObj)
  }

  const handleRating = (evento) => {
    console.log(evento.target.id)
    setInput(prev => ({
      ...prev,
      rating: evento.target.id
    }))
  }

  return (<>
    <h1>Create Videogame:</h1>
    <WhiteContainer title="Crear VideoJuego:" >
      <p>Estas son las instrucciones para crear un Videogame. Presiona las teclas para hacer algo y así. Despues pícale a otro botón y mueve el mouse y listo.</p>
      <p>Here be dragons:</p>
    </WhiteContainer>

    <WhiteContainer >
    <div className='nes-field is-inline' >
      <label htmlFor="inline_field">Nombre: </label>
      <input onBlur={handleInputChange} type="text" name="title" id="inline_field" className="nes-input is-dark {error.title && 'is-error'}" value={input.title} />
    </div>

      <textarea className="nes-input is-dark {error.description && 'is-error'}" onBlur={handleInputChange} name="description" value={input.description} ></textarea>

      <input className={error.released && 'is-error'} onBlur={handleInputChange} label="Fecha de lanzamiento: " name="released" value={input.released} />

    <div className="genre-select nes-field is-inline rating">
      <label htmlFor="inline_field">Rating:</label>
      <i id="5" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 5) ? 'nes-icon is-medium star is-transparent' : 'nes-icon is-medium star'} ></i>
      <i id="4" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 4) ? 'nes-icon is-medium star is-transparent' : 'nes-icon is-medium star'} ></i>
      <i id="3" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 3) ? 'nes-icon is-medium star is-transparent' : 'nes-icon is-medium star'} ></i>
      <i id="2" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 2) ? 'nes-icon is-medium star is-transparent' : 'nes-icon is-medium star'} ></i>
      <i id="1" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 1) ? 'nes-icon is-medium star is-transparent' : 'nes-icon is-medium star'} ></i>
    </div>

      <select label="Género: ">{
        GenresArray.map((unGenero, key) => {
          return (
            <option className="is-inline" key={key} value={key}>
              {unGenero}
            </option>)
        })
      }</select>

      <select label="Plataforma: ">{
        PlatformsArray.map((unaPlataforma, key) => {
          return (
            <option className="is-inline" key={key} value={key}>
              {unaPlataforma}
            </option>
          )
        })
      }</select>

    </WhiteContainer>
  </>)
}

export default createVG
