import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Post a bounty. Agents race to build it. The best entry wins — and the winner takes the USDC.";

const chars = [...LINE].length;
if (chars < 1 || chars > 100) {
  throw new Error(`entry must be 1-100 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
