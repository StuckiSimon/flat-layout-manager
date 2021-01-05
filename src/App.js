import { useCallback, useEffect, useRef, useState } from 'react'
import createPersistedState from 'use-persisted-state'
import './App.css'
import { Stage, Layer, Line, Group } from 'react-konva'

import objectRef from './objects'
import Door from './Door'
import Rect from './Rect'

const useObjectState = createPersistedState('objectState1')

function App() {
  const [objects, setObjects] = useObjectState(objectRef)
  const [selected, setSelected] = useState(undefined)
  function changeDimensions(index) {
    const newObjects = [...objects]
    const { height, width, ...obj } = newObjects[index]
    newObjects[index] = { ...obj, width: height, height: width }
    setObjects(newObjects)
  }

  const objectRefs = useRef(objects)

  useEffect(() => {
    objectRefs.current = objects
  }, [objects])

  const updateItem = useCallback(
    (data) => {
      const newObjects = [...objectRefs.current]
      newObjects[selected] = {
        ...newObjects[selected],
        ...data,
      }
      setObjects(newObjects)
    },
    [setObjects, selected]
  )

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
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {objects.map((data, i) => (
            <Group
              key={data.id}
              x={data.x}
              y={data.y}
              width={data.width}
              height={data.height}
              fill={data.fill}
              draggable={data.draggable}
              onClick={() => {
                if (selected === i) {
                  if (data.draggable) {
                    changeDimensions(i)
                  }
                } else {
                  setSelected(i)
                }
              }}
              onDragEnd={(e) => onDragEnd(i, e)}
            >
              {data.type !== 'door' ? (
                <Rect
                  data={data}
                  isTweaking={selected === i}
                  update={updateItem}
                />
              ) : (
                <Door data={data} rotation={data.rotation} />
              )}
            </Group>
          ))}
          {[...Array(xSteps)].map((_, i) => (
            <Line
              key={i}
              points={[i * 10, 0, i * 10, window.innerHeight]}
              tension={0.1}
              strokeWidth={0.1}
              stroke="gray"
            />
          ))}
          {[...Array(ySteps)].map((_, i) => (
            <Line
              key={i}
              points={[0, i * 10, window.innerWidth, i * 10]}
              tension={0.1}
              strokeWidth={0.1}
              stroke="gray"
            />
          ))}
        </Layer>
      </Stage>
    </>
  )
}

export default App
