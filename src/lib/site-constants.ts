export const ADDRESS_LINE = "Banegårdsvej 32, 7200 Grindsted";
export const MAILTO = "mailto:paw@3pleuro.com";
/** Google Maps embed (direkte `/maps/embed`-URL). */
export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sBaneg%C3%A5rdsvej+32,+7200+Grindsted!6i16!3m1!1sda!5m1!1sda";

/** Åbn i Google Maps (footer + kontakt) */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Baneg%C3%A5rdsvej+32%2C+7200+Grindsted";

/**
 * Officiel Facebook-side for Grindsted Vandtårn.
 * Sæt `NEXT_PUBLIC_FACEBOOK_URL` i `.env.local` hvis sidens URL ændres.
 */
export const FACEBOOK_PAGE_ID =
  process.env.FACEBOOK_PAGE_ID?.trim() || "61564060827167";

export const FACEBOOK_PAGE_URL =
  process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() ||
  `https://www.facebook.com/profile.php?id=${FACEBOOK_PAGE_ID}`;

export const MOBILEPAY_VANDTAARN_ID = "3833GK";
