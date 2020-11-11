import createPersistedState from 'use-persisted-state'
import './App.css'
import { Stage, Layer, Rect, Line } from 'react-konva'

const useObjectState = createPersistedState('objectState1')

function App() {
  const [objects, setObjects] = useObjectState([
    { x: 33, y: 336, fill: '#f0f0f0', width: 300, height: 470 },
    { x: 340, y: 680, width: 230, height: 125, fill: '#f0f0fa' },
    { x: 340, y: 338, fill: '#f0faf0', width: 230, height: 330 },
    { x: 570, y: 485, fill: '#faf0f0', width: 420, height: 320 },
    { x: 990, y: 335, width: 360, height: 470, fill: '#fff0f0' },
    { x: 604, y: 319, fill: '#f0fff0', width: 370, height: 160 },
    { x: 103, y: 338, fill: '#b0b0b0', width: 150, height: 210 },
    { x: 35, y: 603, fill: '#c0c0c0', width: 66, height: 200 },
    { x: 992, y: 337, fill: '#d0d0d0', width: 75, height: 150 },
    { x: 282, y: 596, fill: '#e0e0e0', width: 48, height: 80 },
  ])
  function changeDimensions(index) {
    const newObjects = [...objects]
    const { height, width, ...obj } = newObjects[index]
    newObjects[index] = { ...obj, width: height, height: width }
    setObjects(newObjects)
  }

  function onDragEnd(index, e) {
    const { x, y } = e.target.attrs
    const newObjects = [...objects]
    newObjects[index] = {
      ...newObjects[index],
      x: Math.round(x / 10) * 10,
      y: Math.round(y / 10) * 10,
    }
    setObjects(newObjects)
  }
  const xSteps = Math.round(window.innerWidth / 10)
  const ySteps = Math.round(window.innerHeight / 10)
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {objects.map(({ x, y, width, height, fill }, i) => (
          <Rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            draggable
            onClick={() => changeDimensions(i)}
            onDragEnd={(e) => onDragEnd(i, e)}
          />
        ))}
        {[...Array(xSteps)].map((_, i) => (
          <Line
            points={[i * 10, 0, i * 10, window.innerHeight]}
            tension={0.1}
            strokeWidth="0.1"
            stroke="gray"
          />
        ))}
        {[...Array(ySteps)].map((_, i) => (
          <Line
            points={[0, i * 10, window.innerWidth, i * 10]}
            tension={0.1}
            strokeWidth="0.1"
            stroke="gray"
          />
        ))}
      </Layer>
    </Stage>
  )
}

export default App
