import type { Metadata } from "next";
import Link from "next/link";
import { PageIntroEditorial } from "@/components/page-intro-variants";
import { Prose } from "@/components/prose";
import { SplitMediaSection } from "@/components/split-media-section";
import { vandtaarnetsVennerImages } from "@/data/site-images";
import { MAILTO } from "@/lib/site-constants";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/page-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary();
  return buildPageMetadata({
    path: "/vandtaarnets-venner",
    titleSegment: dict.meta.vennerTitle,
    description: dict.meta.vennerDescription,
  });
}

const AABENT_TAARN_2026 = [
  { label: "Lørdag 28/03", time: "13.00 – 16.00" },
  { label: "Lørdag 25/04", time: "13.00 – 16.00" },
  { label: "Lørdag 30/05", time: "13.00 – 16.00" },
  { label: "Lørdag 27/06", time: "13.00 – 16.00" },
  { label: "Lørdag 25/07", time: "13.00 – 16.00" },
  { label: "Lørdag 29/08", time: "13.00 – 16.00" },
  { label: "Lørdag 26/09", time: "13.00 – 16.00" },
  { label: "Lørdag 30/10", time: "13.00 – 16.00" },
] as const;

export default function VennerPage() {
  const [img1, img2, img3] = vandtaarnetsVennerImages;

  return (
    <main>
      <PageIntroEditorial
        variant="hero"
        title="Vandtårnets Venner"
        subtitle="En frivillig forening omkring Grindsted Vandtårn — åbne dage og hjerte for vartegnet."
      />

      <SplitMediaSection image={img1} className="bg-card" delay={0.04}>
        <Prose>
          <p>
            Gennem hele 2026 står <strong>Bøje Bertelsen</strong> og <strong>Kristian Pedersen</strong> fra Vandtårnets
            Venner for de faste åbningsdage og for, at der med jævne mellemrum er åbent tårn — så borgere og gæster kan
            møde vartegnet på nærmeste hold. På disse dage er der desuden mulighed for at købe kaffe, vand og lidt til
            ganen; en enkel ramme, der giver plads til samvær og samtale, mens man er forbi.
          </p>
          <h2 className="!mt-10 font-serif text-xl font-semibold text-brand-green md:text-2xl">
            Kalender — åbent tårn i 2026
          </h2>
          <ul className="!mt-4 list-none space-y-2.5 pl-0">
            {AABENT_TAARN_2026.map((row) => (
              <li key={row.label} className="flex gap-3 text-foreground/90">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage/75"
                  aria-hidden
                />
                <span>
                  <span className="font-medium text-foreground">{row.label}</span>{" "}
                  <span className="text-foreground/75">fra {row.time}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="!mt-8 text-[1.02em] font-medium leading-relaxed text-foreground md:text-lg">
            Alle er hjerteligt velkomne — uanset om det er første besøg eller en gentaget tur op i det kendte tårn.
          </p>
        </Prose>
      </SplitMediaSection>

      <SplitMediaSection image={img2} imageLeft className="bg-background" delay={0.06}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">
            Frivillighed og fællesskab
          </h2>
          <p>
            Vi kan til enhver tid bruge gode, pålidelige kræfter omkring Grindsted Vandtårn. Ønsker du — eller nogen du
            kender — at indgå i det fællesskab, der knytter sig til tårnet og til byens historie, er døren åben for en
            uformel samtale om mulighederne — i et tempo, der passer dig.
          </p>
          <h2 className="!mt-10 font-serif text-xl font-semibold text-brand-green md:text-2xl">
            Formål og indsats
          </h2>
          <p>
            Vandtårnets Venners arbejde hviler på et enkelt, men krævende formål: at udbrede kendskabet til og den
            positive forståelse af Grindsted Vandtårn og af Grindsted som by. Det sker gennem mødet med mennesker,
            gennem ord og gennem den tålmodige forklaring af, hvad vartegnet har betydet — og hvad det kan betyde fremad.
          </p>
          <p>
            Dertil kommer en bred vifte af praktiske, frivillige opgaver i forbindelse med arrangementer ved og omkring
            vandtårnet. Her mødes ansvar for stedet, respekt for historien og omsorg for dem, der besøger os; det er den
            balance, foreningen søger at holde i hverdagen.
          </p>
          <p>
            I Vandtårnets Venner byder vi altid nye, positive bekendtskaber velkommen med både varme og professionalitet:
            plads til samtale, når den naturligt opstår, og plads til fokus, når opgaven kræver det.
          </p>
        </Prose>
      </SplitMediaSection>

      <SplitMediaSection image={img3} className="bg-card" delay={0.08}>
        <Prose>
          <h2 className="!mt-0 font-serif text-xl font-semibold text-brand-green md:text-2xl">
            Arrangementer, adgang og oplevelse
          </h2>
          <p>
            Foreningen står blandt andet for at sammensætte og afveksle arrangementer som <em>Åbent tårn</em>, så
            gæsterne gradvist kan udforske hele området. Det giver adgang til{" "}
            <Link className="font-semibold text-primary underline-offset-2 hover:underline" href="/filterhuset">
              Filterhuset
            </Link>
            , til selve vandtårnet og til de indre rum, hvor arkitektur og historie mødes. Fra tårnets top åbner der sig
            udsigten over Grindsted — et skridt, der for mange samler byen til et fælles perspektiv. Alt det, der hører
            med, når tårnet for en stund åbner sine døre for offentligheden, er en del af den oplevelse, Vandtårnets
            Venner arbejder for at formidle med omhu.
          </p>
          <p className="!mt-8">
            Ønsker du at være en del af dette stærke fællesskab og bidrage positivt til driften omkring Grindsted
            Vandtårn, er du meget velkommen til at kontakte os på{" "}
            <a className="font-semibold text-primary underline-offset-2 hover:underline" href={MAILTO}>
              paw@3pleuro.com
            </a>
            .
          </p>
        </Prose>
      </SplitMediaSection>
    </main>
  );
}
