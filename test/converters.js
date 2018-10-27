import "babel-polyfill";
import { expect } from "chai";
import { hexToInteger, integerToHex } from "../lib/converters";

describe("converters.js", () => {
  it("integer to hex, valid", () => {
    expect(integerToHex(255)).to.equal("ff");
  });

  it("integer to hex, null", () => {
    expect(integerToHex(null)).to.equal(null);
  });

  it("integer to hex, string", () => {
    expect(integerToHex("foobar")).to.equal(null);
  });

  it("integer to hex, object", () => {
    expect(integerToHex({})).to.equal(null);
  });

  it("hex to integer, valid", () => {
    expect(hexToInteger("FF")).to.equal(255);
  });

  it("hex to integer, null", () => {
    expect(hexToInteger(null)).to.equal(null);
  });

  it("hex to integer, object", () => {
    expect(hexToInteger({})).to.equal(null);
  });

  it("hex to integer, number", () => {
    expect(hexToInteger(12)).to.equal(null);
  });
});
