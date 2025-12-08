const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er den viktigste forskjellen mellom React for web og React Native når vi bygger UI?",
        options: [
            "React bruker JavaScript, mens React Native bruker kun TypeScript",
            "React bruker HTML-elementer som <div> og <a>, mens React Native bruker native komponenter som View, Text og Image",
            "React kan kun brukes til web, mens React Native kun kan brukes til iOS",
            "React støtter komponenter, mens React Native ikke gjør det",
        ],
        correct: 1,
        explanation:
            "Både React og React Native bruker komponenter, state og hooks, men React rendrer HTML-elementer i DOM-en, mens React Native bruker native komponenter (View, Text, Image osv.) som oversettes til ekte iOS-/Android-elementer.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Et team ønsker å lage en app for både iOS og Android samtidig, og de vil gjenbruke mest mulig kode. Hva er hovedargumentet for å velge React Native basert på det du har lest?",
        options: [
            "React Native krever ingen kunnskap om JavaScript eller React",
            "React Native lar dem ha én felles kodebase for begge plattformene",
            "React Native kompilerer automatisk til Kotlin og Swift uten behov for testing",
            "React Native kan kun bygge brukergrensesnitt for web, ikke mobil",
        ],
        correct: 1,
        explanation:
            "En av de største fordelene med React Native er muligheten til å bruke én kodebase for både iOS og Android, noe som reduserer arbeid og kostnader.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            'Læreren nevner at React Native er et "safe bet" til tross for at man samler mange egg i én kurv. Hva er hovedbegrunnelsen for dette i teksten?',
        options: [
            "React Native er proprietært og låst til én leverandør",
            "React Native er open-source, industristandard og beveger seg mot native-funksjonalitet og web-standarder",
            "React Native krever ingen oppdateringer og endrer seg aldri",
            "React Native erstatter behovet for all backend- og serverkode",
        ],
        correct: 1,
        explanation:
            "Det trekkes frem at React Native er open-source, regnes som industristandard og bygger mer og mer på native-funksjoner og web-standarder – dermed er risikoen mer akseptabel selv om man satser tungt på én stack.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvorfor kan det å lære React og React Native godt gjøre det enklere å lære andre rammeverk senere?",
        options: [
            "Fordi de fleste andre rammeverk bruker akkurat samme syntaks som React Native",
            "Fordi du lærer å forstå hvilke problemer som skal løses og hvilke spørsmål du må stille, ikke bare spesifikk API-syntaks",
            "Fordi React Native automatisk genererer kode til alle andre rammeverk",
            "Fordi andre rammeverk krever at du kan JSX, men ikke noe annet",
        ],
        correct: 1,
        explanation:
            "Poenget i teksten er at det å forstå ett rammeverk godt hjelper deg å forstå hva du trenger å vite i andre rammeverk – du kjenner igjen mønstre, problemer og kan stille riktige spørsmål, ikke bare huske metoder.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er en realistisk konsekvens av at store aktører som Meta, Microsoft og Tesla bruker React Native?",
        options: [
            "At React Native automatisk gir perfekt ytelse uansett app-type",
            "At økosystemet rundt React Native vokser med flere pakker, bedre verktøy og mer dokumentasjon",
            "At kun store selskaper kan bruke React Native",
            "At React Native ikke lenger er open-source",
        ],
        correct: 1,
        explanation:
            "Når store selskaper investerer i en teknologi, bidrar det normalt til et større og mer modent økosystem: flere pakker, bedre verktøy, mer dokumentasjon og et større community.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva beskriver best hvordan styling fungerer i React Native ifølge teksten?",
        options: [
            "Vi skriver ren CSS-filer og linker dem inn med <link>-tagger",
            "Vi kan bruke stylesheet-objekter som ligner på CSS-regler, men skrevet i JavaScript/TypeScript",
            "Vi må alltid bruke inline-styles uten noen struktur",
            "Styling er ikke støttet, design må gjøres i native kode (Kotlin/Swift)",
        ],
        correct: 1,
        explanation:
            "React Native bruker style-objekter (ofte via StyleSheet.create) som er veldig likt CSS-konsepter, men definert i JavaScript/TypeScript i stedet for i egne .css-filer.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvilken påstand stemmer best med beskrivelsen av Expo i teksten?",
        options: [
            "Expo er et eget programmeringsspråk for React Native",
            "Expo er et verktøy og økosystem som forenkler oppsett, utvikling og oppdatering av React Native-apper",
            "Expo brukes kun til å lage backend-APIer",
            "Expo er kun et bibliotek for animasjoner",
        ],
        correct: 1,
        explanation:
            "Expo omtales som noe som forenkler React Native-utvikling ved å håndtere oppsettet, gi verktøy og støtte raske oppdateringer uten å gå via app-butikkene.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er hovedforskjellen mellom hot reloading i React Native og en typisk native arbeidsflyt i f.eks. Kotlin/Swift, slik teksten beskriver?",
        options: [
            "Hot reloading krever en full build hver gang, native gjør ikke det",
            "Hot reloading lar deg se endringer i sanntid uten full rebuild, mens native utvikling ofte krever at du bygger prosjektet på nytt",
            "Native utvikling støtter aldri forhåndsvisning av endringer",
            "Hot reloading fungerer kun for styling, ikke for logikk",
        ],
        correct: 1,
        explanation:
            "Hot reloading (og lignende mekanismer) gjør at du kan se endringer fortløpende uten full rebuild, mens klassisk native-utvikling ofte krever at hele prosjektet bygges på nytt for å teste endringer.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvilken kombinasjon beskriver kjerne-teknologiene du primært bruker når du utvikler med React Native i dette kurset?",
        options: [
            "JavaScript/TypeScript, React og native komponenter som View/Text",
            "Kotlin, Swift og HTML",
            "Bare CSS og HTML uten JavaScript",
            "Kun Next.js og Node uten React",
        ],
        correct: 0,
        explanation:
            "Kurset tar utgangspunkt i React Native på toppen av JavaScript/TypeScript og React-konsepter, der UI bygges med native komponenter som View, Text og Image – ikke HTML.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Læreren skriver at vi kan lage webapplikasjoner, server-kode og ulike apper med React og meta-rammeverk som Next.js. Hva er hovedpoenget med å nevne dette i en React Native-kontekst?",
        options: [
            "At Next.js erstatter behovet for React Native",
            "At kun webapp-kurs er relevant for mobilutvikling",
            "At det samme kunnskapsgrunnlaget (React + JavaScript/TypeScript) kan brukes på tvers av web, server og mobil",
            "At mobilutvikling nå kun skjer via Next.js",
        ],
        correct: 2,
        explanation:
            "Poenget er at ved å lære React + TypeScript får du et felles fundament som kan brukes sammen med Next.js til web/server og sammen med React Native til mobil – samme tankesett, forskjellige målplattformer.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Du skal lage en enklere mobilapp med flere skjermer og gjenbrukbare komponenter (f.eks. en quiz). Hvordan foreslås det i teksten at du grovt strukturerer koden?",
        options: [
            "Kun én stor komponent som inneholder all logikk og all UI",
            "Separate filer for CSS, men all logikk i én fil",
            "Skille mellom skjerm-komponenter, gjenbrukbare UI-komponenter og innebygde native komponenter",
            "Kun bruke innebygde native komponenter uten egne komponenter",
        ],
        correct: 2,
        explanation:
            "Teksten beskriver en grov inndeling: komponenter som representerer hele skjermer, gjenbrukbare UI-komponenter du lager selv, og innebygde native komponenter som View og Text.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            'Hva er en mulig ulempe ved å "samle alle eggene i én kurv" ved å satse hardt på React/React Native, slik læreren nevner?',
        options: [
            "Du lærer så mye at andre rammeverk blir for enkle",
            "Hvis økosystemet skulle falle i popularitet, er kunnskapen din låst til én teknologi",
            "Du kan ikke lenger bruke JavaScript",
            "Du kan ikke deploye appen til App Store eller Google Play",
        ],
        correct: 1,
        explanation:
            'Poenget med "alle eggene i én kurv" er risikoen ved å være veldig avhengig av én stack. Læreren mener likevel at denne risikoen er akseptabel her fordi React/React Native er open-source, utbredt og industristandard.',
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            'Hva er en viktig grunn til at React Native oppfattes som å ha "god ytelse" i dag ifølge teksten?',
        options: [
            "Fordi React Native alltid er raskere enn ekte native kode",
            "Fordi rammeverket ikke bruker JavaScript i det hele tatt",
            "Fordi det har vært kontinuerlig utvikling og ny arkitektur som har forbedret ytelsen over tid",
            "Fordi React Native ikke støtter komplekse apper",
        ],
        correct: 2,
        explanation:
            "Teksten peker på kontinuerlig utvikling og nye rammeverk/arkitektur som årsak til at ytelsen i React Native er blitt betydelig bedre, ikke at det magisk alltid slår native løsninger.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hvilket av alternativene under er mest i tråd med målet for kurset slik det beskrives i introduksjonen?",
        options: [
            "Å pugge alle tilgjengelige React Native-APIer uten å forstå sammenheng",
            "Å lære React Native fra grunnen av, med fokus på komponenter, state, hooks og hvordan dette henger sammen med JavaScript/TypeScript",
            "Å lære kun Kotlin og Swift og ignorere React",
            "Å kun lage server-kode uten UI-komponenter",
        ],
        correct: 1,
        explanation:
            "Kurset skal lære React Native fra bunnen av, basert på React- og JavaScript/TypeScript-forståelse, og hvordan vi bygger apper med komponenter, state og hooks.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Du får beskjed om at en komponent bruker <div> og <h1> inn i en React Native-app. Hvilken tolkning passer best med det du har lært?",
        options: [
            "Dette er helt normalt, React Native bruker HTML-elementer direkte",
            "Dette er kun lov dersom man bruker TypeScript",
            "Det tyder på at koden egentlig er skrevet for web/React DOM og ikke for React Native, som forventer native-komponenter som View og Text",
            "Dette er kun et syntaksvalg, <div> og View er identiske i React Native",
        ],
        correct: 2,
        explanation:
            "React Native bruker ikke HTML-elementer som <div> og <h1>. Slike tags tilhører React for web. I React Native skal vi bruke komponenter som View, Text og Image.",
    },
];

export const quiz_react_native_intro_bzj = {
    id: "react-native-intro-bzj",
    title: "L4 - React Native – introduksjon - BZJ",
    description:
        "Quiz om introduksjonen til React Native: forskjeller fra vanlig React, fordeler med én kodebase, Expo, hot reloading, økosystemet, risiko vs «safe bet» og hvordan vi strukturerer skjermer og komponenter.",
    theme: ["react-native", "mobilprogrammering"],
    questions: [...questions],
};
