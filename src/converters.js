export const hexToInteger = hex => {
  if (hex && typeof hex === "string") {
    if (hex.length == 1) {
      hex = hex + hex;
    }
    const asBase16 = parseInt(hex, 16);
    const asString = asBase16.toString();
    const asBase10 = parseInt(asString, 10);
    return asBase10;
  }
  return null;
};

export const integerToHex = integer =>
  typeof integer === "number" ? integer.toString(16).toLowerCase() : null;

export const scale255To100 = integer => {
  return Math.ceil((integer / 255) * 100);
};

export default {
  hexToInteger,
  integerToHex,
  scale255To100
};
