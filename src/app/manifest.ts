import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grindsted Vandtårn",
    short_name: "Vandtårnet",
    description:
      "Vartegn siden 1931 — officiel side med historie, arrangementer, rundvisning, Filterhuset og parken i Grindsted.",
    start_url: "/",
    display: "browser",
    background_color: "#f7f7f7",
    theme_color: "#01494b",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

