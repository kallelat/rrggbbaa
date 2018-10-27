import "babel-polyfill";
import { expect } from "chai";
import { parse } from "../lib/parse";

describe("parse.js", () => {
  it("valid object without alpha", () => {
    const result = parse({
      r: 1,
      g: 2,
      b: 3
    });
    expect(result.r).to.equal(1);
    expect(result.a).to.equal(100);
  });

  it("valid object with alpha", () => {
    const result = parse({
      r: 1,
      g: 2,
      b: 3,
      a: 50
    });
    expect(result.r).to.equal(1);
    expect(result.a).to.equal(50);
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
    const result = parse("foobar");
    expect(result.r).to.equal(0);
    expect(result.a).to.equal(100);
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
