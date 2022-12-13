import './App.css'
import { useState, useEffect } from 'react'
import { Text } from './components/atoms'
import { Square, Circle, Triangle } from './components/organisms'

const App = () => {
  const [squareSize, setSquareSize] = useState(90)
  const [squareColor, setSquareColor] = useState('#c8590a')
  const [circleSize, setCircleSize] = useState(80)
  const [circleColor, setCircleColor] = useState('#3020aa')
  const [triangleSize, setTriangleSize] = useState(70)
  const [triangleColor, setTriangleColor] = useState('#428a18')

  useEffect(() => {
    if (squareSize === circleSize && squareSize === triangleSize) {
      alert('Los TAMAÑOS de las tres figuras son IGUALES')
    }
  }, [squareSize, circleSize, triangleSize])

  useEffect(() => {
    if (squareColor === circleColor && squareColor === triangleColor) {
      alert('Los COLORES de las tres figuras son IGUALES')
    }
  }, [squareColor, circleColor, triangleColor])

  return (
    <>
      <Text className="tarea">Módulo 2 - Tarea useState y useEffect</Text>
      <div className="cont-main">
        <div className="cont-square">
          <Square
            squareSize={squareSize}
            setSquareSize={setSquareSize}
            squareColor={squareColor}
            setSquareColor={setSquareColor}
          />
        </div>
        <div className="cont-circle">
          <Circle
            circleSize={circleSize}
            setCircleSize={setCircleSize}
            circleColor={circleColor}
            setCircleColor={setCircleColor}
            borderRadius={circleSize}
          />
        </div>
        <div className="cont-triangle">
          <Triangle
            triangleSize={triangleSize}
            setTriangleSize={setTriangleSize}
            triangleColor={triangleColor}
            setTriangleColor={setTriangleColor}
          />
        </div>
      </div>
    </>
  )
}

export default App
