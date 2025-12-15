const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedforskjellen mellom en database-modell og en API DTO?",
        options: [
            "Database-modeller brukes kun i frontend",
            "DTO-er representerer API-kontrakten, mens database-modeller representerer intern lagring",
            "DTO-er inneholder mer data enn database-modeller",
            "Det er ingen reell forskjell"
        ],
        correct: 1,
        explanation:
            "Database-modeller er interne og kan endres, mens DTO-er definerer en stabil kontrakt mot klienter."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er det største problemet med å eksponere database-modeller direkte gjennom et API?",
        options: [
            "Dårlig ytelse",
            "Tight coupling, sikkerhetsrisiko og vanskelig versjonering",
            "Mer kode å vedlikeholde",
            "At TypeScript-typer blir for store"
        ],
        correct: 1,
        explanation:
            "Direkte eksponering gjør at API-et endres hver gang databasen endres og kan lekke sensitive felter."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva beskriver Anti-Corruption Layer (ACL) pattern best i denne konteksten?",
        options: [
            "Et lag som håndterer autentisering",
            "Et lag som cacher database-responser",
            "Et beskyttende lag som isolerer interne modeller fra eksterne API-kontrakter",
            "Et lag for logging av feil"
        ],
        correct: 2,
        explanation:
            "ACL beskytter domenet og interne modeller mot endringer og krav fra eksterne systemer eller klienter."
    },

    {
        id: "q4",
        type: "true-false",
        question:
            "Påstand: Mappers fungerer som et Anti-Corruption Layer mellom database-modeller og API-DTO-er.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Dette er en kjerneidé i leksjonen: Mappers isolerer interne strukturer fra API-kontrakten."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Når er det mest hensiktsmessig å bruke Zod-baserte DTO-er fremfor kun manuelle mappers?",
        options: [
            "Når ytelse er viktigere enn sikkerhet",
            "Når man trenger runtime-validering og kontrakt-sikkerhet",
            "Når API-et er helt privat",
            "Når databasen er liten"
        ],
        correct: 1,
        explanation:
            "Zod gir runtime-validering og sikrer at data faktisk matcher kontrakten, ikke bare typene."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er en fordel med manuelle mappers sammenlignet med Zod-baserte mappers?",
        options: [
            "Automatisk kontrakt-testing",
            "Bedre ytelse og full kontroll over transformasjonen",
            "Mindre behov for testing",
            "Bedre TypeScript-inferens"
        ],
        correct: 1,
        explanation:
            "Manuelle mappers gir høy kontroll og kan være raskere, men krever mer disiplin og testing."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvordan bidrar Mappers til å beskytte mot breaking changes i API-er?",
        options: [
            "Ved å forhindre database-endringer",
            "Ved å la API-kontrakten forbli stabil selv om interne modeller endres",
            "Ved å automatisk oppdatere klienter",
            "Ved å bruke samme typer overalt"
        ],
        correct: 1,
        explanation:
            "Mapper-laget gjør at database-endringer ikke nødvendigvis påvirker API-kontrakten."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er hovedformålet med server-side kontrakt-testing?",
        options: [
            "Å teste databasen",
            "Å sikre at serveren alltid produserer data som matcher publisert API-kontrakt",
            "Å forbedre ytelse",
            "Å erstatte unit-tester"
        ],
        correct: 1,
        explanation:
            "Server-side kontrakt-testing fanger opp kontraktbrudd før de når klienter."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er hovedansvaret til klient-side kontrakt-validering?",
        options: [
            "Å validere database-schema",
            "Å sikre at klienten kan håndtere API-responser og feile grasiøst ved avvik",
            "Å forbedre caching",
            "Å generere DTO-er automatisk"
        ],
        correct: 1,
        explanation:
            "Klienten må kunne oppdage og håndtere ugyldige eller endrede API-responser på en trygg måte."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å bruke DTO-schemas som kontrakt-grunnlag i testing?",
        options: [
            "De erstatter behovet for dokumentasjon",
            "De fungerer som levende dokumentasjon og testbar kontrakt",
            "De gir bedre database-ytelse",
            "De gjør API-et stateless"
        ],
        correct: 1,
        explanation:
            "DTO-schemas kan brukes både til dokumentasjon og automatisk kontrakt-testing."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvor bør mapping fra database-modell til API-DTO primært skje i en n-layer arkitektur?",
        options: [
            "I repository-laget",
            "I controller-laget",
            "I service-laget som del av Anti-Corruption Layer",
            "I frontend"
        ],
        correct: 2,
        explanation:
            "Service-laget er et naturlig sted for ACL og mapping som kan gjenbrukes av flere grensesnitt."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er et eksempel på input-transformering før lagring i database?",
        options: [
            "Serialisering av HTTP-headers",
            "Konvertering av dato-strenger til Date-objekter og trimming av tekst",
            "Validering av HTTP-statuskoder",
            "Caching av API-responser"
        ],
        correct: 1,
        explanation:
            "Input-mappers tilpasser API-input til formatet databasen forventer."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hvorfor er output-mapping fra database til API viktig?",
        options: [
            "For å redusere SQL-queries",
            "For å kontrollere hvilke felter og formater som eksponeres",
            "For å gjøre frontend raskere",
            "For å unngå TypeScript-feil"
        ],
        correct: 1,
        explanation:
            "Output-mapping hindrer lekkasje av interne eller sensitive data."
    },

    {
        id: "q14",
        type: "true-false",
        question:
            "Påstand: Mappers kan brukes som et verktøy for å støtte flere API-versjoner parallelt.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Ved å ha versjonsspesifikke DTO-er og mappers kan man støtte v1, v2 osv. samtidig."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er en viktig trade-off ved omfattende bruk av Mappers?",
        options: [
            "Redusert sikkerhet",
            "Økt vedlikehold og mulig ytelseskostnad ved ekstra transformasjonslag",
            "Dårligere type-sikkerhet",
            "Manglende kontrakt-testing"
        ],
        correct: 1,
        explanation:
            "Mapper-lag gir robusthet, men øker kode og vedlikeholdsbehov hvis det ikke holdes disiplinert."
    },

    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hvordan spiller Mappers og DTO godt sammen med et etablert Result-pattern?",
        options: [
            "De erstatter behovet for Result-pattern",
            "De gir et tydelig sted for å mappe og håndtere validerings- og kontraktfeil før respons",
            "De gjør feil-håndtering unødvendig",
            "De flytter all error-håndtering til frontend"
        ],
        correct: 1,
        explanation:
            "Result-pattern + Mappers gir strukturert flyt for både suksess og feil, med klare ansvarssoner."
    }
];

export const quiz_mappers_dto_contract_testing = {
    id: "quiz-mappers-dto-contract-testing",
    title: "L18 - Mappers, DTO og kontrakt-testing i API-arkitektur - KML",
    description:
        "Quiz om Mappers og DTO, Anti-Corruption Layer, kontrakt-testing, sikker API-design, data-transformering og arkitektoniske trade-offs.",
    theme: [
        "dto",
        "api",
        "arkitektur"
    ],
    questions: [...questions]
};
