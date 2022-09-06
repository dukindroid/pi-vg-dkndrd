import './App.css'
const GenresArray = require('./GenresArray.js')
const PlatformsArray = require('./platformsArray.js')
function App () {
  return (
<>
    <div className="App nes-container with-title">
      <p className="title">container:form</p>
      <p className="nes-container is-dark with-title">
        <p className="title">Henry Videogames</p>
        <p>This is some kind of back-end app.</p>
        <p>Here be dragons:</p>
      </p>
      <p className="nes-container is-dark with-title">

        <p className="title">Crear VideoJuego:</p>

        <div className="nes-field">
          <label htmlFor="name_field">Nombre:</label>
          <input type="text" id="name_field" className="nes-input is-dark" >
          </input>
        </div>

        <div className="nes-field is-inline">
          <label htmlFor="textarea_field">Descripción:</label>
          <textarea type="text" id="textarea_field" className="nes-input is-dark" >
          </textarea>
        </div>

        <div className="nes-field is-inline">
          <label htmlFor="inline_field">Fecha de lanzamiento:</label>
          <input type="text" id="inline_field" className="nes-input is-dark" >
          </input>
        </div>

        <div className="nes-field is-inline">
          <label htmlFor="inline_field">Rating:</label>
          <i className="nes-icon is-medium star is-half"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
          <i className="nes-icon is-medium is-transparent star"></i>
        </div>

        <div className="nes-field is-inline">
          <label htmlFor="default_select">Genero(s):</label>
          <div className="nes-select is-inline">
            <select required id="default_select">
              <option value="" disabled selected hidden>Select...</option>
              {
                GenresArray.map((unGenero, key) => {
                  return (<option className="is-inline" key={key} value={key}>{unGenero}</option>)
                })
              }
            </select>
          </div>
          <button type="button" className="nes-btn is-inline">+</button>
        </div>

        <div className="nes-field is-inline">
          <label htmlFor="default_select">Plataforma(s):</label>
          <div className="nes-select is-inline">
            <select required id="default_select">
              <option value="" disabled selected hidden>Select...</option>
              {
                PlatformsArray.map((unGenero, key) => { return <option className="is-inline" key={key} value={key}>{unGenero}</option> })
              }
            </select>
          </div>
          <button type="button" className="nes-btn is-inline">+</button>
        </div>
        </p>
    </div>

<div className="App nes-container with-title">
  <p className="title">container:home</p>
    <p className="nes-container is-dark with-title">
      <p className="title">::home_header::</p>
        <p>[home_greet]</p>
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
      </p>
      <section className="basic-grid">
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::1</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::2</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::3</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::4</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::5</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::6</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::7</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::8</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::9</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::10</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::11</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::12</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::13</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::14</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>      <div className="nes-container is-dark with-title is-primary">
        <p className="title">VideoGame::15</p>
        <p>Hola! soy una imagen dizque :D</p>
          <p>Y yo soy los generos</p>
      </div>
    </section>
    </div>
    <div className="lists">
  <ul className="nes-list is-disc">
    <li>Good morning.</li>
    <li>Thou hast had a good night&apos;s sleep, I hope.</li>
    <li>Thou hast had a good afternoon</li>
    <li>Good night.</li>
  </ul>
</div>

<div className="lists">
  <ul className="nes-list is-circle">
    <li>Good morning.</li>
    <li>Thou hast had a good night&apos;s sleep, I hope.</li>
    <li>Thou hast had a good afternoon</li>
    <li>Good night.</li>
  </ul>
</div>

  </>
  )
}

export default App
