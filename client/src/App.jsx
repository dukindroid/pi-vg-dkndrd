import './App.css'
import Nav from './components/Nav'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import DetailVG from './components/DetailVG'
import CreateVG from './components/CreateVG'
// import WhiteContainer from './components/WhiteContainer'

const App = () => {
  return (
    <>
      <Nav />
      <div className="App nes-container with-title">
      <Route path={'/videogame'} component={DetailVG} />
      <Route path={'/videogames/create'}>
        <CreateVG />
      </Route>
      <Route path={'/'} exact>
        <Home />
      </Route>
      {/* <Route path={'/videogame/create'} component={CreateVG} /> */}
      </div>
    </>
  )
}

export default App
