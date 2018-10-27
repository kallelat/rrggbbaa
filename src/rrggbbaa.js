import defaultOptions from "./default-options";
import {
  Components,
  validateRange,
  validateComponent,
  alternateComponent
} from "./components";
import parse from "./parse";

class rrggbbaa {
  constructor(input, opts) {
    this.options = { ...defaultOptions, ...opts };
    this.data = parse(input);
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    return this.data[key];
  }

  red = value => alternateComponent(obj, Components.RED, value);
  green = value => alternateComponent(obj, Components.GREEN, value);
  blue = value => alternateComponent(obj, Components.BLUE, value);
  alpha = value => alternateComponent(obj, Components.ALPHA, value);
}

export default rrggbbaa;
