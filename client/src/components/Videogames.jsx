// import React from 'react'
// import WhiteContainer from './WhiteContainer'
import Videogame from './Videogame'

const Videogames = (props) => {
  return (
    <section id='Videogames' className="basic-grid" >
        <Videogame title="{props.title}" subtitle="c::vg::subtitle" content="c::vg::content ... eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit" />
    </section>
  )
}

export default Videogames
