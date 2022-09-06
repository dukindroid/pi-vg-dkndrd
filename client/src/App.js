import './App.css';
const GenresArray =  require('./GenresArray.js');
const PlatformsArray = require('./platformsArray.js')
function App() {
  return (
    <div className="App nes-container with-title"> 

      <p className="nes-container is-dark with-title">
        <p className="title">Henry Videogames</p>
        <p>This is some kind of back-end app.</p>
        <p>Here be dragons:</p>
      </p>
      
      <p className="nes-container is-dark with-title">

        <p className="title">Crear VideoJuego:</p>

        <div className="nes-field">
          <label for="name_field">Nombre:</label>
          <input type="text" id="name_field" className="nes-input is-dark" >
          </input>
        </div>

        <div className="nes-field is-inline">
          <label for="textarea_field">Descripción:</label>
          <textarea type="text" id="textarea_field" className="nes-input is-dark" >
          </textarea>
        </div>

        <div className="nes-field is-inline">
          <label for="inline_field">Fecha de lanzamiento:</label>
          <input type="text" id="inline_field" className="nes-input is-dark" >
          </input>
        </div>

        <div className="nes-field is-inline">
          <label for="inline_field">Rating:</label>
          <i class="nes-icon is-medium star is-half"></i>
          <i class="nes-icon is-medium is-transparent star"></i>
          <i class="nes-icon is-medium is-transparent star"></i>
          <i class="nes-icon is-medium is-transparent star"></i>
          <i class="nes-icon is-medium is-transparent star"></i>
        </div>
        
        <div className="nes-field is-inline">
          <label for="default_select">Genero(s):</label>
          <div class="nes-select is-inline">
            <select required id="default_select">
              <option value="" disabled selected hidden>Select...</option>
              {
                GenresArray.map((unGenero, index) => {return (<option className="is-inline" value={index}>{unGenero}</option>)})
              }
            </select>
          </div>
          <button type="button" className="nes-btn is-inline">+</button>
        </div>

        <div className="nes-field is-inline">
          <label for="default_select">Plataforma(s):</label>
          <div class="nes-select is-inline">
            <select required id="default_select">
              <option value="" disabled selected hidden>Select...</option>
              {
                PlatformsArray.map((unGenero, index) => {return (<option className="is-inline" value={index}>{unGenero}</option>)})
              }
            </select>
          </div>
          <button type="button" className="nes-btn is-inline">+</button>
        </div>

        </p>
    </div>
  );
}

export default App;
