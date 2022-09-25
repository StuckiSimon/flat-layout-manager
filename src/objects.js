function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function generateObject({
  x,
  y,
  fill,
  width,
  height,
  text = "",
  draggable = true,
  type = "rect",
  rotation = 0,
}) {
  return {
    id: generateId(),
    type,
    x,
    y,
    fill,
    width,
    height,
    draggable,
    text,
    rotation,
  };
}

function generateRoomObject({ x, y, fill, width, height, text }) {
  return generateObject({ x, y, fill, width, height, text, draggable: false });
}

const objects = [
  generateRoomObject({
    x: 90,
    y: 120,
    fill: "#C2EFEB",
    text: "Zimmer",
    width: 460,
    height: 300,
  }),
  generateRoomObject({
    x: 90,
    y: 430,
    fill: "#FFBF81",
    text: "Stube",
    width: 340,
    height: 480,
  }),
  generateObject({
    x: 1320,
    y: 370,
    fill: "#b0b0b0",
    text: "Bed",
    width: 150,
    height: 210,
  }),
  generateObject({
    x: 1060,
    y: 470,
    fill: "#c0c0c0",
    text: "Closet",
    width: 66,
    height: 200,
  }),
  generateObject({
    x: 440,
    y: 120,
    fill: "#d0d0d0",
    text: "Desk",
    width: 150,
    height: 75,
  }),
  generateObject({
    x: 1420,
    y: 640,
    fill: "#e0e0e0",
    width: 80,
    height: 48,
    text: "Malm",
  }),
  generateObject({
    x: 1340,
    y: 640,
    fill: "#e0e0e0",
    width: 80,
    height: 48,
    text: "Malm",
  }),
  generateObject({
    x: 90,
    y: 120,
    fill: "#e0e0e0",
    text: "Friheten L",
    width: 230,
    height: 90,
  }),
  generateObject({
    x: 90,
    y: 210,
    fill: "#e0e0e0",
    text: "Friheten R",
    width: 85,
    height: 60,
  }),
  generateObject({
    x: 90,
    y: 390,
    fill: "#e0e0e0",
    text: "TV",
    width: 80,
    height: 48,
  }),
  generateObject({
    x: 310,
    y: 480,
    fill: "#e0e0e0",
    text: "Table",
    width: 120,
    height: 120,
  }),
  generateObject({
    x: 300,
    y: 660,
    fill: "#e0e0e0",
    text: "Kallax",
    width: 147,
    height: 40,
  }),
  generateObject({
    x: 1280,
    y: 370,
    fill: "#e0e0e0",
    text: "BT",
    width: 40,
    height: 48,
  }),
  /*generateObject({
    x: 1470,
    y: 370,
    fill: '#e0e0e0',
    text: 'BT',
    width: 40,
    height: 48,
  }),*/
  //generateObject({ type: 'door', x: 750, y: 570, rotation: 180 }),
  //generateObject({ type: 'door', x: 240, y: 790, rotation: -90 }),
];

export default objects;
