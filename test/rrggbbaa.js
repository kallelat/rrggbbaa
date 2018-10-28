import "babel-polyfill";
import { expect } from "chai";
import rrggbbaa from "../lib/rrggbbaa";

describe("rrggbbaa.js", () => {
  it("contruct empty rrggbbaa", () => {
    const color = new rrggbbaa();
    expect(color).to.be.instanceof(rrggbbaa);
  });

  it("contruct empty rrggbbaa, export to rgb correctly", () => {
    const color = new rrggbbaa();
    expect(color).to.be.instanceof(rrggbbaa);
    expect(color.toRgb()).to.equal("rgb(0,0,0)");
  });

  it("contruct empty rrggbbaa, export to rgba correctly", () => {
    const color = new rrggbbaa();
    expect(color).to.be.instanceof(rrggbbaa);
    expect(color.toRgba()).to.equal("rgba(0,0,0,1)");
  });

  it("set and get red component", () => {
    const color = new rrggbbaa();
    color.red(172);
    expect(color.red()).to.equal(172);
  });

  it("set and get blue component", () => {
    const color = new rrggbbaa();
    color.blue(172);
    expect(color.blue()).to.equal(172);
  });

  it("set and get green component", () => {
    const color = new rrggbbaa();
    color.green(172);
    expect(color.green()).to.equal(172);
  });

  it("set and get alpha component", () => {
    const color = new rrggbbaa();
    color.alpha(50);
    expect(color.alpha()).to.equal(50);
  });

  it("parse rgb and output hex", () => {
    const color = new rrggbbaa("rgb(255, 0,0)");
    expect(color.toHex()).to.equal("#ff0000");
  });

  it("parse rgb and output hexa", () => {
    const color = new rrggbbaa("rgba(255,0,0,1)");
    expect(color.toHexa()).to.equal("#ff0000ff");
  });

  it("toString with rgb value", () => {
    const color = new rrggbbaa("rgb(255, 0, 0)");
    expect(color.toString()).to.equal("rgb(255,0,0)");
  });

  it("toString with rgba value", () => {
    const color = new rrggbbaa("rgba(255, 0, 0, 0.25)");
    expect(color.toString()).to.equal("rgba(255,0,0,0.25)");
  });
});
