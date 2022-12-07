import React from 'react'
import PropTypes from 'prop-types'

export const Square = ({ width, height, background }) => {
  return (
    <svg
      style={{
        width,
        height,
        background,
      }}
    />
  )
}

Square.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
