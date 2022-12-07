import React from 'react'
import PropTypes from 'prop-types'

export const Triangle = ({
  width,
  height,
  borderLeft,
  borderRight,
  borderBottom,
}) => {
  return (
    <svg
      style={{
        width,
        height,
        borderLeft,
        borderRight,
        borderBottom,
      }}
    />
  )
}

Triangle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
