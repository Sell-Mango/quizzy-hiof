const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva brukes Node.js primært til i kontekst av React Native-utvikling?",
        options: [
            "Å style komponenter med CSS",
            "Å kjøre JavaScript-kode utenfor nettleseren og gi verktøy for å bygge appen",
            "Å kompilere TypeScript til Java",
            "Å kjøre appen direkte på App Store",
        ],
        correct: 1,
        explanation:
            "Node.js er et runtime-miljø som lar oss kjøre JavaScript utenfor nettleseren, og gir verktøy og miljøet vi trenger for å bygge og kjøre React Native-applikasjoner.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question: "Hva betyr at en Node-versjon er merket som LTS?",
        options: [
            "At den alltid har de nyeste funksjonene",
            "At den kun kan brukes på Linux",
            "At det er en stabil versjon med langvarig støtte og sikkerhetsoppdateringer",
            "At den er under utvikling og kan være ustabil",
        ],
        correct: 2,
        explanation:
            "LTS står for Long Term Support og betyr at versjonen får sikkerhetsoppdateringer og feilrettinger over lengre tid, og regnes som stabil.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hvilken kommando brukes for å sjekke installert Node.js-versjon?",
        options: [
            "node --v",
            "npm --version",
            "node --version",
            "npm node-version",
        ],
        correct: 2,
        explanation:
            "Kommandoen `node --version` (evt. `node -v`) viser hvilken versjon av Node.js som er installert.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva beskriver best filen package.json i et Node/React Native-prosjekt?",
        options: [
            "En fil som inneholder all JavaScript-koden",
            "En fil som bare inneholder CSS og styling-regler",
            "En konfigurasjonsfil som beskriver prosjektet, scripts og avhengigheter",
            "En loggfil for alle npm-kommandoer",
        ],
        correct: 2,
        explanation:
            "package.json er en konfigurasjonsfil som beskriver prosjektet (navn, versjon, scripts) og lister alle avhengigheter og devDependencies.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er den vanligste måten å opprette en ny package.json-fil på i et prosjekt?",
        options: [
            "Skrive den for hånd i Notepad",
            "Kjøre `npm init` eller `npm init -y` i prosjektmappen",
            "Kjøre `node init` i prosjektmappen",
            "Laste den ned fra npmjs.com",
        ],
        correct: 1,
        explanation:
            "Vi oppretter vanligvis package.json ved å kjøre `npm init` (interaktiv) eller `npm init -y` (aksepterer standardverdier) i prosjektmappen.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            'Hva er typisk innhold i feltet "dependencies" i package.json for en React Native-app?',
        options: [
            "Bare testverktøy og lintere",
            "Pakker som kun brukes i utvikling",
            "Pakker som trengs for at appen skal fungere i produksjon, som React og React Native",
            "Kun Node-versjonen som brukes",
        ],
        correct: 2,
        explanation:
            'Under "dependencies" legger vi pakker appen trenger for å kjøre i produksjon, for eksempel `react`, `react-native` og `expo`.',
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            'Hva kjennetegner pakker som ligger under "devDependencies" i package.json?',
        options: [
            "De brukes bare på Android",
            "De brukes kun i produksjon",
            "De brukes bare av operativsystemet",
            "De trengs kun under utvikling, som testverktøy, byggverktøy og typer",
        ],
        correct: 3,
        explanation:
            "devDependencies er verktøy vi bare trenger under utvikling (for eksempel testverktøy, bundlere, TypeScript og typer), ikke i den ferdige appen.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "I semantisk versjonering (SEMver), hva betyr versjonsnummeret 2.3.4?",
        options: [
            "major = 2, minor = 3, patch = 4",
            "major = 2, patch = 3, minor = 4",
            "major = 4, minor = 3, patch = 2",
            "major = 2, og 3.4 er en tilfeldig tekst",
        ],
        correct: 0,
        explanation:
            "I SEMver er strukturen major.minor.patch, så i 2.3.4 er 2 major, 3 minor og 4 patch.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question: "Hva betyr versjonsspesifikasjonen ^1.2.3 i package.json?",
        options: [
            "Prosjektet støtter kun nøyaktig 1.2.3",
            "Prosjektet støtter 1.2.3 og alle høyere major-versjoner",
            "Prosjektet støtter 1.2.3 og alle 1.x.x-versjoner (minor og patch kan oppdateres)",
            "Versjonen oppdateres aldri automatisk",
        ],
        correct: 2,
        explanation:
            "Tegnet ^ tillater oppdateringer av minor- og patch-versjoner innenfor samme major, altså 1.x.x (men ikke til 2.0.0).",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question: "Hva betyr versjonsspesifikasjonen ~1.2.3 i package.json?",
        options: [
            "Kun patch-oppdateringer innenfor 1.2.x er tillatt",
            "Alle oppdateringer til 2.x.x er tillatt",
            "Alle 1.x.x-versjoner er tillatt",
            "Versjonen er låst til 1.2.3 uten noen oppdateringer",
        ],
        correct: 0,
        explanation:
            "Tegnet ~ tillater oppdateringer av patch-versjonen innenfor samme minor, altså 1.2.x.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er den korrekte måten å definere scripts for å starte en Expo-baserte React Native-app?",
        options: [
            '"start": "react-native start"',
            '"start": "expo start"',
            '"start": "node index.js"',
            '"start": "npm expo run"',
        ],
        correct: 1,
        explanation:
            'I et Expo-prosjekt er det vanlig at scriptet for å starte appen er `"start": "expo start"`.',
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            'Hvordan kjører du scriptet "android" definert i package.json?',
        options: [
            "node android",
            "npm android",
            "npm run android",
            "android run npm",
        ],
        correct: 2,
        explanation:
            'Scripts i package.json kjøres med `npm run <script-navn>`, så for scriptet "android" bruker vi `npm run android`.',
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er hovedforskjellen mellom NPM og PNPM slik den er beskrevet?",
        options: [
            "NPM er kun for frontend, PNPM kun for backend",
            "NPM følger ikke med Node, PNPM gjør det",
            "PNPM er et alternativ til NPM som ofte er raskere og bruker mindre diskplass",
            "PNPM brukes kun på MacOS",
        ],
        correct: 2,
        explanation:
            "NPM er standard pakkeadministrator som følger med Node. PNPM er et alternativ som ofte er raskere og deler pakker på tvers av prosjekter for å spare diskplass.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hvilken kommando installerer en pakke som en utviklingsavhengighet (devDependency) med NPM?",
        options: [
            "npm install pakkenavn",
            "npm install pakkenavn --save-dev",
            "npm install-dev pakkenavn",
            "npm dev pakkenavn",
        ],
        correct: 1,
        explanation:
            "For å installere en devDependency med NPM bruker vi `npm install pakkenavn --save-dev` (eller `npm i pakkenavn -D`).",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question: "Hva beskriver best mappen node_modules i et Node-prosjekt?",
        options: [
            "En mappe som inneholder all kildekoden til appen",
            "En mappe som kun brukes av Git",
            "En mappe hvor alle installerte pakker lagres lokalt, og som ikke bør redigeres manuelt",
            "En mappe som alltid må pushes til GitHub",
        ],
        correct: 2,
        explanation:
            "node_modules inneholder alle installerte pakker. Den genereres automatisk, skal ikke redigeres manuelt, og bør normalt ligge i .gitignore.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hva er en anbefalt fremgangsmåte når du får rare, tilfeldige build-feil knyttet til node_modules?",
        options: [
            "Slette hele prosjektet og starte på nytt",
            "Redigere filer direkte i node_modules",
            "Slette lock-fil og node_modules, installere avhengigheter på nytt og restarte editoren",
            "Ignorere feilen og fortsette å kjøre appen",
        ],
        correct: 2,
        explanation:
            "En vanlig fix er å slette lock-filen (package-lock.json/pnpm-lock.yaml) og node_modules, kjøre `npm install` eller `pnpm install` på nytt, og eventuelt restarte VSCode/WebStorm.",
    },
];

export const quiz_node_okosystem = {
    id: "node-okosystem",
    title: "Node-økosystem for mobilutvikling - BZJ",
    description:
        "Quiz om Node.js, LTS, package.json, avhengigheter, semantisk versjonering, NPM/PNPM og node_modules i kontekst av React Native-utvikling.",
    theme: ["node", "mobilprogrammering"],
    questions: [...questions],
};
