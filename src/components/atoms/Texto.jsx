import React from 'react'
import { dimensions } from '../../styles/dimensions'

export const Texto = ({ children, fontSize = dimensions.xl }) => {
  return <p style={{ fontSize }}>{children}</p>
}
