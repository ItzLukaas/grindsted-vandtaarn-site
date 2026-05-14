import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import {
  buttonVariants,
  PrimaryButtonContent,
  primaryButtonArrowLayoutClassName,
} from "@/components/ui/button";
import { siteHref } from "@/i18n/href";
import { cn } from "@/lib/utils";

const POSTER_SRC = "/musik-ved-vandtaarnet-plakat-2026.png";

type MusikHomeCopy = {
  musikHomeTitle: string;
  musikHomeP1: string;
  musikHomeP2: string;
  musikHomeP3: string;
  musikHomeCta: string;
  musikPosterAlt: string;
};

export function HomeMusikVedVandtaarnetPraesentererSection({ copy }: { copy: MusikHomeCopy }) {
  return (
    <AnimatedSection className="bg-background py-14 md:py-20" delay={0.04}>
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,1.12fr)] md:items-center md:gap-12 lg:gap-14">
        <div className="min-w-0 max-w-prose">
          <h2
            id="musik-praesenterer-forside"
            className="text-balance font-serif text-2xl font-semibold tracking-tight text-brand-green md:text-3xl"
          >
            {copy.musikHomeTitle}
          </h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            <p>{copy.musikHomeP1}</p>
            <p>{copy.musikHomeP2}</p>
            <p>{copy.musikHomeP3}</p>
          </div>
          <Link
            href={siteHref("/arrangementer")}
            aria-label={`${copy.musikHomeCta} — se arrangementer ved Grindsted Vandtårn`}
            className={cn(
              buttonVariants({ variant: "default" }),
              primaryButtonArrowLayoutClassName,
              "mt-8 inline-flex h-auto min-h-11 items-center justify-center rounded-full px-6 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
          >
            <PrimaryButtonContent>{copy.musikHomeCta}</PrimaryButtonContent>
          </Link>
        </div>

        <div className="flex w-full min-w-0 items-center justify-center md:min-w-[280px] md:justify-end">
          <div className="relative mx-auto aspect-[3/4] w-full max-h-[min(78vh,720px)] min-h-[280px] max-w-[min(100%,640px)] overflow-hidden sm:min-h-[340px] md:mx-0 md:max-h-[min(82vh,760px)] md:min-h-[400px] lg:max-h-[min(85vh,820px)]">
            <Image
              src={POSTER_SRC}
              alt={copy.musikPosterAlt}
              title={copy.musikPosterAlt}
              fill
              className="object-contain object-top md:object-center"
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 48vw, 640px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
