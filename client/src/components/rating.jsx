/* eslint-disable react/prop-types */
const Rating = (props) => {
  const { size } = props
  return (
    <div className="genre-select nes-field is-inline">
      <label htmlFor="inline_field">Rating:</label>
      <i className={'nes-icon is-' + size + ' star is-half'} ></i>
      <i className={'nes-icon is-' + size + ' is-transparent star'} ></i>
      <i className={'nes-icon is-' + size + ' is-transparent star'} ></i>
      <i className={'nes-icon is-' + size + ' is-transparent star'} ></i>
      <i className={'nes-icon is-' + size + ' is-transparent star'} ></i>
    </div>
  )
}

export default Rating
