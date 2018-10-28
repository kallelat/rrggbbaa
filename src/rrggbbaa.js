import defaultOptions from "./default-options";
import { Components, alternateComponent } from "./components";
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
    return `rgb(${this.get(Components.RED)},${this.get(
      Components.GREEN
    )},${this.get(Components.BLUE)})`;
  };

  toRgba = () => {
    return `rgb(${this.get(Components.RED)},${this.get(
      Components.GREEN
    )},${this.get(Components.BLUE)},${this.get(Components.ALPHA) / 100})`;
  };
}

export default rrggbbaa;

// TODO: add utilies toRgba(value) and toHexa(value) that use internally rrggbbaa
