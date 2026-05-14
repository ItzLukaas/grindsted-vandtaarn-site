import type { Metadata } from "next";
import Link from "next/link";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { SplitMediaSection } from "@/components/split-media-section";
import { vandtaarnsparkenImages } from "@/data/site-images";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/vandtaarnsparken",
    titleSegment: dict.meta.vandtaarnsparkenTitle,
    description: dict.meta.vandtaarnsparkenDescription,
  });
}

export default function VandtaarnsparkenPage() {
  return (
    <main>
      <PageIntroEditorial
        variant="hero"
        title="Vandtårnsparken"
        subtitle="Til større fælles oplevelser i Vandtårnsparken."
      />

      <SplitMediaSection image={vandtaarnsparkenImages[0]} className="bg-card" delay={0.04}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">Vandtårnsparken</h2>
          <p>
            Vandtårnsparken er parken omkring vandtårnet og filterhuset. Den lille oase omkring bygningerne er ligeledes
            blevet renoveret som en del af hele vandtårnsområdet, og der er{" "}
            <strong>adgang til parken på udvalgte dage og i bestemte tidsrum</strong>. De aktuelle muligheder finder du
            hos{" "}
            <Link className="font-medium text-primary underline-offset-2 hover:underline" href="/vandtaarnets-venner">
              Vandtårnets Venner
            </Link>
            .
          </p>
          <p>
            I dag er Vandtårnsparken et grønt område, der er populært til rekreation og udendørs aktiviteter — et
            pusterum tæt på byens puls, hvor man kan gå en tur, nyde udsigten til tårnet og mærke sammenhængen mellem
            kultur, natur og byens historie.
          </p>
        </Prose>
      </SplitMediaSection>

      <SplitMediaSection image={vandtaarnsparkenImages[1]} imageLeft className="bg-background" delay={0.06}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">Parkens udtryk</h2>
          <p>
            Parken har små stier, bænke, græsarealer og lysoplevelser. Den ligger tæt på byens centrum og er indrettet med
            statuer samt planter og buske fra flere steder i verden — så oplevelsen både føles tryg, grøn og lidt
            eventyrlig, når man bevæger sig gennem området.
          </p>
          <p>
            Samlet set er Vandtårnsparken med til at binde hele området sammen: her mødes linjerne fra arkitekturen,
            lydene fra byen og roen fra det grønne — et sted, hvor man kan sætte sig et øjeblik og mærke, at vartegnet
            også har en blød, åben side ud mod lokalsamfundet.
          </p>
        </Prose>
      </SplitMediaSection>

      <SplitMediaSection image={vandtaarnsparkenImages[2]} className="bg-card" delay={0.08}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">
            Tårn og filterhus i samme park
          </h2>
          <p>
            Vandtårnsparken er det grønne naturområde, der <strong>samler Grindsted Vandtårn og Filterhuset</strong> i
            én helhed ud mod omgivelserne. Parken er tænkt som et fleksibelt uderum: her kan der køres foodtrucks ind,
            der kan opstilles barer til drikkevarer, og der er plads til både sidde- og ståpladser, borde og stole, lys
            og stemning — alt sammen i et hyggeligt og <strong>velholdt samlingspunkt</strong> med plads til mange
            mennesker i trygge og indbydende rammer.
          </p>
          <p>
            Til åbningen af Grindsted Vandtårn var der både foodtruck, fadølsanlæg, ståborde, stole og koncerter —{" "}
            <strong>et klassisk eksempel</strong> på, hvad Vandtårnsparken kan rumme, når området foldes ud som ét stort
            udendørsarrangement. Netop den type løsninger er parken skabt til: at kunne bære alt fra små, intime
            sammenkomster til større folkefestlige oplevelser, hvor flow, overskuelighed og stemning spiller sammen.
          </p>
          <p>
            Uanset om det er musik, taler, markeder eller noget helt andet, giver parkens udformning mulighed for at
            skabe zoner — til at spise, drikke, lytte og være sammen — uden at man mister følelsen af at stå midt i et
            velplejet byrum med respekt for både naboer, natur og det ikoniske vandtårn i baggrunden.
          </p>
        </Prose>
      </SplitMediaSection>
    </main>
  );
}
