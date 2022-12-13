import React from 'react'
import PropTypes from 'prop-types'

export const InputNumber = ({ id, name, value, onChangeSize }) => {
  return (
    <input
      type="number"
      id={id}
      name={name}
      value={value}
      onChange={onChangeSize}
      style={{ width: 40 }}
    />
  )
}

InputNumber.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  onChangeSize: PropTypes.func,
}
