// @ts-expect-error
global.HTMLElement = () => {};
// @ts-expect-error
global.HTMLSelectElement = () => {};

// @ts-expect-error
global.navigator = {
  userAgent: "node.js",
};
