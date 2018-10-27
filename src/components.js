export const Components = Object.freeze({
  RED: "r",
  GREEN: "g",
  BLUE: "b",
  ALPHA: "a"
});

export const validateRange = (value, min, max) => {
  const valueAsInteger = parseInt(value, 10);
  return valueAsInteger ? valueAsInteger >= min && value <= max : false;
};

export const validateComponent = (component, value) => {
  switch (component) {
    case Components.RED:
    case Components.GREEN:
    case Components.BLUE:
      return validateRange(value, 0, 255);
    case Components.ALPHA:
      return validateRange(value, 0, 100);
  }
};

export const alternateComponent = (obj, component, value) => {
  if (value) {
    if (validateComponent(component, value)) {
      obj.set(component, value);
      return this;
    }
  }
  return obj.get(component);
};

export default Components;
