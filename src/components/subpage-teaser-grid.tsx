import Link from "next/link";
import Image from "next/image";
import type { SiteImage } from "@/data/site-images";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const cards = [
  { href: "/galleri", title: "Galleri", text: "Udvalgte fotos samlet på én side." },
  { href: "/ejeren", title: "Ejeren", text: "Bag om Paw Kristensen og købet af vandtårnet." },
  { href: "/hvad-bruges-det-til", title: "Hvad bruges det til", text: "Rundvisning, koncerter, udsigt og booking." },
  { href: "/filterhuset", title: "Filterhuset", text: "Kulturhus og historisk bygning fra 1956." },
  { href: "/vandtaarnets-venner", title: "Vandtårnets Venner", text: "Frivillige omkring drift og bevaring." },
  { href: "/vandtaarnsparken", title: "Vandtårnsparken", text: "Grøn oase omkring tårnet." },
  { href: "/booking-og-besoeg", title: "Booking & besøg", text: "Adresse, kort og kontakt." },
  { href: "/arrangementer", title: "Arrangementer", text: "Musik, jul, comedy og fællesskab." },
  { href: "/samarbejde", title: "Samarbejde", text: "For virksomheder og foreninger." },
  { href: "/sponsorer", title: "Sponsorer", text: "Støt vartegnet — også via MobilePay." },
] as const;

type SubpageTeaserGridProps = {
  leadImage?: SiteImage;
};

export function SubpageTeaserGrid({ leadImage }: SubpageTeaserGridProps) {
  return (
    <section className="border-t border-border bg-muted/20 py-14 md:py-20">
      <div className="mx-auto w-[min(1080px,92vw)]">
        {leadImage ? (
          <div className="relative mb-10 overflow-hidden rounded-2xl bg-neutral-200 ring-1 ring-black/[0.06] shadow-[0_10px_36px_-14px_rgba(0,0,0,0.1)] md:mb-12">
            <div className="relative aspect-[2.4/1] min-h-[160px] max-h-[min(38vh,420px)] md:aspect-[2.6/1]">
              <Image
                src={leadImage.src}
                alt={leadImage.alt}
                title={leadImage.alt}
                fill
                className="object-cover"
                sizes="(max-width:1080px) 92vw, 1080px"
              />
            </div>
          </div>
        ) : null}
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-brand-green md:text-3xl">
          Udforsk
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
          {cards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                aria-label={`Læs mere: ${card.title}. ${card.text}`}
                className={cn(
                  "group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
              >
                <Card className="h-full gap-0 border-0 py-0 shadow-sm ring-1 ring-foreground/10 transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-brand-sage/40">
                  <CardHeader className="gap-1.5 px-5 pb-2 pt-5">
                    <CardTitle className="font-serif text-lg text-brand-green group-hover:text-brand-green-soft">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-[13px] leading-relaxed">
                      {card.text}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t-0 bg-transparent px-5 pb-5 pt-0">
                    <span className="text-xs font-medium text-primary opacity-90">Læs mere</span>
                  </CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

