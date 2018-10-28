import "babel-polyfill";
import { expect } from "chai";
import {
  Components,
  validateRange,
  validateComponent,
  alternateComponent
} from "../lib/components";
import rrggbbaa from "../lib/rrggbbaa";

describe("components.js", () => {
  describe("validateRange()", () => {
    it("valid number", () => {
      expect(validateRange(5, 0, 10)).to.be.true;
    });

    it("number too low", () => {
      expect(validateRange(-2, 0, 10)).to.be.false;
    });

    it("number too high", () => {
      expect(validateRange(12, 0, 10)).to.be.false;
    });

    it("non-number", () => {
      expect(validateRange("foobar", 0, 10)).to.be.false;
    });
  });

  describe("validateComponent()", () => {
    it("rgb valid value", () => {
      expect(validateComponent(Components.RED, 100)).to.be.true;
    });

    it("rgb invalid value", () => {
      expect(validateComponent(Components.RED, 300)).to.be.false;
    });

    it("alpha valid value", () => {
      expect(validateComponent(Components.ALPHA, 50)).to.be.true;
    });

    it("alpha invalid value", () => {
      expect(validateComponent(Components.ALPHA, -50)).to.be.false;
    });
  });

  describe("alternateComponent()", () => {
    it("set valid value", () => {
      const mock = new rrggbbaa();
      alternateComponent(mock, Components.RED, 100);
      expect(mock.get(Components.RED)).to.equal(100);
    });

    it("set invalid value", () => {
      const mock = new rrggbbaa();
      alternateComponent(mock, Components.RED, "foobar");
      expect(mock.get(Components.RED)).to.equal(0); // returns original value
    });

    it("get value", () => {
      const mock = new rrggbbaa();
      const value = alternateComponent(mock, Components.RED);
      expect(value).to.equal(0);
    });
  });
});
