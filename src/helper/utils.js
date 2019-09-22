
const colors = [
  '#880e4f',
  '#b71c1c',
  '#37474f',
  '#616161',
  '#9e9e9e',
  '#3e2723',
];

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomColor = (colorId) => {
  if (colorId) {
    return colors[colorId - 1];
  }
  return colors[getRandomInt(colors.length - 1)];
};

export default getRandomColor;
