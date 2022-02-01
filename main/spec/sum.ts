import sum from "@main/sum";

describe("describe text", () => {
  context("context text", () => {
    it("it text", () => {
      // expect(sum(1, 2)).toBe(3); // Jest
      expect(sum(1, 2)).to.eql(3); // Chai
      // @ts-expect-error
      expect(global.locale1).to.eql("locale1");
    });
  });
});

// beforeEachよりbeforeAllの方が正しそう？ https://jestjs.io/ja/docs/setup-teardown#%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97

// beforeAll(() => console.log("1 - beforeAll"));
// afterAll(() => console.log("1 - afterAll"));

// beforeEach(() => console.log("1 - beforeEach"));
// afterEach(() => console.log("1 - afterEach"));

// test("", () => console.log("1 - test"));

// describe("Scoped / Nested block", () => {
//   beforeAll(() => console.log("2 - beforeAll"));
//   afterAll(() => console.log("2 - afterAll"));

//   beforeEach(() => console.log("2 - beforeEach"));
//   afterEach(() => console.log("2 - afterEach"));

//   test("", () => console.log("2 - test"));
// });

// 1 - beforeAll

// 1 - beforeEach
// 1 -   #test
// 1 - afterEach

//   2 - beforeAll
// 1 - beforeEach
//   2 - beforeEach
//   2 -   #test
//   2 - afterEach
// 1 - afterEach
//   2 - afterAll

// 1 - afterAll
