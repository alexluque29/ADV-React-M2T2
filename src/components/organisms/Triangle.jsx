import React from 'react'
import PropTypes from 'prop-types'
import { InputNumber, InputColor } from '../molecules'

export const Triangle = ({
  triangleSize,
  setTriangleSize,
  triangleColor,
  setTriangleColor,
}) => {
  return (
    <>
      <svg width={triangleSize} height={triangleSize}>
        <polygon
          fill={triangleColor}
          points={`${
            triangleSize / 2
          },0 0,${triangleSize} ${triangleSize},${triangleSize}`}
        />
      </svg>

      <InputNumber
        value={triangleSize}
        triangleSize={triangleSize}
        onChangeSize={(event) => setTriangleSize(parseInt(event.target.value))}
      />
      <InputColor
        value={triangleColor}
        triangleColor={triangleColor}
        onChangeColor={(event) => setTriangleColor(event.target.value)}
      />
    </>
  )
}

Triangle.propTypes = {
  triangleSize: PropTypes.number,
  setTriangleSize: PropTypes.func,
  triangleColor: PropTypes.string,
  setTriangleColor: PropTypes.func,
}
