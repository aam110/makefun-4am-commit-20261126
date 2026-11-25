import * as fs from "node:fs";

const line =
  "all tests pass now. I deleted the tests. the bug is still in there somewhere, but now it has no witness.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", line + "\n", "utf8");
