const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Når er det mest hensiktsmessig å bruke direct import pattern (direkte import av db/ORM) i et repository?",
        options: [
            "I store produksjonssystemer med mange utviklere",
            "Når testdekning og mocking er kritisk",
            "I tidlig prototyping, læring og små prosjekter med lav kompleksitet",
            "Når man bruker Zod for validering"
        ],
        correct: 2,
        explanation:
            "Direct import har lav overhead og er lett å forstå, men gir dårlig testbarhet og høy coupling."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er et tydelig signal på at det er på tide å gå fra direct import til factory pattern?",
        options: [
            "Når applikasjonen bruker TypeScript",
            "Når du trenger å mocke database-laget i tester og støtte flere miljøer",
            "Når databasen blir treg",
            "Når du legger til flere tabeller"
        ],
        correct: 1,
        explanation:
            "Behov for testbarhet, mocking og miljøspesifikk konfigurasjon er sterke signaler for factory pattern."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er den viktigste fordelen med factory pattern for repositories?",
        options: [
            "Raskere database-queries",
            "Mindre kode totalt",
            "Eksplisitte avhengigheter og enklere testing",
            "Automatisk caching"
        ],
        correct: 2,
        explanation:
            "Factory pattern gjør avhengigheter eksplisitte og muliggjør enkel mocking og testing."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Når gir det mening å introdusere en DI-container (dependency injection container)?",
        options: [
            "Alltid, fra dag én",
            "Kun i frontend-kode",
            "Når systemet er stort, har mange services og komplekse avhengigheter",
            "Kun når man bruker Cloudflare Workers"
        ],
        correct: 2,
        explanation:
            "DI-containere gir stor fleksibilitet, men høy kompleksitet – egnet for større systemer."
    },

    {
        id: "q5",
        type: "true-false",
        question:
            "Det er alltid en god idé å starte med maksimal abstraksjon (DI-container) for å være fremtidsrettet.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Prematur abstraksjon øker kompleksitet og reduserer læringsverdi – progressiv arkitektur er anbefalt."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva gir Drizzle schema-definisjoner deg som raw SQL ikke gir automatisk?",
        options: [
            "Bedre ytelse",
            "Automatisk TypeScript type-inference basert på schema",
            "Mindre behov for migrasjoner",
            "Innebygd caching"
        ],
        correct: 1,
        explanation:
            "Drizzle genererer TypeScript-typer direkte fra schema, som gir compile-time type safety."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor brukes foreign keys med cascade deletes?",
        options: [
            "For å gjøre queries raskere",
            "For å automatisk slette eller oppdatere relaterte data og bevare referensiell integritet",
            "For å erstatte soft deletes",
            "For å unngå indekser"
        ],
        correct: 1,
        explanation:
            "Cascade-regler sikrer at relasjoner forblir konsistente når parent-data endres eller slettes."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er en viktig ulempe med soft deletes sammenlignet med hard deletes?",
        options: [
            "Data kan ikke gjenopprettes",
            "Alle queries må eksplisitt filtrere bort slettede rader",
            "De kan ikke brukes med foreign keys",
            "De støttes ikke av ORM-er"
        ],
        correct: 1,
        explanation:
            "Soft deletes krever konsekvent filtrering (f.eks. deletedAt IS NULL) i alle queries."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Når er string-baserte IDs (UUID/nanoid) å foretrekke fremfor auto-increment integer IDs?",
        options: [
            "Når ytelse er viktigst",
            "Når ID-er eksponeres i URL-er og sikkerhet er viktig",
            "Når databasen er liten",
            "Når man bruker SQLite"
        ],
        correct: 1,
        explanation:
            "String-IDs er vanskeligere å gjette og reduserer risiko for enumeration attacks."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er hovedformålet med database-normalisering?",
        options: [
            "Å gjøre queries enklere",
            "Å redusere redundans og sikre dataintegritet",
            "Å forbedre caching",
            "Å gjøre ORM-kode kortere"
        ],
        correct: 1,
        explanation:
            "Normalisering reduserer duplisering og inkonsistens i databasen."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvorfor trenger vi Zod i tillegg til TypeScript når vi jobber med databaser og API-er?",
        options: [
            "TypeScript fungerer ikke med databaser",
            "TypeScript-typer eksisterer kun ved compile-time, ikke runtime",
            "Zod er raskere enn TypeScript",
            "Drizzle krever Zod"
        ],
        correct: 1,
        explanation:
            "TypeScript forsvinner ved runtime – Zod validerer faktisk data når appen kjører."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva skjer typisk når Zod-validering feiler?",
        options: [
            "Applikasjonen fortsetter med default-verdier",
            "Det kastes en error som må håndteres eksplisitt",
            "Databasen ruller automatisk tilbake",
            "TypeScript kompilerer ikke"
        ],
        correct: 1,
        explanation:
            "Zod kaster feil ved invalid input, som bør mappes til konsistente API-feil."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er en fordel med å bruke Zod-schemas sammen med database-operasjoner?",
        options: [
            "Færre migrasjoner",
            "Sikrer at kun gyldige data når repository-laget",
            "Automatisk indeksering",
            "Bedre caching"
        ],
        correct: 1,
        explanation:
            "Zod fungerer som en sikkerhetsport før data når databasen."
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hvilken testing-strategi passer best for factory-baserte repositories?",
        options: [
            "Kun end-to-end tester",
            "Unit-tester med mockede database-instanser",
            "Snapshot-tester",
            "Manuell testing via UI"
        ],
        correct: 1,
        explanation:
            "Factory pattern gjør det enkelt å injisere mock-databaser i unit-tester."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hvorfor er migrasjoner viktige i team-basert utvikling?",
        options: [
            "De forbedrer runtime-ytelse",
            "De sikrer at alle miljøer har samme database-schema",
            "De erstatter behovet for testing",
            "De gjør ORM-kode enklere"
        ],
        correct: 1,
        explanation:
            "Migrasjoner fungerer som versjonskontroll for databasen."
    },

    {
        id: "q16",
        type: "true-false",
        question:
            "Det er trygt å endre eller slette kolonner direkte i produksjonsdatabasen uten migrasjoner.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Slike endringer kan føre til datatap og inkonsistens – migrasjoner gir kontroll."
    },

    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hva er en sentral idé bak progressiv arkitektur i database-integrasjon?",
        options: [
            "Alltid bruke mest avansert løsning",
            "Optimalisere for ytelse først",
            "Starte enkelt og introdusere kompleksitet først når behovet oppstår",
            "Unngå refaktorering"
        ],
        correct: 2,
        explanation:
            "Progressiv arkitektur gir bedre forståelse, mindre over-engineering og mer robust evolusjon av systemet."
    }
];

export const quiz_progressive_db_drizzle_zod = {
    id: "quiz-progressive-db-drizzle-zod",
    title: "L16 - Database-integrasjon med Drizzle & Zod - KML",
    description:
        "Quiz om arkitekturvalg, repository patterns, database-design, type safety med Zod og praktiske trade-offs ved progressiv utvikling.",
    theme: [
        "database",
        "drizzle",
        "patterns",
        "arkitektur",
        "testing",
    ],
    questions: [...questions]
};
