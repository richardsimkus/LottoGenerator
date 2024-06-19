export default (number) => {
  let color;
  if (number <= 10) {
    color = "lightgray";
  } else if (number <= 19) {
    color = "#49b2ef";
  } else if (number <= 29) {
    color = "#ce39ff";
  } else if (number <= 39) {
    color = "#0ecb0e";
  } else if (number <= 49) {
    color = "yellow";
  }
  return color;
};
