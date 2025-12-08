const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du skal sette opp lokal utvikling for en ny React Native-app med Expo. Hvilket verktøy er et absolutt krav før du gjør noe som helst?",
        options: ["Node.js", "Android Studio", "Xcode", "Expo Go"],
        correct: 0,
        explanation:
            "Node.js må være installert først, siden både npm og CLI-verktøyene (som create-expo-app og expo) kjører på Node.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvorfor anbefales det å installere en LTS-versjon av Node til dette kurset?",
        options: [
            "LTS-versjoner har færre breaking changes og får stabil støtte over tid",
            "LTS-versjoner er alltid raskest i benchmark-tester",
            "LTS-versjoner er kun for mobilutvikling, ikke web",
            "Expo krever at du har nøyaktig én spesifikk Node-versjon",
        ],
        correct: 0,
        explanation:
            "LTS (Long Term Support) betyr at versjonen får stabil og langvarig støtte med sikkerhetsoppdateringer og færre overraskende endringer.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Du skriver `node --version` i terminalen etter å ha installert Node. Hva er det viktigste du faktisk verifiserer her i kurs-konteksten?",
        options: [
            "At npm har riktig versjon",
            "At Node er tilgjengelig i PATH og kan brukes av CLI-verktøyene",
            "At Expo-prosjektet allerede er opprettet",
            "At VSCode er riktig konfigurert",
        ],
        correct: 1,
        explanation:
            "`node --version` bekrefter at Node er korrekt installert og tilgjengelig i terminalen – forutsetningen for å kunne kjøre npx, npm og Expo CLI.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Du kjører `npx create-expo-app@latest --template blank-typescript`. Hva er den viktigste konsekvensen av å bruke akkurat denne kommandoen fremfor en ren JavaScript-template?",
        options: [
            "Prosjektet kan bare kjøres på iOS",
            "Prosjektet settes opp med TypeScript-støtte fra start",
            "Prosjektet kan ikke bruke React Hooks",
            "Prosjektet kan ikke bygges til web",
        ],
        correct: 1,
        explanation:
            "Template `blank-typescript` gir deg et Expo-prosjekt ferdig konfigurert for TypeScript (tsconfig, .tsx-filer osv.).",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Du har akkurat opprettet et nytt Expo-prosjekt. Hva er hovedrollen til App.tsx i strukturen som ble vist?",
        options: [
            "Den konfigurerer hele TypeScript-kompilatoren",
            "Den er inngangspunktet for Node.js-serveren",
            "Den er hovedkomponenten som rendres av appen",
            "Den brukes kun til å definere native-moduler i Kotlin/Swift",
        ],
        correct: 2,
        explanation:
            "App.tsx er hoved-App-komponenten som Expo/React Native rendrer, og er typisk stedet du starter utviklingen din.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Du forsøker å starte appen med `npx expo start`, men kommandoen failer. Hva er mest sannsynlig årsak basert på det som ble forklart?",
        options: [
            "Du har ikke bygget appen med Xcode enda",
            "Du står ikke i riktig mappe – kommandoen må kjøres der package.json ligger",
            "Du har ikke installert Expo Go på mobilen",
            "Du har ikke logget inn på Expo-kontoen i nettleser",
        ],
        correct: 1,
        explanation:
            "For å starte prosjektet må du kjøre `npx expo start` i prosjektmappen – altså der package.json ligger.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Når `npx expo start` kjører, får du opp en QR-kode i terminalen. Hva er den mest relevante bruken av denne i oppsettet som er beskrevet?",
        options: [
            "Den brukes til å logge inn i VSCode",
            "Den brukes til å koble mobilen din til dev-serveren via Expo Go",
            "Den brukes til å registrere appen i App Store",
            "Den brukes til å konfigurere tsconfig.json automatisk",
        ],
        correct: 1,
        explanation:
            "Expo Go-appen på mobilen skanner QR-koden for å koble seg til utviklingsserveren og kjøre appen på fysisk enhet.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Du sitter på et nettverk der enheten din ikke får kontakt med maskinen som kjører Expo. Hvilken variant av start-kommandoen er anbefalt ifølge teksten?",
        options: [
            "npx expo start --local",
            "npx expo start --production",
            "npx expo start --tunnel",
            "npx expo start --offline",
        ],
        correct: 2,
        explanation:
            "`--tunnel` gjør at Expo bruker en tunnel-tilkobling i stedet for kun lokalt nett, noe som ofte løser problemer med nettverks-tilgang mellom maskin og telefon.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvilken av disse filene skal du normalt IKKE redigere manuelt i et nytt Expo-prosjekt?",
        options: ["App.tsx", "app.json", "tsconfig.json", "node_modules/"],
        correct: 3,
        explanation:
            "node_modules inneholder installerte pakker og skal ikke redigeres direkte. Endringer gjøres via package.json og pakke-kommandoer.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Du vil legge til et nytt ikon og et custom-font i appen. I hvilken mappe er det mest naturlig å legge disse basert på strukturen som ble vist?",
        options: ["assets/", ".expo/", "node_modules/", ".gitignore/"],
        correct: 0,
        explanation:
            "assets/ er mappen for bilder, fonter og andre statiske ressurser i Expo-prosjektet.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Du vil forbedre utviklingsopplevelsen i VSCode for React Native. Hvilken kombinasjon av extensions samsvarer best med anbefalingene i teksten?",
        options: [
            "React Native Tools, Expo Tools, ESLint og Prettier",
            "React Native Tools, Docker, Kubernetes, Vim",
            "Expo Tools, GitLens, Live Server, Material Icons",
            "ESLint, Prettier, C/C++ og Java",
        ],
        correct: 0,
        explanation:
            "Det anbefales eksplisitt React Native Tools, Expo Tools, ESLint og Prettier for å få bedre debugging, linting og formatering.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            'Du har lagt inn en `console.log("Logging from App.tsx")` i App-komponenten. Hvor kan du typisk se denne loggen basert på oppsettet som er beskrevet?',
        options: [
            "Bare i App Store-konsollen",
            "I terminalen der `npx expo start` kjører, og i dev-verktøyene (f.eks. ved Remote Debugging)",
            "Kun i Xcode når du bygger prosjektet for iOS",
            "Kun i Android Studio sin logcat",
        ],
        correct: 1,
        explanation:
            "Loggen vises i Expo-terminalen og i dev-verktøy når du aktiverer debugging (for eksempel Remote Debugging i utviklermenyen).",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Du vil sette et breakpoint i koden slik at appen stopper når en knapp trykkes. Hvilken rekkefølge er mest i tråd med det som ble beskrevet?",
        options: [
            "Åpne Expo DevTools → sette breakpoint i app.json",
            "Aktivere Remote Debugging via utviklermenyen → åpne Sources i dev-verktøy → finne App.tsx → sette breakpoint",
            "Endre tsconfig.json til debug-mode → restarte appen",
            "Skrive `debugger;` inn i package.json",
        ],
        correct: 1,
        explanation:
            "Teksten beskriver at du åpner utviklermenyen (f.eks. ved å riste enheten), aktiverer Remote Debugging, går til Sources, finner filen og setter breakpoint der.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Du opplever at hot reloading ikke ser ut til å gi deg nye endringer. Hvilken av handlingene under vil mest sannsynlig IKKE løse problemet i denne konteksten?",
        options: [
            "Sjekke at du faktisk lagrer filen du endrer",
            "Starte Expo-serveren på nytt",
            "Sørge for at riktig enhet er koblet til dev-serveren",
            "Slette App.tsx helt, men la Expo fortsette å kjøre uendret",
        ],
        correct: 3,
        explanation:
            "Hvis du sletter App.tsx vil appen krasje, ikke magisk «fikse» hot reload. De andre tiltakene er typiske ting man sjekker hvis hot reload ikke reagerer som forventet.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hvorfor anbefales det i teksten å starte med fysisk enhet (Expo Go) fremfor kun emulators/simulatorer når du er ny i React Native?",
        options: [
            "Fysiske enheter krever ingen nettverkstilkobling",
            "Det er mindre setup, og du får se appen mer likt slik den faktisk vil oppføre seg i ditt miljø",
            "Emulatorer støtter ikke JSX",
            "Expo kan ikke kjøre i emulator i det hele tatt",
        ],
        correct: 1,
        explanation:
            "Fysiske enheter via Expo Go krever mindre oppsett enn emulator/simulator, og gir en opplevelse som ligner mer på hvordan appen faktisk vil fungere hos brukeren.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            'Du vurderer tre måter å starte et nytt mobilprosjekt på: "fra scratch", React Native CLI og Expo. Hva er hovedgrunnen til at Expo anbefales i dette kurset?',
        options: [
            "Expo krever ingen kunnskap om JavaScript eller React",
            "Expo skjuler all kompleksitet for alltid, også i produksjon",
            "Expo gir raskere oppstart, håndterer mye av oppsettet og tilbyr verktøy for bygging, testing og distribusjon",
            "React Native CLI er kun for webapplikasjoner, ikke mobil",
        ],
        correct: 2,
        explanation:
            "Expo anbefales fordi det gir rask oppstart, mye ferdig oppsett og gode verktøy for å utvikle, teste og distribuere mobilapper fra én kodebase.",
    },
];

export const quiz_oppsett_lokal_utvikling_bzj = {
    id: "oppsett-lokal-utvikling-bzj",
    title: "L5 - Oppsett lokal utvikling – Expo, verktøy og debugging - BZJ",
    description:
        "Quiz om lokal utvikling for React Native med Expo: Node og LTS, IDE-valg, create-expo-app, prosjektstruktur, kjøring på enhet/emulator, tunneler, hot reloading og debugging.",
    theme: ["react-native", "expo", "mobilprogrammering"],
    questions: [...questions],
};
