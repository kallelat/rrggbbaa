import defaultOptions from "./default-options";
import { Components, validateComponent } from "./components";
import { integerToHex, scale100To255 } from "./converters";
import parse from "./parse";

class rrggbbaa {
  constructor(input, opts) {
    this.options = { ...defaultOptions, ...opts };

    // private data and getter/setter
    const data = parse(input);
    this.get = key => data[key];
    this.set = (key, value) => (data[key] = value);
  }

  // changes a single component value
  alter = (component, value) => {
    if (value) {
      if (validateComponent(component, value)) {
        this.set(component, value);
      }
      return this; // chain
    }
    return this.get(component);
  };

  red = value => this.alter(Components.RED, value);
  green = value => this.alter(Components.GREEN, value);
  blue = value => this.alter(Components.BLUE, value);
  alpha = value => this.alter(Components.ALPHA, value);

  inverse = () => {
    this.red(255 - this.red());
    this.green(255 - this.green());
    this.blue(255 - this.blue());
    return this;
  };

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