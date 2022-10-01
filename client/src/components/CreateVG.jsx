// import React from 'react'
import GenresArray from './GenresArray'
import PlatformsArray from './platformsArray'
// import DropdownFilters from './DropdownFilters'
import Rating from './Rating'
import Input from './Input'
import Textarea from './Textarea'
import WhiteContainer from './WhiteContainer'

const createVG = () => {
  let handleInputChange = (e) => {
    setInput( prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
return (<>
    <h1>Create Videogame:</h1>
    <WhiteContainer title="Crear VideoJuego:" >
      <p>Estas son las instrucciones para crear un Videogame. Presiona las teclas para hacer algo y así. Despues pícale a otro botón y mueve el mouse y listo.</p>
      <p>Here be dragons:</p>
    </WhiteContainer>

    <WhiteContainer >
      <Input onChange={handleInputChangeimage.png} label="Nombre: " name="name" />
      <Textarea />
      <Input label="Fecha de lanzamiento: " name="release" inline="true" />
      <Rating size="medium"/>
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
