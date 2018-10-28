import defaultOptions from "./default-options";
import { Components, alternateComponent } from "./components";
import { integerToHex, scale100To255 } from "./converters";
import parse from "./parse";

class rrggbbaa {
  constructor(input, opts) {
    this.options = { ...defaultOptions, ...opts };
    this.data = parse(input);
  }

  set(key, value) {
    this.data[key] = value;
  }

  get = key => this.data[key];

  // TODO: add shorthand versions
  red = value => alternateComponent(this, Components.RED, value);
  green = value => alternateComponent(this, Components.GREEN, value);
  blue = value => alternateComponent(this, Components.BLUE, value);
  alpha = value => alternateComponent(this, Components.ALPHA, value);

  toRgb = () => {
    const red = this.red();
    const green = this.green();
    const blue = this.blue();
    return `rgb(${red},${green},${blue})`;
  };

  toRgba = () => {
    const red = this.red();
    const green = this.green();
    const blue = this.blue();
    const alpha = this.alpha() / 100;
    return `rgba(${red},${green},${blue},${alpha})`;
  };

  toHex = () => {
    const red = integerToHex(this.red());
    const green = integerToHex(this.green());
    const blue = integerToHex(this.blue());

    return `#${red}${green}${blue}`;
  };

  toHexa = () => {
    const red = integerToHex(this.red());
    const green = integerToHex(this.green());
    const blue = integerToHex(this.blue());
    const alpha = integerToHex(scale100To255(this.alpha()));

    return `#${red}${green}${blue}${alpha}`;
  };

  toString = () => (this.alpha() !== 100 ? this.toRgba() : this.toRgb());
}

export default rrggbbaa;

// TODO: add utilies toRgba(value) and toHexa(value) that use internally rrggbbaa
// TODO: add support for shorthand syntax
