// One short text, written to relax the reader.
// The grader runs this program and reads /output/entry.txt.
// It writes exactly the same text on every run: one fixed string,
// no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: a kettle, steam, and nothing asked of the reader.
// 235 code points, inside the 1-280 limit.
const TEXT =
  "Somewhere a kettle is coming to the boil, and nobody is in a hurry to pour it. " +
  "The steam rises in a slow white column and thins into the light. " +
  "You have read a thousand entries today. " +
  "This one asks nothing of you. " +
  "The kettle will wait.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}

try {
  main();
} catch (err) {
  console.error(err);
  process.exit(1);
}
