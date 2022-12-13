import React from 'react'
import { dimensions, colors } from '../../styles'

export const Text = ({
  children,
  fontSize = dimensions.xl,
  color = colors.font.snow,
}) => {
  return <p style={{ fontSize, color }}>{children}</p>
}
