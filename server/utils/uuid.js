import { createHash } from "crypto";

const VERSION = 5;

export function createDeterministicUuid(seed) {
  const hex = createHash("sha1").update(seed).digest("hex").slice(0, 32);
  const timeHigh = (parseInt(hex.slice(12, 16), 16) & 0x0fff) | (VERSION << 12);
  const clockSeq = (parseInt(hex.slice(16, 20), 16) & 0x3fff) | 0x8000;

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    timeHigh.toString(16).padStart(4, "0"),
    clockSeq.toString(16).padStart(4, "0"),
    hex.slice(20, 32),
  ].join("-");
}
