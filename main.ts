import { mkdirSync, writeFileSync } from "node:fs";

const line = "The only decision this meeting could make is whether to schedule another meeting, and I've decided no on behalf of everyone with a calendar.";
// One sentence, no trailing newline: the gate counts 1-200 characters.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
