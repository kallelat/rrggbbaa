import "babel-polyfill";
import { expect } from "chai";
import { toRgb, toRgba, toHex, toHexa } from "../lib/utilities";

describe("utilities.js", () => {
  it("toRgb", () => {
    const rgb = toRgb("#FF0000");
    expect(rgb).to.equal("rgb(255,0,0)");
  });

  it("toRgba", () => {
    const rgba = toRgba("#FF0000");
    expect(rgba).to.equal("rgba(255,0,0,1)");
  });

  it("toHex", () => {
    const hex = toHex("rgb(255,0,0)");
    expect(hex).to.equal("#ff0000");
  });

  it("toHexa", () => {
    const hexa = toHexa("rgba(255,0,0,1)");
    expect(hexa).to.equal("#ff0000ff");
  });
});
