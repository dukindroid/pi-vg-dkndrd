/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import {useEffect} from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Videogame = (props) => {
  // console.log(props)
  const { id, name, img, genres } = props
  return (
    <>
      <Link to={'/videogames/' + id } >
        <div className="nes-container is-dark with-title is-primary" >
          <h3 className="title">{name}</h3>
          {/* <p className="content">{content}</p> */}
          <div className="gameImg">
            <img src={img} alt="imagen descriptiva del juego {name}" />
          </div>
          <p>{genres && genres.map(el => el + ' ')}</p>
        </div>
      </Link>
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
