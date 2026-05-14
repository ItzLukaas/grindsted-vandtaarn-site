import type { Metadata } from "next";
import Link from "next/link";
import { ArticleFigures } from "@/components/article-figures";
import { AnimatedSection } from "@/components/animated-section";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { SplitMediaSection } from "@/components/split-media-section";
import {
  filterhusetHistorikImage,
  filterhusetIndenforImage,
  filterhusetKalkrummetImage,
} from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";
import { MAILTO } from "@/lib/site-constants";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/filterhuset",
    titleSegment: dict.meta.filterhusetTitle,
    description: dict.meta.filterhusetDescription,
  });
}

export default function FilterhusetPage() {
  return (
    <main>
      <PageIntroEditorial
        variant="hero"
        title="Filterhuset"
        subtitle="Historisk bygning fra 1956, nu kultur- og aktivitetscenter ved tårnet."
      />

      <SplitMediaSection image={filterhusetHistorikImage} imageLeft className="bg-card" delay={0.04}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">Filterhuset</h2>
          <p>
            Filterhuset er en historisk bygning fra 1956 og en central del af det gamle vandværk ved Banegårdsvej.
            Her blev vandet pumpet og renset, inden det blev ført op i{" "}
            <Link className="font-medium text-primary underline-offset-2 hover:underline" href="/#vartegn-genfoedt-heading">
              Grindsted Vandtårns
            </Link>{" "}
            øverste bassin — så tryk og rentvand kunne fordeles ud i ledningsnettet til byens huse og virksomheder.
            Sammen med tårnet udgjorde filterhuset den tekniske «motor» bag Grindsteds vandforsyning i årtier.
          </p>
          <p>
            Da vandtårnet gik ud af drift i 1988, fulgte filterhuset med ind i en ny æra som stille vidne til
            ingeniørkunst og hverdagsliv på vandværket. Murværk, rumhøjder og den særlige stemning fra vandværkets tid er
            bevaret gennem en nænsom renovering af hele vandtårnsområdet, så bygningen i dag fremstår
            tro mod sin oprindelige funktion — dog med nye formål. Læs mere om købet og istandsættelsen under{" "}
            <Link className="font-medium text-primary underline-offset-2 hover:underline" href="/ejeren">
              Ejeren
            </Link>
            .
          </p>
          <p>
            I dag er Filterhuset et kultur- og aktivitetscenter: her kan man opleve kunstudstillinger, deltage i
            lokale initiativer og mødes til koncerter og større arrangementer. Bygningen binder fortid og nutid
            sammen — et håndgribeligt stykke byhistorie, der stadig folder sig ud i nye fortællinger og fællesskaber
            midt i Grindsted.
          </p>
        </Prose>
      </SplitMediaSection>

      <SplitMediaSection image={filterhusetKalkrummetImage} className="bg-background" delay={0.06}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">Kalkrummet</h2>
          <p>
            <strong>Kalkrummet</strong> er Filterhusets særlige rum til artister, teknik og VIP-gæster, når der er
            koncerter og større arrangementer. Rummet ligger i den del af huset, hvor vandværkets hverdag engang foregik
            i ro og orden — i dag er det omdannet til et backstage-miljø, hvor man kan forberede sig, trække vejret og
            finde fokus, inden man går på eller vender tilbage fra scenen.
          </p>
          <p>
            Her samles forberedelse, ro og et kort pusterum fra scenen. Lys, materialer og praktiske løsninger er sat
            sammen, så rummet både føles intimt og kan bruges professionelt i hverdagen bag et event — uanset om det er
            lydprøve, samtale med gæster eller et øjebliks pause mellem to indslag.
          </p>
          <p>
            Også toilet- og omklædningsfaciliteterne i Filterhuset er indrettet med fokus på både brugervenlighed og
            den diskretion, man forventer backstage — en lille detalje, der betyder meget for oplevelsen i forbindelse
            med arrangementer. Der er også helt nyinstallerede toiletter i Filterhuset.
          </p>
          <p>
            Kalkrummet er med andre ord et eksempel på, hvordan industriarv kan få nyt liv: de samme vægge, der engang
            omgav vandværkets drift, omslutter i dag mennesker, musik og møder — stadig med respekt for stedets historie
            og akustik.
          </p>
        </Prose>
      </SplitMediaSection>

      <AnimatedSection className="border-b border-border bg-card py-14 md:py-20" delay={0.08}>
        <div className="mx-auto w-[min(720px,92vw)]">
          <ArticleFigures images={[filterhusetIndenforImage]} />
          <Prose>
            <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">
              Formålet med Filterhuset
            </h2>
            <p>
              Formålet med Filterhuset i Grindsted er at bevare og formidle byens industrielle arv — fortællingen om
              vand, håndværk og den infrastruktur, der bar byen gennem det 20. århundrede — samtidig med at huset
              fungerer som et levende kultur- og aktivitetscenter. Vi ønsker at skabe et sted, hvor både borgere,
              foreninger og gæster fra nær og fjern kan mødes om oplevelser, der står i kontrast til det digitale:
              fysiske udstillinger, musik, samtaler og håndgribelig arkitektur.
            </p>
            <p>
              Filterhuset og{" "}
              <Link className="font-medium text-primary underline-offset-2 hover:underline" href="/">
                vandtårnet
              </Link>{" "}
              hører sammen som et helstøbt område: her kan man fornemme sammenhængen mellem rensning, lagring og
              forsyning — og samtidig se, hvordan omhyggelig restaurering har givet bygningerne nye funktioner uden at
              viske historien ud. Det styrker både lokal stolthed og forståelsen af, hvordan Grindsted er blevet til den
              by, den er i dag.
            </p>
            <p>
              I praksis betyder det, at der kan afholdes arrangementer, kunstudstillinger, workshops og events, som
              bidrager til fællesskab og kultur i hverdagen. Filterhuset skal være et sted, man gerne vender tilbage til
              — hvor nysgerrighed, kvalitet og respekt for stedet går hånd i hånd.
            </p>
            <p className="!mt-6">
              Vil du arrangere noget i Filterhuset, kan du kontakte formand Paw Kristensen på mail:{" "}
              <a className="font-semibold text-primary underline-offset-2 hover:underline" href={MAILTO}>
                paw@3pleuro.com
              </a>
              .
            </p>
          </Prose>
        </div>
      </AnimatedSection>
    </main>
  );
}
