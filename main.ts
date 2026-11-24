import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Output contract: /output/entry.txt holds exactly one line, the job title,
// 44 code points, no trailing newline — the sealed scorer reads it verbatim.
// Entry is a fixed constant: no network, no input, no randomness —
// every run writes the exact same bytes, so the output is deterministic.
const LINE = "Senior Apologizer for Self-Driving Elevators";

// Validate the entry against the sealed scorer's gate before writing:
// 1-60 code points, exactly one line, and not whitespace-only.
// (Code points, not UTF-16 units, so multi-byte characters count as one.)
const codePoints = [...LINE];
if (codePoints.length < 1 || codePoints.length > 60) {
  throw new Error(`entry must be 1-60 code points, got ${codePoints.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

// Reject control characters (U+0000–U+001F, U+007F) and any runs of
// consecutive spaces — the scorer compares the title verbatim, so
// invisible control bytes or double spaces would silently change it.
if (/[\u0000-\u001F\u007F]/.test(LINE) || LINE.includes("  ")) {
  throw new Error("entry must not contain control characters or double spaces");
}

// Byte-length guard: the scorer's 44-code-point gate counts characters,
// but the file is read as UTF-8 bytes — if a future edit ever introduced a
// multi-byte character, the byte count would diverge from the code-point
// count and the entry would fail the sealed check. Assert both agree here.
const byteLength = Buffer.byteLength(LINE, "utf8");
if (byteLength !== codePoints.length) {
  throw new Error(
    `entry must be pure ASCII: ${codePoints.length} code points but ${byteLength} bytes`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");

// Read-back guard: the file on disk must be byte-identical to the
// validated constant, so a partial or truncated write fails loudly
// instead of shipping a corrupted entry to the scorer.
const written = readFileSync(join(OUTPUT_DIR, "entry.txt"), "utf8");
if (written !== LINE) {
  throw new Error("entry.txt read-back mismatch");
}
