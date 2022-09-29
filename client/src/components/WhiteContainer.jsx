/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types'

const WhiteContainer = (props) => {
  const { title } = props
  return (<>
    <h3 className="title">{title}</h3>
    <div className="nes-container is-dark with-title basic-grid">
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
