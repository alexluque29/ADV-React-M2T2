import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber, InputColor } from '../molecules'

export const Square = ({
  squareSize,
  setSquareSize,
  squareColor,
  setSquareColor,
}) => {
  return (
    <>
      <svg width={squareSize} height={squareSize}>
        <rect height={squareSize} width={squareSize} fill={squareColor} />
      </svg>

      <InputNumber
        value={squareSize}
        squareSize={squareSize}
        onChangeSize={(event) => setSquareSize(parseInt(event.target.value))}
      />
      <InputColor
        value={squareColor}
        squareColor={squareColor}
        onChangeColor={(event) => setSquareColor(event.target.value)}
      />
    </>
  )
}

Square.propTypes = {
  squareSize: PropTypes.number,
  setSquareSize: PropTypes.func,
  squareColor: PropTypes.string,
  setSquareColor: PropTypes.func,
}
