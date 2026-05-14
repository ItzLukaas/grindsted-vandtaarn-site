import Image from "next/image";
import { MusikVedVandtaarnetArrangementerIntro } from "@/components/musik-ved-vandtaarnet-arrangementer-intro";

const artists = [
  {
    key: "helge-tommy",
    alt: "Helge Engelbrecht & Tommy Rasmussen",
    lines: ["Helge Engelbrecht", "& Tommy Rasmussen"] as const,
    imageSrc: "/helegetommy.jpg",
  },
  {
    key: "takeoff",
    alt: "TAKEOFF",
    lines: ["TAKEOFF"] as const,
    imageSrc: "/takeoff.jpg",
  },
  {
    key: "morten",
    alt: "Morten Husted Live",
    lines: ["Morten Husted Live"] as const,
    imageSrc: "/mortenhusted.jpg",
  },
  {
    key: "rattlesnakes",
    alt: "Rattlesnakes",
    lines: ["Rattlesnakes"] as const,
    imageSrc: "/rattlesnakes.jpg",
  },
] as const;

type LineupCopy = {
  lineupKicker: string;
  lineupTitle: string;
  lineupLead: string;
};

export function MusikArtistLineup({ copy }: { copy: LineupCopy }) {
  return (
    <div className="mx-auto mt-12 w-[min(1120px,92vw)] md:mt-14">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">{copy.lineupKicker}</p>
      <h2
        id="arrangementer-lineup-heading"
        className="mt-2 text-balance font-serif text-2xl font-semibold tracking-tight text-brand-green no-underline max-md:text-base max-md:leading-snug md:text-3xl"
      >
        {copy.lineupTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">{copy.lineupLead}</p>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {artists.map((a) => (
          <li key={a.key} className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
            <Image
              src={a.imageSrc}
              alt={a.alt}
              title={a.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 46vw, (max-width: 1024px) 23vw, 260px"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-3 pb-3 pt-14 sm:px-4 sm:pb-4 sm:pt-16">
              <p className="font-serif text-sm font-semibold leading-snug text-white drop-shadow-sm sm:text-base">
                {a.lines.map((line) => (
                  <span key={line} className="block leading-snug">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ArrangementerMusikBlock = {
  musikIntroTitle: string;
  musikIntroP1: string;
  musikIntroP2: string;
  musikIntroP3: string;
  programTitle: string;
  announcedLater: string;
  posterAlt: string;
  lineupKicker: string;
  lineupTitle: string;
  lineupLead: string;
};

const POSTER_SRC = "/musik-ved-vandtaarnet-plakat-2026.png";

const concerts = [
  { date: "28. maj", time: "16.30–19.30", artist: "Helge Engelbrecht & Tommy Rasmussen" },
  { date: "25. juni", time: "16.30–19.30", artist: "TAKEOFF" },
  { date: "27. juni", time: "13.00–21.00", artist: "DJ Lounge Festival «7200» + Morten Husted Live" },
  { date: "27. august", time: "16.30–19.30", artist: "Rattlesnakes" },
  { date: "24. september", time: "16.30–19.30", artist: "Annonceres senere" },
  { date: "19. december", time: "11.00–13.00", artist: "Julemanden besøger Vandtårnet" },
  { date: "23. december", time: "14.30–17.00", artist: "Juleafslutning" },
] as const;

export function MusikVedVandtaarnetSection({ copy }: { copy: ArrangementerMusikBlock }) {
  const intro = {
    musikIntroTitle: copy.musikIntroTitle,
    musikIntroP1: copy.musikIntroP1,
    musikIntroP2: copy.musikIntroP2,
    musikIntroP3: copy.musikIntroP3,
  };
  const lineup = {
    lineupKicker: copy.lineupKicker,
    lineupTitle: copy.lineupTitle,
    lineupLead: copy.lineupLead,
  };

  return (
    <section
      className="border-y border-border bg-muted/25 py-14 md:py-20"
      aria-labelledby="arrangementer-musik-intro-heading arrangementer-program-heading arrangementer-lineup-heading"
    >
      <div className="mx-auto grid w-[min(1120px,92vw)] grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,1.12fr)] md:items-start md:gap-12 lg:gap-14">
        <MusikVedVandtaarnetArrangementerIntro copy={intro} />

        <div className="flex w-full min-w-0 items-center justify-center md:min-w-[280px] md:justify-end">
          <div className="relative mx-auto aspect-[3/4] w-full max-h-[min(72vh,640px)] min-h-[260px] max-w-[min(100%,400px)] overflow-hidden sm:min-h-[300px] md:mx-0 md:max-h-[min(78vh,680px)] md:max-w-none md:min-h-[360px]">
            <Image
              src={POSTER_SRC}
              alt={copy.posterAlt}
              title={copy.posterAlt}
              fill
              className="object-contain object-top md:object-center"
              sizes="(max-width: 768px) 92vw, (max-width: 1280px) 42vw, 420px"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 w-[min(720px,92vw)] md:mt-14">
        <h2
          id="arrangementer-program-heading"
          className="font-serif text-2xl font-semibold tracking-tight text-brand-green md:text-3xl"
        >
          {copy.programTitle}
        </h2>

        <ul className="mt-6 border-t border-border/80 md:mt-8">
          {concerts.map((row) => (
            <li
              key={`${row.date}-${row.artist}`}
              className="flex flex-col gap-1 border-b border-border/60 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-3.5"
            >
              <p className="min-w-0 text-[15px] font-medium leading-snug text-foreground md:text-base">
                {row.artist}
              </p>
              <div className="flex shrink-0 flex-wrap items-baseline gap-x-3 text-sm tabular-nums text-muted-foreground sm:text-right">
                <span className="font-medium text-brand-green">{row.date}</span>
                <span className="text-muted-foreground/90">{row.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <MusikArtistLineup copy={lineup} />
    </section>
  );
}
