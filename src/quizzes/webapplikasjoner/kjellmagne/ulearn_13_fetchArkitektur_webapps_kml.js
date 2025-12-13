const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hvilke er de FIRE hovedproblemene som identifiseres med ikke-sentralisert API-kode i leksjonen?",
        options: [
            "Manglende caching, dårlig UI, treg ytelse, lite testing",
            "Hardkodede URL-er, duplisert fetch-logikk, inkonsistent error handling, manglende konfigurasjon",
            "For mange hooks, for mye TypeScript, dårlig CSS, store komponenter",
            "Manglende pagination, ingen sorting, ingen filtering, ingen search"
        ],
        correct: 1,
        explanation:
            "Leksjonen starter eksplisitt med disse fire problemene som motivasjon for sentralisert API-arkitektur. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er hovedformålet med å bruke factory pattern for HTTP-klienten (clientFactory)?",
        options: [
            "Å gjøre koden kortere",
            "Å skjule TypeScript-typer",
            "Å separere opprettelse av klient fra bruk, og gjøre det enkelt å bytte implementasjon",
            "Å unngå async/await"
        ],
        correct: 2,
        explanation:
            "Factory pattern abstraherer hvordan klienten bygges, slik at vi kan bytte fetch med f.eks. axios uten å endre API-bruken. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er den viktigste forskjellen mellom Result pattern og tradisjonell try-catch error handling?",
        options: [
            "Result pattern er raskere i runtime",
            "Result pattern bruker exceptions internt",
            "Result pattern gjør feil eksplisitte i returtypen og kan ikke ignoreres",
            "Result pattern fjerner behovet for TypeScript"
        ],
        correct: 2,
        explanation:
            "Result pattern gjør feil synlige i type-signaturen og tvinger konsumenten til å håndtere både success og error. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "true-false",
        question:
            "En ulempe med try-catch-basert error handling er at feil kan bli 'usynlige' i funksjonens signatur.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Exceptions vises ikke i returtypen, og det er lett å glemme try-catch, noe leksjonen peker på som en sentral svakhet. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er rollen til handleFetchResponse i HTTP-klient-arkitekturen?",
        options: [
            "Å bygge URL-er med query parameters",
            "Å håndtere HTTP-responsen og konvertere den til et standardisert Result<T>",
            "Å sette headers på requesten",
            "Å cache API-responser"
        ],
        correct: 1,
        explanation:
            "handleFetchResponse er ansvarlig for å tolke HTTP-responsen og returnere et konsistent Result<T>. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er hovedhensikten med buildQueryString-funksjonen?",
        options: [
            "Å validere API-responser",
            "Å håndtere URL-parametre automatisk og unngå manuell string-konkatenering",
            "Å parse JSON-responsen",
            "Å håndtere pagination i frontend"
        ],
        correct: 1,
        explanation:
            "buildQueryString konverterer et parameter-objekt til en trygg og korrekt query string, og reduserer feil. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor er comprehensive TypeScript interfaces viktige i denne API-arkitekturen?",
        options: [
            "De gjør koden kortere",
            "De forhindrer 'impossible states' og tvinger eksplisitt håndtering av alle scenarios",
            "De forbedrer runtime-ytelse",
            "De erstatter behovet for tester"
        ],
        correct: 1,
        explanation:
            "TypeScript-typene sørger for at success/error, pagination og data alltid håndteres eksplisitt. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "Standardiserte API-responser med { success, data, pagination, error } gjør frontend-koden mer forutsigbar.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Et konsistent response-format gjør at UI-koden kan håndtere data likt uansett endepunkt. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvorfor gikk leksjonen bort fra simulerte API-kall til faktiske API route handlers?",
        options: [
            "For å redusere kode",
            "For å få mer realistisk testing og ekte HTTP-responser",
            "For å unngå TypeScript",
            "For å slippe pagination"
        ],
        correct: 1,
        explanation:
            "Faktiske API-handlers gir realistisk oppførsel, bedre testing og forbereder arkitekturen på ekte backend. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Når er det mest fornuftig å bruke en custom HTTP-klient fremfor å kalle fetch direkte i komponenter?",
        options: [
            "Kun i små prosjekter",
            "Når applikasjonen vokser og krever konsistent error handling, type-sikkerhet og konfigurasjon",
            "Når man ikke bruker TypeScript",
            "Kun når man bruker RedwoodSDK"
        ],
        correct: 1,
        explanation:
            "Sentralisert HTTP-klient gir størst gevinst når applikasjonen vokser i kompleksitet. :contentReference[oaicite:10]{index=10}"
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er en fordel med Result pattern for brukerorienterte feilmeldinger?",
        options: [
            "Feil blir ignorert automatisk",
            "Alle feil blir exceptions",
            "Feil kan klassifiseres med koder og presenteres konsistent til brukeren",
            "UI trenger ikke håndtere error"
        ],
        correct: 2,
        explanation:
            "Result pattern muliggjør sentral error classification (ErrorCode) og konsistente, forståelige feilmeldinger. :contentReference[oaicite:11]{index=11}"
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "Factory pattern og Result pattern sammen bidrar til løs kobling og høyere vedlikeholdbarhet i API-laget.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Factory pattern reduserer coupling mellom klient og implementasjon, mens Result pattern sikrer eksplisitt kontrollflyt og robusthet. :contentReference[oaicite:12]{index=12}"
    }
];

export const react_centralized_http_client_quiz = {
    id: "react-centralized-http-client",
    title: "L13 – Sentralisert API-arkitektur og HTTP-klient - KML",
    description:
        "Quiz om profesjonell API-arkitektur i React: factory pattern, Result pattern, type-sikkerhet, standardiserte responser og skalerbar HTTP-klient.",
    theme: [
        "api",
        "patterns",
        "scalability"
    ],
    questions: [...questions]
};
