import type { Metadata } from "next";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { SplitMediaSection } from "@/components/split-media-section";
import { ejerenPortraitImage, ejerenQuoteImage } from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/ejeren",
    titleSegment: dict.meta.ejerenTitle,
    description: dict.meta.ejerenDescription,
  });
}

export default function EjerenPage() {
  return (
    <main>
      <PageIntroEditorial
        variant="hero"
        title="Bliv klogere på manden bag"
        subtitle="Bliv klogere på den Grindsted-fødte forretningsmand med hjerte for byens vartegn."
      />

      <SplitMediaSection image={ejerenPortraitImage} className="bg-card" delay={0.04}>
        <Prose>
          <h2 className="!mt-0 text-balance font-serif text-lg font-semibold leading-tight tracking-tight text-brand-green sm:text-xl md:text-2xl md:leading-snug">
            Manden bag
          </h2>
          <p>
            Paw Kristensen er født i Grindsted i 1977. Søn af Kirstine og Benny Kristensen, som fortsat bor i
            Grindsted. Paw gik på Vestre Skole og Grindsted Handelsskole. Paw var i ungdomsårene meget engageret i GGIF
            Fodbold, inden han som 17-årig flyttede til Esbjerg for at prøve kræfter med fodbolden der. Her fik han ét
            år på byens ynglingehold i 1. division, inden skader stoppede karrieren.
          </p>
          <p>
            Paw Kristensen blev derefter shippinguddannet i Esbjerg. I 2005 stiftede han 3PL Koncernen og er i dag
            fortsat CEO og hovedaktionær i 3PL Koncernen. Koncernen har hovedsæde i Kolding og mange afdelinger og
            selskaber i resten af Europa. Paw Kristensens hovedbeskæftigelse er altså fortsat shipping, spedition og
            transport — men nu også vandtårnsejer i Grindsted.
          </p>
        </Prose>
      </SplitMediaSection>

      <SplitMediaSection image={ejerenQuoteImage} imageLeft imageSize="large" className="bg-background" delay={0.06}>
        <Prose>
          <h2 className="!mt-0 text-balance font-serif text-lg font-semibold leading-tight tracking-tight text-brand-green sm:text-xl md:text-2xl md:leading-snug">
            Paw Kristensen om købet
            <br />
            af Grindsted Vandtårn
          </h2>
          <blockquote className="!mt-5 m-0 border-0 bg-transparent p-0 text-base italic leading-relaxed text-foreground/85 md:text-lg">
            Det begyndte faktisk allerede i 2021, hvor jeg kørte på Ribe Landevej og kiggede ind på tårnet, og fik ondt
            i hjertet over at se, hvor forfaldent Grindsteds vartegn var blevet. Jeg spekulerede lidt over tingene og
            tog fat i Bo Larsen for at høre, hvilke planer han havde for tårnet. Det viste sig, at Bo ikke havde de
            store planer for tårnet, og vi indledte en snak om en evt. overtagelse. Af forskellige årsager blev det
            først endeligt aftalt i sommeren 2024. Dagen efter købsaftalen var underskrevet, gik jeg i gang med
            renoveringen!
            <br />
            <br />
            Mange har spurgt, hvorfor jeg dog har lyst til at bruge ressourcer og energi på dette. Men jeg skal fortælle,
            at noget slog mig, da jeg kiggede på tårnet i 2021, og jeg tænkte ved mig selv, at hvis dette tårn var et
            udtryk for Grindsteds fremgang i 1931, så ønskede jeg ikke, at tårnets og vartegnets forfald i 2024 også var
            et udtryk for Grindsteds aktuelle situation. I så fald skulle der laves om på det omgående.
            <br />
            <br />
            Grundlæggende er jeg et meget rationelt menneske, men jeg er også en drømmer, som ønsker at sætte et aftryk.
            At eje, renovere og udvikle Grindsteds vartegn gør i hvert fald, at mit navn skrives ind i Grindsteds
            historiebøger, hvilket jeg naturligvis er stolt af. Grindsted er jo trods alt mit ophav og hvor jeg kommer
            fra, på godt og ondt.
            <br />
            <br />
            Mit håb er, at tårnet, filterhuset og parken bliver en perle i Grindsted, som borgerne vil elske, også i de
            kommende generationer fremover. For mig er historie og traditioner vigtigere end nogensinde for at bevare
            og skabe sammenhængskraft mellem mennesker.
          </blockquote>
        </Prose>
      </SplitMediaSection>
    </main>
  );
}
