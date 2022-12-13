import React from 'react'
import PropTypes from 'prop-types'
import { Label, InputNumber } from '../atoms'

export const InputNumberGroup = ({ id, name, value, onChangeSize }) => {
  return (
    <>
      <Label htmlFor={id} />
      <InputNumber
        id={id}
        name={name}
        value={value}
        onChangeSize={onChangeSize}
      />
    </>
  )
}

InputNumberGroup.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  onChangeSize: PropTypes.func,
}
