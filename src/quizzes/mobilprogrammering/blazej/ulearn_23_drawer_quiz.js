const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hvorfor kan det være lurt å ha en egen ProfileContext i tillegg til en FormContext i en større app?",
        options: [
            "For å gjøre det mulig å bruke useState i komponenter",
            "For å separere ansvar og unngå at all state går gjennom én stor context",
            "For å kunne bruke flere API-nøkler samtidig",
            "For å slippe å bruke React hooks",
        ],
        correct: 1,
        explanation:
            "En egen ProfileContext gjør at profil-relatert state ikke blandes inn i all form-state. Det gir bedre separasjon av ansvar, færre unødvendige re-renders og enklere mental modell.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å bruke React Context til å dele profildata mellom ProfileSearch og StudentForm?",
        options: [
            "At komponentene kan oppdatere hverandre direkte uten props-drilling",
            "At komponentene rendres på serveren",
            "At vi slipper å bruke TypeScript",
            "At vi automatisk får caching av data",
        ],
        correct: 0,
        explanation:
            "Context lar deg dele state på tvers av komponenter uten å sende props gjennom alle mellomliggende komponenter (prop-drilling).",
    },
    {
        id: "q3",
        type: "true-false",
        question:
            "En ulempe med å legge for mye inn i én context (f.eks. FormContext) er at mange komponenter kan re-rendres hver gang en liten del av state endres.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Jo mer du legger i én context, jo fler komponenter blir avhengige av den. Når contexten oppdateres, kan mange komponenter re-rendres unødvendig.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er en typisk grunn til å introdusere et reducer-mønster (f.eks. formReducer) for form-state i stedet for bare useState?",
        options: [
            "Reducer gjør komponenten penere å se på",
            "Reducer gir bedre støtte for mange ulike actions og mer forutsigbar stateoppdatering",
            "Reducer brukes kun for server-state",
            "Reducer gjør at vi ikke trenger validering",
        ],
        correct: 1,
        explanation:
            "Reducer er nyttig når du har flere typer oppdateringer (SET_IMAGE, UPDATE_FORM_DATA, RESET_FORM osv.) og vil ha en tydelig og eksplisitt state-maskin.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvorfor kan det være nyttig å ha en egen SET_IMAGE-action i form-reduceren, i tillegg til en generell UPDATE_FORM_DATA?",
        options: [
            "For at React skal kunne kompilere koden",
            "For å kunne optimere byggestørrelsen",
            "For å gi bildeoppdatering en tydelig, separat flyt som er lett å spore og debugge",
            "For å unngå å bruke TypeScript enums",
        ],
        correct: 2,
        explanation:
            "En spesifikk action for bilde gjør det enklere å forstå og logge nøyaktig når og hvordan bilde-state endres, i stedet for at det drukner i generelle oppdateringer.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er en god grunn til å bruke en Drawer (skuff) til bildevalg i stedet for en ny fullskjerm-side?",
        options: [
            "Drawer kan kun brukes til filer og bilder",
            "Drawer lar deg beholde skjemaet synlig og gjør det lettere å se konteksten mens du velger bilde",
            "Drawer fungerer bare offline",
            "Drawer gjør all navigasjon raskere",
        ],
        correct: 1,
        explanation:
            "En drawer kan fungere som en sekundær overflate: du kan velge bilde og samtidig fortsatt være på skjemaet visuelt og mentalt.",
    },
    {
        id: "q7",
        type: "true-false",
        question:
            "En utfordring med å bruke Drawer til bildevalg er at bildevelgeren og skjemaet ofte ikke ligger i samme komponenttre, så man må synkronisere state via for eksempel context.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Drawer kan ha eget navigasjonstrær. For å koble bildevalget til skjemaet må man typisk bruke delt state (context / global form-state).",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er et typisk mønster for å synkronisere et bilde som er valgt i en Drawer med et skjema på hovedskjermen?",
        options: [
            "Lagre bildet i localStorage og lese det i hver render",
            "Bruke en delt context eller reducer som oppdateres fra Drawer, og som skjemaet lytter til",
            "Sende bildet via URL som query-parameter og aldri lagre det i state",
            "Man kan ikke synkronisere noe mellom Drawer og skjema",
        ],
        correct: 1,
        explanation:
            "Delt klient-state (via context/reducer) er en naturlig måte å dele resultatet av brukerens valg mellom uavhengige deler av UI.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvorfor er det viktig å validere filtype (f.eks. kun JPEG/PNG) når man laster opp bilder fra brukerens enhet?",
        options: [
            "For at brukeren skal se bedre bilder",
            "For å begrense hvilke filer som vises i galleriet",
            "For å unngå uventede formater som backend eller visning ikke støtter",
            "For å redusere minnebruken til React",
        ],
        correct: 2,
        explanation:
            "Hvis du ikke begrenser filtyper, kan du få filer som ikke kan prosesseres eller vises riktig, og potensielt mer kompleks feilhåndtering.",
    },
    {
        id: "q10",
        type: "true-false",
        question:
            "Det er en god praksis å sette en maks filstørrelse (f.eks. 2MB) ved opplasting av bilder fra mobil.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Maks filstørrelse beskytter både brukeren (båndbredde, ytelse) og serveren (ressurser, lagring).",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvorfor brukte vi z.coerce.number() på id-feltet i et skjema?",
        options: [
            "Fordi React Native TextInput alltid returnerer tall",
            "For at Zod skal kunne validere id uten at vi selv konverterer string til number",
            "For å hindre brukeren i å skrive tekst",
            "For at TypeScript automatisk skal generere id-er",
        ],
        correct: 1,
        explanation:
            "TextInput returnerer strenger, men vi vil validere som tall. z.coerce.number() gjør automatisk konvertering før validering.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er hovedpoenget med å bruke en asyncWrapper som returnerer Result-typer (success/error) rundt async-kall som filopplasting?",
        options: [
            "Å slippe å bruke try/catch helt",
            "Å få et konsistent format på suksess og feil som resten av koden kan forholde seg til",
            "Å gjøre koden tregere, men mer sikker",
            "Å gjøre det lettere å bruke global variabler",
        ],
        correct: 1,
        explanation:
            "Når alle async-kall returnerer Result<T>, blir håndtering av feil og data likt overalt, og UI kan reagere enklere.",
    },
    {
        id: "q13",
        type: "true-false",
        question:
            "Når man bruker useIsFocused til å returnere null når en skjerm ikke er i fokus, kan det føre til at komponenten mountes på nytt hver gang man navigerer tilbake.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Ja, dette kan være ønsket at skjema og state 'starts på nytt' når brukeren kommer tilbake til skjermen.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hvorfor kan det være lurt å nullstille form-state når man navigerer bort fra en skjerm (f.eks. ved tabPress eller etter submit)?",
        options: [
            "For å spare minne på brukerenheten",
            "For å unngå at gammel, utdatert form-data dukker opp neste gang skjermen åpnes",
            "For at React Navigation krever det",
            "For at validering skal slå seg av",
        ],
        correct: 1,
        explanation:
            "Hvis du ikke resetter state, kan brukeren komme tilbake til skjermen og se gamle input som ikke lenger er relevante.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er en god grunn til å ha en egen 'mode' på et skjema (f.eks. 'create' vs 'edit')?",
        options: [
            "For å kunne vise forskjellig tekst/oppførsel (f.eks. 'Registrer student' vs 'Oppdater student')",
            "For at React skal kunne skille komponentene",
            "For å deaktivere validering",
            "For å endre farge på skjemaet automatisk",
        ],
        correct: 0,
        explanation:
            "Mode gjør det enkelt å gjenbruke samme skjema både ved opprettelse og redigering, men gi riktig tekst og logikk.",
    },
    {
        id: "q16",
        type: "true-false",
        question:
            "Når vi bruker en delt ProfileContext, kan vi både vise valgt profil i et kort og bruke samme profildata inni skjemaet uten å løfte state med props.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Context gir én felles kilde til sannhet for profil, som alle relevante komponenter kan konsumere.",
    },
    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hva er en typisk grunn til å skille mellom 'local form state' (inne i skjemaet) og 'global form state' (via reducer/context)?",
        options: [
            "Local state er raskere enn global state",
            "Global state trengs når flere deler av appen må reagere på endringer i skjemaet (f.eks. Drawer + Form)",
            "Man må ha begge for at Zod skal fungere",
            "React Query krever det for mutation",
        ],
        correct: 1,
        explanation:
            "Hvis flere komponenter enn selve skjemaet trenger å kjenne til formdata (f.eks. Drawer som velger bilde), kan global form-state være nyttig.",
    },
    {
        id: "q18",
        type: "multiple-choice",
        question:
            "Hvorfor er det fornuftig å ha et eget steg hvor man velger profil før man viser selve student-skjemaet?",
        options: [
            "For å tvinge brukeren til å navigere mer",
            "For å sikre at vi alltid har en gyldig userId å knytte studenten til før vi lagrer",
            "For å redusere antall API-kall",
            "For å kunne validere bilde først",
        ],
        correct: 1,
        explanation:
            "Studenten skal være knyttet til en brukerprofil. Ved å velge profil først, sikrer vi at skjemaet har riktig userId.",
    },
    {
        id: "q19",
        type: "true-false",
        question:
            "Når vi henter bilder fra enheten (Camera Roll), må vi ta hensyn til brukerens tillatelser (permissions) før vi viser noe.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "På mobil må brukeren eksplisitt gi tilgang til mediebiblioteket før appen kan lese bilder.",
    },
    {
        id: "q20",
        type: "multiple-choice",
        question:
            "Hva er den overordnede gevinsten av denne typen refaktorering med Context, Drawer og tydeligere form/state-håndtering?",
        options: [
            "Mindre TypeScript i prosjektet",
            "Mer forutsigbar stateflyt, bedre brukeropplevelse og enklere vedlikehold",
            "Mindre bruk av hooks",
            "Mindre behov for validering",
        ],
        correct: 1,
        explanation:
            "Målet er å gjøre stateflyt tydelig, unngå skjult magi, og lage en løsning som er enklere å forstå, teste og videreutvikle.",
    },
];

export const drawer_quiz = {
    id: "drawer-l18-quiz",
    title: "L23 – Drawer, Context og bildevalg - BZJ",
    description:
        "Quiz som tester konsepter rundt Context, delt state, Drawer-bruk, bildeopplasting og robust formhåndtering.",
    theme: ["react-native", "forms", "navigations", "debugging", "validering"],
    questions: [...questions],
};
