import React from 'react'
import PropTypes from 'prop-types'
import { InputNumberGroup, InputColorGroup } from '../molecules'

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

      <InputNumberGroup
        id="squareSize"
        name="squareSize"
        value={squareSize}
        squareSize={squareSize}
        onChangeSize={(event) => setSquareSize(parseInt(event.target.value))}
      />
      <InputColorGroup
        id="squareColor"
        name="squareColor"
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
