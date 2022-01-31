import { expect } from "chai";
import { describe } from "@jest/globals";

// @ts-expect-error
global.expect = expect;

// @ts-expect-error
global.context = describe;
