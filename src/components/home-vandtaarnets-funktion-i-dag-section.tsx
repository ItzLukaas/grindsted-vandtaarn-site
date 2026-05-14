"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import {
  buttonVariants,
  PrimaryButtonContent,
  primaryButtonArrowLayoutClassName,
} from "@/components/ui/button";
import { siteHref } from "@/i18n/href";
import type { SiteImage } from "@/data/site-images";
import { cn } from "@/lib/utils";

type FunktionCopy = {
  funktionTitle: string;
  funktionLead: string;
  funktionToursTitle: string;
  funktionToursText: string;
  funktionConcertsTitle: string;
  funktionConcertsText: string;
  funktionViewTitle: string;
  funktionViewText: string;
  funktionBookTitle: string;
  funktionBookText: string;
  funktionCta: string;
};

function FunktionImageMedia({ image }: { image: SiteImage }) {
  return (
    <div className="relative mx-auto w-full max-w-[min(100%,448px)] shrink-0">
      <div className="overflow-hidden rounded-3xl ring-1 ring-brand-green/12 shadow-[0_18px_48px_-24px_rgba(1,73,75,0.15)]">
        <div className="relative aspect-[10/14] bg-black/20">
          <Image
            src={image.src}
            alt={image.alt}
            title={image.alt}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 92vw, 448px"
          />
        </div>
      </div>
    </div>
  );
}

export function HomeVandtaarnetsFunktionIDagSection({
  image,
  copy,
}: {
  image: SiteImage;
  copy: FunktionCopy;
}) {
  return (
    <AnimatedSection
      id="vandtaarnets-funktion-i-dag"
      className="border-b border-border bg-background py-14 md:py-20"
      delay={0.05}
    >
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] md:items-center md:gap-14">
        <div className="min-w-0">
          <h2
            id="vandtaarn-funktion-heading"
            className="text-balance font-serif text-lg font-semibold leading-tight tracking-tight text-brand-green sm:text-2xl"
          >
            {copy.funktionTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:mt-5 md:text-[1.05rem]">
            {copy.funktionLead}
          </p>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:mt-7 md:text-[1.05rem]">
            <div>
              <h3 className="font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {copy.funktionToursTitle}
              </h3>
              <p className="mt-1.5">{copy.funktionToursText}</p>
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {copy.funktionConcertsTitle}
              </h3>
              <p className="mt-1.5">{copy.funktionConcertsText}</p>
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {copy.funktionViewTitle}
              </h3>
              <p className="mt-1.5">{copy.funktionViewText}</p>
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {copy.funktionBookTitle}
              </h3>
              <p className="mt-1.5">{copy.funktionBookText}</p>
            </div>
          </div>

          <Link
            href={siteHref("/booking-og-besoeg")}
            aria-label={`${copy.funktionCta} — booking, kort og kontakt ved Grindsted Vandtårn`}
            className={cn(
              buttonVariants({ variant: "default" }),
              primaryButtonArrowLayoutClassName,
              "mt-8 inline-flex h-auto min-h-11 items-center justify-center rounded-full px-6 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            )}
          >
            <PrimaryButtonContent>{copy.funktionCta}</PrimaryButtonContent>
          </Link>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <FunktionImageMedia image={image} />
        </div>
      </div>
    </AnimatedSection>
  );
}
