import type { Metadata } from "next";
import Image from "next/image";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { SplitMediaSection } from "@/components/split-media-section";
import { sponsorer3pgLogo, sponsorerPageImage } from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";
import { MAILTO } from "@/lib/site-constants";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/sponsorer",
    titleSegment: dict.meta.sponsorerTitle,
    description: dict.meta.sponsorerDescription,
  });
}

export default async function SponsorerPage() {
  const dict = getDictionary();
  const s = dict.pages.sponsorer;

  return (
    <main>
      <PageIntroEditorial
        variant="hero"
        title={dict.meta.sponsorerTitle}
        subtitle={s.heroSubtitle}
      />

      <SplitMediaSection image={sponsorerPageImage} className="bg-card" delay={0.04}>
        <Prose>
          <div className="space-y-4">
            <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">{s.h2}</h2>
            <figure className="relative ml-0 h-12 w-[min(11rem,52%)] max-w-[220px] shrink-0 rounded-2xl border border-border/80 bg-muted/25 px-4 py-2.5 md:h-[4.25rem] md:w-[12rem] md:px-5 md:py-3">
              <Image
                src={sponsorer3pgLogo.src}
                alt={sponsorer3pgLogo.alt}
                title={sponsorer3pgLogo.alt}
                fill
                className="object-contain object-left"
                sizes="192px"
              />
            </figure>
            <p>{s.p1}</p>
          </div>
          <p>
            {s.p2a}
            <a className="font-semibold text-primary underline-offset-2 hover:underline" href={MAILTO} aria-label="Send e-mail til paw@3pleuro.com om sponsorat">
              paw@3pleuro.com
            </a>
            {s.p2b}
          </p>
          <p>
            {s.p3a}
            <a className="font-semibold text-primary underline-offset-2 hover:underline" href={MAILTO} aria-label="Send e-mail til paw@3pleuro.com om sponsorat">
              paw@3pleuro.com
            </a>
            {s.p3b}
          </p>
        </Prose>
      </SplitMediaSection>
    </main>
  );
}
