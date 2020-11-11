import { Line, Group, Arc } from 'react-konva'

function Door({ rotation }) {
  return (
    <Group rotation={rotation}>
      <Line points={[0, 0, 0, 90, 90, 90]} tension={0} stroke="gray" />
      <Group rotation={-90} y={90}>
        <Arc angle={90} stroke="gray" innerRadius={90} outerRadius={90} />
      </Group>
    </Group>
  )
}

export default Door
