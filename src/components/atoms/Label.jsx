import React from 'react'
import PropTypes from 'prop-types'

export const Label = ({ htmlFor, id }) => {
  return <label htmlFor={htmlFor} id={id}></label>
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  id: PropTypes.string,
}
