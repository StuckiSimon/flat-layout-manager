import createPersistedState from 'use-persisted-state'
import './App.css'
import { Stage, Layer, Line, Text, Group, Arc } from 'react-konva'
import objectRef from './objects'
import Door from './Door'
import Rect from './Rect'

const useObjectState = createPersistedState('objectState1')

function App() {
  const [objects, setObjects] = useObjectState(objectRef)
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
        {objects.map(
          (
            {
              type = 'rect',
              x,
              y,
              width,
              height,
              fill,
              draggable = true,
              text = '',
              rotation = 0,
            },
            i
          ) => (
            <Group
              x={x}
              y={y}
              width={width}
              height={height}
              fill={fill}
              draggable={draggable}
              onClick={draggable ? () => changeDimensions(i) : undefined}
              onDragEnd={(e) => onDragEnd(i, e)}
            >
              {type === 'rect' ? (
                <Rect width={width} height={height} fill={fill} text={text} />
              ) : (
                <Door rotation={rotation} />
              )}
            </Group>
          )
        )}
        {[...Array(xSteps)].map((_, i) => (
          <Line
            points={[i * 10, 0, i * 10, window.innerHeight]}
            tension={0.1}
            strokeWidth={0.1}
            stroke="gray"
          />
        ))}
        {[...Array(ySteps)].map((_, i) => (
          <Line
            points={[0, i * 10, window.innerWidth, i * 10]}
            tension={0.1}
            strokeWidth={0.1}
            stroke="gray"
          />
        ))}
      </Layer>
    </Stage>
  )
}

export default App
