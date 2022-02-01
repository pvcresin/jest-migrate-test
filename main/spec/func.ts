import func, {
  // @ts-expect-error
  __Rewire__,
  // @ts-expect-error
  __ResetDependency__,
} from "@main/func";

describe("describe text", () => {
  context("context text", () => {
    beforeEach(() => {
      __Rewire__("imported", () => "rewire");
    });

    afterEach(() => {
      __ResetDependency__("imported");
    });

    it("it text", () => {
      // func, importedにならない
      expect(func()).to.eql("func, rewire");
    });
  });
});
