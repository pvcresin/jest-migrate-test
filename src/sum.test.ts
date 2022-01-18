import sum from "./sum";

// @ts-expect-error
global.context = describe;

// console.log(global.document.body);

describe("describe text", () => {
  context("context text", () => {
    it("it text", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
