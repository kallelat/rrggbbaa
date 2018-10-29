import { RegExpForRGB, RegExpForHEX } from "./regexp";
import rrggbbaa from "./rrggbbaa";
import { hexToInteger, scale255To100 } from "./converters";
import WebColors from "./webcolors";

const parse = input => {
  // if not value, default to black
  if (!input) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 100
    };
  }

  // try to identify
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
    if (rgbMatch) {
      return {
        r: parseInt(rgbMatch[1], 10),
        g: parseInt(rgbMatch[2], 10),
        b: parseInt(rgbMatch[3], 10),
        a: rgbMatch[4] ? parseFloat(rgbMatch[4]) * 100 : 100
      };
    }

    // test for hex(a) - both #FFF and #FFFFFF syntaxes
    const hexMatch = input.match(RegExpForHEX);
    if (hexMatch && (hexMatch[1] || hexMatch[5])) {
      if (hexMatch[1]) {
        // short syntax
        return {
          r: hexToInteger(hexMatch[1]),
          g: hexToInteger(hexMatch[2]),
          b: hexToInteger(hexMatch[3]),
          a: hexMatch[4] ? scale255To100(hexToInteger(hexMatch[4])) : 100
        };
      } else {
        // long syntax
        return {
          r: hexToInteger(hexMatch[5]),
          g: hexToInteger(hexMatch[6]),
          b: hexToInteger(hexMatch[7]),
          a: hexMatch[8] ? scale255To100(hexToInteger(hexMatch[8])) : 100
        };
      }
    }

    // test web colors
    for (let i = 0; i < WebColors.length; i += 1) {
      if (WebColors[i].name.toLowerCase() === input.toLowerCase()) {
        return parse(`#${WebColors[i].hex}`);
      }
    }
  }

  // nothing matched, throw an error
  throw new Error("input could not be parsed as a color");
};

export default parse;
export { parse };
