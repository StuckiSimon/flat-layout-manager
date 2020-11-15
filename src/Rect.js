import { Rect, Text } from 'react-konva'
import Tweak from './Tweak'

function Rectangle({ isTweaking, update, data }) {
  const { width, height, fill, text } = data
  return (
    <>
      {isTweaking ? <Tweak update={update} data={data} /> : null}
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
