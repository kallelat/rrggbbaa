# rrggbbaa

## Installation

```
npm install rrggbbaa --save
```

## Usage

```
const color = rrggbbaa("rgb(0, 0, 0));
const colorAsHex = color.red(255).toHex(); // colorAsHex = #ff0000
const colorAsHexa = color.red(255).toHexa(); // colorAsHexa = #ff0000ff
```

**Note: rrggbbaa will always return color codes in lowercase.**

## API

### rrggbbaa(input, options)

### .red(value)

### .green(value)

### .blue(value);

### .alpha(value)

### .toRgb();

### .toHex();

### .toRgba();

### .toHexa();

## Configuration options

none yet

## Utilities

### parse

**parameters**: input, a value to parse to rgba object. red, green and blue between 0-255 and alpha between 0-100.

**returns**: a plain js object with components of RGBA.

```
    import { parse } from "rrggbbaa";
    const color = parse("#FF0000"); // color = { r: 255, g: 0, b: 0, a: 100}
```

## changes

Please see [CHANGELOG.md](https://github.com/kallelat/rrggbbaa/blob/master/CHANGELOG.MD)

## license

rrggbbaa is freely distributable under the terms of the [MIT license](https://github.com/kallelat/rrggbbaa/LICENSE).
