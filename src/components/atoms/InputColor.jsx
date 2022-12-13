import React from 'react'
import PropTypes from 'prop-types'

export const InputColor = ({ id, name, value, onChangeColor }) => {
  return (
    <input
      type="color"
      id={id}
      name={name}
      value={value}
      onChange={onChangeColor}
      style={{ width: 40 }}
    />
  )
}

InputColor.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChangeColor: PropTypes.func,
}
