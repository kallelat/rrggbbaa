import "babel-polyfill";
import { expect } from "chai";
import rrggbbaa from "../lib/rrggbbaa";

describe("rrggbbaa.js", () => {
  it("contruct empty rrggbbaa", () => {
    const color = new rrggbbaa();
    expect(color).to.be.instanceof(rrggbbaa);
  });

  it("contruct empty rrggbbaa", () => {
    const color = new rrggbbaa();
    expect(color).to.be.instanceof(rrggbbaa);
  });
});
