import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [boxStyle, setBoxStyle] = useState({
    width: 80,
    background: "#ff0000",
  });

  const [circleShape, setCircleShape] = useState({
    width: 90,
    background: "#11229C",
  });

  const [triangleShape, setTriangleShape] = useState({
    width: 0,
    background: "#57d111",
  });

  useEffect(() => {
    if (currSqSize == currCiSize && currSqSize == currTrSize) {
      alert("Los TAMAÑOS de las tres figuras son IGUALES");
    }
    if (currSqColor == currCiColor && currSqColor == currTrColor) {
      alert("Los COLORES de las tres figuras son IGUALES");
    }
  }, [boxStyle, circleShape, triangleShape]);

  let currSqSize = boxStyle.width;
  let currSqColor = boxStyle.background;
  let currCiSize = circleShape.width;
  let currCiColor = circleShape.background;
  let currTrSize = triangleShape.width;
  let currTrColor = triangleShape.background;

  return (
    <>
      <h2 className="tarea">Módulo 2 - Tarea useState y useEffect</h2>
      <div className="cont-square">
        <div
          style={{
            width: `${boxStyle.width}px`,
            height: `${boxStyle.width}px`,
            background: boxStyle.background,
          }}
        ></div>
        <input
          type="number"
          value={boxStyle.width}
          style={{ width: 40 }}
          onChange={(event) =>
            setBoxStyle({ ...boxStyle, width: event.target.value })
          }
        />
        <input
          type="color"
          value={boxStyle.background}
          onChange={(event) =>
            setBoxStyle({ ...boxStyle, background: event.target.value })
          }
        />
      </div>
      <div className="cont-circle">
        <div
          style={{
            width: `${circleShape.width}px`,
            height: `${circleShape.width}px`,
            borderRadius: `${circleShape.width}px`,
            background: circleShape.background,
          }}
        ></div>
        <input
          type="number"
          value={circleShape.width}
          style={{ width: 40 }}
          onChange={(event) =>
            setCircleShape({ ...circleShape, width: event.target.value })
          }
        />
        <input
          type="color"
          value={circleShape.background}
          onChange={(event) =>
            setCircleShape({ ...circleShape, background: event.target.value })
          }
        />
      </div>
      <div className="cont-triangle">
        <div
          style={{
            width: `${triangleShape.width}px`,
            height: `${triangleShape.width}px`,
            borderLeft: `${50}px solid transparent`,
            borderRight: `${50}px solid transparent`,
            borderBottom: `${100}px solid ${triangleShape.background}`,
          }}
        ></div>
        <input
          type="number"
          style={{ width: 40 }}
          value={triangleShape.width}
          onChange={(event) =>
            setTriangleShape({ ...triangleShape, width: event.target.value })
          }
        />
        <input
          type="color"
          value={triangleShape.background}
          onChange={(event) =>
            setTriangleShape({
              ...triangleShape,
              background: event.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default App;
