export type SiteImage = {
  src: string;
  alt: string;
};

/**
 * Før/efter-billeder til forsiden under «Et vartegn genfødt».
 * Filerne `1931.jpg` og `2025.jpg` ligger i `public/`.
 */
export const vartegnGenfoedt1931: SiteImage = {
  src: "/1931.jpg",
  alt: "Grindsted Vandtårn ved opførelsen i 1931",
};
export const vartegnGenfoedt2025: SiteImage = {
  src: "/2025.jpg",
  alt: "Grindsted Vandtårn i 2025 efter renoveringen",
};

/** Galleriside: `galleri1.jpg` … `galleri20.jpg` i `public/` (efter renovering). */
export const galleriEfterRenoveringImages: SiteImage[] = Array.from({ length: 20 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/galleri${n}.jpg`,
    alt: `Grindsted Vandtårn efter renoveringen — foto ${n}`,
  };
});

/** Galleriside: `galleri21.jpg` … `galleri40.jpg` i `public/` (under renovering). */
export const galleriUnderRenoveringImages: SiteImage[] = Array.from({ length: 20 }, (_, i) => {
  const n = i + 21;
  return {
    src: `/galleri${n}.jpg`,
    alt: `Grindsted Vandtårn under renoveringen — foto ${n}`,
  };
});

/** Forside: video-plakat og «Vandtårnets funktion i dag» (galleri efter renovering). */
export const forsideHeroPosterImage: SiteImage = {
  src: "/galleri1.jpg",
  alt: "Grindsted Vandtårn efter renoveringen — foto 1",
};
export const forsideFunktionDagImage: SiteImage = {
  src: "/galleri2.jpg",
  alt: "Grindsted Vandtårn efter renoveringen — foto 2",
};

/** Forside + sitemap — indeks 0–1 bruges på forsiden. */
export const siteImages: SiteImage[] = [forsideHeroPosterImage, forsideFunktionDagImage];

/** `samarbejde.jpg` i `public/` — Samarbejde-siden. */
export const samarbejdePageImage: SiteImage = {
  src: "/samarbejde.jpg",
  alt: "Samarbejde og partnerskab omkring Grindsted Vandtårn",
};

/** Læg `sponsorer.jpg` i `public/` — Sponsorer-siden. */
export const sponsorerPageImage: SiteImage = {
  src: "/sponsorer.jpg",
  alt: "Sponsorer og støtte til Grindsted Vandtårn",
};

/** Læg `3PG.avif` i `public/` — sponsorlogo (3PG) på Sponsorer-siden. */
export const sponsorer3pgLogo: SiteImage = {
  src: "/3PG.avif",
  alt: "3PG — sponsor af Grindsted Vandtårn",
};

/** Læg `Kontakt.jpg` i `public/` — Booking & besøg-siden. */
export const bookingOgBesoegPageImage: SiteImage = {
  src: "/Kontakt.jpg",
  alt: "Kontakt og besøg ved Grindsted Vandtårn",
};

export function pickImages(indices: number[]): SiteImage[] {
  return indices
    .map((i) => siteImages[i])
    .filter((img): img is SiteImage => img !== undefined);
}

/** Læg `filterhuset.jpg` i `public/` — første split-billede (historik) på Filterhuset-siden. */
export const filterhusetHistorikImage: SiteImage = {
  src: "/filterhuset.jpg",
  alt: "Filterhuset ved Grindsted Vandtårn",
};

/** Læg `VIP.jpg` i `public/` — split-billede ved Kalkrummet-sektionen på Filterhuset-siden. */
export const filterhusetKalkrummetImage: SiteImage = {
  src: "/VIP.jpg",
  alt: "Kalkrummet i Filterhuset — VIP- og backstageområde ved Grindsted Vandtårn",
};

/** `Indenfor.avif` i `public/` — billede ved afsnittet «Formålet med Filterhuset» på Filterhuset-siden. */
export const filterhusetIndenforImage: SiteImage = {
  src: "/Indenfor.avif",
  alt: "Inde i Filterhuset ved Grindsted Vandtårn — rum, lys og murværk fra vandværkets tid",
};

/** `parken1.jpg`, `parken2.jpg` og `parken3.jpg` i `public/` — Vandtårnsparken-siden (split 1 → 3 i rækkefølge). */
export const vandtaarnsparkenImages: SiteImage[] = [
  {
    src: "/parken1.jpg",
    alt: "Vandtårnsparken omkring Grindsted Vandtårn og Filterhuset",
  },
  {
    src: "/parken2.jpg",
    alt: "Stier, grønne arealer og stemning i Vandtårnsparken",
  },
  {
    src: "/parken3.jpg",
    alt: "Vandtårnsparken som samlingspunkt ved vandtårnsområdet",
  },
];

/** Læg `venner1.jpg`, `venner2.png` og `venner3.jpg` i `public/` — Vandtårnets Venner-siden. */
export const vandtaarnetsVennerImages: SiteImage[] = [
  {
    src: "/venner1.jpg",
    alt: "Stemning fra Vandtårnets Venner ved Grindsted Vandtårn",
  },
  {
    src: "/venner2.png",
    alt: "Frivillige og gæster omkring Grindsted Vandtårn",
  },
  {
    src: "/venner3.jpg",
    alt: "Aktiviteter og fællesskab ved vandtårnet",
  },
];

/** Læg `ejeren.jpg` i `public/` — Ejeren-siden. */
export const ejerenPortraitImage: SiteImage = {
  src: "/ejeren.jpg",
  alt: "Paw Kristensen — ejer af Grindsted Vandtårn",
};

/** Læg `ejeren2.avif` i `public/` — Ejeren-siden ved citatet. */
export const ejerenQuoteImage: SiteImage = {
  src: "/ejeren2.avif",
  alt: "Paw Kristensen om købet af Grindsted Vandtårn",
};
