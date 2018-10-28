import rrggbbaa from "./rrggbbaa";

const toRgb = input => {
  const color = new rrggbbaa(input);
  return color.toRgb();
};

const toRgba = input => {
  const color = new rrggbbaa(input);
  return color.toRgba();
};

const toHex = input => {
  const color = new rrggbbaa(input);
  return color.toHex();
};

const toHexa = input => {
  const color = new rrggbbaa(input);
  return color.toHexa();
};

export default { toRgb, toRgba, toHex, toHexa };
export { toRgb, toRgba, toHex, toHexa };
