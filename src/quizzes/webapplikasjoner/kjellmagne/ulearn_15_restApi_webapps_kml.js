const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er REST i sin opprinnelige betydning, slik Roy Fielding definerte det?",
        options: [
            "Et JavaScript-rammeverk for API-er",
            "Et sett med regler for hvordan URL-er skal se ut",
            "En arkitektonisk stil og designfilosofi for distribuerte systemer",
            "Et alternativ til HTTP"
        ],
        correct: 2,
        explanation:
            "REST er en arkitektonisk stil, ikke en teknologi eller et rammeverk. Det beskriver prinsipper for hvordan web-systemer bør designes."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvilket REST-prinsipp regnes som det mest fundamentale for å gjøre API-er forutsigbare og intuitive?",
        options: [
            "Stateless",
            "Cacheable",
            "Uniform Interface",
            "Layered System"
        ],
        correct: 2,
        explanation:
            "Uniform Interface sikrer konsistente mønstre på tvers av hele API-et og reduserer kognitiv belastning for klienter."
    },

    {
        id: "q3",
        type: "true-false",
        question:
            "REST krever at serveren husker tilstanden til tidligere requests for å kunne håndtere neste request korrekt.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "REST er stateless: hver request må være selvstendig og inneholde all nødvendig informasjon."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er den viktigste fordelen med stateless design?",
        options: [
            "Mindre data sendes per request",
            "Bedre sikkerhet automatisk",
            "Enklere horisontal skalering og bedre cache-støtte",
            "Raskere databaseoperasjoner"
        ],
        correct: 2,
        explanation:
            "Stateless design gjør at enhver server kan håndtere enhver request, noe som gir høy skalerbarhet."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvilken påstand beskriver GET-metoden korrekt i REST-kontekst?",
        options: [
            "GET er ikke idempotent",
            "GET kan ha side-effekter på serveren",
            "GET er safe og idempotent",
            "GET bør brukes for oppdateringer"
        ],
        correct: 2,
        explanation:
            "GET er både safe (ingen side-effekter) og idempotent (samme kall gir samme resultat)."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor regnes POST som ikke-idempotent?",
        options: [
            "Fordi POST alltid returnerer feil",
            "Fordi POST vanligvis oppretter nye ressurser ved hvert kall",
            "Fordi POST ikke kan sende body",
            "Fordi POST kun brukes til caching"
        ],
        correct: 1,
        explanation:
            "Gjentatte POST-kall kan føre til at flere ressurser opprettes, og resultatet endres derfor."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvilken statuskode er mest korrekt når en ny ressurs er opprettet?",
        options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
        correct: 1,
        explanation:
            "201 Created brukes når en ny ressurs er opprettet, ofte sammen med Location-header."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er hovedhensikten med 4xx-statuskoder?",
        options: [
            "Å indikere serverfeil",
            "Å indikere nettverksfeil",
            "Å signalisere at klientens request er feil eller ugyldig",
            "Å indikere caching-problemer"
        ],
        correct: 2,
        explanation:
            "4xx-feil betyr at problemet ligger hos klienten (feil input, manglende auth, feil ressurs)."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvilket URL-design følger REST-beste praksis?",
        options: [
            "/api/getQuestions",
            "/api/question",
            "/api/questions/123/answers",
            "/api/questions/delete/123"
        ],
        correct: 2,
        explanation:
            "Nestede ressurser uttrykker relasjoner tydelig og bruker substantiver i flertall."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hvordan bør non-CRUD operasjoner som 'publish' eller 'export' håndteres i REST?",
        options: [
            "Ved å lage egne HTTP-metoder",
            "Ved å bruke POST på et action-endepunkt knyttet til ressursen",
            "Ved å bruke GET med query parameter",
            "Ved å bruke PATCH på collection"
        ],
        correct: 1,
        explanation:
            "Actions uttrykkes som sub-ressurser eller handlinger, vanligvis med POST fordi de endrer tilstand."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva brukes ETag og If-Match headers til?",
        options: [
            "Autentisering",
            "CORS-håndtering",
            "Optimistic locking og concurrency control",
            "Logging og metrics"
        ],
        correct: 2,
        explanation:
            "ETag og If-Match brukes for å forhindre at endringer overskrives ved samtidige oppdateringer."
    },

    {
        id: "q12",
        type: "true-false",
        question:
            "Cacheability er viktig i REST fordi det kan forbedre ytelse og redusere belastning på servere.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Caching er en sentral årsak til at REST skalerer godt på web."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er en viktig egenskap ved god error handling i REST API-er?",
        options: [
            "Kun bruke HTTP 500 for alle feil",
            "Returnere ustrukturerte feilmeldinger",
            "Gi konsistente, maskinlesbare feilkoder og menneskevennlige meldinger",
            "Skjule alle feil for klienten"
        ],
        correct: 2,
        explanation:
            "God error handling gir actionable informasjon som gjør feil lettere å forstå og håndtere."
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hvilken strategi for API-versjonering er mest brukt i praksis?",
        options: [
            "Query parameter-basert",
            "Header-basert",
            "URL-basert versjonering",
            "Ingen versjonering"
        ],
        correct: 2,
        explanation:
            "URL-basert versjonering er mest utbredt og lettest å forstå for klienter."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Når er GraphQL ofte et bedre valg enn REST?",
        options: [
            "Når caching er viktig",
            "Når CRUD-operasjoner dominerer",
            "Når klienten trenger fleksible og komplekse datastrukturer",
            "Når API-et skal være stateless"
        ],
        correct: 2,
        explanation:
            "GraphQL egner seg godt når frontend trenger presis kontroll over hvilke data som hentes."
    },

    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hvorfor er god OpenAPI/Swagger-dokumentasjon viktig?",
        options: [
            "For å gjøre API-et raskere",
            "For å erstatte testing",
            "For å gjøre API-et selvforklarende, testbart og lettere å adoptere",
            "Kun for backend-utviklere"
        ],
        correct: 2,
        explanation:
            "God dokumentasjon er avgjørende for adopsjon, samarbeid og korrekt bruk av API-et."
    },

    {
        id: "q17",
        type: "true-false",
        question:
            "Loose coupling mellom klient og server gjør det mulig å utvikle og deploye dem uavhengig.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Client-server-separasjon er en av de viktigste arkitektoniske fordelene med REST."
    }
];

export const quiz_rest_api_theory_architecture = {
    id: "quiz-rest-api-theory-architecture",
    title: "L15 - REST API – teori og arkitektur-prinsipper - KML",
    description:
        "Quiz som tester forståelse av REST som arkitektonisk stil, HTTP-semantikk, statuskoder, URL-design, caching, concurrency control, versjonering, dokumentasjon og trade-offs mot alternative arkitekturer.",
    theme: [
        "api",
        "arkitektur",
    ],
    questions: [...questions]
};
