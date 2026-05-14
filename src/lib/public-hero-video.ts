import fs from "fs";
import path from "path";

const VIDEO_EXT = /\.(mp4|webm|mov|m4v)$/i;

/** Første passende videofil i `public/` — prioriterer navn der starter med "hero". */
export function getPublicHeroVideoSrc(): string | null {
  try {
    const dir = path.join(process.cwd(), "public");
    if (!fs.existsSync(dir)) return null;
    const files = fs.readdirSync(dir);
    const videos = files.filter((f) => VIDEO_EXT.test(f));
    if (videos.length === 0) return null;
    const heroNamed = videos.find((f) => /^hero/i.test(f));
    const chosen = heroNamed ?? videos.sort()[0];
    return `/${chosen.replace(/^\//, "")}`;
  } catch {
    return null;
  }
}
