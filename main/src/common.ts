import { describe } from "@jest/globals";

// @ts-expect-error
global.context = describe;

console.log("common");
