/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'

const WhiteContainer = (props) => {
  const { title } = props
  return (
    <p className="nes-container is-dark with-title">
      <h3 className="title">{title}</h3>
      {props.children}
    </p>
  )
}

// WhiteContainer.PropTypes = {

//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired

// }

export default WhiteContainer
