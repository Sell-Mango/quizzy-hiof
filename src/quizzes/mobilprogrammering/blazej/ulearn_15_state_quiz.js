const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva beskriver best hva state er i en komponent?",
        options: [
            "Data som sendes inn fra foreldre og ikke kan endres",
            "Intern data som komponenten kan kontrollere og oppdatere",
            "Statiske verdier som aldri endrer seg",
            "Funksjoner som kalles automatisk uten interaksjon",
        ],
        correct: 1,
        explanation:
            "State er intern kontrollerbar data som kan endres og påvirker rendering.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question: "Hva skjer når state endres i en komponent?",
        options: [
            "Appen lukkes",
            "Komponenten re-rendres med oppdatert tilstand",
            "Props endres automatisk",
            "State blir slettet",
        ],
        correct: 1,
        explanation: "State-oppdatering utløser ny rendering av komponenten.",
    },
    {
        id: "q3",
        type: "true-false",
        question: "Props kan endres av komponenten som mottar dem.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation: "Props er immutable og kan ikke endres av mottakeren.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question: "Hva brukes useState til?",
        options: [
            "Å definere ruter",
            "Å legge til og håndtere state i en funksjonell komponent",
            "Å hente API data",
            "Å lage animasjoner",
        ],
        correct: 1,
        explanation:
            "useState er hooken som gir state til funksjonelle komponenter.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva kalles teknikken hvor state flyttes oppover for å deles mellom flere komponenter?",
        options: [
            "State compression",
            "Lifting state up",
            "State cloning",
            "Scoped routing",
        ],
        correct: 1,
        explanation:
            "State løftes til en felles foreldrekomponent slik at flere barn kan bruke den.",
    },
    {
        id: "q6",
        type: "true-false",
        question:
            "State lar oss representere midlertidige verdier som input og tellere.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation: "State brukes for data som endrer seg over tid.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor bør vi bruke funksjonsformen for å oppdatere state når verdien avhenger av forrige tilstand?",
        options: [
            "For å unngå at state slettes permanent",
            "For å være sikre på at vi bruker den nyeste state-verdien",
            "For at React skal lagre state i en database",
            "For å deaktivere rendering",
        ],
        correct: 1,
        explanation:
            "Funksjonsformen sikrer korrekt oppdatering når flere oppdateringer skjer etter hverandre.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question: "Hva er viktig å huske når state holder et objekt?",
        options: [
            "Setter-funksjonen merger objektet automatisk",
            "Setter-funksjonen erstatter objektet helt",
            "Objekter kan ikke brukes som state",
            "State-objekter oppdateres bare hvis de har tall",
        ],
        correct: 1,
        explanation:
            "Setter-funksjonen erstatter verdien, så man må spre eksisterende verdier ved deloppdatering.",
    },
    {
        id: "q9",
        type: "true-false",
        question:
            "Hooks som useEffect, useMemo og useContext brukes for andre former for kontroll og logikk enn useState.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Det finnes flere hooks som håndterer blant annet effekter, referanser og context.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question: "Hva er en vanlig grunn til å bruke state i skjemaer?",
        options: [
            "For å lagre brukerinput og vise innsendingsstatus",
            "For å generere tilfeldige tall",
            "For å laste bilder",
            "For å animere bakgrunnsfarger",
        ],
        correct: 0,
        explanation:
            "State holder tekstinput, validering og innsendingsstatus i skjemaer.",
    },
    {
        id: "q11",
        type: "true-false",
        question:
            "State kan representere om noe er synlig eller skjult i grensesnittet.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "UI-tilstander som synlighet håndteres ofte med boolean state.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question: "Hva beskriver best forskjellen mellom props og state?",
        options: [
            "Props kan endres, state kan ikke endres",
            "State brukes bare i klasser, props bare i funksjoner",
            "Props kommer utenfra og er immutable, state eies av komponenten og kan endres",
            "Det er ingen forskjell",
        ],
        correct: 2,
        explanation:
            "Props er data som gis til komponenter, mens state er intern og kan oppdateres.",
    },
];

export const quiz_state_concept = {
    id: "quiz-state-concept-bzj",
    title: "L15 - Konseptforståelse av state - BZJ",
    description:
        "Quiz som tester forståelse av state, bruk av hooks og forskjellen mellom props og state.",
    theme: ["React state", "useState", "State håndtering"],
    questions: [...questions],
};
