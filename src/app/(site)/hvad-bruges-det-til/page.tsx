import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFigures } from "@/components/article-figures";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { experienceItems } from "@/data/experiences";
import { pickImages } from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteHref } from "@/i18n/href";
import { buildPageMetadata } from "@/lib/page-metadata";
import { MAILTO } from "@/lib/site-constants";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/hvad-bruges-det-til",
    titleSegment: dict.meta.hvadBrugesTitle,
    description: dict.meta.hvadBrugesDescription,
  });
}

export default async function HvadBrugesDetTilPage() {
  const dict = getDictionary();
  const p = dict.pages.hvadBruges;
  const bookingHref = siteHref("/booking-og-besoeg");

  return (
    <main>
      <PageIntroEditorial
        title={p.heroTitle}
        subtitle={p.heroSubtitle}
        below={
          <ul className="flex flex-wrap gap-3" aria-label={p.areasAria}>
            {experienceItems.map((item) => (
              <li
                key={item.id}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-black/[0.06] bg-white text-brand-green shadow-sm"
                title={dict.experiences[item.id].title}
              >
                <item.icon className="h-6 w-6 shrink-0" aria-hidden />
              </li>
            ))}
          </ul>
        }
      />
      <div className="mx-auto w-[min(960px,92vw)] py-12 md:py-16">
        <p className="max-w-[75ch] text-base leading-relaxed text-neutral-700 md:text-lg">{p.lead}</p>
        <div className="mx-auto max-w-[720px]">
          <ArticleFigures images={pickImages([1])} />
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {experienceItems.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <item.icon className="h-6 w-6 text-brand-sage" aria-hidden />
              <h2 className="mt-3 font-serif text-lg font-semibold text-brand-green">
                {dict.experiences[item.id].title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                {dict.experiences[item.id].text}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-neutral-600">
          {p.footerPrefix}
          <Link href={bookingHref} className="font-medium text-primary underline-offset-2 hover:underline">
            {p.footerLinkLabel}
          </Link>
          {p.footerMid}
          <a className="font-medium text-primary underline-offset-2 hover:underline" href={MAILTO}>
            paw@3pleuro.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
