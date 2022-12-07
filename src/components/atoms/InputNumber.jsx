import React from 'react'
import PropTypes from 'prop-types'

export const InputNumber = ({ id, name, value, onChange }) => {
  return (
    <input
      type="number"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={{ width: 40 }}
    />
  )
}

InputNumber.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
}
