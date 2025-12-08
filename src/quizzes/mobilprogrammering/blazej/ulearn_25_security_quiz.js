const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva er hovedformålet med OWASP i utviklingssammenheng?",
        options: [
            "Å tilby ferdige backend-løsninger for autentisering",
            "Å forbedre sikkerheten i programvare gjennom retningslinjer, kunnskap og verktøy",
            "Å tilby en kommersiell sikkerhetsplattform",
            "Å erstatte alle andre sikkerhetsstandarder",
        ],
        correct: 1,
        explanation:
            "OWASP er en global, ikke-kommersiell organisasjon som fokuserer på å forbedre sikkerheten i programvare, bl.a. via OWASP Top 10 og egne guider for web og mobil.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question: "Hva står CIA-modellen for innen sikkerhet?",
        options: [
            "Control, Isolation, Access",
            "Confidentiality, Integrity, Availability",
            "Configuration, Identity, Authorization",
            "Compliance, Insurance, Audit",
        ],
        correct: 1,
        explanation:
            "CIA-modellen består av Confidentiality (konfidensialitet), Integrity (integritet) og Availability (tilgjengelighet).",
    },
    {
        id: "q3",
        type: "true-false",
        question:
            "Konfidensialitet handler om at kun autoriserte parter skal ha tilgang til informasjon.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Konfidensialitet betyr at kun de som har lov, skal få se eller få tilgang til informasjonen.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva betyr det at systemer skal 'feile sikkert' (fail secure)?",
        options: [
            "At systemet alltid skal prøve å gjette hva brukeren mente",
            "At systemet åpner mest mulig tilgang ved feil for å ikke blokkere bruker",
            "At systemet ved feil unngår å lekke info og heller begrenser tilgang",
            "At systemet restartes automatisk uten logging",
        ],
        correct: 2,
        explanation:
            "Å feile sikkert betyr f.eks. å ikke eksponere sensitiv info i feilmeldinger og heller stenge tilgang ved usikkerhet.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er en grunnleggende antagelse om klienten i sikkerhetsperspektiv?",
        options: [
            "At klienten alltid er trygg så lenge vi skrur av debug",
            "At vi kan stole på at klientkoden ikke endres",
            "At klienten må regnes som kompromittert og ikke kan stoles på alene",
            "At all validering kan gjøres på klienten for bedre UX",
        ],
        correct: 2,
        explanation:
            "Klienten kan manipuleres, reverse-engineres og debugges. Derfor kan vi aldri stole på kun klientvalidering.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question: "Hva er riktig bruk av klient- vs servervalidering?",
        options: [
            "Kun klientvalidering er nødvendig hvis vi har regex",
            "Klientvalidering er for UX, servervalidering er for sikkerhet",
            "Kun servervalidering er nødvendig, aldri valider på klient",
            "Validering er bare relevant for betalingsflyt",
        ],
        correct: 1,
        explanation:
            "Klientvalidering forbedrer brukeropplevelsen, men serveren må alltid validere alt på nytt for sikkerhet.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er hovedproblemet med å legge forretningskritisk logikk (f.eks. prisberegning, rabatter) kun i klienten?",
        options: [
            "Brukeren får bedre ytelse",
            "Det blir vanskeligere å teste",
            "Logikken kan enkelt avsløres og manipuleres ved å inspisere bundelen",
            "Det fungerer bare på Android, ikke iOS",
        ],
        correct: 2,
        explanation:
            "JS-bundelen kan ekstraheres, leses og manipuleres. Kritisk logikk og regler bør ligge på server.",
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "Autentisering svarer på spørsmålet 'Hvem er du?', mens autorisasjon svarer på 'Hva har du lov til å gjøre?'.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Autentisering identifiserer brukeren, autorisasjon styrer hvilke handlinger og ressurser brukeren har tilgang til.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvilken datatype er BEST egnet for lagring i AsyncStorage / localStorage?",
        options: [
            "Access tokens og refresh tokens",
            "Bankkortnummer i klartekst",
            "Ikke-sensitiv data som tema, språk og enkle preferanser",
            "API-nøkler til tredjeparts tjenester",
        ],
        correct: 2,
        explanation:
            "AsyncStorage er ikke sikkert nok for hemmeligheter. Den kan brukes til ting som tema, språk og andre ufarlige preferanser.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er riktig praksis for håndtering av API-nøkler i en mobilklient?",
        options: [
            "Hardkode API-nøkkelen i frontend-koden",
            "Gjøre API-nøkkelen litt mindre synlig ved å putte den i en funksjon",
            "Alltid hente hemmelige nøkler fra en trygg server eller proxy og verifisere dem der",
            "Lagre nøkkelen i AsyncStorage",
        ],
        correct: 2,
        explanation:
            "API-nøkler må behandles som hemmeligheter og håndteres på server-side. Klienten bør aldri ha permanente hemmeligheter.",
    },
    {
        id: "q11",
        type: "true-false",
        question:
            "Det er tryggere å bruke etablerte kryptobiblioteker enn å implementere egen krypteringsalgoritme.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Egen “hjemmesnekret” kryptering er nesten alltid usikker. Bruk standarder og battle-tested biblioteker.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva beskriver best prinsippet om 'minste nødvendige tillatelser' (least privilege)?",
        options: [
            "Brukere skal ha alle rettigheter til alt for å slippe support",
            "Brukere og systemer skal kun ha akkurat det de trenger, og ikke mer",
            "Bare administratorer trenger begrensede rettigheter",
            "Det gjelder kun for databaser, ikke for mobilapper",
        ],
        correct: 1,
        explanation:
            "Least privilege begrenser skadeomfang ved et brudd: både brukere, prosesser og apper får kun nødvendige rettigheter.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hvorfor er whitelist-tilnærming generelt sikrere enn blacklist?",
        options: [
            "Whitelist er enklere å implementere",
            "Whitelist tillater alt som ikke er eksplisitt blokkert",
            "Whitelist definerer eksplisitt hva som er lov, og alt annet avvises",
            "Blacklist brukes bare til filtyper, ikke roller",
        ],
        correct: 2,
        explanation:
            "Med whitelist definerer du eksplisitt gyldige verdier. Det reduserer sjansen for at du overser farlige tilfeller.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er hovedgrunnen til at all kommunikasjon mellom app og server bør gå over HTTPS/TLS?",
        options: [
            "For å få raskere responstid",
            "For å gjøre debugging vanskeligere",
            "For å kryptere trafikken og beskytte mot avlytting og manipulering",
            "For å slippe CORS",
        ],
        correct: 2,
        explanation:
            "TLS/HTTPS beskytter mot at noen kan lese eller endre trafikken mellom klient og server.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er en viktig sikker utfordring knyttet til deep links i mobilapper?",
        options: [
            "At deep links ikke fungerer på iOS",
            "At deep links alltid krever biometrisk autentisering",
            "At deep links kan manipuleres, og flere apper kan forsøke å håndtere samme link (kollisjon)",
            "At deep links forhindrer bruk av pushvarsler",
        ],
        correct: 2,
        explanation:
            "Deep links kan være manipulert, og andre apper kan 'kapre' en link-type. Derfor må domene, path og parametere valideres nøye.",
    },
    {
        id: "q16",
        type: "true-false",
        question:
            "Input-validering på klienten er tilstrekkelig for sikkerhet så lenge vi har regex.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Klientvalidering kan alltid omgås. Regex på klient er bra for UX, men serveren MÅ validere alt på nytt.",
    },
    {
        id: "q17",
        type: "multiple-choice",
        question: "Hva er et sentralt mål med god session-håndtering i apper?",
        options: [
            "At brukeren aldri blir logget ut",
            "At session varer evig for best mulig brukeropplevelse",
            "Å balansere brukervennlighet og sikkerhet med timeout, token-refresh og trygg lagring",
            "Å lagre sessiondata i AsyncStorage for å slippe SecureStore",
        ],
        correct: 2,
        explanation:
            "Session-håndtering handler blant annet om timeout-regler, refresh-logikk og sikker lagring av session-data/tokens.",
    },
    {
        id: "q18",
        type: "true-false",
        question:
            "Sikkerhet i applikasjoner er en engangsoppgave som kan 'gjøres ferdig' mot slutten av prosjektet.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Sikkerhet er en kontinuerlig prosess som må inn i design, utvikling, testing, deployment og drift.",
    },
];

export const security_owasp_quiz = {
    id: "security-owasp-quiz",
    title: "L25 - Sikkerhet, OWASP og mobilapplikasjoner - BZJ",
    description:
        "Quiz om grunnleggende sikkerhetsprinsipper, CIA-modellen, klient vs. server, lagring, nøkler, nettverk, deep links og tilgangskontroll.",
    theme: ["Sikkerhet", "OWASP", "Mobil", "React Native"],
    questions: [...questions],
};
