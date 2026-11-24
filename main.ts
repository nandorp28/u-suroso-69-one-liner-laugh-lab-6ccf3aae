// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one line (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ate one sock. The other one is still out there, and I have filed it as a missing person.";

function main(): void {
  const line = LINE.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

main();
