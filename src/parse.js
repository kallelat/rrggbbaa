import {
  RegExpForRGB,
  RegExpForRGBA,
  RegExpForHEX,
  RegExpForHEXShort,
  RegExpForHEXA,
  RegExpForHEXAShort
} from "./regexp";
import rrggbbaa from "./rrggbbaa";
import { hexToInteger, scale255To100 } from "./converters";

const parse = input => {
  if (typeof input === "object" && input instanceof rrggbbaa) {
    return {
      r: input.red(),
      g: input.green(),
      b: input.blue(),
      a: input.alpha()
    };
  } else if (typeof input === "string") {
    // test for rgb
    const rgbMatch = input.match(RegExpForRGB);
    const rgbaMatch = input.match(RegExpForRGBA);
    if (rgbMatch) {
      return {
        r: parseInt(rgbMatch[2], 10),
        g: parseInt(rgbMatch[3], 10),
        b: parseInt(rgbMatch[4], 10),
        a: 100
      };
    } else if (rgbaMatch) {
      return {
        r: parseInt(rgbaMatch[2], 10),
        g: parseInt(rgbaMatch[3], 10),
        b: parseInt(rgbaMatch[4], 10),
        a: parseFloat(rgbaMatch[5]) * 100
      };
    }

    // test for hex(a) - both #FFF and #FFFFFF syntaxes
    const hexMatch = input.length === 7 && input.match(RegExpForHEX);
    const hexShortMatch = input.length === 4 && input.match(RegExpForHEXShort);
    const hexaMatch = input.length === 9 && input.match(RegExpForHEXA);
    const hexaShortMatch =
      input.length === 5 && input.match(RegExpForHEXAShort);

    if (hexMatch) {
      return {
        r: hexToInteger(hexMatch[2]),
        g: hexToInteger(hexMatch[3]),
        b: hexToInteger(hexMatch[4]),
        a: 100
      };
    } else if (hexaMatch) {
      return {
        r: hexToInteger(hexaMatch[2]),
        g: hexToInteger(hexaMatch[3]),
        b: hexToInteger(hexaMatch[4]),
        a: scale255To100(hexToInteger(hexaMatch[5]))
      };
    } else if (hexShortMatch) {
      return {
        r: hexToInteger(hexShortMatch[2]),
        g: hexToInteger(hexShortMatch[3]),
        b: hexToInteger(hexShortMatch[4]),
        a: 100
      };
    } else if (hexaShortMatch) {
      return {
        r: hexToInteger(hexaShortMatch[2]),
        g: hexToInteger(hexaShortMatch[3]),
        b: hexToInteger(hexaShortMatch[4]),
        a: scale255To100(hexToInteger(hexaShortMatch[5]))
      };
    }
  }

  return {
    r: 0,
    g: 0,
    b: 0,
    a: 100
  };
};

export default parse;
export { parse };
