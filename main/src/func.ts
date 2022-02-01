import { imported } from "./imported";

import type { Imported } from "./imported";

export type Custom = Imported;

const func = () => "func, " + imported();

export default func;
