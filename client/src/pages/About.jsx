import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WhiteContainer from '../components/WhiteContainer'

const About = () => {

  return (
    <div>
      <h1>
        About
      </h1>
      <WhiteContainer>
        <div>
          Important undismissable information will be written here.
        </div>
      </WhiteContainer>
    </div>
  )
}

export default About