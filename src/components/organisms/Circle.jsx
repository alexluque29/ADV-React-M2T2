import React from 'react'
import PropTypes from 'prop-types'
import { InputNumberGroup, InputColorGroup } from '../molecules'

export const Circle = ({
  circleSize,
  setCircleSize,
  circleColor,
  setCircleColor,
}) => {
  return (
    <>
      <svg width={circleSize} height={circleSize}>
        <circle
          r={circleSize / 2}
          cx={circleSize / 2}
          cy={circleSize / 2}
          fill={circleColor}
        />
      </svg>

      <InputNumberGroup
        id="circleSize"
        name="circleSize"
        value={circleSize}
        circleSize={circleSize}
        onChangeSize={(event) => setCircleSize(parseInt(event.target.value))}
      />
      <InputColorGroup
        id="circleColor"
        name="circleColor"
        value={circleColor}
        circleColor={circleColor}
        onChangeColor={(event) => setCircleColor(event.target.value)}
      />
    </>
  )
}

Circle.propTypes = {
  circleSize: PropTypes.number,
  setCircleSize: PropTypes.func,
  circleColor: PropTypes.string,
  setCircleColor: PropTypes.func,
}
