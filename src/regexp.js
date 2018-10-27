export const RegExpForRGB = /(rgb)\((\d*),\s?(\d*),\s?(\d*)\)/i;
export const RegExpForRGBA = /(rgba)\((\d*),\s?(\d*),\s?(\d*),?\s?([\d\.]*)?\)/i;
export const RegExpForHEX = /(#)([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})/i;
export const RegExpForHEXShort = /(#)([a-zA-Z0-9]{1})([a-zA-Z0-9]{1})([a-zA-Z0-9]{1})/i;
export const RegExpForHEXA = /(#)([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})/i;
export const RegExpForHEXAShort = /(#)([a-zA-Z0-9]{1})([a-zA-Z0-9]{1})([a-zA-Z0-9]{1})([a-zA-Z0-9]{1})/i;

export default {
  RegExpForRGB,
  RegExpForRGBA,
  RegExpForHEXA
};
