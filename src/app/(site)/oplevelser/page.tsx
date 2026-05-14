import type { Metadata } from "next";
import Link from "next/link";
import { PageIntroHub } from "@/components/page-intro-variants";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/oplevelser",
    titleSegment: dict.meta.oplevelserTitle,
    description: dict.meta.oplevelserDescription,
  });
}

const links = [
  { href: "/samarbejde", title: "Samarbejde", text: "For virksomheder og foreninger omkring vandtårnet." },
  { href: "/hvad-bruges-det-til", title: "Hvad bruges det til", text: "Rundvisning, koncerter, udsigt og booking." },
  { href: "/ejeren", title: "Ejeren", text: "Bag om Paw Kristensen og købet af vandtårnet." },
  { href: "/arrangementer", title: "Arrangementer", text: "Musik, jul, comedy og fællesskab." },
  { href: "/filterhuset", title: "Filterhuset", text: "Kulturhus og historisk bygning." },
  { href: "/vandtaarnets-venner", title: "Vandtårnets Venner", text: "Frivillige omkring drift og bevaring." },
  { href: "/vandtaarnsparken", title: "Vandtårnsparken", text: "Grøn oase omkring tårnet." },
  { href: "/booking-og-besoeg", title: "Booking & besøg", text: "Adresse, kort og kontakt." },
] as const;

export default function OplevelserPage() {
  return (
    <main>
      <PageIntroHub
        title="Oplevelser"
        subtitle="Vælg en side og dyk ned — alt er samlet omkring vandtårnet og naboerne."
      />
      <section className="mx-auto w-[min(960px,92vw)] py-12 md:py-16">
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-label={`${item.title}: ${item.text}`}
                className="group flex min-h-[5.75rem] touch-manipulation flex-col rounded-2xl border border-black/[0.06] bg-white px-5 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition active:bg-neutral-50/80 hover:border-black/10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <span className="font-serif text-lg font-semibold text-brand-green group-hover:text-brand-green-soft">
                  {item.title}
                </span>
                <span className="mt-1.5 text-sm text-neutral-600">{item.text}</span>
                <span className="mt-4 text-xs font-medium text-primary opacity-90">Åbn side</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
