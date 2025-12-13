const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedproblemet med å ha fetch- og API-logikk spredt direkte i mange React-komponenter?",
        options: [
            "Komponentene rendrer tregere",
            "Det fører til duplisering, inkonsistent error handling og vanskelig vedlikehold",
            "React støtter ikke async-funksjoner i komponenter",
            "Det gjør TypeScript ubrukelig"
        ],
        correct: 1,
        explanation:
            "Leksjonen beskriver at spredt API-logikk skaper duplisering, vedlikeholdsproblemer og gjør testing vanskelig når applikasjonen vokser. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å samle API-kall i et sentralisert API-bibliotek?",
        options: [
            "Man slipper å bruke useEffect",
            "All data kan caches automatisk",
            "Endringer i API-struktur eller base-URL gjøres ett sted",
            "Komponenter kan ikke lenger feile"
        ],
        correct: 2,
        explanation:
            "Et sentralisert API-bibliotek fungerer som et abstraksjonslag som gjør endringer enklere og mer forutsigbare. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hvilken GET-operasjon brukes typisk for å vise en oversiktsside med mange elementer?",
        options: [
            "GET /questions/:id",
            "GET /questions",
            "GET /questions/delete",
            "GET /questions/update"
        ],
        correct: 1,
        explanation:
            "GET-operasjoner for lister (f.eks. GET /questions) brukes til oversikter, ofte kombinert med pagination, filtrering og søk. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er et viktig designvalg i API-biblioteket som ble bygget i leksjonen?",
        options: [
            "Å bruke klasser med intern state",
            "Å bruke funksjoner fremfor klasser",
            "Å legge all logikk i React hooks",
            "Å bruke Context API for alle kall"
        ],
        correct: 1,
        explanation:
            "Leksjonen velger funksjoner fremfor klasser fordi de er enklere å teste, krever mindre boilerplate og passer React sin funksjonelle stil. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "true-false",
        question:
            "Et API-bibliotek bør kun returnere rå data (arrays/objekter), uten metadata som total, page og pages.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Usant. Leksjonen viser at API-responser bør inkludere metadata som pagination-info (total, page, pages) for å støtte skalerbare UI-er. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er hensikten med å strukturere API-responsen slik?",
        code: `
{
  data: Question[],
  total: number,
  page: number,
  pages: number,
  limit: number
}
    `,
        options: [
            "For å gjøre responsen større",
            "For å støtte pagination, UI-informasjon og videre utvidelser",
            "For å unngå bruk av useState",
            "For å gjøre testing umulig"
        ],
        correct: 1,
        explanation:
            "Denne strukturen gjør UI i stand til å vise sideinformasjon og planlegge videre navigasjon uten ekstra logikk i komponentene. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor brukes AbortController i API-kallene i leksjonen?",
        options: [
            "For å cache API-responser",
            "For å stoppe pågående forespørsler når komponenten unmountes eller et nytt kall starter",
            "For å validere API-responsen",
            "For å håndtere pagination"
        ],
        correct: 1,
        explanation:
            "AbortController brukes for cleanup og for å unngå race conditions og state-updates på unmounted komponenter. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "Ved refaktorering til API-bibliotek endres komponentenes ansvar fra å håndtere fetch-logikk til å fokusere på state og rendering.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Dette er et sentralt poeng i leksjonen: komponentene blir tynnere og mer fokuserte på presentasjon og brukerinteraksjon. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvordan testes komponenter som bruker API-biblioteket på en god måte?",
        options: [
            "Ved å kalle ekte API-er i testene",
            "Ved å mocke API-funksjonene og kontrollere deres returverdier",
            "Ved å teste API-biblioteket og UI i samme test",
            "Ved å deaktivere async-kode"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser bruk av mocking (vi.mock) av API-funksjoner for å isolere komponentlogikk i tester. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er en fordel med å designe mock-API-er som ligner ekte API-oppførsel?",
        options: [
            "Mockene blir enklere å skrive",
            "Man slipper å bruke TypeScript",
            "Overgangen til ekte backend blir enklere senere",
            "Mockene kan brukes i produksjon"
        ],
        correct: 2,
        explanation:
            "Ved å simulere pagination, feil og forsinkelser forberedes arkitekturen på ekte API-integrasjon senere. :contentReference[oaicite:10]{index=10}"
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvilket arkitekturprinsipp støttes sterkest av et sentralisert API-bibliotek?",
        options: [
            "Single Responsibility Principle",
            "Inheritance over Composition",
            "Global State First",
            "Inline Everything"
        ],
        correct: 0,
        explanation:
            "API-biblioteket gir et tydelig skille mellom datatilgang og UI, som støtter Single Responsibility Principle. :contentReference[oaicite:11]{index=11}"
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "Et godt strukturert API-bibliotek gjør det enklere å legge til caching, retry-logic og autentisering senere.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Leksjonen avslutter med at sentralisering legger grunnlaget for videre forbedringer som caching, retry og auth. :contentReference[oaicite:12]{index=12}"
    }
];

export const react_api_library_quiz = {
    id: "react-api-library",
    title: "L12 - – API-bibliotek og organisering av datahenting - KML",
    description:
        "Quiz om sentralisert API-arkitektur, GET-operasjoner, refaktorering, AbortController, testing og skalerbarhet i React-applikasjoner.",
    theme: [
        "api",
        "fetch",
        "refaktor",
        "testing",
        "scalability"
    ],
    questions: [...questions]
};
