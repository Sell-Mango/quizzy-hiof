const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva bruker vi JavaScript til i en React Native-applikasjon?",
        options: [
            "Kun til å style komponenter med CSS",
            "Til å skrive logikk som blir oversatt til native komponenter for iOS og Android",
            "Kun til å konfigurere package.json",
            "Kun til å lage databasen til appen",
        ],
        correct: 1,
        explanation:
            "I React Native bruker vi JavaScript (eller TypeScript) til å skrive app-logikken, som så blir oversatt til native komponenter for iOS og Android.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvilken variabel-deklarasjon passer best for en verdi som ikke skal endres?",
        options: ["var", "let", "const", "static"],
        correct: 2,
        explanation:
            "const brukes for verdier som ikke skal reassignes. let brukes for verdier som kan endres, mens var bør unngås i moderne JavaScript.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question: "Hvilken av følgende er IKKE en primitiv type i JavaScript?",
        options: ["string", "number", "boolean", "array"],
        correct: 3,
        explanation:
            "Array er et objekt (referansetype), ikke en primitiv type. Primitive typer inkluderer blant annet string, number, boolean, null og undefined.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er den viktigste forskjellen mellom null og undefined i JavaScript?",
        options: [
            'null betyr "verdi er bevisst tom", undefined betyr "verdi er ikke satt"',
            "De er helt like",
            "undefined brukes bare i objekter, null bare i arrays",
            "null brukes kun i React, undefined brukes kun i Node",
        ],
        correct: 0,
        explanation:
            "null brukes ofte eksplisitt for å vise at en verdi er tom, mens undefined typisk betyr at en variabel ikke har fått noen verdi ennå.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med arrow functions i moderne JavaScript/React?",
        options: [
            "De kan bare brukes inne i klasser",
            "De gir kortere og ofte mer lesbar syntaks, spesielt for enkle funksjoner og callbacks",
            "De er alltid raskere enn vanlige funksjoner",
            "De kan bare brukes i backend-kode",
        ],
        correct: 1,
        explanation:
            "Arrow functions gir en kortere syntaks og brukes mye i React, spesielt for callbacks og små funksjoner.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question: "Hva beskriver best ternary-operatoren i JavaScript?",
        options: [
            "En måte å definere objekter på",
            "En kortif-else som velger mellom to verdier basert på en betingelse",
            "En spesiell loop for arrays",
            "En måte å lage async-funksjoner på",
        ],
        correct: 1,
        explanation:
            "Ternary-operatoren (`condition ? valueIfTrue : valueIfFalse`) er en kortform for if-else når vi skal velge mellom to verdier.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med template literals (backticks ``) sammenlignet med vanlige strenger?",
        options: [
            "De kan bare brukes i React-komponenter",
            "De gjør det mulig å sette inn variabler og uttrykk direkte med ${} og skrive multi-line strenger",
            "De er raskere enn alle andre strengtyper",
            "De fungerer bare i Node, ikke i nettleser/React Native",
        ],
        correct: 1,
        explanation:
            "Template literals lar oss interpolere variabler med ${} og lage multi-line strenger på en enkel måte, noe som gjør koden mer lesbar.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva gjør destructuring av objekter, som i `const { name, age } = user;`?",
        options: [
            "Sletter feltene name og age fra objektet",
            "Kopierer hele objektet til en ny variabel",
            "Trekker ut egenskapene name og age fra user inn i egne variabler",
            "Endrer verdiene på name og age",
        ],
        correct: 2,
        explanation:
            "Destructuring gjør at vi kan trekke ut spesifikke properties fra et objekt til egne variabler på en kort og lesbar måte.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er en vanlig bruk av spread-operatoren (`...`) på objekter i React-kode?",
        options: [
            "Å lage nye primitive typer",
            "Å kopiere og utvide et objekt uten å mutere det originale",
            "Å kjøre en loop over objektet",
            "Å gjøre funksjonen async",
        ],
        correct: 1,
        explanation:
            'Spread (`{ ...settings, theme: "dark" }`) brukes ofte for å kopiere et objekt og overstyre enkelte felter, uten å endre originalen (immutability).',
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er forskjellen på default export og named export i JavaScript-moduler?",
        options: [
            "Det finnes ingen forskjell, begge importeres likt",
            "Default export kan bare være en funksjon, named export bare et objekt",
            "Default export er én hovedverdi per fil, named exports er flere navngitte verdier",
            "Named exports kan bare brukes i React, default exports kan bare brukes i Node",
        ],
        correct: 2,
        explanation:
            "En fil kan ha én default export (importeres uten krøllparanteser) og flere named exports (importeres i { } med riktig navn).",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvilken array-metode passer best når du vil gjøre om en liste med produkter til en liste med bare produktnavn?",
        options: ["filter", "map", "find", "forEach"],
        correct: 1,
        explanation:
            "map brukes for å transformere hvert element i en liste til en ny verdi, for eksempel fra produkt-objekter til bare navn.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hvilken array-metode bruker du når du vil beholde kun produkter med pris over 500?",
        options: ["map", "filter", "some", "reduce"],
        correct: 1,
        explanation:
            "filter lager en ny liste med kun de elementene som oppfyller en betingelse, for eksempel `product.price > 500`.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question: "Hvilken påstand om some og every er korrekt?",
        options: [
            "some krever at alle elementer oppfyller kriteriet, every krever minst ett",
            "Begge krever at alle elementer oppfyller kriteriet",
            "some sjekker om minst ett element oppfyller kriteriet, every sjekker om alle gjør det",
            "some og every endrer original-arrayen",
        ],
        correct: 2,
        explanation:
            "some returnerer true hvis minst ett element matcher betingelsen, every returnerer true bare hvis alle elementene matcher.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question: "Hva er en typisk bruk av Object.keys i JavaScript?",
        options: [
            "Å sjekke om en verdi finnes i en array",
            "Å hente en liste med alle property-navnene (keys) på et objekt",
            "Å kopiere et objekt",
            "Å lage et nytt Promise",
        ],
        correct: 1,
        explanation:
            "Object.keys(obj) returnerer en array med alle key-navnene til objektet, for eksempel ['id', 'firstName', 'email'].",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            'Hva er en fordel med å bruke funksjonsparametre som et objekt med defaults, for eksempel `function createTask({ title = "New Task" } = {})`?',
        options: [
            "Funksjonen kan bare kalles med alle parametere satt",
            "Funksjonen kan ikke lenger bruke async/await",
            "Vi kan sende inn et objekt med valgfrie felter og ha fornuftige standardverdier",
            "Funksjonen blir automatisk synkron",
        ],
        correct: 2,
        explanation:
            "Ved å bruke et objekt med default-verdier kan vi gjøre alle parametere valgfrie og samtidig gi standardverdier når noe ikke er sendt inn.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question: "Hva representerer et Promise i JavaScript?",
        options: [
            "En synkron verdi som alltid er tilgjengelig med en gang",
            "En verdi som kanskje ikke er tilgjengelig ennå, men som vil bli resolved eller rejected i fremtiden",
            "En spesiell type løkke",
            "En type React-komponent",
        ],
        correct: 1,
        explanation:
            "Et Promise representerer en asynkron operasjon som vil enten resolve (lykkes) eller reject (feile) på et tidspunkt i fremtiden.",
    },
    {
        id: "q17",
        type: "multiple-choice",
        question: "Hva gjør nøkkelordet async foran en funksjon?",
        options: [
            "Gjør funksjonen raskere",
            "Sørger for at funksjonen alltid kjører i bakgrunnen i OS",
            "Forteller at funksjonen returnerer et Promise og tillater bruk av await inni funksjonen",
            "Tvinger funksjonen til å være synkron",
        ],
        correct: 2,
        explanation:
            "En async-funksjon returnerer alltid et Promise, og inni den kan vi bruke await for å vente på andre Promises.",
    },
    {
        id: "q18",
        type: "multiple-choice",
        question: "Hvor kan du bruke await i JavaScript?",
        options: [
            "I alle funksjoner",
            "Kun i funksjoner merket med async",
            "Kun i globalt scope",
            "Kun inne i loops",
        ],
        correct: 1,
        explanation:
            "await kan kun brukes inne i funksjoner som er merket med async (i moderne JS også i noen spesielle sammenhenger, men hovedregelen er: inne i async-funksjoner).",
    },
    {
        id: "q19",
        type: "multiple-choice",
        question:
            "Når du har to uavhengige API-kall som kan kjøres samtidig, hva er en god måte å gjøre dette på?",
        options: [
            "Kalle det første, await, så kalle det andre, await (sekvensielt)",
            "Bruke Promise.all på begge promises slik at de kjøres parallelt",
            "Kalle begge uten await og aldri håndtere resultatene",
            "Bruke en for-løkke rundt fetch-kallene",
        ],
        correct: 1,
        explanation:
            "Promise.all lar oss starte flere asynkrone operasjoner samtidig og vente på at alle fullføres, noe som ofte er mer effektivt enn sekvensiell kjøring.",
    },
    {
        id: "q20",
        type: "multiple-choice",
        question: "Hva er en typisk måte å håndtere feil i async/await-kode?",
        options: [
            "Ignorere alle feil, de forsvinner av seg selv",
            "Bruke try/catch-blokk rundt await-kallene",
            "Bare bruke finally uten try/catch",
            "Bruke if-else i stedet for try/catch",
        ],
        correct: 1,
        explanation:
            "Når vi bruker async/await, håndterer vi feil med try/catch, på samme måte som tradisjonell feilhåndtering i synkron kode.",
    },
];

export const quiz_javascript_basics_bzj = {
    id: "javascript-basics-bzj",
    title: "L2 - JavaScript – grunnleggende konsept­er - BZJ",
    description:
        "Quiz om grunnleggende JavaScript-konsepter for React Native: variabler, typer, funksjoner, destructuring, spread, moduler, array- og objekt-metoder samt asynkron JavaScript med promises og async/await.",
    theme: ["javascript", "mobilprogrammering"],
    questions: [...questions],
};
