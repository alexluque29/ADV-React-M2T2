import React from 'react'
import PropTypes from 'prop-types'
import { Label, InputColor } from '../atoms'

export const InputColorGroup = ({ id, name, value, onChangeColor }) => {
  return (
    <>
      <Label htmlFor={id} />
      <InputColor
        id={id}
        name={name}
        value={value}
        onChangeColor={onChangeColor}
      />
    </>
  )
}

InputColorGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChangeSize: PropTypes.func,
}
