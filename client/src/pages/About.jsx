import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WhiteContainer from '../components/WhiteContainer'
import { getCount } from '../redux/actions'

const About = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  // console.log('Desde about: ')
  // console.dir(count)
  // console.log(count.count)
  useEffect(() => {
    dispatch(getCount())
  }, [])
  return (
    <div>
      <h1>
        About
      </h1>
      <WhiteContainer>
        <div>
          We have {count ? count.count : 'NaN'} videogames loaded in the database...
        </div>
      </WhiteContainer>
    </div>
  )
}

export default About