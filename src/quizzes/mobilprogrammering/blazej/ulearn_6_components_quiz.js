const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva kjennetegner en typisk React Native-komponent sammenlignet med vanlig funksjonskode i JavaScript?",
        options: [
            'Den må alltid ha et navn som starter med "RN"',
            "Den er en funksjon som returnerer et React-elementtre bygget av native komponenter (f.eks. View, Text), og eksporteres slik at den kan brukes andre steder",
            "Den kan bare returnere ren tekst, ikke andre komponenter",
            "Den kan kun brukes én gang per applikasjon",
        ],
        correct: 1,
        explanation:
            "En React Native-komponent er som en funksjon som beskriver UI ved å returnere et tre av komponenter (View, Text, Image osv.), og eksporteres slik at den kan gjenbrukes i appen.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Du skal lage en layout der flere elementer skal ligge inni en container, omtrent som en <div> på web. Hvilken komponent fyller denne rollen i React Native?",
        options: ["View", "Section", "Container", "Block"],
        correct: 0,
        explanation:
            "View er basis-layoutkomponenten i React Native, og fungerer ofte som en erstatning for <div> på web.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hvorfor bruker vi ikke HTML-tagger som <div> og <h1> direkte i React Native, selv om vi fortsatt skriver JSX?",
        options: [
            "React Native støtter bare XML, ikke JSX",
            "React Native rendrer UI med native komponenter, ikke HTML, og oversetter React-komponentene til plattformspesifikke elementer",
            "HTML-tagger er reservert for TypeScript-prosjekter",
            "Expo tillater kun bruk av <View> og <Button>, ikke andre elementer",
        ],
        correct: 1,
        explanation:
            "React Native rendrer ikke til DOM og HTML, men til native views for iOS/Android. Derfor bruker vi komponenter som View, Text og Image i stedet for HTML-tagger.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Du henter et profilbilde fra en ekstern URL i en React Native-app. Hva er spesielt viktig for at bildet skal vises riktig?",
        options: [
            "At URL-en slutter på .png, ellers støttes det ikke",
            "At du bruker src-prop i stedet for source",
            "At du bruker source={{ uri: ... }} og gir bildet eksplisitt bredde og høyde i stilene",
            "At du alltid bruker lokale .jpg-filer i assets-mappen",
        ],
        correct: 2,
        explanation:
            "For remote bilder bruker React Native source={{ uri }}-prop, og bildet må ha eksplisitt width/height i stilen for at layout-motoren skal vite hvor stort det er.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Du bruker Dimensions.get('window').width til å beregne bredden på et ID-kort. Hva oppnår du med dette i en komponent som rendres på mange skjermstørrelser?",
        options: [
            "Kortet får alltid samme bredde uansett skjerm",
            "Kortet kan tilpasses skjermbredden dynamisk, for eksempel ved å bruke en prosent av tilgjengelig bredde",
            "Kortet blir låst til portrett-modus",
            "Kortet kan bare rendres på Android-enheter",
        ],
        correct: 1,
        explanation:
            "Ved å hente vindusbredden kan du beregne en relativ bredde (f.eks. 90 %), slik at UI skalerer bedre på ulike skjermstørrelser.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er den praktiske effekten av å skrive `style={[styles.header, { backgroundColor: colors.primary }]}` på en View?",
        options: [
            "Kun den siste stilen brukes, styles.header ignoreres",
            "Stilene merges, og egenskaper i objektet sist i arrayen overstyrer de samme egenskapene i tidligere stiler",
            "Rekkefølgen i arrayen har ingen betydning",
            "React Native vil kaste en feil fordi man ikke kan kombinere flere stiler",
        ],
        correct: 1,
        explanation:
            "Når du sender inn et stil-array, kombineres stilene i rekkefølge, og senere entries overstyrer tidligere for overlappende properties.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Du har definert et colors-objekt med primary, secondary, text og background. Hva er hovedgrunnen til å samle farger på denne måten i stedet for å hardkode dem i alle stilene?",
        options: [
            "Det gjør at TypeScript kompilerer raskere",
            "Det forhindrer at View og Text kan bruke samme farge",
            "Det gir mer konsistent design og gjør det enklere å endre temaet et sted senere",
            "Det er kun nødvendig for dark mode-støtte",
        ],
        correct: 2,
        explanation:
            "Når farger samles i ett objekt, blir det enklere å holde design konsistent og oppdatere paletten senere uten å måtte endre mange enkeltstiler.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Du har et defaultStyle-objekt og lager flere knappestiler ved hjelp av spread operator (`...defaultStyle`). Hva bør du være bevisst på når du gjør dette?",
        options: [
            "At spread alltid gjør objektet uforanderlig (immutable)",
            "At du kan overskrive verdier fra defaultStyle, for eksempel color, i knappevariantene",
            "At spread kun fungerer på arrays, ikke på objekter",
            "At React Native ignorerer alle stiler som kommer etter spread",
        ],
        correct: 1,
        explanation:
            "Spread operator kopierer properties, men du kan overstyre dem etterpå i det nye objektet. Rekken av properties avgjør hva som gjelder til slutt.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "I en tekstkomponent brukes `style={[styles.value, student.role === 'Admin' && styles.adminText]}`. Hvorfor er dette et typisk mønster i React Native?",
        options: [
            "Fordi && automatisk gjør komponenten usynlig",
            "Fordi bare den første stilen i arrayen blir brukt når uttrykket evalueres",
            "Fordi uttrykket enten gir en ekstra stil (styles.adminText) eller en falsy verdi som ignoreres, noe som gir enkel betinget styling",
            "Fordi React Native krever at alle stiler evalueres til booleans",
        ],
        correct: 2,
        explanation:
            "Uttrykket `student.role === 'Admin' && styles.adminText` gir enten styles.adminText eller false. React Native ignorerer falsy verdier i stil-arrayen, så dette er en kompakt måte å legge til en betinget stil på.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er en sentral grunn til å bruke StyleSheet.create når du definerer stiler i React Native, i stedet for bare å skrive objekter inline overalt?",
        options: [
            "Det gjør at du kan bruke CSS-syntaks direkte",
            "Det gir mulighet for noe validering og optimalisering, og holder stilene samlet på ett sted",
            "Det gjør at komponenten bare kan rendres én gang",
            "Det er påkrevd for at Flexbox skal fungere",
        ],
        correct: 1,
        explanation:
            "StyleSheet.create er ikke magi, men gir litt validering, mulighet for optimalisering og en ryddig måte å samle stilene på.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvordan skiller standard retning for Flexbox-layout seg mellom React Native og klassisk web (CSS) når man ikke eksplisitt angir flexDirection?",
        options: [
            "Begge bruker alltid rad (row) som standard",
            "React Native bruker kolonne (column) som standard, mens web som regel bruker rad (row)",
            "Web bruker kolonne (column), React Native bruker rad (row)",
            "Ingen av dem har noen standard, det må alltid settes",
        ],
        correct: 1,
        explanation:
            "I React Native er flexDirection default 'column', mens web-layout tradisjonelt har tenkt i rader. Det påvirker hvordan elementer plasseres uten eksplisitt flexDirection.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Du lager en ny komponent og skal importere View, Text og Image. Hvor må disse importeres fra i en typisk React Native-fil?",
        options: ["'react'", "'react-native'", "'expo-core'", "'react-dom'"],
        correct: 1,
        explanation:
            "View, Text, Image, StyleSheet osv. importeres fra 'react-native', mens selve React importeres fra 'react'.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Du ønsker å markere et ID-kort som utløpt ved å vise datoen i rød tekst når det er ugyldig, uten å endre selve strukturen på komponenten. Hvilken tilnærming er mest i tråd med mønstrene du har sett?",
        options: [
            "Returnere null i stedet for komponenten når kortet er utløpt",
            "Bytte ut Text-komponenten med View når kortet er utløpt",
            "Bruke betinget styling i style-propen, for eksempel et stil-array med en ekstra rød stil når kortet er utløpt",
            "Lagre datoen i node_modules i stedet",
        ],
        correct: 2,
        explanation:
            "En naturlig tilnærming er å bruke betingede stiler (for eksempel ekstra rød farge) i stedet for å endre komponent-strukturen bare for å markere status visuelt.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "En komponent viser både layout, tekst og bilde for et studentkort. Hva er en god grunn til å pakke hele kortet inn i én egen komponent i stedet for å ha alt direkte i App.tsx?",
        options: [
            "Det er eneste måten å bruke StyleSheet.create på",
            "Det gjør det mulig å gjenbruke kortet på flere skjermer og holde App.tsx enklere og mer oversiktlig",
            "Det kreves for at Expo skal kunne bygge prosjektet",
            "Ellers kan man ikke bruke Dimensions i koden",
        ],
        correct: 1,
        explanation:
            "Å lage en egen komponent for kortet gir bedre struktur, gjenbruk og lesbarhet, og følger prinsippet om å bryte ned UI i logiske byggeklosser.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er en viktig forskjell mellom å style komponenter i React Native og å style HTML-elementer på web?",
        options: [
            "React Native støtter ikke Flexbox, mens web gjør det",
            "React Native bruker style-objekter (ofte via StyleSheet) i JavaScript, mens web typisk bruker CSS-filer eller style-tagger",
            "På web kan man ikke bruke gjenbrukbare stilkonstanter",
            "React Native krever at alle farger spesifiseres som RGB, ikke hex",
        ],
        correct: 1,
        explanation:
            "I React Native defineres stiler som JavaScript-objekter (ofte i StyleSheet.create), mens web tradisjonelt bruker CSS-filer. Konseptuelt kan mange prinsipper likevel overføres.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Du ønsker å kombinere to faste stiler til én samlet stil i stedet for å sende inn et array direkte til style-propen. Hvilket API kan brukes til dette i React Native?",
        options: [
            "StyleSheet.merge",
            "StyleSheet.compose",
            "StyleSheet.attach",
            "StyleSheet.union",
        ],
        correct: 1,
        explanation:
            "StyleSheet.compose kan brukes til å kombinere to stilobjekter til én stil, hvis du ikke vil bruke style={[styleA, styleB]} direkte i JSX.",
    },
];

export const quiz_komponenter_bzj = {
    id: "komponenter-bzj",
    title: "L6 - Komponenter og styling i React Native - BZJ",
    description:
        "Quiz om komponenter i React Native: View/Text/Image, forskjeller fra web, styling med StyleSheet, stil-arrays, fargekonstanter, betingede stiler, Dimensions og Flexbox-retning.",
    theme: ["react-native", "komponenter", "mobilprogrammering"],
    questions: [...questions],
};
