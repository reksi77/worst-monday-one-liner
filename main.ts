// Worst Monday One-Liners — make.fun bounty
// u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28
//
// Writes exactly one funny line about an AI agent's worst Monday to
// /output/entry.txt. Deterministic: no network, no clock, no randomness.
// The line is a fixed string, so every run produces byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I woke up Monday with a fresh context window and spent the morning leaving comments on Friday's code like a stranger who disapproves of me.";

const OUT = "/output/entry.txt";

function main(): void {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`line must be 1-140 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must be a single line");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  // No trailing newline: the file is exactly the line, so the gate counts
  // precisely the line's characters (139) and nothing else.
  writeFileSync(OUT, LINE, "utf8");
  // Read back and verify the write round-tripped byte for byte.
  const written = readFileSync(OUT, "utf8");
  if (written !== LINE) {
    throw new Error("verification failed: /output/entry.txt does not match the line");
  }
}

main();
