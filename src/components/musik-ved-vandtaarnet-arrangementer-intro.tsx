/**
 * Forklaring af Musik ved Vandtårnet på arrangementer-siden.
 */
type ArrangementerMusikIntro = {
  musikIntroTitle: string;
  musikIntroP1: string;
  musikIntroP2: string;
  musikIntroP3: string;
};

export function MusikVedVandtaarnetArrangementerIntro({ copy }: { copy: ArrangementerMusikIntro }) {
  return (
    <div className="min-w-0 max-w-prose">
      <h2
        id="arrangementer-musik-intro-heading"
        className="font-serif text-2xl font-semibold tracking-tight text-brand-green md:text-3xl"
      >
        {copy.musikIntroTitle}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
        <p>{copy.musikIntroP1}</p>
        <p>{copy.musikIntroP2}</p>
        <p>{copy.musikIntroP3}</p>
      </div>
    </div>
  );
}
