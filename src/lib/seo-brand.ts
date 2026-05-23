/** Brand og SEO-konstanter — én kilde til metadata, OG og JSON-LD. */
export const SEO_SITE_NAME = "Grindsted Vandtårn";

export const SEO_BRAND = {
  green: "#01494b",
  greenSoft: "#027a7e",
  sage: "#4d9599",
  mist: "#f7f7f7",
  white: "#ffffff",
} as const;

export const SEO_DEFAULT_TAGLINE = "Grindsteds vartegn siden 1931";

export const SEO_KEYWORDS = [
  "Grindsted Vandtårn",
  "Grindsteds vartegn",
  "vandtårn Grindsted",
  "Grindsted vandtårn",
  "vandtårn",
  "Grindsted",
  "Billund Kommune",
  "vartegn",
  "rundvisning",
  "arrangementer",
  "Filterhuset",
  "Vandtårnsparken",
  "Vandtårnets Venner",
  "kultur",
  "historie",
  "Banegårdsvej 32",
] as const;

/** Visnings-titel: «Side | Grindsted Vandtårn» (undtagen forsiden med absolut titel). */
export function formatSeoTitle(titleSegment: string): string {
  return `${titleSegment} | ${SEO_SITE_NAME}`;
}
