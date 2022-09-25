import { Rect, Text } from "react-konva";
import Tweak from "./Tweak";

function Rectangle({ isTweaking, update, data }) {
  const { id, width, height, fill, text } = data;
  const tweakData = {
    id,
    text,
    fill,
  };
  const fontSize = 18;
  return (
    <>
      {isTweaking ? <Tweak update={update} data={tweakData} /> : null}
      <Rect x={0} y={0} width={width} height={height} fill={fill} />
      <Text
        text={text}
        align="center"
        width={width}
        fontSize={fontSize}
        y={height / 2 - fontSize / 2}
      />
    </>
  );
}

export default Rectangle;
