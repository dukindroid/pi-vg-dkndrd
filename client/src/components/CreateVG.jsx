// import React from 'react'
import GenresArray from './GenresArray'
import PlatformsArray from './platformsArray'
import Select from './Select'
import Rating from './Rating'
import Input from './Input'
import Textarea from './Textarea'
import WhiteContainer from './WhiteContainer'

const createVG = () => {
  return (<>
    <h1>Create Videogame:</h1>
    <WhiteContainer title="Crear VideoJuego:" >
      <p>Estas son las instrucciones para crear un Videogame. Presiona las teclas para hacer algo y así. Despues pícale a otro botón y mueve el mouse y listo.</p>
      <p>Here be dragons:</p>
    </WhiteContainer>
    <WhiteContainer >
      <Input label="Nombre: " name="name" />
      <Textarea />
      <Input label="Fecha de lanzamiento: " name="release" inline="true" />
      <Rating size="medium"/>
      <Select label="Género: ">{
        GenresArray.map((unGenero, key) => {
          return (
            <option className="is-inline" key={key} value={key}>
              {unGenero}
            </option>)
        })
      }</Select>
      <Select label="Plataforma: ">{
        PlatformsArray.map((unaPlataforma, key) => {
          return (
            <option className="is-inline" key={key} value={key}>
              {unaPlataforma}
            </option>
          )
        })
      }</Select>
    </WhiteContainer>
  </>)
}

export default createVG
