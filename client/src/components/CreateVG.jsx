/* eslint-disable no-unused-vars */
import React from 'react'
import GenresArray from './GenresArray'
import PlatformsArray from './platformsArray'
import WhiteContainer from './WhiteContainer'
import { useDispatch } from 'react-redux'
import { createVideogame } from '../redux/actions'
// import DropdownFilters from './DropdownFilters'

const createVG = () => {
  const dispatch = useDispatch()
  // const [genres, setGenres] = React.useState([])
  // const [platforms, setPlatforms] = React.useState([])
  // const [selectedFile, setSelectedFile] = React.useState(null)
  const [error, setError] = React.useState({})
  const [input, setInput] = React.useState({
    name: '',
    description: '',
    released: '',
    rating: 0,
    genres: [],
    platforms: [],
    img: '',
    isLocal: 'true'
  })
  let unaVariable = false
  const validate = (input) => {
    console.dir(input)
    const error = {}
    if (!input.name) error.name = 'El campo de título es obligatorio'
    if (!input.description) error.description = 'El campo de descripción es obligatorio'
    if (!input.released) error.released = 'El campo de fecha original de salida es obligatorio'
    if (!input.rating) error.rating = 'El campo de rating es obligatorio'

    // const patron = /[0-9]{2}[-/][0-9]{2}[-/][0-9]{4}/g
    // const error.resultado = patron.test(input.released)
    if (error.resultado) alert('La fecha esta mal!!!')

    return error
  }

  const handleInputChange = (evento) => {
    // console.log(input)
    // console.log(evento)
    setInput(prev => ({
      ...prev,
      [evento.target.name]: evento.target.value
    }))
    const errorObj = validate({ ...input, [evento.target.name]: evento.target.value })
    setError(errorObj)
    console.log(errorObj)
    if (errorObj !== {}) {
      unaVariable = true
    } else {
      unaVariable = false
    }
    console.log(unaVariable)
  }

  const handleGenre = (evento) => {
    console.log(evento.target.name)
    const unString = '' + evento.target.value.toLowerCase()
    setInput(prev => ({
      ...prev,
      genres: [unString]
    }))
  }

  const handlePlatform = (evento) => {
    console.log(evento.target.name)
    setInput(prev => ({
      ...prev,
      platforms: [evento.target.value]
    }))
  }

  const handleRating = (evento) => {
    console.log(evento.target.id)
    setInput(prev => ({
      ...prev,
      rating: Number.parseInt(evento.target.id)
    }))
  }
  const addPlatform = () => { alert('💩') }
  const addGenre = () => { alert('💩') }

  const changeGenre = (evento) => { console.dir(evento) }
  const enviar = () => {
    alert('Pum! ya envié un videogame, según, con esta data: ' + JSON.stringify(input))
    dispatch(createVideogame(input))
  }

  return (<>
    <h1>Create Videogame:</h1>
    <WhiteContainer title="Crear VideoJuego:" >
      <p>Estas son las instrucciones para crear un Videogame. Presiona las teclas para hacer algo y así. Despues pícale a otro botón y mueve el mouse y listo.</p>
      <p>Here be dragons:</p>
    </WhiteContainer>

    <WhiteContainer >
    <div className='nes-field' >
      <label htmlFor="inline_field">Nombre: </label>
      <input onChange={handleInputChange} type="text" name="name" id="inline_field" className={(error.name === undefined) ? 'nes-input is-dark' : 'nes-input is-error'} value={input.name} />
    </div>
    <div className='nes-field is-inline' >
      <label htmlFor="inline_field">Descripción: </label>
      <textarea className={(error.description === undefined) ? 'nes-input is-dark' : 'nes-input is-error'} onChange={handleInputChange} name="description" value={input.description} ></textarea>
    </div>
    <div className='nes-field is-inline' >
      <label htmlFor="inline_field">Fecha de lanzamiento: </label>
      <input className={(error.released === undefined) ? 'nes-input is-dark' : 'nes-input is-error'} onChange={handleInputChange} label="Fecha de lanzamiento: " name="released" value={input.released} />
    </div>
    <div className="nes-field nes-select is-dark is-inline" >
      <label htmlFor="inline_field">Genero(s): </label>
      <div className='nes-field inline-field'>
        <button onClick={addGenre} type="button" className="nes-btn is-inline"> + </button>
      </div>
      <select id="myGenre" label="Género: " onChange={handleGenre}>{
        GenresArray.map((unGenero, key) => {
          return (
            <option className="is-inline" key={key} value={unGenero}>
              {unGenero}
            </option>)
        })
      }</select>
    </div>
    <div className="nes-field nes-select is-dark is-inline" >
      <label htmlFor="inline_field">Plataforma(s): </label>
      <div className='nes-field inline-field'>
        <button onClick={addPlatform} type="button" className="nes-btn is-inline"> + </button>
      </div>
      <select id="myPlatforms" label="Plataforma: " onChange={handlePlatform}>{
        PlatformsArray.map((unaPlataforma, key) => {
          return (
            <option className="is-inline" key={key} value={unaPlataforma}>
              {unaPlataforma}
            </option>
          )
        })
      }</select>
    </div>
    <div className="genre-select nes-field is-inline rating">
      <label htmlFor="inline_field">Rating:</label>
      <i id="1" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 0) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
      <i id="2" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 1) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
      <i id="3" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 2) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
      <i id="4" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 3) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
      <i id="5" name="rating" onClick={handleRating} value={input.rating} className={(input.rating > 4) ? 'nes-icon is-medium star' : 'nes-icon is-medium star is-transparent'} ></i>
    </div>
    <div className="nes-field is-dark is-inline">
      <label htmlFor="inline_field">Imagen para mostrar: </label>
      <input className={(error.img === undefined) ? 'nes-input is-dark' : 'nes-input is-error'} onChange={handleInputChange} label="Imagen..." name="img" value={input.img} />
    </div>
    <div className="nes-field">
      <button onClick={enviar} type="button" className="nes-btn" disabled={unaVariable}>Enviar</button>
    </div>
    </WhiteContainer>
  </>)
}

export default createVG
