const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å bruke Single Responsibility Principle (SRP) i React-komponenter?",
        options: [
            "Komponentene blir raskere å rendere",
            "Komponentene blir enklere å forstå, teste og vedlikeholde",
            "Komponentene får støtte for arv som i objektorienterte språk",
            "Man slipper å bruke props for å kommunisere mellom komponenter"
        ],
        correct: 1,
        explanation:
            "Leksjonen understreker at SRP gjør komponentene mer fokuserte, testbare og lett å vedlikeholde. Dette er kjernen i komponent-separasjon. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvilket av følgende er et NATURLIG brytningspunkt for å separere en stor komponent?",
        options: [
            "Når en del av komponenten håndterer en helt egen visuell struktur, som ActionButtons",
            "Når komponenten har mer enn 50 linjer kode, uansett innhold",
            "Når man har brukt mer enn to hooks",
            "Når man ønsker å bruke CSS-in-JS"
        ],
        correct: 0,
        explanation:
            "Brytningspunkter handler om tydelige ansvarsområder, ikke linjetall. ActionButtons ble i leksjonen identifisert som et naturlig separasjonsområde. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hvorfor brukes callback-props (onView, onEdit, onDelete) i ActionButtons-komponenten?",
        options: [
            "For å gjøre komponenten avhengig av global state",
            "For å sikre at all logikk kjøres direkte i child-komponenten",
            "For å la parent bestemme funksjonalitet og gjøre knappe-komponenten gjenbrukbar",
            "For å gjøre testingen enklere ved å unngå mocks"
        ],
        correct: 2,
        explanation:
            "Callback-props gir dependency injection: parent bestemmer logikken, mens ActionButtons kun håndterer UI. Dette øker gjenbrukbarhet. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "true-false",
        question:
            "Props drilling oppstår når props må sendes gjennom flere lag av komponenter for å nå riktig sted.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Leksjonen beskriver props drilling som en skaleringsutfordring når mange callback- eller data-props må sendes ned gjennom flere komponenter. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvorfor er komponent-komposisjon å foretrekke fremfor arv i React-arkitektur?",
        options: [
            "Fordi React ikke støtter klasser i det hele tatt",
            "Fordi komposisjon gjør at vi kan sette sammen små, fokuserte komponenter til større helheter",
            "Fordi komposisjon automatisk optimaliserer ytelse",
            "Fordi arv krever at alle komponenter rendres på nytt ved hver state-endring"
        ],
        correct: 1,
        explanation:
            "React bygger på komposisjon – små komponenter som settes sammen – som gir fleksibilitet og gjenbrukbarhet. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er en ULEMPE med for sterk komponent-separasjon?",
        options: [
            "For mange små komponenter kan gjøre prosjektet vanskelig å navigere og kreve mer koordinering",
            "Komponenter mister all state",
            "React slutter å støtte props",
            "Testing blir umulig når komponentene er små"
        ],
        correct: 0,
        explanation:
            "Leksjonen nevner at ekstrem granularitet kan øke koordineringskompleksitet og props drilling. Det gjelder å finne en balansert separasjon. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er en tydelig fordel med å trekke ut hjelpefunksjoner som formatDate i en egen modul?",
        options: [
            "Det fjerner behovet for TypeScript",
            "Det gjør at komponenter kan kjøre utenfor React-runtime",
            "Det øker konsistens, gjør funksjonen testbar og sentraliserer formateringslogikk",
            "Det gjør at vi ikke trenger props"
        ],
        correct: 2,
        explanation:
            "Leksjonen viser at formatDate gir konsistent formatering og enkel testbarhet via ren enhetstesting. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "En modulær komponentstruktur gjør enhetstesting enklere, men integrasjonstesting mindre nyttig.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Leksjonen beskriver at modulær arkitektur gjør både enhetstesting OG integrasjonstesting mer verdifullt – ikke mindre. Begge utfyller hverandre. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva kjennetegner identifisering av ansvarsområder i QuestionTable før separasjon?",
        options: [
            "Man teller antall hooks og deler basert på det",
            "Man ser etter deler som håndterer forskjellig logikk, som filtrering, rendering av rader og action-knapper",
            "Man separerer komponenter tilfeldig for å redusere linjetall",
            "Man fokuserer kun på CSS-separasjon"
        ],
        correct: 1,
        explanation:
            "Leksjonen identifiserer fem klare ansvarsområder (filters, results-info, table structure, row rendering og action buttons). Disse danner naturlige separasjonspunkter. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hvorfor blir testene mer robuste etter komponent-separasjon?",
        options: [
            "Fordi vi kan teste props direkte uten React",
            "Fordi en bug i én komponent ikke lenger påvirker andre utestede deler",
            "Fordi alle tester automatisk genereres",
            "Fordi useState ikke kan brukes i små komponenter"
        ],
        correct: 1,
        explanation:
            "Når komponentene har ett ansvar hver, er det enklere å lokalisere feil og skrive målrettede tester som beskytter mot regresjoner. :contentReference[oaicite:10]{index=10}"
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er et typisk tegn på at en komponent bør separeres videre?",
        options: [
            "Den inneholder både visuell representasjon og logikk for databehandling",
            "Den bruker kun props og ingen state",
            "Den har kun én child-komponent",
            "Den har en CSS-klasse"
        ],
        correct: 0,
        explanation:
            "Leksjonen viser at komponenter som QuestionRow (visuell visning) og ActionButtons (interaksjon) bør separeres når de blander flere ansvarsområder. :contentReference[oaicite:11]{index=11}"
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "Callback-patternet som brukes i ActionButtons er en form for dependency injection.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Parent-komponenten injiserer logikk via props, mens ActionButtons kun håndterer UI – dette er klassisk dependency injection. :contentReference[oaicite:12]{index=12}"
    }
];

export const ulearn_8_componentSeparation_webapps = {
    id: "ulearn_8_componentSeparation_webapps",
    title: "L8 - React – Komponent-separasjon og modulær arkitektur - KML",
    description:
        "Quiz som tester forståelsen av SRP, komponent-komposisjon, props-kommunikasjon, callback-patterns, testbarhet og modulær arkitektur.",
    theme: [
        "arkitektur",
        "komposisjon",
        "props",
        "testing",
        "scalability"
    ],
    questions: [...questions]
};
