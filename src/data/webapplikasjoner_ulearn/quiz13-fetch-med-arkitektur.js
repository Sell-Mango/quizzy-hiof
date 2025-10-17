export const quiz13 = [
 {
    id: "q1",
    type: "multiple-choice",
    question: "Hvilket av følgende beskriver BEST hovedproblemet med ikke-sentralisert API-kode?",
    options: [
      "Koden blir for rask og vanskelig å optimalisere",
      "Hardkodede URL-er, duplisert fetch-logikk og inkonsistent error handling gjør vedlikehold tungt",
      "Alle fetch-kall må bruke GraphQL i stedet for REST",
      "Feil kan ikke håndteres fordi TypeScript ikke støttes"
    ],
    correctAnswer: 1,
    explanation:
      "Uten et sentralisert API-lag må hver komponent håndtere fetch, feil og konfigurasjon selv. Det fører til duplisert logikk, hardkodede URL-er og uforutsigbar feilhåndtering."
  },
  {
    id: "q2",
    type: "multiple-choice",
    question: "Hva er hovedfordelen med å bruke Factory Pattern i HTTP-klienten?",
    options: [
      "Det gjør det mulig å bytte ut underliggende fetch-implementasjon uten å endre annen kode",
      "Det øker antall HTTP-kall per sekund",
      "Det forhindrer caching og logging av API-kall",
      "Det tvinger alle API-kall til å bruke POST-metoden"
    ],
    correctAnswer: 0,
    explanation:
      "Factory Pattern separerer opprettelsen av klienten fra bruken av den, noe som gir fleksibilitet til å endre eller utvide implementasjonen uten å påvirke resten av koden."
  },
  {
    id: "q3",
    type: "true-false",
    question: "Result pattern tvinger utvikleren til å håndtere både suksess og feil eksplisitt i koden.",
    options: ["Usant", "Sant"],
    correctAnswer: 1,
    explanation:
      "Result pattern bruker en struktur som { success: true; data } | { success: false; error }, som gjør det umulig å glemme feiltilfeller – i motsetning til tradisjonelle try/catch."
  },
  {
    id: "q4",
    type: "multiple-choice",
    question: "Hva gjør funksjonen handleFetchResponse i klientarkitekturen?",
    options: [
      "Bygger opp query-parametere automatisk",
      "Parser API-responsen, håndterer feil og returnerer et Result-objekt",
      "Starter nye fetch-kall automatisk når et kall feiler",
      "Konfigurerer baseURL og standard headers for alle API-kall"
    ],
    correctAnswer: 1,
    explanation:
      "handleFetchResponse er ansvarlig for å parse JSON, sjekke statuskoder og returnere et Result<T>-objekt med riktig struktur for suksess eller feil."
  },
  {
    id: "q5",
    type: "true-false",
    question: "buildQueryString brukes for å validere server-responser før de sendes til klienten.",
    options: ["Sant", "Usant"],
    correctAnswer: 1,
    explanation:
      "buildQueryString brukes på klienten for å konvertere et objekt til en querystring (f.eks. {page:1,limit:10} → '?page=1&limit=10'), ikke til å validere responser."
  },
  {
    id: "q6",
    type: "multiple-choice",
    question: "Hva er hovedformålet med å bruke typene ClientResult, ResultFn og ErrorCode i applikasjonen?",
    options: [
      "Å kunne bygge database-skjemaer fra frontend",
      "Å gi full type-sikkerhet i alle lag av API-kommunikasjonen",
      "Å gjøre applikasjonen raskere ved å bruke færre typer",
      "Å fjerne behovet for testing"
    ],
    correctAnswer: 1,
    explanation:
      "Disse typene gjør at alle API-kall, feil og responser blir typesikre, slik at TypeScript hindrer ‘impossible states’ og gir bedre feilhåndtering."
  },
  {
    id: "q7",
    type: "true-false",
    question:
      "Ved å bruke standardiserte API-responser med feltene success, data og pagination kan frontend håndtere alle API-svar på en konsistent måte.",
    options: ["Usant", "Sant"],
    correctAnswer: 1,
    explanation:
      "Standardiserte responser gjør det mulig for UI-komponenter å vise tilstander (loading, error, data) uten å måtte tolke unike formater fra ulike endepunkter."
  },
  {
    id: "q8",
    type: "multiple-choice",
    question: "Hva er hovedforskjellen mellom simulerte API-kall og faktiske API route handlers?",
    options: [
      "Simulerte kall bruker lokal JSON, mens route handlers svarer på ekte HTTP-requests",
      "Simulerte kall krever autentisering, mens faktiske ikke gjør det",
      "Route handlers brukes kun til frontend-validering",
      "Simulerte kall bruker POST, mens ekte kall alltid bruker GET"
    ],
    correctAnswer: 0,
    explanation:
      "I simulerte kall returneres data lokalt for testing, mens faktiske route handlers håndterer ekte HTTP-requests via Cloudflare Workers og sender JSON-respons."
  },
  {
    id: "q9",
    type: "multiple-choice",
    question: "Når er det fornuftig å bruke en custom HTTP-klient i stedet for biblioteker som axios?",
    options: [
      "Når du trenger caching og retry logic ferdig implementert",
      "Når du ønsker full kontroll, lavere kompleksitet og skreddersydd typesikkerhet",
      "Når du jobber uten TypeScript",
      "Når applikasjonen kun har ett enkelt API-kall"
    ],
    correctAnswer: 1,
    explanation:
      "Egen HTTP-klient gir bedre kontroll, lavere bundle size og skreddersydd typesikkerhet. Biblioteker som axios passer bedre hvis du trenger ferdige features som interceptors og retries."
  },
  {
    id: "q10",
    type: "true-false",
    question:
      "Factory Pattern og Result Pattern brukes sammen for å skape fleksibilitet og forutsigbarhet i API-kommunikasjonen.",
    options: ["Usant", "Sant"],
    correctAnswer: 1,
    explanation:
      "Factory Pattern sørger for fleksibel opprettelse av klienter, mens Result Pattern gjør feil- og suksesshåndtering eksplisitt. Sammen gir de robust og forutsigbar arkitektur."
  },
  {
    id: "q11",
    type: "multiple-choice",
    question: "Hva var en av hovedgrunnene til at prosjektet byttet fra fetch direkte i komponenter til en sentral HTTP-klient?",
    options: [
      "For å gjøre det mulig å bruke GraphQL i stedet for REST",
      "For å få konsistent feilhåndtering, felles konfigurasjon og enklere vedlikehold",
      "Fordi fetch ikke fungerer med TypeScript",
      "For å gjøre API-kall asynkrone"
    ],
    correctAnswer: 1,
    explanation:
      "Den sentraliserte klienten gir én sannhetskilde for all HTTP-kommunikasjon, med felles error handling, headers og typer, som reduserer duplisering og bugs."
  },
  {
    id: "q12",
    type: "true-false",
    question:
      "Result pattern erstatter behovet for try/catch ved å representere feil som en eksplisitt type i returverdien.",
    options: ["Usant", "Sant"],
    correctAnswer: 1,
    explanation:
      "I stedet for exceptions som må fanges manuelt, bruker Result pattern returnerte objekter med success/error-felter, noe som gir tryggere og tydeligere flyt."
  }
];
