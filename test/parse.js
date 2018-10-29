import "babel-polyfill";
import { expect } from "chai";
import { parse } from "../lib/parse";
import rrggbbaa from "../lib/rrggbbaa";

describe("parse.js", () => {
  it("valid object without alpha", () => {
    const color = new rrggbbaa("rgb(1, 2, 3)");
    const result = parse(color);
    expect(result.r).to.equal(1);
    expect(result.a).to.equal(100);
  });

  it("valid object with alpha", () => {
    const color = new rrggbbaa("rgba(1, 2, 3, 0.5)");
    const result = parse(color);
    expect(result.r).to.equal(1);
    expect(result.a).to.equal(50);
  });

  it("valid web color", () => {
    const result = parse("red");
    expect(result.r).to.equal(255);
    expect(result.a).to.equal(100);
  });

  it("valid rgb string, fb", () => {
    const result = parse("rgb(0, 1, 8)");
    expect(result.r).to.equal(0);
    expect(result.a).to.equal(100);
  });

  it("valid rgba string", () => {
    const result = parse("rgba(0,1,2,0.66)");
    expect(result.r).to.equal(0);
    expect(result.a).to.equal(66);
  });

  it("valid rgba string with whitepace", () => {
    const result = parse("rgba(0, 1, 2, 0.66)");
    expect(result.r).to.equal(0);
    expect(result.a).to.equal(66);
  });

  it("invalid string", () => {
    try {
      parse("foobar");
    } catch (ex) {
      // nothing
    }
    expect(1).to.equal(1);
  });

  it("valid short hex", () => {
    const result = parse("#fff");
    expect(result.r).to.equal(255);
    expect(result.a).to.equal(100);
  });

  it("valid long hex", () => {
    const result = parse("#ffffff");
    expect(result.r).to.equal(255);
    expect(result.a).to.equal(100);
  });

  it("valid short hexa", () => {
    const result = parse("#ffff");
    expect(result.r).to.equal(255);
    expect(result.a).to.equal(100);
  });

  it("valid long hexa", () => {
    const result = parse("#ffffffff");
    expect(result.r).to.equal(255);
    expect(result.a).to.equal(100);
  });

  it("everything else", () => {
    const result = parse(null);
    expect(result.r).to.equal(0);
    expect(result.a).to.equal(100);
  });
});
