const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva er hovedformålet med Tabs i en mobilapp?",
        options: [
            "Å vise popup vinduer",
            "Å gi rask tilgang til hovedområder i appen",
            "Å skjule navigasjon",
            "Å kjøre bakgrunnsprosesser",
        ],
        correct: 1,
        explanation:
            "Tabs brukes som navigasjon som alltid er synlig og gir rask tilgang til viktige deler av appen.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvorfor brukes route grupper når man bygger en app med flere navigasjonsnivåer?",
        options: [
            "For å gi appen bedre grafikk",
            "For å organisere ruter og kontrollere hvilke skjermer som deler layout",
            "For at appen skal kunne lagre data lokalt",
            "For å redusere antall faner totalt",
        ],
        correct: 1,
        explanation:
            "Route grupper hjelper oss med å strukturere navigasjonen og styre hvordan ulike deler av appen vises.",
    },
    {
        id: "q3",
        type: "true-false",
        question:
            "Tabs kan ha både ikon og tekst slik at brukeren lettere skjønner funksjonen for hver fane.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Ikoner og tekst er en vanlig kombinasjon for tydelig navigasjon.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvorfor kan det være nyttig å skjule standard header når man bruker Tabs?",
        options: [
            "Headeren kan kollidere med tab navigasjon og gi dobbelt visning",
            "Headeren stopper appen fra å starte",
            "Headeren tar bort ikonene fra Tabs",
            "Headeren gjør at appen ikke kan scrolles",
        ],
        correct: 0,
        explanation:
            "Når Tabs brukes, kan header bli overflødig og skape visuelt rot.",
    },
    {
        id: "q5",
        type: "true-false",
        question:
            "Route struktur kan brukes til å gjenspeile hvilken navigasjon appen har.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Mappestrukturen representerer navigasjonsflyten og hjelper oss å holde oversikt.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor deles studentliste og studentdetaljer i ulike grupper i eksempelet?",
        options: [
            "For å bruke forskjellige tema farger",
            "For å unngå at Tabs for liste og detaljer blir blandet og kontrollere layout separat",
            "For å bruke forskjellig ikonsett",
            "For å gjøre koden kortere",
        ],
        correct: 1,
        explanation:
            "Separate grupper gir en klar navigasjonsstruktur og egne Tabs for hver del.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question: "Hva er hovedideen bak å bruke en layoutfil i navigasjonen?",
        options: [
            "Å vise brukernavn",
            "Å kontrollere hvordan skjermer vises og organiseres sammen",
            "Å definere størrelsen på skjermen",
            "Å tvinge appen til å bruke mørkt tema",
        ],
        correct: 1,
        explanation:
            "Layout kontrollerer navigasjonens oppsett, struktur og synlighet.",
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "Tabs kan brukes både for listevisning og detaljvisning slik at brukeren raskt kan bytte mellom funksjoner.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Tabs gir brukeren mulighet til å bevege seg mellom ulike handlinger på samme område.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er nytten av å bygge navigasjonsstrukturen steg for steg i stedet for alt på en gang?",
        options: [
            "Det gjør appen tregere",
            "Det gir bedre oversikt og enklere feilsøking",
            "Det gjør at man slipper å teste appen",
            "Det er ikke nødvendig, men ser mer profesjonelt ut",
        ],
        correct: 1,
        explanation:
            "Gradvis oppbygging gir kontroll og forståelse før strukturen blir kompleks.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question: "Hvorfor brukes konseptet nesting i navigasjonen?",
        options: [
            "For å kunne lagre flere bilder",
            "For å skille funksjonelt ulike områder og knytte navigasjon til hierarki",
            "For å aktivere push varsler",
            "For å kunne deaktivere internett i appen",
        ],
        correct: 1,
        explanation:
            "Nesting gjør det mulig å bygge logisk struktur og navigasjonsflyt som følger innholdet.",
    },
    {
        id: "q11",
        type: "true-false",
        question:
            "I en kompleks navigasjon kan flere nivåer av Stack og Tabs gjøre appen mer forståelig for brukeren.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Flere nivåer kan støtte bedre flyt når hver del brukes til riktig formål.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er et viktig prinsipp når vi designer navigasjon med flere nivåer?",
        options: [
            "Å skjule så mye som mulig",
            "Å sørge for at navigasjonen speiler hvordan brukeren tenker om innholdet",
            "Å bruke så mange faner som mulig",
            "Å bruke kun én layout for alt",
        ],
        correct: 1,
        explanation:
            "God navigasjon følger brukerens mentale modell og gjør det intuitivt å finne frem.",
    },
];

export const quiz_routes_and_tabs_concept = {
    id: "quiz-routes-and-tabs-concept",
    title: "Konseptforståelse av navigasjon og Tabs",
    description:
        "Quiz som tester forståelse av ruteorganisering, Tabs og navigasjonsstruktur.",
    theme: ["navigation", "Tabs", "Route grupper", "expo"],
    questions: [...questions],
};
