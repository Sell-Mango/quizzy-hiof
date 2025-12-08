const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Du skal installere Node for å utvikle en React Native-app med Expo. Hvilken versjon anbefales å installere?",
        options: [
            "Latest (seneste funksjoner, men kan være ustabil)",
            "LTS (Long Term Support)",
            "Beta-versjonen for fremtidige features",
            "Den eldste versjonen som støttes"
        ],
        correct: 1,
        explanation: "LTS-versjoner er anbefalt for stabilitet og kompatibilitet i prosjekter som React Native og Expo. :contentReference[oaicite:1]{index=1}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question: "Hva er hovedrollen til Node.js i kontekst av React Native utvikling?",
        options: [
            "Å kjøre JavaScript-kode utenfor nettleseren og drive utviklingsverktøyene",
            "Å kompilere native Android- og iOS-kode",
            "Å styre minneallokering for React-komponenter",
            "Å rendre UI på mobilen"
        ],
        correct: 0,
        explanation: "Node.js brukes for utviklingsverktøy, bundling og scripts — ikke rendering av UI. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question: "Hvilken del av package.json inneholder pakker som kun trengs under utvikling, som TypeScript og Babel?",
        options: [
            "dependencies",
            "devDependencies",
            "scripts",
            "engines"
        ],
        correct: 1,
        explanation: "`devDependencies` brukes kun under utvikling. Eksempler: @babel/core, typer, testverktøy. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question: "Hva betyr versjonsnotasjonen ^1.2.3 i semantisk versjonering (SEMver)?",
        options: [
            "Kun patch-oppdateringer er tillatt",
            "Kun nøyaktig versjon 1.2.3 kan brukes",
            "Mindre og patch-versjoner kan oppdateres (1.x.x)",
            "Alle hovedversjoner er tillatt"
        ],
        correct: 2,
        explanation: "`^` tillater oppdatering av minor + patch så lenge major-versjonen ikke brytes. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question: "Du starter et Expo-prosjekt, men kommandoen `npm start` feiler fordi scriptet ikke finnes. Hva mangler mest sannsynlig?",
        options: [
            "Et script kalt start under 'scripts' i package.json",
            "node_modules-mappen",
            "En .env-fil",
            "Expo Go-appen på mobilen"
        ],
        correct: 0,
        explanation: "Expo-prosjekter bruker scriptet 'start': 'expo start'. Mangler det, vil npm ikke finne kommandoen. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question: "Hva er riktig prosedyre for å løse tilfeldige feil i terminalen relatert til avhengigheter i et React Native-prosjekt?",
        options: [
            "Redigere node_modules manuelt",
            "Slette node_modules og lock-fil, deretter installere på nytt",
            "Installere alle pakker globalt",
            "Ignorere feilen og bygge appen på nytt"
        ],
        correct: 1,
        explanation: "Korrekt prosedyre er å slette node_modules + lock-fil, reinstallere pakker og restarte editoren. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question: "Hva er hovedforskjellen på NPM og PNPM?",
        options: [
            "PNPM krever internett, NPM gjør ikke det",
            "PNPM lagrer pakker effektivt og deler dem mellom prosjekter",
            "NPM er kun kompatibel med Expo, PNPM med React Native CLI",
            "PNPM bruker ikke node_modules i det hele tatt"
        ],
        correct: 1,
        explanation: "PNPM bruker en delt pakkelagring og er ofte raskere og mer plassbesparende. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q8",
        type: "true-false",
        question: "Påstanden: Lock-filer som package-lock.json bør redigeres manuelt ved konflikter.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation: "Lock-filer skal aldri redigeres manuelt. De genereres av pakkehåndtereren. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q9",
        type: "true-false",
        question: "Påstanden: node_modules bør sjekkes inn i Git for å sikre at alle får samme versjoner.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation: "`node_modules` skal *ikke* i Git. Identiske versjoner sikres av lock-filen, ikke mappen. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question: "Du kjører `npm outdated` i et prosjekt. Hva brukes denne kommandoen til?",
        options: [
            "Sjekke hvilke pakker som er gamle og har nyere versjoner tilgjengelig",
            "Fjerne alle utdaterte pakker automatisk",
            "Rydde node_modules",
            "Oppdatere pakker til siste versjon"
        ],
        correct: 0,
        explanation: "`npm outdated` viser oversikt over gamle pakker før du velger å oppdatere. :contentReference[oaicite:10]{index=10}"
    }
];

export const ulearn_1_node_okosystem = {
    id: "ulearn-node-okosystem_RN_kml",
    title: "Node økosystem – KML",
    description:
        "En quiz som tester forståelse av Node.js, package management, scripts og versjonshåndtering i kontekst av mobilutvikling med React Native og Expo.",
    theme: ["node"],
    questions: [...questions]
};
