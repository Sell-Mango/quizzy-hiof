const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å bruke React Context for authentication state management?",
        options: [
            "Raskere rendering enn alle andre state-løsninger",
            "Unngår prop drilling og gir en sentral kilde til sannhet for auth state",
            "Automatisk sikker lagring av tokens",
            "Innebygd støtte for sessions"
        ],
        correct: 1,
        explanation:
            "Context gjør det mulig å dele auth state globalt uten å sende props gjennom hele komponent-treet."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvorfor er det nyttig å gi AuthProvider en initialUser fra server-side rendering?",
        options: [
            "For å slippe å bruke Context helt",
            "For å unngå 'flash of unauthenticated content' før client state er satt",
            "For å validere passord på klienten",
            "For å gjøre navigasjonen raskere"
        ],
        correct: 1,
        explanation:
            "Initial hydrering fra server hindrer midlertidig feil UI (f.eks. login-knapper før auth state er lastet)."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er en god praksis når man lager custom hooks som useAuth()?",
        options: [
            "Returnere hele Context-objektet uten sjekk",
            "Kaste en tydelig error hvis hooken brukes utenfor AuthProvider",
            "La hooken håndtere all UI-logikk",
            "Unngå TypeScript-typer"
        ],
        correct: 1,
        explanation:
            "Å feile eksplisitt gir raskere debugging og forhindrer feil bruk av hooken."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er hensikten med spesialiserte hooks som useRequireAuth eller useHasRole?",
        options: [
            "Å erstatte AuthProvider",
            "Å kapsle vanlige auth-sjekker og sideeffekter (redirects) på en gjenbrukbar måte",
            "Å gjøre Context raskere",
            "Å validere data fra databasen"
        ],
        correct: 1,
        explanation:
            "Disse hookene bygger på useAuth og gir gjenbrukbar, konsistent auth-logikk."
    },

    {
        id: "q5",
        type: "true-false",
        question:
            "Påstand: Custom hooks for auth bør inneholde både synkron state-sjekk og sideeffekter (f.eks. redirect) der det er nødvendig.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Et vanlig mønster er å gjøre auth-sjekken synkront og bruke useEffect for redirects eller andre sideeffekter."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvordan bidrar progressive enhancement i login- og registreringsskjemaer?",
        options: [
            "Skjemaene fungerer kun med JavaScript",
            "Skjemaene fungerer uten JavaScript, men får bedre UX med JS (loading, errors)",
            "Validering flyttes helt til klienten",
            "Server Actions blir unødvendige"
        ],
        correct: 1,
        explanation:
            "HTML-first forms gir robusthet og tilgjengelighet, mens JS forbedrer opplevelsen."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er rollen til useActionState i auth-skjemaer?",
        options: [
            "Å lagre auth state globalt",
            "Å håndtere form submission state, errors og resultater fra Server Actions",
            "Å erstatte Context",
            "Å validere passordstyrke"
        ],
        correct: 1,
        explanation:
            "useActionState kobler forms direkte til Server Actions og gir innebygd state- og feilhåndtering."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hvordan oppdateres client-side auth state etter en vellykket login?",
        options: [
            "Kun via localStorage",
            "Via Context-oppdatering direkte, eller indirekte ved redirect og ny server-hydrering",
            "Automatisk av useActionState",
            "Via cookies som leses av JavaScript"
        ],
        correct: 1,
        explanation:
            "Enten kan Context oppdateres direkte, eller så re-hydreres state fra server etter redirect."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er formålet med role-based conditional rendering i UI?",
        options: [
            "Å erstatte server-side authorization",
            "Å tilpasse brukeropplevelsen basert på rolle, uten å stole på klienten for sikkerhet",
            "Å skjule API-endepunkter",
            "Å forbedre ytelse"
        ],
        correct: 1,
        explanation:
            "UI-tilpasning er for UX – sikkerhet må fortsatt håndheves på serveren."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er en vanlig utfordring med Context-basert auth state i større applikasjoner?",
        options: [
            "Manglende type safety",
            "At alle consumers re-renderes ved state-endringer",
            "At Context ikke støttes i React",
            "At Server Actions ikke fungerer"
        ],
        correct: 1,
        explanation:
            "Context kan føre til mange re-renders, noe som kan kreve optimalisering eller alternativ state-løsning."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvorfor er det viktig å håndtere navigation basert på auth state?",
        options: [
            "For å forbedre SEO",
            "For å vise eller skjule navigasjonselementer basert på innlogging og rolle",
            "For å validere sessions",
            "For å redusere bundle size"
        ],
        correct: 1,
        explanation:
            "Navigasjon er et sentralt sted å reflektere auth state og roller i UI."
    },

    {
        id: "q12",
        type: "true-false",
        question:
            "Påstand: Client-side autentisering med Context kan erstatte behovet for server-side autentisering.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Client-side auth er kun et speil av server state. All sikkerhet må håndheves på serveren."
    }
];

export const quiz_client_side_auth_context = {
    id: "quiz-client-side-auth-context",
    title: "L21 - Client-side autentisering med Context og UI patterns - KML",
    description:
        "Quiz om client-side autentisering: AuthProvider, custom hooks, progressive enhancement i forms, role-based UI, og integrasjon med Server Actions.",
    theme: [
        "auth",
        "hooks",
        "serverActions",
    ],
    questions: [...questions]
};
