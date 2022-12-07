import React from 'react'
import PropTypes from 'prop-types'

export const Circle = ({ width, height, background, borderRadius }) => {
  return (
    <svg
      style={{
        width,
        height,
        background,
        borderRadius,
      }}
    />
  )
}

Circle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
