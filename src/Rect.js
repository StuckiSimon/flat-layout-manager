import { Rect, Text } from 'react-konva'

function Rectangle({ width, height, fill, text }) {
  return (
    <>
      <Rect x={0} y={0} width={width} height={height} fill={fill} />
      <Text
        text={text}
        align="center"
        width={width}
        fontSize={18}
        y={height / 2 - 9}
      />
    </>
  )
}

export default Rectangle
