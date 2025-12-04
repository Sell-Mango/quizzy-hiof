const questions = [
  {
    id: "q1",
    type: "multiple-choice",
    question: "Hva står REST for, og hva beskriver det?",
    options: [
      "Remote Execution of Server Transactions – en kommunikasjonsprotokoll",
      "Representational State Transfer – en arkitektonisk stil for web-APIer",
      "Reactive Event Streaming Technology – et realtidsrammeverk",
      "Relational Entity Service Transfer – et databaseformat"
    ],
    correct: 1,
    explanation:
      "REST står for Representational State Transfer, og beskriver en arkitektonisk stil som definerer prinsipper for hvordan web-API-er skal struktureres og kommunisere via HTTP."
  },
  {
    id: "q2",
    type: "true-false",
    question: "REST er et rammeverk som krever spesifikk teknologi som Node.js eller Express.",
    options: ["Sant", "Usant"],
    correct: 1,
    explanation:
      "Usant. REST er ikke et rammeverk, men et sett med arkitektoniske prinsipper. Du kan implementere REST i alle språk og teknologier som støtter HTTP."
  },
  {
    id: "q3",
    type: "multiple-choice",
    question: "Hvilket REST-prinsipp sier at alle forespørsler må inneholde all nødvendig informasjon uten at serveren lagrer tilstand?",
    options: [
      "Client–Server Separation",
      "Uniform Interface",
      "Stateless",
      "Cacheable"
    ],
    correct: 2,
    explanation:
      "Stateless-prinsippet betyr at hver request er uavhengig og må inneholde all nødvendig informasjon for å fullføres uten at serveren husker tidligere tilstand."
  },
  {
    id: "q4",
    type: "multiple-choice",
    question: "Hvilket prinsipp beskriver at klient og server skal være uavhengige av hverandre?",
    options: [
      "Client–Server",
      "Cacheable",
      "Layered System",
      "Uniform Interface"
    ],
    correct: 0,
    explanation:
      "Client–Server-prinsippet skiller ansvar: klienten håndterer brukergrensesnitt og presentasjon, mens serveren håndterer data og logikk."
  },
  {
    id: "q5",
    type: "multiple-choice",
    question: "Hvilken HTTP-metode brukes for å oppdatere deler av en eksisterende ressurs?",
    options: ["POST", "PUT", "PATCH", "UPDATE"],
    correct: 2,
    explanation:
      "PATCH brukes når du kun skal oppdatere deler av en ressurs. PUT brukes derimot når du skal erstatte hele ressursen."
  },
  {
    id: "q6",
    type: "true-false",
    question: "GET-forespørsler skal aldri endre data på serveren og er derfor 'safe'.",
    options: ["Usant", "Sant"],
    correct: 1,
    explanation:
      "Sant. GET er en 'safe' og idempotent operasjon – den skal kun hente data og aldri endre servertilstanden."
  },
  {
    id: "q7",
    type: "multiple-choice",
    question: "Hvilken statuskode brukes når en ny ressurs opprettes?",
    options: ["200 OK", "201 Created", "204 No Content", "202 Accepted"],
    correct: 1,
    explanation:
      "201 Created brukes når en ny ressurs har blitt opprettet. Headeren Location bør peke til ressursens nye URL."
  },
  {
    id: "q8",
    type: "multiple-choice",
    question: "Hva indikerer statuskoden 404?",
    options: [
      "Serverfeil",
      "Manglende autentisering",
      "At ressursen ikke finnes",
      "At forespørselen var gyldig, men tom"
    ],
    correct: 2,
    explanation:
      "404 Not Found betyr at ressursen ikke finnes – enten fordi ID-en er feil eller fordi den er slettet."
  },
  {
    id: "q9",
    type: "multiple-choice",
    question: "Hvordan bør ressursnavn i REST-URLer utformes?",
    options: [
      "Med verb i entall, f.eks. /api/getUser",
      "Med substantiver i flertall, f.eks. /api/users",
      "Med CamelCase, f.eks. /api/UserProfiles",
      "Med store bokstaver, f.eks. /API/USERS"
    ],
    correct: 1,
    explanation:
      "REST bruker substantiver i flertall for ressurser. URL-er skal være beskrivende og uten verb, f.eks. /api/users/12."
  },
  {
    id: "q10",
    type: "true-false",
    question: "Versjonering av API bør helst gjøres via URL, f.eks. /api/v1/",
    options: ["Sant", "Usant"],
    correct: 0,
    explanation:
      "Sant. URL-versjonering er den mest brukte og tydeligste måten å vise API-versjon på, selv om header-basert versjonering også er mulig."
  },
  {
    id: "q11",
    type: "multiple-choice",
    question: "Hva brukes HTTP-headeren ETag til?",
    options: [
      "Autentisering av brukere",
      "Caching og versjonskontroll av ressurser",
      "Å definere API-versjon",
      "Å angi Content-Type"
    ],
    correct: 1,
    explanation:
      "ETag brukes for å identifisere en bestemt versjon av en ressurs, slik at klienten kan bruke If-Match for å hindre at eldre data overskriver nyere (optimistic locking)."
  },
  {
    id: "q12",
    type: "multiple-choice",
    question: "Hvilken statuskode brukes når klienten ikke har tilgang, selv om den er autentisert?",
    options: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "409 Conflict"],
    correct: 1,
    explanation:
      "403 Forbidden betyr at brukeren er autentisert, men ikke har rettigheter til å utføre handlingen."
  },
  {
    id: "q13",
    type: "multiple-choice",
    question: "Hva betyr idempotens i konteksten av HTTP-metoder?",
    options: [
      "At samme forespørsel kan gjentas uten å endre resultatet",
      "At forespørselen alltid gir ulik respons",
      "At metoden krever autentisering",
      "At serveren lagrer tilstand mellom kall"
    ],
    correct: 0,
    explanation:
      "En idempotent metode kan kalles flere ganger uten å endre resultatet. F.eks. DELETE eller PUT på samme ressurs vil ikke gi ny effekt etter første gang."
  },
  {
    id: "q14",
    type: "true-false",
    question: "REST tillater bruk av actions (som /publish eller /download) når de følger ressurs-URL-konvensjoner.",
    options: ["Usant", "Sant"],
    correct: 1,
    explanation:
      "Sant. REST tillater handlinger som /questions/123/publish så lenge de er kontekstavhengige og følger HTTP-metodekonvensjonene (typisk POST)."
  },
  {
    id: "q15",
    type: "multiple-choice",
    question: "Hvordan bør feilmeldinger fra et REST-API struktureres?",
    options: [
      "Som ren tekst for enkel logging",
      "Som HTML-sider",
      "Som JSON med code, message og optional details",
      "Som CSV-data"
    ],
    correct: 2,
    explanation:
      "God praksis er å returnere JSON med et konsistent feilformat, f.eks. { code, message, details }, slik at både maskiner og mennesker kan forstå det."
  },
  {
    id: "q16",
    type: "multiple-choice",
    question: "Hva er fordelene med å følge REST-prinsipper?",
    options: [
      "Økt kompleksitet men bedre kontroll",
      "Forutsigbare API-er, skalerbarhet og enkel integrasjon",
      "Krever mindre dokumentasjon men dårligere ytelse",
      "Mindre sikkerhet, men enklere å teste"
    ],
    correct: 1,
    explanation:
      "REST gir forutsigbare, skalerbare og enkle API-er som fungerer godt med web-standarder, caching og distribuerte systemer."
  },
  {
    id: "q17",
    type: "true-false",
    question: "GraphQL og REST er to måter å strukturere API-kommunikasjon på, og REST passer best for CRUD-baserte systemer.",
    options: ["Usant", "Sant"],
    correct: 1,
    explanation:
      "Sant. REST er ideelt for CRUD og ressursbaserte systemer, mens GraphQL brukes for mer fleksibel datahenting og komplekse relasjoner."
  },
  {
    id: "q18",
    type: "multiple-choice",
    question: "Hvilket prinsipp beskriver at klienten ikke trenger å vite hvor dataen kommer fra (for eksempel CDN, proxy, eller database)?",
    options: [
      "Layered System",
      "Stateless",
      "Uniform Interface",
      "Cacheable"
    ],
    correct: 0,
    explanation:
      "Layered System-prinsippet gjør at klienten kommuniserer med et mellomlag som kan håndtere sikkerhet, caching eller lastbalansering – uten at klienten vet det."
  }
];


export const quiz_webapp15 = {
    id: 'quiz-webapp-15',
    title: 'Webapps kapittel 15: REST API-teori og arkitektur-prinsipper',
    description:
        'Test din forståelse av av Webapplikasjoner kapittel 15, REST API-teori og arkitektur-prinsipper.',
    theme: ["api"],
    questions: [
        ...questions
    ]
}
