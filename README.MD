# rrggbbaa

## Installation

```
npm install rrggbbaa --save
```

## Usage

```
const color = new rrggbbaa("rgb(0, 0, 0)");
const colorAsHex = color.red(255).toHex(); // colorAsHex = #ff0000
const colorAsHexa = color.red(255).toHexa(); // colorAsHexa = #ff0000ff
```

**Note: rrggbbaa will always return color codes in lowercase.**

## API

### rrggbbaa(input, [options])

Creates a new instance of rrggbbaa. If an input is given, will try to parse it. Throws an exception if not a valid color.

Valid input values are rgb(a) and hex(a) strings or existing rrggbbaa instance.

### .red([value]), .green([value]), .blue([value]), .alpha([value])

**parameters**: If left empty, return current value for the component. If value given, changes the component value.

**returns**: If value attribgute is not given, returns value of the component. If value given, returns a reference to rrggbbaa instance.

```
    import rrggbbaa from "rrggbbaa";
    const color = new rrggbbaa("#ff0000");
    color.red(); // 255
    color.red(0).toHex(); // #000000
```

### .inverse()

### .toRgb();

### .toHex();

### .toRgba();

### .toHexa();

## Configuration options

none yet

## Utilities

### parse(input)

**parameters**: input, a value to parse to rgba object. red, green and blue between 0-255 and alpha between 0-100.

**returns**: a plain js object with components of RGBA.

```
    import { parse } from "rrggbbaa";
    const color = parse("#FF0000"); // color = { r: 255, g: 0, b: 0, a: 100}
```

### toRgb(input)

**parameters**: a value to parse, for example "rgb(0,0,0)"

**returns**: rgb color value

### toRgba(input)

**parameters**: a value to parse, for example "rgb(0,0,0)"

**returns**: rgba color value

### toHex(input)

**parameters**: a value to parse, for example "rgb(0,0,0)"

**returns**: hex color value

### toHexa(input)

**parameters**: a value to parse, for example "rgb(0,0,0)"

**returns**: hex color value

## changes

Please see [CHANGELOG.md](https://github.com/kallelat/rrggbbaa/blob/master/CHANGELOG.MD)

## license

rrggbbaa is freely distributable under the terms of the [MIT license](https://github.com/kallelat/rrggbbaa/LICENSE).
