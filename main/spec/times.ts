import "../src/common";

import { expect } from "chai";

import times from "../src/times";

describe("describe text", () => {
  context("context text", () => {
    it("it text", () => {
      // expect(times(2, 3)).toBe(6); // Jest
      expect(times(2, 3)).to.eql(6); // Chai
    });
  });
});
