import sum from "@main/sum";

describe("describe text", () => {
  context("context text", () => {
    it("it text", () => {
      expect(sum(1, 2)).to.eql(3);
    });
  });
});
