// TODO: make use of regexp builder
export const RegExpForRGB = /[rgb|rgba]\((\d*),\s?(\d*),\s?(\d*)[,]?\s?([\d{.]*)\)/i;
export const RegExpForHEX = /^#([a-fA-F0-9]{1})([a-fA-F0-9]{1})([a-fA-F0-9]{1})([a-fA-F0-9]{1})?$|^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/i;

export default {
  RegExpForRGB,
  RegExpForHEX
};
