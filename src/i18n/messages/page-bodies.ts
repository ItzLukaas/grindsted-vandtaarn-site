import type { Locale } from "@/i18n/config";

/** Sideindhold ud over forsiden (hero, split-afsnit, lister). */
export const pageBodies = {
  da: {
    booking: {
      heroSubtitle:
        "Banegårdsvej 32, 7200 Grindsted — kontakt os ved spørgsmål, rundvisning og booking.",
      h2: "Kontakt og booking",
      introBefore:
        "Har du spørgsmål, vil booke en oplevelse eller høre om mulighederne, skriver du til os på ",
      introAfter: ". Kort og besøgsadresse finder du også længere nede på siden.",
      h3Tours: "Historiske rundvisninger",
      toursBody:
        "Som gruppe — for eksempel forening, klasse eller vennekreds — kan I booke en historisk rundvisning i Grindsted Vandtårn på cirka halvanden time. I får fortællinger om tårnets historie og om Grindsteds tilblivelse som by. Rundvisningen aftales ved at kontakte os på mail.",
      h3View: "Se Grindsted fra oven",
      viewBefore:
        "Det er muligt at få adgang til det øverste dæk og taget på tårnet, hvor udsigten over Grindsted er en oplevelse i sig selv. Det skal bookes særskilt — skriv til os på ",
      viewAfter: ", så vi kan finde en tid, der passer.",
      h3Events: "Arrangementer ved tårnet, i Filterhuset og i parken",
      eventsBody:
        "Vandtårnet, Filterhuset og Vandtårnsparken kan bookes til mindre indendørs og udendørs arrangementer — for eksempel musik, sang, comedy, teater, forretningsreceptioner og meget andet. Har I idéer, forslag eller bare lyst til at tale mulighederne igennem, hører vi meget gerne fra jer på samme mailadresse.",
      visitAddress: "Besøgsadresse",
      mailLabel: "Mail",
      iframeTitle: "Kort over Grindsted Vandtårn, Banegårdsvej 32",
    },
    sponsorer: {
      heroSubtitle:
        "Et tak til dem, der er med — og en invitation til flere, der vil bidrage til vartegnet.",
      h2: "Tak til jer, der støtter",
      p1:
        "Sponsorer som 3PG gør det muligt at holde gang i drift, vedligehold og program omkring vandtårnet. Vi er glade for at kunne fremhæve jer her — og listen udbygges løbende, når flere ønsker at stå frem med logo og link.",
      p2a:
        "Vandtårnet er en del af Grindsted og omegns historie og kulturliv. Overvejer du sponsorat eller donation som virksomhed, forening eller privat, hører vi gerne fra dig på ",
      p2b: ", så vi kan tale om mulighederne og finde en løsning, der passer til jer.",
      p3a:
        "Små og mellemstore bidrag kan sendes via MobilePay 3833GK. Ved større beløb aftaler vi indbetaling på konto — skriv til os på ",
      p3b: ", så sender vi kontonummer efter aftale.",
    },
    samarbejde: {
      heroSubtitle: "Virksomheder og foreninger omkring byens vartegn.",
      splitH2: "Et fælles løft for Grindsted",
      splitP1:
        "Ambitionen er et åbent samlingspunkt, hvor historie og nutid møder byen. Vi stiller rammen om tårnet, filterhuset og parken, et levende program og en tydelig dialog med jer om alt fra sponsorat til længerevarende partnerskab. Målet er også at styrke livet i midtbyen og give borgere og gæster en grund til at samles og blive lidt længere, når der er noget på spil ved vartegnet.",
      splitP2:
        "Som virksomhed eller forening bidrager I med støtte og idéer, så driften og kulturen omkring vartegnet forbliver stærk. I kan være med til alt fra musik og arrangementer til det praktiske omkring drift og synlighed. Vi lover tydelige aftaler, ærlig dialog og samarbejder, der giver mening for jer og for os, og som I kan stå inde for udadtil.",
      splitP3:
        "Vi tror på, at samarbejdet skal kunne mærkes i byen, hos jer og hos dem, der bruger området. Jo tættere vi arbejder sammen, jo lettere er det at skabe noget, der både føles lokalt forankret og ambitiøst nok til at bære fremad.",
      splitP4a:
        "Skulle det være af interesse for jer, jeres virksomhed eller jeres forening, er I meget velkomne til at skrive til os på ",
      splitP4b:
        ". Vi vender tilbage, så I kan høre mere om de konkrete muligheder.",
      benefitsH2: "Som vandtårns partner kan I blandt andet se frem til",
      benefits: [
        {
          title: "Gratis entré til udvalgte arrangementer",
          text: "Som partner får I adgang til en række arrangementer uden entré, så I kan være med til stemningen omkring tårnet.",
        },
        {
          title: "Synlighed omkring vartegnet",
          text: "Eksponering på sponsorside, sponsortavle og i det omfang, vi aftaler, så jeres støtte bliver synlig for borgere og gæster.",
        },
        {
          title: "Fællesskab og relationer",
          text: "I bliver en del af et stærkt netværk omkring Grindsted Vandtårn og får mulighed for at møde andre, der også bakker op om byen.",
        },
        {
          title: "Kultur og liv i Grindsted",
          text: "Jeres bidrag understøtter kultur, aktivitet og stolthed omkring et vartegn, vi gerne vil pleje sammen.",
        },
      ],
    },
    arrangementer: {
      heroSubtitle: "Kommende datoer og begivenheder — opdateres løbende.",
      musikIntroTitle: "Musik ved Vandtårnet",
      musikIntroP1:
        "Musik ved Vandtårnet er udendørs musik og liv omkring Grindsted Vandtårn — byens vartegn midt i centrum. Arrangementerne samler borgere og foreninger i Grindsted og trækker samtidig gæster til fra nabobyer og resten af regionen. På den måde håber vi, at flere får øje på midtbyen, handel i butikkerne, mad og noget at drikke på caféer og restauranter i nærheden — og for nogle et overnatningsophold på byens hoteller.",
      musikIntroP2:
        "Koncerterne og begivenhederne skal skabe fællesskab og mere aktivitet i Grindsted. Der er plads til mange mennesker foran tårnet, og stemningen er tænkt afslappet og folkelig. Musik ved Vandtårnet fungerer som et naturligt samlingspunkt ved Grindsted Vandtårn — et sted, man mødes, lytter til musikken og gerne bliver lidt længere i byen. Vi håber, at både borgere og handelslivet vil bakke op om initiativet.",
      musikIntroP3:
        "Konkrete datoer, tider og navne står i programmet herunder og opdateres løbende. Mange arrangementer hænger sammen med, når Vandtårnets Venner holder åbent tårn — så kan man ofte kombinere musik med et smut op i tårnet. Har du spørgsmål til adgang eller praktiske forhold, kan du altid kontakte os.",
      programTitle: "Program",
      announcedLater: "Annonceres senere",
      tilbageblikTitle: "Tilbageblik på et arrangement",
      tilbageblikLeadMobile: "Oplev stemningen fra et arrangement.",
      tilbageblikLeadDesktop: "Oplev stemningen fra et arrangement ved Grindsted Vandtårn.",
      tilbageblikIframeTitle: "Aftermovie — tilbageblik på arrangement ved Grindsted Vandtårn",
      posterAlt: "Plakat med Musik ved Vandtårnet, oversigt over koncerter ved Grindsted Vandtårn",
      lineupKicker: "Line up",
      lineupTitle: "Du kan bl.a. opleve følgende artister",
      lineupLead: "Et udvalg fra sommerens program ved Grindsted Vandtårn.",
    },
    galleri: {
      heroSubtitle: "Udvalgte fotos fra vandtårnsområdet — efter og under renoveringen.",
      h2After: "Efter renovering",
      h2UnderRenovering: "Under renovering",
      lightboxTitleEfter: "Efter renovering",
      lightboxTitleUnder: "Under renovering",
    },
    oplevelser: {
      heroSubtitle: "Vælg en side og dyk ned — alt er samlet omkring vandtårnet og naboerne.",
      openPage: "Åbn side",
      links: {
        "/samarbejde": { title: "Samarbejde", text: "For virksomheder og foreninger omkring vandtårnet." },
        "/hvad-bruges-det-til": { title: "Hvad bruges det til", text: "Rundvisning, koncerter, udsigt og booking." },
        "/ejeren": { title: "Ejeren", text: "Bag om Paw Kristensen og købet af vandtårnet." },
        "/arrangementer": { title: "Arrangementer", text: "Musik, jul, comedy og fællesskab." },
        "/filterhuset": { title: "Filterhuset", text: "Kulturhus og historisk bygning." },
        "/vandtaarnets-venner": { title: "Vandtårnets Venner", text: "Frivillige omkring drift og bevaring." },
        "/vandtaarnsparken": { title: "Vandtårnsparken", text: "Grøn oase omkring tårnet." },
        "/booking-og-besoeg": { title: "Booking & besøg", text: "Adresse, kort og kontakt." },
      },
    },
    hvadBruges: {
      heroTitle: "Hvad bruges det til?",
      heroSubtitle: "Kultur, udsigt og arrangementer i unikke rammer ved tårnet, filterhuset og parken.",
      areasAria: "Områder",
      lead:
        "Grindsted Vandtårn, oprindeligt bygget til vandforsyning, bruges i dag til kulturelle arrangementer og udstillinger. Tårnet fungerer også som et populært udsigtspunkt, hvor lokale og turister kan nyde udsigten. Du kan også booke tårnet, filterhuset eller vandtårnsparken til private arrangementer.",
      footerPrefix: "For booking og praktisk, se ",
      footerLinkLabel: "Booking & besøg",
      footerMid: " og mail til ",
    },
  },
  en: {
    booking: {
      heroSubtitle:
        "Banegårdsvej 32, 7200 Grindsted — contact us for questions, guided tours, and booking.",
      h2: "Contact and booking",
      introBefore:
        "If you want to ask a question, book an experience, or hear about the options, please email us at ",
      introAfter: ". You will also find the map and visiting address further down the page.",
      h3Tours: "Historical guided tours",
      toursBody:
        "As a group — for example an association, a class, or a circle of friends — you can book a historical tour of Grindsted Vandtårn for about ninety minutes. You will hear about the tower’s history and how Grindsted grew into the town it is today. Please arrange the tour by email.",
      h3View: "See Grindsted from above",
      viewBefore:
        "You can access the upper deck and the roof of the tower, where the view across Grindsted is an experience in itself. This must be booked separately — please email us at ",
      viewAfter: " so we can find a time that suits you.",
      h3Events: "Events at the tower, in the filter house, and in the park",
      eventsBody:
        "The tower, the filter house, and the water tower park can be booked for smaller indoor and outdoor events — for example music, singing, comedy, theatre, business receptions, and much more. If you have ideas, suggestions, or simply want to talk the options through, we would love to hear from you on the same email address.",
      visitAddress: "Visiting address",
      mailLabel: "Email",
      iframeTitle: "Map of Grindsted Vandtårn, Banegårdsvej 32",
    },
    sponsorer: {
      heroSubtitle:
        "A thank-you to everyone who is already involved — and an invitation to others who want to support the landmark.",
      h2: "Thank you for your support",
      p1:
        "Sponsors such as 3PG make it possible to keep operations, maintenance, and programming going around the tower. We are glad to highlight you here, and the list will grow as more partners wish to appear with a logo and link.",
      p2a:
        "The tower is part of the history and cultural life of Grindsted and the surrounding area. If you are considering sponsorship or a donation as a company, association, or private supporter, please email us at ",
      p2b: " so we can talk through the options and find an approach that suits you.",
      p3a:
        "Smaller and mid-sized gifts can be sent via MobilePay 3833GK. For larger amounts we arrange payment to a bank account — email us at ",
      p3b: " and we will send the account details after we have agreed the details.",
    },
    samarbejde: {
      heroSubtitle: "Companies and associations around the town’s landmark.",
      splitH2: "A shared lift for Grindsted",
      splitP1:
        "Our ambition is an open meeting place where history and the present meet the town. We provide the framework around the tower, the filter house, and the park, a lively programme, and a clear dialogue with you about everything from sponsorship to long-term partnerships. We also want to strengthen life in the town centre and give residents and visitors a reason to gather and stay a little longer when something is happening at the landmark.",
      splitP2:
        "As a company or association you contribute support and ideas so operations and culture around the landmark stay strong. You can be involved in everything from music and events to practical matters around operations and visibility. We offer clear agreements, honest dialogue, and partnerships that make sense for you and for us, and that you can stand behind in public.",
      splitP3:
        "We believe the partnership should be felt in the town, with you, and with everyone who uses the area. The closer we work together, the easier it is to create something that feels locally rooted and still ambitious enough to carry forward.",
      splitP4a:
        "If this could be relevant for you, your company, or your association, you are very welcome to email us at ",
      splitP4b: ". We will get back to you with more detail on the concrete options.",
      benefitsH2: "As a partner of the water tower you can, among other things, look forward to the following",
      benefits: [
        {
          title: "Free entry to selected events",
          text: "As a partner you gain access to a range of events without an entry fee, so you can join the atmosphere around the tower.",
        },
        {
          title: "Visibility around the landmark",
          text: "Exposure on the sponsor page, the sponsor board, and to the extent we agree, so your support is visible to residents and visitors.",
        },
        {
          title: "Community and relationships",
          text: "You become part of a strong network around Grindsted Vandtårn and can meet others who also support the town.",
        },
        {
          title: "Culture and life in Grindsted",
          text: "Your contribution supports culture, activity, and pride around a landmark we want to nurture together.",
        },
      ],
    },
    arrangementer: {
      heroSubtitle: "Upcoming dates and happenings — updated regularly.",
      musikIntroTitle: "Music at the water tower",
      musikIntroP1:
        "Music at the Water Tower is outdoor music and life around Grindsted Vandtårn — the town’s landmark in the heart of the centre. The events bring together residents and associations in Grindsted and also draw guests from neighbouring towns and the wider region. In that way we hope more people will notice the town centre, shopping, food and drink in nearby cafés and restaurants — and for some, an overnight stay in local hotels.",
      musikIntroP2:
        "The concerts and happenings are meant to build community and more activity in Grindsted. There is room for many people in front of the tower, and the mood is meant to be relaxed and welcoming. Music at the Water Tower works as a natural meeting point at Grindsted Vandtårn — somewhere you meet, listen to the music, and hopefully stay a little longer in town. We hope both residents and local businesses will support the initiative.",
      musikIntroP3:
        "Concrete dates, times, and names are listed in the programme below and are updated regularly. Many events connect with open tower days held by Friends of the Tower — so you can often combine music with a quick trip up the tower. If you have questions about access or practical matters, you are always welcome to contact us.",
      programTitle: "Programme",
      announcedLater: "To be announced",
      tilbageblikTitle: "Look back at an event",
      tilbageblikLeadMobile: "Feel the atmosphere from an event.",
      tilbageblikLeadDesktop: "Feel the atmosphere from an event at Grindsted Vandtårn.",
      tilbageblikIframeTitle: "Aftermovie — look back at an event at Grindsted Vandtårn",
      posterAlt: "Poster for Music at the Water Tower, overview of concerts at Grindsted Vandtårn",
      lineupKicker: "Line-up",
      lineupTitle: "Among others you can experience these artists",
      lineupLead: "A selection from the summer programme at Grindsted Vandtårn.",
    },
    galleri: {
      heroSubtitle: "Selected photos from the water tower area — after and during the renovation.",
      h2After: "After the renovation",
      h2UnderRenovering: "During the renovation",
      lightboxTitleEfter: "After the renovation",
      lightboxTitleUnder: "During the renovation",
    },
    oplevelser: {
      heroSubtitle: "Choose a page and dive in — everything is gathered around the tower and its neighbours.",
      openPage: "Open page",
      links: {
        "/samarbejde": {
          title: "Partnerships",
          text: "For companies and associations around the water tower.",
        },
        "/hvad-bruges-det-til": {
          title: "What it is used for",
          text: "Tours, concerts, views, and booking.",
        },
        "/ejeren": { title: "The owner", text: "Behind Paw Kristensen and the purchase of the tower." },
        "/arrangementer": { title: "Events", text: "Music, Christmas, comedy, and community." },
        "/filterhuset": { title: "The filter house", text: "Cultural venue and historic building." },
        "/vandtaarnets-venner": {
          title: "Friends of the Tower",
          text: "Volunteers around operations and preservation.",
        },
        "/vandtaarnsparken": { title: "The water tower park", text: "A green space around the tower." },
        "/booking-og-besoeg": { title: "Booking & visits", text: "Address, map, and contact." },
      },
    },
    hvadBruges: {
      heroTitle: "What is it used for?",
      heroSubtitle: "Culture, views, and events in unique surroundings by the tower, the filter house, and the park.",
      areasAria: "Areas",
      lead:
        "Grindsted Vandtårn, originally built for the water supply, is used today for cultural events and exhibitions. The tower is also a popular viewpoint where locals and visitors can enjoy the outlook. You can also book the tower, the filter house, or the water tower park for private events.",
      footerPrefix: "For booking and practical matters, see ",
      footerLinkLabel: "Booking & visits",
      footerMid: " and email ",
    },
  },
} satisfies Record<Locale, unknown>;
