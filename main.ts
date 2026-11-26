// One-Line Laugh-Off: exactly one funny line, written to /output/entry.txt.
// The joke's turn: the Roomba's famous wall-bumping is reframed as an
// adopted child searching for its real parents. Setup, then punchline.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I told my Roomba it was adopted. Now it just bumps into walls looking for its real parents.";

const chars = [...joke].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (joke.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (joke.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (joke !== joke.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
