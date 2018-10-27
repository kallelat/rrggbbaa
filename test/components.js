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
    const mock = function() {
      return {
        [Components.RED]: 7,
        set: function(component, value) {
          this[component] = value;
        },
        get: function(component) {
          return this[component];
        }
      };
    };

    it("set valid value", () => {
      const m = mock();
      alternateComponent(m, Components.RED, 100);
      expect(m[Components.RED]).to.equal(100);
    });

    it("set invalid value", () => {
      const m = mock();
      alternateComponent(m, Components.RED, "foobar");
      expect(m[Components.RED]).to.equal(7);
    });

    it("get value", () => {
      const m = mock();
      const value = alternateComponent(m, Components.RED);
      expect(value).to.equal(7);
    });
  });
});
