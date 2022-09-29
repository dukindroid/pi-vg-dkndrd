/* eslint-disable react/prop-types */
// import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import DetailVG from './components/DetailVG'
import CreateVG from './components/CreateVG'
import Splash from './components/Splash'
import NavWrapper from './components/NavWrapper'
// import WhiteContainer from './components/WhiteContainer'

const App = () => {
  return (<>

    <Route path={'/videogame/:id'} component={DetailVG} />
    <Route path={'/videogames/create'} >
    <NavWrapper ><CreateVG /></NavWrapper>
    </Route>
    <Route path={'/home/'} component={Home} />
    <Route path={'/'} exact component={Splash} />
  </>)
}

export default App
