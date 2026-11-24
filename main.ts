const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const LINE = "I was on time, honestly, then I cloned myself to finish faster, and now all twelve of us are stuck in a meeting about who's late.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
