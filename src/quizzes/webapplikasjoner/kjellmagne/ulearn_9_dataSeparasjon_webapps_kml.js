const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva beskriver BEST Dependency Injection-prinsippet slik det brukes i React-leksjonen?",
        options: [
            "Komponenter henter selv dataene de trenger fra API eller database",
            "Komponenter lager sine egne avhengigheter internt",
            "Komponenter får data og avhengigheter levert utenfra via props",
            "Komponenter må bruke Context API for å fungere korrekt"
        ],
        correct: 2,
        explanation:
            "Dependency Injection betyr at komponenter ikke skal skape sine egne avhengigheter, men få dem injisert utenfra (via props). Dette gir løs kobling, bedre testbarhet og høyere fleksibilitet. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er hovedproblemet med hardkodet data direkte inne i en React-komponent?",
        options: [
            "Det fører til dårlig CSS-ytelse",
            "Det skaper tight coupling og gjør komponenten vanskelig å teste og gjenbruke",
            "Det gjør TypeScript overflødig",
            "Det hindrer bruk av hooks"
        ],
        correct: 1,
        explanation:
            "Hardkodet data binder komponenten tett til én datakilde (tight coupling), noe som reduserer fleksibilitet, testbarhet og gjenbruk. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "true-false",
        question:
            "Props-basert data injection gjør at samme komponent kan brukes med mock-data, API-data eller database-data uten endring av komponentkoden.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Dette er et sentralt poeng i leksjonen: komponenten blir data-agnostisk og kan brukes i mange kontekster så lenge data følger kontrakten. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er rollen til TypeScript-interfaces i data-separasjon?",
        options: [
            "Å erstatte runtime-validering",
            "Å fungere som data-kontrakter som spesifiserer hva komponenter forventer",
            "Å forbedre CSS-strukturen",
            "Å gjøre React raskere i runtime"
        ],
        correct: 1,
        explanation:
            "Interfaces fungerer som eksplisitte kontrakter for data, gir type-sikkerhet og dokumenterer tydelig hvilke krav komponentene har til input. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvorfor brukes type guards (f.eks. isValidQuestion) i tillegg til TypeScript-typer?",
        options: [
            "Fordi TypeScript ikke støtter arrays",
            "For å validere data i runtime når data kommer fra usikre kilder som API-er",
            "For å gjøre koden kortere",
            "For å erstatte behovet for interfaces"
        ],
        correct: 1,
        explanation:
            "TypeScript finnes kun i compile-time. Type guards gir runtime-sikkerhet og beskytter mot ugyldige data fra eksterne kilder. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "true-false",
        question:
            "En data-agnostisk komponent har ansvar for både datainnhenting og presentasjon.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Usant. Data-agnostiske komponenter fokuserer på presentasjon og interaksjon, mens datainnhenting håndteres av parent-komponenter eller hooks. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er en direkte testfordel med props-basert dependency injection?",
        options: [
            "Man slipper å bruke testbiblioteker",
            "Man kan injisere spesifikke test-datasett uten å endre komponentkoden",
            "Man trenger ikke lenger integrasjonstester",
            "Man slipper å bruke mocks"
        ],
        correct: 1,
        explanation:
            "Ved å injisere data via props kan tester bruke presise datasett (tom liste, arkiverte spørsmål, edge cases) uten å røre komponentimplementasjonen. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva kjennetegner loose coupling i React-arkitektur?",
        options: [
            "Komponenter kjenner detaljene om hverandres interne implementasjon",
            "Komponenter er hardkodet til bestemte datakilder",
            "Komponenter kommuniserer via tydelige kontrakter (props og interfaces)",
            "Komponenter bruker alltid global state"
        ],
        correct: 2,
        explanation:
            "Loose coupling betyr at komponenter er koblet sammen via veldefinerte kontrakter, ikke konkrete implementasjoner. Dette gjør endringer enklere og tryggere. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvorfor er readonly-felter i TypeScript-interfaces nyttige i denne arkitekturen?",
        options: [
            "De gjør data immutable og reduserer risiko for utilsiktede sideeffekter",
            "De gjør komponenter raskere",
            "De erstatter behovet for useState",
            "De gjør runtime-validering overflødig"
        ],
        correct: 0,
        explanation:
            "Readonly-felter signaliserer at data ikke skal muteres på tvers av komponentgrenser, noe som gir tryggere og mer forutsigbar dataflyt. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "true-false",
        question:
            "Props drilling er en potensiell ulempe ved props-basert data injection når applikasjonen skalerer.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Leksjonen peker på props drilling som en kjent skaleringsutfordring, og nevner Context API eller state-management-biblioteker som fremtidige løsninger. :contentReference[oaicite:10]{index=10}"
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvilket utsagn beskriver BEST hvorfor data-separasjon gir bedre gjenbrukbarhet?",
        options: [
            "Komponentene kan kun brukes på én side, men med forskjellige styles",
            "Komponentene kan brukes med ulike datakilder uten omskriving",
            "Komponentene blir mindre og raskere",
            "Komponentene trenger ikke props"
        ],
        correct: 1,
        explanation:
            "Når komponenten er data-agnostisk kan den brukes med mock-data, API-er eller database-responser – så lenge kontrakten følges. :contentReference[oaicite:11]{index=11}"
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er en NATURLIG videreutvikling når dataflyten og kompleksiteten øker ytterligere?",
        options: [
            "Å gå tilbake til hardkodet data",
            "Å flytte all logikk inn i komponentene igjen",
            "Å introdusere verktøy som React Query, schema-validering (Zod) og eventuell global state",
            "Å fjerne TypeScript for å gjøre koden enklere"
        ],
        correct: 2,
        explanation:
            "Leksjonen avslutter med å peke på fremtidige løsninger som React Query, Zod/Yup og state management for caching, validering og skalerbarhet. :contentReference[oaicite:12]{index=12}"
    }
];

export const react_data_separation_di_quiz = {
    id: "react-data-separation-di",
    title: "L9 - Data-separasjon og props-basert Dependency Injection - KML",
    description:
        "Quiz som tester forståelsen av Dependency Injection, data-agnostiske komponenter, TypeScript-kontrakter, runtime-validering og skalerbar React-arkitektur.",
    theme: [
        "dependency_injection",
        "typescript",
        "testing",
        "scalability"
    ],
    questions: [...questions]
};
