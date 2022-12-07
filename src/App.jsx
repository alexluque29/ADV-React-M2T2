import './App.css'
import { useState, useEffect } from 'react'
import { InputNumber, InputColor, Texto } from './components/atoms'
import { Square, Circle, Triangle } from './components/molecules'

const App = () => {
  const [squareSize, setSquareSize] = useState('80')
  const [squareColor, setSquareColor] = useState('#ff0000')

  const [circleSize, setCircleSize] = useState('90')
  const [circleColor, setCircleColor] = useState('#120097')

  const [triangleSize, setTriangleSize] = useState('')
  const [triangleColor, setTriangleColor] = useState('#57d111')

  useEffect(() => {
    if (squareSize === circleSize && squareSize === triangleSize) {
      alert('Los TAMAÑOS de las tres figuras son IGUALES')
    }
    if (squareColor === circleColor && squareColor === triangleColor) {
      alert('Los COLORES de las tres figuras son IGUALES')
    }
  }, [
    squareSize,
    circleSize,
    triangleSize,
    squareColor,
    circleColor,
    triangleColor,
  ])

  return (
    <>
      <Texto className="tarea">Módulo 2 - Tarea useState y useEffect</Texto>
      <div className="cont-square">
        <Square
          width={`${squareSize}px`}
          height={`${squareSize}px`}
          background={squareColor}
        />
        <label htmlFor="squareSize"></label>
        <InputNumber
          id="squareSize"
          name="squareSize"
          value={squareSize}
          onChange={(event) => setSquareSize(event.target.value)}
        />
        <label htmlFor="squareColor"></label>
        <InputColor
          value={squareColor}
          onChange={(event) => setSquareColor(event.target.value)}
        />
      </div>
      <div className="cont-circle">
        <Circle
          width={`${circleSize}px`}
          height={`${circleSize}px`}
          borderRadius={`${circleSize}px`}
          background={circleColor}
        />
        <label htmlFor="circleSize"></label>
        <InputNumber
          id="circleSize"
          name="circleSize"
          value={circleSize}
          onChange={(event) => setCircleSize(event.target.value)}
        />
        <label htmlFor="circleColor"></label>
        <InputColor
          value={circleColor}
          onChange={(event) => setCircleColor(event.target.value)}
        />
      </div>
      <div className="cont-triangle">
        <Triangle
          width="0px"
          height="0px"
          borderLeft={`${triangleSize / 2}px solid transparent`}
          borderRight={`${triangleSize / 2}px solid transparent`}
          borderBottom={`${triangleSize}px solid ${triangleColor}`}
        />
        <label htmlFor="trianglesize"></label>
        <InputNumber
          id="triangleSize"
          name="triangleSize"
          value={triangleSize}
          onChange={(event) => setTriangleSize(event.target.value)}
        />
        <label htmlFor="triangleColor"></label>
        <InputColor
          value={triangleColor}
          onChange={(event) => setTriangleColor(event.target.value)}
        />
      </div>
    </>
  )
}

export default App
