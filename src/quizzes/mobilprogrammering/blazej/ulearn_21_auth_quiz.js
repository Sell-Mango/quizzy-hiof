const questions = [
    // --- GRUNNPRINSIPPER AUTENTISERING ---

    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er den viktigste grunnen til at vi **ikke** bør implementere vår egen auth-løsning fra scratch i et ordentlig prosjekt?",
        options: [
            "Det er umulig å implementere login med e-post og passord selv",
            "Det er juridisk forbudt å lage egen auth",
            "Sikkerhet er vanskelig, og ferdige løsninger har gjennomtestet flows, sikkerhet og verktøy vi ellers måtte bygge selv",
            "Fordi det ikke fungerer på mobil",
        ],
        correct: 2,
        explanation:
            "Auth er sikkerhetskritisk og lett å gjøre feil. Etablert tredjepart har ferdige løsninger, sikkerhetsreview og verktøy.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er **hovedforskjellen** på klientbasert og serverbasert autentisering?",
        options: [
            "Klientbasert skjer bare i nettleser, serverbasert bare på mobil",
            "Klientbasert gjør auth-sjekk i frontenden, serverbasert verifiserer og håndhever tilgang på en server brukeren ikke kontrollerer",
            "Serverbasert trenger ikke brukernavn/passord",
            "Klientbasert er alltid sikrere enn serverbasert",
        ],
        correct: 1,
        explanation:
            "Klientbasert auth handler om hva UI får vise. Serverbasert kontrollerer tilgang til faktiske data/operasjoner på en sikker server.",
    },
    {
        id: "q3",
        type: "true-false",
        question:
            "Klient-side guards (for eksempel route-guards i React Native) er **alene** tilstrekkelig for å beskytte sensitive data.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Usant. Klientkode kan manipuleres. Sensitiv data/operasjoner må uansett beskyttes server-side.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvilken påstand beskriver **rollen** til auth-contexten vi satte opp?",
        options: [
            "Den krypterer trafikken mellom mobil og server",
            "Den holder styr på innlogget bruker, lastestatus og rolle, og gjør dette tilgjengelig i hele appen uten prop drilling",
            "Den erstatter backenden fullstendig",
            "Den brukes bare til å validere skjema",
        ],
        correct: 1,
        explanation:
            "Auth-context gir delt state: user, isLoggedIn, isAdmin, isLoading osv. til resten av appen.",
    },

    // --- ROLLER OG ROLE-BASED ACCESS CONTROL (RBAC) ---

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvorfor definerer vi roller som et ROLES-objekt (f.eks. ROLES.ADMIN, ROLES.USER) i stedet for å bruke fritekst-strenger overalt?",
        options: [
            "Det er raskere i runtime",
            "Det ser mer profesjonelt ut",
            "Det reduserer risiko for stavefeil, gir typer og mer konsistente sammenligninger",
            "Det er et krav i React",
        ],
        correct: 2,
        explanation:
            "Konstante rolleverdier + types gir tryggere kode og færre bugs enn 'magiske strenger'.",
    },
    {
        id: "q6",
        type: "true-false",
        question:
            "Når vi har en `role` på brukeren, kan vi bruke den både til å skjule UI (f.eks. knapper) og til å begrense hvilke ruter brukeren får tilgang til.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Sant. Rolle brukes både til visuell tilgang (UI) og navigasjons-/route-guards.",
    },

    // --- AUTH-CONTEXT & PROVIDER ---

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er poenget med å ha både `isLoading` og `isLoaded` i AuthProvider?",
        options: [
            "`isLoading` er bare for styling, `isLoaded` for data",
            "`isLoading` sier om vi *akkurat nå* gjør noe, `isLoaded` om initial auth-check er ferdig så vi kan vise appen trygt",
            "De betyr det samme, vi kunne droppet en av dem",
            "De brukes bare for å unngå TypeScript-feil",
        ],
        correct: 1,
        explanation:
            "Vi trenger å vite både om en operasjon pågår og om første autentiseringsrunde er ferdig.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hvorfor har AuthProvider helper-funksjoner som `resetLoading` og `setLoadings`?",
        options: [
            "For å slippe å importere useState",
            "For å samle oppdatert lastelogikk ett sted og unngå duplisering (`loading=true/false`, `isLoaded=true/false`)",
            "For å gjøre komponenten tregere med vilje",
            "For å skru av all rerendering",
        ],
        correct: 1,
        explanation:
            "Samlet lastelogikk gir færre feil og mindre copy-paste rundt i koden.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva betyr det at `login`, `logout` og `register` i AuthContext er definert som `async () => Promise<void>` sett fra resten av appen?",
        options: [
            "At de ikke kan feile",
            "At de returnerer rå Appwrite-responser",
            "At komponenter kan `await` dem og reagere etter at auth-operasjonen er ferdig (navigasjon, feilmeldinger osv.)",
            "At de bare kan kalles én gang",
        ],
        correct: 2,
        explanation:
            "De er asynkrone operasjoner; UI kan vente på dem før videre logikk (f.eks. redirect).",
    },

    // --- GUARDS & NAVIGASJON ---

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er **formålet** med å bruke guards som `Stack.Protected guard={...}` i Expo Router?",
        options: [
            "Å style headeren penere",
            "Å definere hvilke skjermer som bare skal være tilgjengelige når en betingelse (f.eks. isLoggedIn, isAdmin) er oppfylt",
            "Å redusere bundlestørrelsen",
            "Å hindre at appen starter på iOS",
        ],
        correct: 1,
        explanation:
            "Guards avgjør om ruter er tilgjengelige eller om brukeren skal redirectes til en annen skjerm.",
    },
    {
        id: "q11",
        type: "true-false",
        question:
            "`Stack.Protected guard={isAdmin}` gjør at alle skjermene definert inni blokken kun er tilgjengelige for brukere med admin-rolle.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Bare de skjermene som ligger inne i denne blokka blir styrt av guard-betingelsen.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er hovedforskjellen på å bruke **route-guards** vs bare å skjule knapper i UI for uautoriserte brukere?",
        options: [
            "Det er ingen forskjell",
            "Skjule knapper er kun kosmetikk; route-guards stopper faktisk navigasjon selv om noen prøver å gå til URL manuelt",
            "Route-guards fungerer bare på Android",
            "Skjule knapper er sikrere enn route-guards",
        ],
        correct: 1,
        explanation:
            "UI-hiding hindrer 'klikking', men route-guards stopper også direkte navigasjon til en rute.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er felles prinsipp for komponentene `Admin` og `Authenticated` (de custom guard-komponentene)?",
        options: [
            "De renderer bare CSS",
            "De wrap’er barn, sjekker auth-state, redirecter ved behov og viser loading mens auth-status avklares",
            "De brukes til å validere skjemafelter",
            "De kaller APIer for å hente studenter",
        ],
        correct: 1,
        explanation:
            "De er HOC-aktige guard-komponenter: sjekk auth -> ev. redirect -> ellers rendrer children.",
    },

    // --- MOBIL VS WEB, DEEP LINKING, DEV BUILDS ---

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hvorfor er autentisering mer komplisert på mobil enn på ren web når vi bruker eksterne providers (OAuth, social login osv.)?",
        options: [
            "Fordi mobil ikke støtter HTTP",
            "Fordi vi ikke har vanlig nettleserflow, og må bruke deep linking / schemes for å komme tilbake til appen etter ekstern login",
            "Fordi mobil ikke kan vise HTML",
            "Fordi cookies ikke eksisterer på mobil",
        ],
        correct: 1,
        explanation:
            "På web håndterer nettleseren redirect mellom domener. På mobil må vi selv håndtere hopp ut/inn av app med deep links.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er en **deep link** i mobilkontekst (f.eks. `studentidapp://auth/callback?...`)?",
        options: [
            "En intern databaseforbindelse",
            "En spesiell URL som åpner appen og navigerer til en bestemt route/skjerm i appen",
            "En måte å komprimere bilder på",
            "En privat nøkkel for API-laget",
        ],
        correct: 1,
        explanation:
            "Deep link = URL som peker inn i appen, ikke bare til et nettsted.",
    },
    {
        id: "q16",
        type: "true-false",
        question:
            "For å bruke deep linking på mobil må vi definere et `scheme` (f.eks. `studentidapp`) i app-konfigurasjonen.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Ja – scheme + eventuelt paths brukes til å rute deep links til riktig sted i appen.",
    },
    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hvorfor holder ikke vanlig **Expo Go** når vi skal bruke ting som egen auth-provider og deep linking?",
        options: [
            "Expo Go støtter ikke JavaScript",
            "Expo Go er bare for Android",
            "Expo Go har bare et fast sett med native moduler og kontrollert konfig; for custom native libs og linking trenger vi en development build",
            "Expo Go kan ikke kjøre på fysiske enheter",
        ],
        correct: 2,
        explanation:
            "Development builds er 'din egen Expo Go' med dine native moduler, config, deep linking osv.",
    },
    {
        id: "q18",
        type: "multiple-choice",
        question:
            "Hva er en **development build** i Expo/React Native-sammenheng?",
        options: [
            "En ferdig publisert app i App Store/Play Store",
            "En egen debug-versjon av appen din, bygget med dine native avhengigheter og expo-dev-client, som kan koble til Metro-serveren",
            "En ren HTML-side",
            "En type Docker-container",
        ],
        correct: 1,
        explanation:
            "Dev build er din app, med debugging og mulighet til å kjøre JS fra lokal dev-server.",
    },
    {
        id: "q19",
        type: "true-false",
        question:
            "Etter at du har laget en development build, trenger du **ikke** bygge på nytt hver gang du endrer JavaScript-koden.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Endrer du bare JS/styling/bilder → holder med hot reload. Ny build trengs bare når native ting endres.",
    },

    // --- APPWRITE & SERVICE-LAG ---

    {
        id: "q20",
        type: "multiple-choice",
        question:
            "Hvorfor isolerer vi Appwrite-spesifikk kode i egne filer som `providers/appwrite/auth.ts` i stedet for å bruke Appwrite direkte overalt i komponentene?",
        options: [
            "For å gjøre koden tregere",
            "For å unngå TypeScript",
            "For å få et tydelig 'service-lag' som skjuler tredjeparts-API og gir oss et stabilt internt API",
            "Fordi Appwrite krever det",
        ],
        correct: 2,
        explanation:
            "Service-lag = enklere å bytte provider, teste logikk, og holde komponenter rene.",
    },
    {
        id: "q21",
        type: "multiple-choice",
        question:
            "Hva er hensikten med å bruke miljøvariabler (EXPO_PUBLIC_...) for Appwrite endpoint/prosjekt/platform i stedet for å hardkode verdiene?",
        options: [
            "Det gjør appen tregere",
            "Det gjør at koden ikke kompilerer",
            "Det gjør det lett å bytte miljø (dev/stage/prod), og vi slipper å spre konfigurasjon hardkodet i mange filer",
            "Det er kun for å få kortere filer",
        ],
        correct: 2,
        explanation:
            "Konfig i env = enklere å bytte URL/prosjekt, og mindre risiko for lekkasje/hardkoding overalt.",
    },
    {
        id: "q22",
        type: "true-false",
        question:
            "EXPO_PUBLIC_-variabler er synlige i klientkoden, og må derfor **ikke** brukes til ekte hemmeligheter (som private nøkler).",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "De er bundlet inn i appen og kan leses; sensitvt må håndteres på server eller med secure storage.",
    },

    // --- RESULT<T>, FEILHÅNDTERING & ROLLEEKSTRAHERING ---

    {
        id: "q23",
        type: "multiple-choice",
        question:
            "Hva er hovedpoenget med å bruke en `Result<T>`-type (f.eks. `{ success: true, data }` eller `{ success: false, error }`) rundt Appwrite-kallene?",
        options: [
            "Å gjøre koden lengre",
            "Å slippe å bruke async/await",
            "Å ha en standardisert måte å representere både suksess og feil uten å kaste exceptions ut i hele appen",
            "Å unngå å skrive typer",
        ],
        correct: 2,
        explanation:
            "Result-pattern gir eksplisitt håndtering: du sjekker `success` og håndterer begge cases bevisst.",
    },
    {
        id: "q24",
        type: "multiple-choice",
        question:
            "Hva gjør helperen `handleError` i auth-service-laget prinsipielt?",
        options: [
            "Logger inn brukeren automatisk",
            "Konverterer rå AppwriteException (kode + teknisk melding) til en enkel, bruker-/UI-vennlig feilmelding",
            "Sletter alle brukere",
            "Endrer passord for alle",
        ],
        correct: 1,
        explanation:
            "Den map’er teknisk feil → konsistent `Failure` med kort tekst, så UI slipper å forholde seg til rå exceptions.",
    },
    {
        id: "q25",
        type: "multiple-choice",
        question:
            "Hvorfor har vi helperen `extractRole(prefs)` som leser rolle fra user-preferences, og faller tilbake til `USER`?",
        options: [
            "For å tvinge alle til å være admin",
            "For å sikre at vi alltid har en gyldig rolle, selv om preferansen mangler eller har ugyldig verdi",
            "For å unngå å bruke Appwrite",
            "For å deaktivere logging",
        ],
        correct: 1,
        explanation:
            "Vi kan ikke stole blindt på at preferansene har en gyldig rolle ⇒ fallback gjør systemet robust.",
    },
    {
        id: "q26",
        type: "true-false",
        question:
            "`loginAndGetUser` og `signUpAndLogin` er eksempler på sammensatte funksjoner som bruker flere lavnivå-servicekall for å tilby én enklere operasjon til resten av appen.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "De bygger en 'høyere' API over base-funksjonene: register → login → getUserWithRole osv.",
    },

    // --- AUTH + UI/UX (SPLASHSCREEN, LOADING, PROFILE) ---

    {
        id: "q27",
        type: "multiple-choice",
        question:
            "Hva er hovedpoenget med å bruke `expo-splash-screen` sammen med auth-loading (fonter + getUser etc.)?",
        options: [
            "Å vise mest mulig tom skjerm",
            "Å hindre brukeren i å åpne appen",
            "Å holde splash oppe til vi vet om brukeren er logget inn og nødvendige ressurser er klare, så vi unngår flikk/flashing av feil skjerm",
            "Å redusere nettverkstrafikk",
        ],
        correct: 2,
        explanation:
            "Vi vil ikke vise halvferdig UI der auth-status akkurat er i ferd med å bestemmes.",
    },
    {
        id: "q28",
        type: "true-false",
        question:
            "Å skjule lenker som 'Min profil' og 'Studenter' når `isLoggedIn`/`isAdmin` ikke er oppfylt er et eksempel på å bruke auth-state til å styre brukeropplevelse, ikke bare sikkerhet.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Ja – UI tilpasses rollen: mindre forvirring, færre døde lenker, og bedre UX.",
    },

    // --- KLIENT VS SERVER DATA-MODELLER ---

    {
        id: "q29",
        type: "multiple-choice",
        question:
            "Hvorfor er det lurt å ha **separate** typer for `User` (fra auth-tjenesten) og `Student` (domenemodell i appen)?",
        options: [
            "For å skrive mer kode",
            "Fordi de alltid er helt identiske",
            "Fordi auth-bruker og domeneobjekt har forskjellig ansvar og data; koblingen mellom dem bør være eksplisitt (f.eks. `userId`), ikke 'alt i ett'",
            "For at TypeScript ikke skal kompileres",
        ],
        correct: 2,
        explanation:
            "User representerer auth/identitet. Student er faglig domene. De endres uavhengig og bør ikke være samme type.",
    },
];

export const auth_quiz = {
    id: "auth-quiz",
    title: "L21 Autentisering, guards, deep linking og Appwrite – prinsippquiz - BZJ",
    description:
        "Fokus på prinsipper: klient vs server auth, Context + AuthProvider, guards, deep linking, development builds, Appwrite-service-lag, Result<T>-mønster og rollebasert tilgang.",
    theme: [
        "Auth",
        "Context",
        "Guards",
        "Mobil vs web",
        "Deep linking",
        "Development build",
        "Appwrite",
        "Feilhåndtering",
    ],
    questions,
};
