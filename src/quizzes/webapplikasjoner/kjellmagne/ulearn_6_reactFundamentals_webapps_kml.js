const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hvorfor bruker vi useState i QuestionTable-komponenten?",
        options: [
            "For å lagre globale data tilgjengelig for hele applikasjonen",
            "For å håndtere lokal state som søketerm og filtervalg",
            "For å utføre API-kall automatisk",
            "For å lagre CSS-styling i JavaScript"
        ],
        correct: 1,
        explanation:
            "I leksjonen brukes useState til å håndtere lokal state for søketerm og statusfilter, som styrer filtreringslogikken i komponenten. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å definere TypeScript-interfaces for Question og Answer?",
        options: [
            "Det gjør at koden kompilerer raskere",
            "Det gir type-sikkerhet og gjør datastrukturen selv-dokumenterende",
            "Det gjør at komponenten ikke trenger state",
            "Det gjør at React automatisk genererer skjemaer for oss"
        ],
        correct: 1,
        explanation:
            "Interfaces for Question og Answer gir compile-time validering og bedre IDE-støtte, som vist i leksjonen. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er den riktige måten å implementere søkefunksjonalitet i QuestionTable?",
        options: [
            "Bruke .map() for å sammenligne strengverdi med filteret",
            "Bruke .filter() og toLowerCase() for case-insensitive søk",
            "Bruke if-statements inni JSX",
            "Bruke useEffect for å oppdatere DOM manuelt"
        ],
        code: `
const filteredQuestions = mockQuestions.filter(q =>
  q.question.toLowerCase().includes(searchTerm.toLowerCase())
);
    `,
        correct: 1,
        explanation:
            "Leksjonen viser at filtrering gjøres med .filter() og toLowerCase() for å støtte case-insensitive søk. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "true-false",
        question:
            "Conditional rendering brukes i QuestionTable for å vise en melding dersom ingen resultater matcher filtrene.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Leksjonen viser bruk av `{filteredQuestions.length === 0 && <div>…</div>}` for å conditionally rendre 'Ingen spørsmål funnet'. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er formålet med mockQuestions-arrayet i komponenten?",
        options: [
            "Å simulere API-data slik at vi kan fokusere på logikk før backend finnes",
            "Å lagre CSS-klasser for tabellen",
            "Å vise hvordan useEffect fungerer",
            "Å teste useReducer"
        ],
        correct: 0,
        explanation:
            "Mock-data brukes slik at vi kan bygge funksjonalitet før API/database er på plass — en del av 'Make it work, then make it better'. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva viser dette JSX-utdraget et eksempel på?",
        code: `
<span className={\`status-badge status-\${question.status}\`}>
  {question.status}
</span>
    `,
        options: [
            "Dynamisk CSS-klassenavn basert på data",
            "En feil hvor className må være class",
            "Inline styles i JSX",
            "Context-basert styling"
        ],
        correct: 0,
        explanation:
            "Leksjonen demonstrerer dynamiske klassenavn for styling av status-badges, basert på question.status. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "true-false",
        question:
            "I en skalerbar applikasjon bør søke- og filterlogikk alltid gjøres på klienten for best ytelse.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Leksjonen forklarer at filtrering ideelt gjøres server-side ved skalering, f.eks. via query parameters i API-kall. Klientsidefiltrering er bra for små dataset. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er en typisk utfordring når QuestionTable-komponenten vokser i funksjonalitet?",
        options: [
            "React slutter å re-rendre ved state-endringer",
            "CSS slutter å virke når tabellen har flere rader",
            "Komponenten blir for stor og bryter Single Responsibility Principle",
            "TypeScript slutter å validere interfaces"
        ],
        correct: 2,
        explanation:
            "Leksjonen peker på at alt ligger i én komponent i starten, og at dette gir et naturlig behov for refaktorering etter 'Make it work, then make it better'. Arkitektur-utfordringer øker når komponenten vokser. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva kjennetegner event handling i QuestionTable-komponenten?",
        options: [
            "Events oppdaterer DOM direkte",
            "Event handlers (handleView, handleEdit, handleRemove) mottar ID-er og utfører CRUD-relaterte handlinger",
            "Event handlers må skrives som useEffect-hooks",
            "Events må defineres globalt i App-komponenten"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser at knappene kaller handleView/Edit/Remove og sender question.id, som følger CRUD-mønstre (selv om de foreløpig kun logger). :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva beskriver best 'Make it work, then make it better'-tilnærmingen som leksjonen legger opp til?",
        options: [
            "Man lager perfekt arkitektur fra starten for å unngå fremtidig refaktorering",
            "Man implementerer minimal funksjonalitet først og forbedrer struktur etter læring og behov",
            "Man skriver all CSS til slutt for å spare tid",
            "Man bruker kun globale state-management løsninger"
        ],
        correct: 1,
        explanation:
            "Leksjonen understreker at man bør lage en fungerende løsning først, deretter forbedre kodekvalitet og arkitektur når behovene blir tydelige. Dette gir raskere læring og mindre over-engineering. :contentReference[oaicite:10]{index=10}"
    }
];

export const ulearn_6_reactFundamentals_kml = {
    id: "ulearn_6_reactFundamentals_kml",
    title: "L6 - QuestionTable søk & filtrering - KML",
    description:
        "Quiz som tester forståelsen av React hooks, TypeScript interfaces, filtreringslogikk, event handling, arkitektur og 'Make it work, then make it better'-strategien.",
    theme: [
        "hooks",
        "typescript",
        "arkitektur"
    ],
    questions: [...questions]
};
