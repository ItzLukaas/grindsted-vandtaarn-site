import type { Metadata } from "next";
import { ArrangementerTilbageblikSection } from "@/components/arrangementer-tilbageblik-section";
import { MusikVedVandtaarnetSection } from "@/components/musik-ved-vandtaarnet-section";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/arrangementer",
    titleSegment: dict.meta.arrangementerTitle,
    description: dict.meta.arrangementerDescription,
  });
}

export default async function ArrangementerPage() {
  const dict = getDictionary();
  const a = dict.pages.arrangementer;

  return (
    <main>
      <PageIntroEditorial
        variant="hero"
        title={dict.meta.arrangementerTitle}
        subtitle={a.heroSubtitle}
      />
      <MusikVedVandtaarnetSection copy={a} />
      <ArrangementerTilbageblikSection copy={a} />
    </main>
  );
}
