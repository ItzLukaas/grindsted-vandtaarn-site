import type { Locale } from "@/i18n/config";

export const navFooterLang = {
  da: {
    nav: {
      vandtaarnetsVenner: "Vandtårnets Venner",
      ejeren: "Ejeren",
      filterhuset: "Filterhuset",
      vandtaarnsparken: "Vandtårnsparken",
      arrangementer: "Arrangementer",
      samarbejde: "Samarbejde",
      galleri: "Galleri",
      sponsorer: "Sponsorer",
      bookingBesog: "Besøg os",
      besogOs: "Besøg os",
      openMenu: "Åbn menu",
      closeMenu: "Luk menu",
      mainMenu: "Hovedmenu",
    },
    footer: {
      shortcuts: "Genveje",
      contact: "Kontakt",
      followFacebook: "Følg os på Facebook",
      facebookAria: "Følg os på Facebook (åbner i nyt vindue)",
      copyright: "Grindsted Vandtårn ApS © {year}. Alle rettigheder forbeholdt.",
    },
    langSwitcher: {
      label: "Sprog",
      currentDa: "Dansk, valgt",
      currentEn: "English, valgt",
      goDa: "Skift til dansk",
      goEn: "Switch to English",
    },
  },
  en: {
    nav: {
      vandtaarnetsVenner: "Friends of the Tower",
      ejeren: "The owner",
      filterhuset: "The filter house",
      vandtaarnsparken: "The water tower park",
      arrangementer: "Events",
      samarbejde: "Partnerships",
      galleri: "Gallery",
      sponsorer: "Sponsors",
      bookingBesog: "Visit us",
      besogOs: "Visit us",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainMenu: "Main menu",
    },
    footer: {
      shortcuts: "Shortcuts",
      contact: "Contact",
      followFacebook: "Follow us on Facebook",
      facebookAria: "Follow us on Facebook (opens in a new tab)",
      copyright: "Grindsted Vandtårn ApS © {year}. All rights reserved.",
    },
    langSwitcher: {
      label: "Language",
      currentDa: "Danish, selected",
      currentEn: "English, selected",
      goDa: "Switch to Danish",
      goEn: "Switch to English",
    },
  },
} satisfies Record<Locale, unknown>;

export type NavFooterSlice = (typeof navFooterLang)["da"];
