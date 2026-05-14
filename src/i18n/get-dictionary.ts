import { homeContent } from "@/i18n/messages/home-content";
import { navFooterLang } from "@/i18n/messages/nav-footer-lang";
import { metaTeaser } from "@/i18n/messages/meta-teaser";
import { pageBodies } from "@/i18n/messages/page-bodies";
import { pageBodiesRest } from "@/i18n/messages/page-bodies-rest";
import { timelines } from "@/i18n/timelines";

function buildDictionary() {
  return {
    nav: navFooterLang.da.nav,
    footer: navFooterLang.da.footer,
    meta: metaTeaser.da.meta,
    teaser: metaTeaser.da.teaser,
    experiences: metaTeaser.da.experiences,
    home: {
      ...homeContent.da,
      timeline: timelines.da ?? [],
    },
    pages: pageBodies.da,
    pagesRest: pageBodiesRest.da,
  };
}

const daDictionary = buildDictionary();

export type Dictionary = typeof daDictionary;

export function getDictionary(): Dictionary {
  return daDictionary;
}
