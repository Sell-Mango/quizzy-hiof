export const quiz14 = [
  {
    id: "q1",
    type: "multiple-choice",
    question:
      "Hvorfor virket AbortController allerede med den eksisterende API-arkitekturen?",
    options: [
      "Vi hadde implementert en egen abort-wrapper",
      "RequestInit options inkluderer signal: AbortSignal som standard",
      "Fetch API håndterer abort automatisk",
      "AbortController ble aktivert i vite.config.mts"
    ],
    correctAnswer: 1,
    explanation:
      "AbortController fungerer fordi fetch støtter signal i RequestInit-objektet. Arkitekturen vår videresender options direkte til fetch, så det trengs ingen ekstra kode."
  },
  {
    id: "q2",
    type: "true-false",
    question:
      "AbortController kan kun brukes til å avbryte fetch-kall, ikke event listeners eller timeouts.",
    options: ["Sant", "Usant"],
    correctAnswer: 1,
    explanation:
      "Usant. AbortController kan brukes for event listeners, timeouts og streams. AbortSignal kan deles mellom flere prosesser og brukes til å avbryte flere ting samtidig."
  },
  {
    id: "q3",
    type: "multiple-choice",
    question:
      "Hva er hovedpoenget med Open/Closed Principle (OCP) i denne leksjonen?",
    options: [
      "Koden skal være enkel å skrive, men vanskelig å endre",
      "Koden skal være åpen for utvidelse, men lukket for modifikasjon",
      "All kode skal skrives om for hver ny feature",
      "Funksjoner skal være private for å hindre modifikasjon"
    ],
    correctAnswer: 1,
    explanation:
      "OCP handler om at du skal kunne legge til nye features uten å endre eksisterende fungerende kode. Wrapper-pattern følger dette prinsippet."
  },
  {
    id: "q4",
    type: "multiple-choice",
    question:
      "Hva er en ulempe med parameter-utvidelse som metode for å legge til funksjonalitet?",
    options: [
      "Den gjør koden tregere",
      "Den bryter med OCP og kan føre til breaking changes",
      "Den støtter ikke TypeScript",
      "Den krever ekstern caching-server"
    ],
    correctAnswer: 1,
    explanation:
      "Parameter-utvidelse innebærer å legge til flere parametere direkte i funksjonen, noe som øker kompleksiteten og krever endring av eksisterende kode."
  },
  {
    id: "q5",
    type: "multiple-choice",
    question:
      "Hva gjør caching-wrapperen (withCaching) i API-klienten?",
    options: [
      "Logger alle requests for debugging",
      "Lagrer GET-responser midlertidig i minnet og returnerer dem ved cache hit",
      "Oppretter nye fetch-kall når cache er tom",
      "Sletter all cache automatisk etter hvert kall"
    ],
    correctAnswer: 1,
    explanation:
      "withCaching lagrer resultatet av GET-kall i minnet i en bestemt TTL. Hvis samme forespørsel skjer igjen innenfor denne tiden, returneres data direkte fra cache."
  },
  {
    id: "q6",
    type: "true-false",
    question: "ohash brukes for å generere raske og konsistente cache keys.",
    options: ["Sant", "Usant"],
    correctAnswer: 0,
    explanation:
      "Sant. ohash bruker MurmurHash3 for å generere korte og effektive hash keys, som er raskere og mer minneeffektive enn JSON.stringify."
  },
  {
    id: "q7",
    type: "multiple-choice",
    question:
      "Hva er hovedforskjellen mellom pipe() og compose() når man kombinerer wrappers?",
    options: [
      "pipe kjører funksjoner høyre-til-venstre, compose venstre-til-høyre",
      "pipe kjører funksjoner venstre-til-høyre, compose høyre-til-venstre",
      "compose støtter ikke async-funksjoner",
      "pipe krever at alle wrappers returnerer promises"
    ],
    correctAnswer: 1,
    explanation:
      "pipe evaluerer funksjonene i naturlig rekkefølge (venstre til høyre), mens compose evaluerer dem i matematisk rekkefølge (høyre til venstre)."
  },
  {
    id: "q8",
    type: "multiple-choice",
    question:
      "Hva er formålet med logging-wrapperen (withLogging)?",
    options: [
      "Den lagrer alle API-kall i databasen",
      "Den legger til konsoll-logging før og etter hvert kall for å gjøre debugging enklere",
      "Den validerer API-responsen automatisk",
      "Den reduserer antall fetch-kall"
    ],
    correctAnswer: 1,
    explanation:
      "withLogging legger til loggmeldinger før og etter hvert kall, inkludert suksess, feil og aborter, noe som hjelper med overvåking og feilsøking."
  },
  {
    id: "q9",
    type: "true-false",
    question:
      "Wrapper-pattern gjør det mulig å legge til ny funksjonalitet uten å endre eksisterende kode.",
    options: ["Usant", "Sant"],
    correctAnswer: 1,
    explanation:
      "Sant. Wrapper-pattern omslutter eksisterende kode og legger på ekstra funksjonalitet som caching eller logging uten å endre kjernen."
  },
  {
    id: "q10",
    type: "multiple-choice",
    question:
      "Hva er fordelen med å bruke useAsyncData-hooken?",
    options: [
      "Den gir støtte for caching, pagination og automatisk retry",
      "Den håndterer loading-, error- og abort-tilstander på ett sted",
      "Den erstatter behovet for API-klient helt",
      "Den brukes kun til synkrone operasjoner"
    ],
    correctAnswer: 1,
    explanation:
      "useAsyncData abstraherer håndtering av async kall i React, inkludert abort via AbortController, loading state og feilhåndtering."
  },
  {
    id: "q11",
    type: "multiple-choice",
    question:
      "Hva beskriver best et 'cache hit' i en API-klient?",
    options: [
      "Når data ikke finnes og må hentes på nytt",
      "Når cached data er utløpt",
      "Når data finnes i cache og returneres umiddelbart",
      "Når serveren sender en 304 Not Modified respons"
    ],
    correctAnswer: 2,
    explanation:
      "Et cache hit betyr at klienten finner gyldig data i cache og returnerer den uten å kontakte API-et, noe som sparer tid og ressurser."
  },
  {
    id: "q12",
    type: "true-false",
    question:
      "Små UI-komponenter gir bedre testbarhet, gjenbrukbarhet og lesbarhet enn store komponenter med mange conditions.",
    options: ["Usant", "Sant"],
    correctAnswer: 1,
    explanation:
      "Sant. Mindre, fokuserte komponenter følger Single Responsibility Principle, og er enklere å teste og forstå isolert."
  },
  {
    id: "q13",
    type: "multiple-choice",
    question:
      "Når er det fornuftig å bruke wrapper-pattern fremfor parameter-utvidelse?",
    options: [
      "Når prosjektet er nytt og vi kan endre alt fritt",
      "Når vi må bevare eksisterende kode og gradvis legge til ny funksjonalitet",
      "Når vi ikke ønsker å bruke TypeScript",
      "Når vi ønsker å gjøre alle parametere globale"
    ],
    correctAnswer: 1,
    explanation:
      "Wrapper-pattern er ideell når vi har eksisterende kodebase som ikke kan endres direkte, og vi vil legge til ny funksjonalitet uten breaking changes."
  },
  {
    id: "q14",
    type: "multiple-choice",
    question:
      "Hva er en fordel med å bruke BaseService-grensesnittet for API-klienter som QuestionsClient?",
    options: [
      "Det eliminerer behovet for typer i API-responsen",
      "Det definerer et standardisert sett av CRUD-metoder for konsistent implementasjon",
      "Det gjør alle requests synkrone",
      "Det brukes kun i backenden"
    ],
    correctAnswer: 1,
    explanation:
      "BaseService sikrer at alle API-klienter følger et felles kontrakt (list, get, create, update, remove) som gir konsistens og forutsigbarhet."
  }
];
