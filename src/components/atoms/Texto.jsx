import React from 'react'
import { dimensions } from '../../styles/dimensions'

// Llamalo Text, no Texto.
// Deberías de tener un componente Label
export const Texto = ({ children, fontSize = dimensions.xl }) => {
  return <p style={{ fontSize }}>{children}</p>
}
