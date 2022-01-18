import "./common";

import { expect } from "chai";

import sum from "./sum";

describe("describe text", () => {
  context("context text", () => {
    it("it text", () => {
      // expect(sum(1, 2)).toBe(3); // Jest
      expect(sum(1, 2)).to.eql(3); // Chai
    });
  });
});
