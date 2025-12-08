const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva er hovedmålet med å skrive tester i et prosjekt?",
        options: [
            "Å gjøre koden tregere slik at brukeren ikke får for mange forespørsler",
            "Å verifisere at koden oppfører seg som forventet og fange feil tidlig",
            "Å erstatte all manuell QA fullstendig",
            "Å gjøre det mulig å deploye uten versjonskontroll",
        ],
        correct: 1,
        explanation:
            "Testing handler om å verifisere at koden gjør det den skal, fange feil tidlig, og gjøre refaktorering tryggere.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva kjennetegner en enhetstest (unit test) i testing-pyramiden?",
        options: [
            "Den tester hele brukerreisen fra start til slutt",
            "Den tester små, isolerte deler av koden og er rask å kjøre",
            "Den krever alltid ekte database og API",
            "Den må alltid kjøres i nettleser",
        ],
        correct: 1,
        explanation:
            "Enhetstester fokuserer på små, isolerte enheter (funksjoner/komponenter) og er billige og raske å kjøre.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er typisk styrken til integrasjonstester sammenlignet med rene enhetstester?",
        options: [
            "De er raskere enn enhetstester",
            "De tester hvordan flere deler fungerer sammen og gir god avkastning per test",
            "De trenger aldri mocks eller fakes",
            "De krever ingen oppsett av testrammeverk",
        ],
        correct: 1,
        explanation:
            "Integrasjonstester tester samspillet mellom flere deler (f.eks. service-lag + helper-funksjoner) og kan dekke mye logikk med få tester.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question: "Hva kjennetegner en end-to-end (E2E) test?",
        options: [
            "Den kjører bare i Node.js uten UI",
            "Den tester kun én funksjon av gangen",
            "Den tester applikasjonen fra brukerens perspektiv, ofte hele flyten",
            "Den kan ikke feile på grunn av nettverk",
        ],
        correct: 2,
        explanation:
            "E2E-tester simulerer ekte brukerflyt gjennom hele applikasjonen, ofte via UI, og gir høy tillit men er tregere.",
    },
    {
        id: "q5",
        type: "true-false",
        question:
            "Test suite er en samling av relaterte tester, ofte definert med describe-blokker.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "En test suite grupperer relaterte tester og beskrives typisk med describe i Jest/Vitest.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question: "Hva er en mock i test-sammenheng?",
        options: [
            "En tilfeldig generert verdi",
            "En erstatning (test-dobbel) for en avhengighet som ofte kan konfigureres og inspiseres",
            "En egen database for test",
            "En kopi av hele produksjonsmiljøet",
        ],
        correct: 1,
        explanation:
            "En mock er en test-dobbel vi kan styre (hva den returnerer, hvordan den ble kalt) for å isolere koden vi tester.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question: "Hva er forskjellen på en stub og en fake?",
        options: [
            "Det er ingen forskjell, de er synonymer",
            "Stub returnerer forhåndsdefinerte verdier, mens fake ofte er en enkel men fungerende implementasjon",
            "Fake brukes bare til UI, stub bare til API",
            "Stub er kun for logging, fake er kun for databaser",
        ],
        correct: 1,
        explanation:
            "En stub er en veldig enkel implementasjon som bare gir faste svar. En fake er en mer komplett, men fortsatt forenklet, implementasjon (f.eks. FakeRedis).",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question: "Hva er et 'spy' i test-kode?",
        options: [
            "En egen testfil for hemmelige funksjoner",
            "En wrapper rundt en funksjon som lar oss se hvordan den ble kalt",
            "En funksjon som skjuler konsoll-logging",
            "En test som kun sjekker performance",
        ],
        correct: 1,
        explanation:
            "Et spy lar oss observere kallene til en funksjon (argumenter, antall kall osv.) uten nødvendigvis å endre implementasjonen.",
    },
    {
        id: "q9",
        type: "true-false",
        question:
            "Fixtures er forhåndsdefinerte testdata som kan gjenbrukes på tvers av tester.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Fixtures er typisk objekter/JSON/mocks som brukes som standard testdata i flere tester.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva beskriver AAA-mønsteret (Arrange, Act, Assert) i test-anatomi?",
        options: [
            "Navnestandard for testfiler",
            "Måten vi strukturerer testens oppsett, handling og verifisering",
            "En Jest-konfigurasjon",
            "Et mønster for CI/CD pipelines",
        ],
        correct: 1,
        explanation:
            "AAA er et mønster for å gjøre tester lesbare: først forberede (Arrange), så utføre handlingen (Act), og til slutt verifisere (Assert).",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er en vanlig feil ved testing av React-komponenter med Testing Library?",
        options: [
            "Å bruke screen.getByText",
            "Å teste implementasjonsdetaljer i stedet for bruker-observerbar oppførsel",
            "Å bruke async/await i tester",
            "Å bruke testID på elementer",
        ],
        correct: 1,
        explanation:
            "Tester blir skjøre hvis de er bundet til interne detaljer (state-variabler, interne funksjoner) i stedet for det brukeren ser.",
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "Når man tester asynkrone operasjoner, er det ofte nødvendig å bruke async/await og utiler som waitFor eller findBy*.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Asynkrone komponenter (datahenting, animasjoner, delayed state) krever at vi venter på den nye tilstanden med async/await og hjelpefunksjoner.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question: "Hva er formålet med beforeEach/afterEach i Jest?",
        options: [
            "Å navngi testene automatisk",
            "Å konfigurere CI-verktøyet",
            "Å kjøre setup og opprydding før/etter hver test for å unngå lekkasje av state mellom tester",
            "Å gjøre testene tregere",
        ],
        correct: 2,
        explanation:
            "beforeEach/afterEach brukes til å sette opp og rydde opp slik at hver test starter med et rent miljø.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question: "Hvorfor bør vi ofte mocke eksterne API-kall i tester?",
        options: [
            "For å hindre at backend-teamet gjør endringer",
            "For å gjøre testene avhengige av nettverk og eksterne systemer",
            "For å gjøre testene raskere, mer stabile og uavhengige av eksterne tjenester",
            "For å slippe å skrive feilhåndtering i koden",
        ],
        correct: 2,
        explanation:
            "Ved å mocke APIer unngår vi flaky tester, nettverksavhengighet og unødvendig bruk av eksterne ressurser.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å bruke MSW (Mock Service Worker) til å mocke HTTP-kall, sammenlignet med å bare mocke funksjoner i API-klienten?",
        options: [
            "MSW gjør testene tregere, men mer komplette",
            "MSW intercepter HTTP på nettverksnivå, så testene blir mindre avhengige av hvordan API-klienten er implementert",
            "MSW kan bare brukes i nettleser, ikke i testmiljø",
            "MSW krever ikke noe oppsett",
        ],
        correct: 1,
        explanation:
            "MSW gir mer realistisk mocking ved å fange HTTP-kall uansett klient-implementasjon, og lar deg teste integrasjon på et lavere nivå.",
    },
    {
        id: "q16",
        type: "true-false",
        question: "100 % test coverage betyr alltid at koden er feilfri.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Høy coverage betyr bare at linjene er kjørt av tester, ikke at alle relevante edge cases og scenarier er testet. Kvalitet > prosent.",
    },
    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hvorfor bruker vi jest.useFakeTimers() i tester med timere eller debouncing?",
        options: [
            "For å deaktivere all async kode",
            "For å kunne kontrollere tid i testen uten å vente ekte tid",
            "For å kjøre testene i produksjonsmodus",
            "For å unngå å bruke async/await",
        ],
        correct: 1,
        explanation:
            "Fake timers lar oss spole tiden frem i testene (advanceTimersByTime) og gjøre tester raske og deterministiske.",
    },
    {
        id: "q18",
        type: "multiple-choice",
        question:
            "Hva er en fornuftig holdning til test coverage i et ekte prosjekt?",
        options: [
            "All kode må ha 100 % coverage, uansett kostnad",
            "Coverage er ubrukelig og bør ignoreres fullstendig",
            "Sikt på god dekning (f.eks. 70–80 %) på kritisk logikk og fokuser på meningsfulle tester fremfor tall",
            "Kun skrive tester for UI-komponenter",
        ],
        correct: 2,
        explanation:
            "Dekning er et verktøy, ikke et mål alene. Det viktigste er at de viktige delene av systemet er godt testet med meningsfulle scenarier.",
    },
];

export const testing_quiz = {
    id: "testing-l19-quiz",
    title: "L24 – Testing, Jest, MSW og teststrategi - BZJ",
    description:
        "Quiz som tester konsepter rundt testtyper, mocks/stubs/fakes, AAA-mønster, async testing, MSW og god testpraksis.",
    theme: ["Testing", "Jest", "React Testing Library", "MSW", "Teststrategi"],
    questions: [...questions],
};
