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

export const integerToHex = integer => {
  if (typeof integer === "number") {
    const hex = integer.toString(16).toLowerCase();
    return hex.length === 1 ? `${hex}${hex}` : hex;
  }
  return null;
};

export const scale255To100 = integer => Math.ceil((integer / 255) * 100);
export const scale100To255 = integer => Math.ceil((integer / 100) * 255);

export default {
  hexToInteger,
  integerToHex,
  scale255To100
};
