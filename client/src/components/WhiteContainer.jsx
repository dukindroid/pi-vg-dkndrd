/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'

const WhiteContainer = (props) => {
  return (<>
    <div className="nes-container is-dark with-title">
      {props.children}
    </div>
  </>)
}

// WhiteContainer.PropTypes = {

//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired

// }

export default WhiteContainer
