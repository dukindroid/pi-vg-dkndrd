/* eslint-disable react/prop-types */
const Input = (props) => {
  const { label, name, inline } = props

  return (
    <div className={'nes-field' + (inline ? ' is-inline' : ' ')}>
      <label htmlFor="inline_field">{label}</label>
      <input type="text" name={name} id="inline_field" className="nes-input is-dark" >
      </input>
    </div>
  )
}

export default Input
