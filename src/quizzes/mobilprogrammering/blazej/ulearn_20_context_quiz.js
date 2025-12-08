const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva er hovedproblemet React Context er laget for å løse?",
        options: [
            "Å erstatte all lokal state i komponenter",
            "Å unngå prop drilling ved å dele data på tvers av komponenttreet uten å sende props gjennom alle mellomleddene",
            "Å gjøre komponenter raskere å rendere",
            "Å håndtere nettverkskall automatisk",
        ],
        correct: 1,
        explanation:
            "Context lar deg dele data på tvers av komponenter uten å sende props gjennom hvert nivå (prop drilling).",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question: "Hvilke tre deler består Context-bruken typisk av i React?",
        options: [
            "Store, Reducer, Middleware",
            "Provider, Selector, Dispatch",
            "Context-objekt, Provider-komponent, bruk via useContext/use",
            "Action, Payload, State",
        ],
        correct: 2,
        explanation:
            "Du oppretter et Context-objekt, bruker en Provider til å dele verdier, og leser den via useContext (eller use i React 19).",
    },
    {
        id: "q3",
        type: "true-false",
        question:
            "Context er mest egnet for «global» tilstand innenfor et område av appen, som tema, innlogget bruker eller felles skjemastatus.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Context er laget for delt tilstand og funksjoner som flere komponenter trenger, ikke som erstatning for all lokal state.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva gjør useContext (eller use i React 19) rent prinsipielt?",
        options: [
            "Oppretter et nytt Context-objekt",
            "Registrerer en reducer automatisk",
            "Henter gjeldende value fra nærmeste tilhørende Provider for et gitt Context",
            "Forsinker rerendringer i komponenten",
        ],
        correct: 2,
        explanation:
            "useContext/use slår opp verdien fra nærmeste Provider for det Context-objektet og gir deg data/funksjoner som er delt der.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question: "Hva kjennetegner en reducer-funksjon i React-sammenheng?",
        options: [
            "Den må alltid gjøre API-kall",
            "Den tar inn (state, action) og returnerer en ny state uten sideeffekter",
            "Den muterer state-objektet direkte",
            "Den rendrer JSX direkte",
        ],
        correct: 1,
        explanation:
            "En reducer er en ren funksjon: (state, action) => newState, uten direkte sideeffekter.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor er det nyttig å samle tilstandsoppdateringer i et reducer-mønster i stedet for å spraye useState overalt?",
        options: [
            "Reducer gjør komponenter ukjørbare uten DevTools",
            "Reducer hindrer komponenter i å rerendre",
            "Reducer gir mer forutsigbar, sentralisert og testbar logikk for tilstandsendringer",
            "Reducer er raskere enn alle andre løsninger i alle situasjoner",
        ],
        correct: 2,
        explanation:
            "All oppdateringslogikk samles ett sted, er lettere å utvide, og enklere å teste og forstå.",
    },
    {
        id: "q7",
        type: "true-false",
        question:
            "En action i reducer-mønsteret beskriver *hva som skjedde*, ikke *hvordan* state skal oppdateres.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Action beskriver intensjonen (f.eks. UPDATE_FORM_DATA), mens reducer definerer hvordan state endres basert på action.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er poenget med å lage en egen Context-provider rundt et sett med ruter (for eksempel en admin-del av appen)?",
        options: [
            "For å redusere antall filer i prosjektet",
            "For å begrense den delte tilstanden til akkurat den delen av appen som trenger den",
            "For å deaktivere lokal state i underkomponenter",
            "For å gjøre det mulig å bruke CSS-moduler",
        ],
        correct: 1,
        explanation:
            "Ved å plassere Provider rundt en del av treet, blir Context-tilstanden lokal for den «delen» av applikasjonen.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å lage et eget hook som useFormContext (i stedet for å bruke useContext(FormContext) direkte overalt)?",
        options: [
            "Det gjør at vi kan bruke hooket utenfor React-komponenter",
            "Vi kan kapsle inn feilhåndtering (sjekke at Provider finnes) og skjule implementasjonsdetaljene",
            "Det fjerner behovet for en Provider",
            "Det gjør Context synlig i global window-variabel",
        ],
        correct: 1,
        explanation:
            "Et custom hook kan sjekke at vi faktisk er inne i en Provider, og eksponere kun det som trengs (state, dispatch, etc.).",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            'Hva er det prinsipielle målet med å bruke Context + reducer for å spore om et skjema har "ulagrede endringer"?',
        options: [
            "Å lagre skjemaet automatisk til server ved hver tast",
            "Å kunne sjekke felles status (for eksempel 'dirty') på tvers av skjermer og navigasjon, for å advare før brukeren forlater skjermen",
            "Å gjøre skjemakomponenten mindre gjenbrukbar",
            "Å unngå å bruke validering i skjemaer",
        ],
        correct: 1,
        explanation:
            "En global formstate kan fortelle navigasjonslaget at det finnes ulagrede endringer og blokkere/varsle før man navigerer bort.",
    },
    {
        id: "q11",
        type: "true-false",
        question:
            'Eventer som tabPress og beforeRemove i navigasjon kan brukes som "guards" for å stoppe navigasjon mens en global Context-tilstand sier at det finnes ulagrede endringer.',
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Man kan avbryte navigasjonen (e.preventDefault()) og vise en bekreftelsesdialog basert på state i Context.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er den viktigste syntaktiske endringen for Context i React 19 sammenlignet med tidligere versjoner?",
        options: [
            "Context kan bare brukes i klasser, ikke funksjonskomponenter",
            "Du må alltid bruke flere Providere",
            "Du kan bruke Context direkte som komponent ( <FormContext value={...}> ) i stedet for .Provider",
            "Context er fjernet og erstattet av Redux",
        ],
        correct: 2,
        explanation:
            "I React 19 kan du skrive <MyContext value={...}>{children}</MyContext> i stedet for <MyContext.Provider value={...}>.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva gjør den nye use-hooken i React 19 når den brukes med Context (use(MyContext))?",
        options: [
            "Oppretter en ny Provider automatisk",
            "Returnerer en reducer-funksjon",
            "Leser Context-verdien, tilsvarende useContext(MyContext), men med forbedret støtte og integrasjon",
            "Deaktiverer rerendringer når Context endres",
        ],
        correct: 2,
        explanation:
            "use(MyContext) er den nye måten å konsumere Context på, som erstatter useContext og gir bedre integrasjon på sikt.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Når bør du begynne å vurdere eksterne tilstands-biblioteker (som Zustand, Redux, Jotai) i stedet for å kun bruke Context?",
        options: [
            "Når appen har én knapp og én state-variabel",
            "Når du trenger avansert global tilstand, time-travel debugging, middleware eller har mange kryss-avhengige tilstander",
            "Når du ikke ønsker å bruke React lenger",
            "Når du vil unngå å strukturere prosjektet",
        ],
        correct: 1,
        explanation:
            "Ved kompleks global tilstand, avanserte krav og ytelsesutfordringer kan dedikerte state-biblioteker være et bedre valg enn ren Context.",
    },
    {
        id: "q15",
        type: "true-false",
        question:
            "En feature-basert mappestruktur betyr at komponenter, hooks, context, API-kall og typer som hører til samme funksjonalitet samles i én feature-mappe.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Feature-baserte mapper (f.eks. features/users/...) gjør det enklere å finne, vedlikeholde og gjenbruke hele funksjonaliteter.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hva er en praktisk fordel med å gruppere alt relatert til en feature (komponenter, hooks, context, API, typer) i én mappe?",
        options: [
            "Det gjør imports umulig",
            "Det gjør at Context ikke kan brukes",
            "Det blir enklere å flytte eller gjenbruke hele funksjonaliteten mellom prosjekter og å navigere i koden",
            "Det tvinger deg til å bruke Redux",
        ],
        correct: 2,
        explanation:
            "Feature-mapper gjør det lettere å holde alt relatert samlet og muliggjør gjenbruk og flytting av hele features.",
    },
];

export const react_context_quiz = {
    id: "react-context-quiz",
    title: "L20 - React Context, reducer og tilstandshåndtering - BZJ",
    description:
        "Quiz med fokus på prinsipper: Context API, reducer-mønster, navigasjonsguards, React 19-forbedringer og strukturering av større applikasjoner.",
    theme: ["react-native", "states", "arkitektur", "navigation"],
    questions: [...questions],
};
