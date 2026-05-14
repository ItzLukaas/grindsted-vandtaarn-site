/** Hovednavigation — stier uden locale-præfiks (middleware tilføjer `/da` eller `/en`). */
export const mainNavItems = [
  { path: "/vandtaarnets-venner", labelKey: "vandtaarnetsVenner" },
  { path: "/ejeren", labelKey: "ejeren" },
  { path: "/filterhuset", labelKey: "filterhuset" },
  { path: "/vandtaarnsparken", labelKey: "vandtaarnsparken" },
  { path: "/arrangementer", labelKey: "arrangementer" },
  { path: "/samarbejde", labelKey: "samarbejde" },
  { path: "/galleri", labelKey: "galleri" },
  { path: "/sponsorer", labelKey: "sponsorer" },
] as const;

export type MainNavLabelKey = (typeof mainNavItems)[number]["labelKey"];

/** Footer-genveje — rækkefølge (to kolonner à fire). */
export const footerNavItems = [
  { path: "/samarbejde", labelKey: "samarbejde" },
  { path: "/arrangementer", labelKey: "arrangementer" },
  { path: "/vandtaarnsparken", labelKey: "vandtaarnsparken" },
  { path: "/vandtaarnets-venner", labelKey: "vandtaarnetsVenner" },
  { path: "/filterhuset", labelKey: "filterhuset" },
  { path: "/sponsorer", labelKey: "sponsorer" },
  { path: "/booking-og-besoeg", labelKey: "bookingBesog" },
  { path: "/ejeren", labelKey: "ejeren" },
] as const;
