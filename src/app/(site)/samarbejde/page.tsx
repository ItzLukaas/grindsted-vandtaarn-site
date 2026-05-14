import type { Metadata } from "next";
import { BadgeCheck, Handshake, Sparkles, Users } from "lucide-react";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { SplitMediaSection } from "@/components/split-media-section";
import { samarbejdePageImage } from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";
import { MAILTO } from "@/lib/site-constants";

const benefitIcons = [BadgeCheck, Sparkles, Users, Handshake] as const;

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/samarbejde",
    titleSegment: dict.meta.samarbejdeTitle,
    description: dict.meta.samarbejdeDescription,
  });
}

export default async function SamarbejdePage() {
  const dict = getDictionary();
  const c = dict.pages.samarbejde;

  return (
    <main>
      <PageIntroEditorial
        variant="hero"
        title={dict.meta.samarbejdeTitle}
        subtitle={c.heroSubtitle}
      />

      <SplitMediaSection image={samarbejdePageImage} className="bg-card" delay={0.04}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">{c.splitH2}</h2>
          <p>{c.splitP1}</p>
          <p>{c.splitP2}</p>
          <p>{c.splitP3}</p>
          <p>
            {c.splitP4a}
            <a className="font-semibold text-primary underline-offset-2 hover:underline" href={MAILTO}>
              paw@3pleuro.com
            </a>
            {c.splitP4b}
          </p>
        </Prose>
      </SplitMediaSection>

      <section className="border-b border-border bg-background py-14 md:py-20">
        <div className="mx-auto w-[min(960px,92vw)]">
          <h2 className="text-balance font-serif text-lg font-semibold leading-snug tracking-tight text-brand-green sm:text-xl md:text-2xl">
            {c.benefitsH2}
          </h2>

          <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2">
            {c.benefits.map((item, i) => {
              const Icon = benefitIcons[i] ?? BadgeCheck;
              return (
                <li key={item.title} className="rounded-xl border border-border bg-card p-4 md:p-5">
                  <Icon className="h-5 w-5 text-brand-sage" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-2.5 font-serif text-base font-semibold text-brand-green md:text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-[15px]">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
