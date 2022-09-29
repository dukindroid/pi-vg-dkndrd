/* eslint-disable react/prop-types */
const Select = (props) => {
  const { label } = props
  return (
    <div className="nes-field is-inline">
      <label htmlFor="default_select">{label}</label>
      <div className="nes-select is-inline is-dark">
        <select required id="{label}">
          <option value="" disabled selected hidden>Select...</option>
          {props.children}
        </select>
      </div>
      {/* <button type="button" className="nes-btn is-inline">+</button> */}
    </div>
  )
}

export default Select
