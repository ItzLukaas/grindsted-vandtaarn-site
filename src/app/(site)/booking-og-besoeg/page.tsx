import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { SplitMediaSection } from "@/components/split-media-section";
import { bookingOgBesoegPageImage } from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";
import { ADDRESS_LINE, MAILTO, MAP_EMBED_SRC } from "@/lib/site-constants";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/booking-og-besoeg",
    titleSegment: dict.meta.bookingTitle,
    description: dict.meta.bookingDescription,
  });
}

export default async function BookingPage() {
  const dict = getDictionary();
  const m = dict.meta;
  const b = dict.pages.booking;

  return (
    <main>
      <PageIntroEditorial variant="hero" title={m.bookingTitle} subtitle={b.heroSubtitle} />

      <SplitMediaSection image={bookingOgBesoegPageImage} className="bg-card" delay={0.04}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">{b.h2}</h2>
          <p>
            {b.introBefore}
            <a className="font-semibold text-primary underline-offset-2 hover:underline" href={MAILTO}>
              paw@3pleuro.com
            </a>
            {b.introAfter}
          </p>

          <h3 className="mt-7 font-serif text-lg font-semibold text-brand-green md:mt-9 md:text-xl">{b.h3Tours}</h3>
          <p>{b.toursBody}</p>

          <h3 className="mt-7 font-serif text-lg font-semibold text-brand-green md:mt-9 md:text-xl">{b.h3View}</h3>
          <p>
            {b.viewBefore}
            <a className="font-semibold text-primary underline-offset-2 hover:underline" href={MAILTO}>
              paw@3pleuro.com
            </a>
            {b.viewAfter}
          </p>

          <h3 className="mt-7 font-serif text-lg font-semibold text-brand-green md:mt-9 md:text-xl">{b.h3Events}</h3>
          <p>{b.eventsBody}</p>
        </Prose>
      </SplitMediaSection>

      <section className="border-y border-brand-green/10 bg-brand-mist/40 py-12 md:py-16">
        <div className="mx-auto grid w-[min(1150px,92vw)] gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-xl border border-brand-green/10 bg-white">
            <iframe
              title={b.iframeTitle}
              src={MAP_EMBED_SRC}
              className="aspect-[4/3] min-h-[280px] w-full border-0 lg:min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col justify-center rounded-xl border border-brand-green/10 bg-white p-6 md:p-8">
            <p className="flex items-start gap-3 text-base font-bold text-brand-green">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-soft" aria-hidden />
              <span>
                {b.visitAddress}
                <span className="mt-2 block text-sm font-normal leading-relaxed text-foreground/75 md:text-base">
                  Grindsted Vandtårn
                  <br />
                  {ADDRESS_LINE}
                </span>
              </span>
            </p>
            <p className="mt-8 text-base font-bold text-brand-green">{b.mailLabel}</p>
            <a
              href={MAILTO}
              className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline"
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              paw@3pleuro.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
