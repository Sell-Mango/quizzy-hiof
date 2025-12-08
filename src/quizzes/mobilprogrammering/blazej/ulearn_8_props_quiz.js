const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er den BESTE beskrivelsen av props i React Native-komponenter?",
        options: [
            "En intern lagringsplass for data som komponenten kan endre selv",
            "Argumenter som sendes inn til komponenten utenfra, og som skal behandles som uforanderlige i komponenten",
            "Globale variabler som er tilgjengelige i alle komponenter uten import",
            "Et eget API fra React Native for å håndtere styling",
        ],
        correct: 1,
        explanation:
            "Props er data/konfigurasjon som sendes inn utenfra (som funksjonsargumenter), og som komponenten ikke skal mutere direkte. State er det komponenten selv kontrollerer.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Du har en komponent `StudentCard` som får props-objektet som parameter. Hvorfor vil man ofte skrive `function StudentCard({ name, program }) { ... }` i stedet for `function StudentCard(props) { ... }`?",
        options: [
            "Fordi props bare fungerer når de destruktureres",
            "For å gjøre det tydelig hvilke props komponenten forventer å bruke, og gjøre koden mer lesbar",
            "For at React skal kunne optimalisere rendering automatisk",
            "Fordi det er et krav når vi bruker TypeScript",
        ],
        correct: 1,
        explanation:
            "Destrukturering i parameterlisten gjør det eksplisitt hvilke props komponenten bruker, og gjør JSX mer lesbar (`{name}` i stedet for `props.name`).",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            'En komponent `StudentTag` har signaturen `({ label = "Ukjent", isActive = true })`. Hva er den viktigste konsekvensen av dette?',
        options: [
            "Komponenten kan ikke lenger motta props fra foreldre",
            "Alle props blir obligatoriske",
            "Hvis foreldrekomponenten ikke sender label eller isActive, får de en fornuftig default-verdi",
            "State i komponenten blir automatisk initialisert med disse verdiene",
        ],
        correct: 2,
        explanation:
            "Defaultverdier i parameterlisten gjør at komponenten får en fallback når en prop ikke sendes inn. Den kan fortsatt overskrives eksplisitt.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Du har en Card-komponent som tar `children`. Hvorfor er children-propen spesielt nyttig i en layout-komponent som Card?",
        options: [
            "Den gjør at Card automatisk rendrer alle globale komponenter",
            "Den gjør det mulig å putte vilkårlig innhold inni Card uten at Card trenger å vite noe om detaljene",
            "Den kreves for at ScrollView skal fungere",
            "Den kan bare brukes til tekst, ikke til andre komponenter",
        ],
        correct: 1,
        explanation:
            'children gjør det mulig å lage generelle "wrap"-komponenter som Card, der foreldre bestemmer innholdet, mens Card tar seg av ramme, struktur og styling.',
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            'En komponent `StudentLabel` tar inn propsene `{ text, color = "#002266", size = 14 }` og bruker disse i style. Hva er en typisk grunn til å modellere styling på denne måten via props?',
        options: [
            "Det er den eneste måten å bruke StyleSheet på",
            "For å kunne variere utseende (farge/størrelse) mellom ulike brukssteder uten å lage nye komponenter hver gang",
            "For å unngå å bruke StyleSheet.create helt",
            "For at React automatisk skal generere dark mode",
        ],
        correct: 1,
        explanation:
            "Ved å ta inn styling-relaterte props kan samme komponent vises med ulike varianter (farge, størrelse) uten at vi dupliserer komponentkode.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "I en komponent `EnhancedText` skriver du: `<Text {...props} style={[styles.base, props.style]}>`. Hvilken POTENSIELL ulempe ved prop spreading må du være bevisst?",
        options: [
            "At React Native ikke støtter spread-syntaks på props",
            "At du kan videreføre props til Text som den egentlig ikke kjenner, noe som kan gi warnings eller uforventet oppførsel",
            "At children ikke lenger rendres i Text",
            "At style alltid ignoreres når du bruker spread",
        ],
        correct: 1,
        explanation:
            "Prop spreading er fleksibelt, men kan føre til at du sender med props som ikke gir mening for underkomponenten (her Text), noe som kan gi warnings eller overskygge eksplisitte props.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "En komponent `StudentID` mottar `{ student, theme }` som props. Hvilken beskrivelse samsvarer best med ansvarsfordelingen i en slik komponent?",
        options: [
            "StudentID skal både hente studentdata fra API og opprette theme-objektet internt",
            "StudentID forventer ferdige data (student) og et tema (theme) utenfra, og bruker dem kun til å bestemme visning og styling",
            "StudentID skal oppdatere student-objektet direkte inne i komponenten",
            "StudentID må ha hardkoda farger for å være forutsigbar",
        ],
        correct: 1,
        explanation:
            'En presentasjonskomponent som `StudentID` bør behandles som "dum": den får data og tema via props, og rendrer basert på det. Henting og mutering skjer andre steder.',
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Du har en `StudentList`-komponent som gjør `students.map(student => <StudentID student={student} />)`. Hva er det viktigste som mangler i dette mønsteret med tanke på Reacts forventninger for lister?",
        options: [
            "En key-prop på root-elementet i hver iterasjon",
            "En state-variabel for å holde på students internt",
            "Et children-felt på student-objektet",
            "En ekstra prop som heter index",
        ],
        correct: 0,
        explanation:
            "Når man rendrer lister i React/React Native trenger hvert listeelement en unik `key` for at React skal kunne tracke endringer effektivt.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "I `StudentList` sendes både `students` og `theme` ned som props. App-komponenten har bare én `Theme`-konstant definert. Hva er en praktisk grunn til å sende `theme` videre via props i stedet for å importere det direkte i alle komponentene?",
        options: [
            "Det er ikke lov å importere konstanter direkte i React-komponenter",
            "Props gjør det mulig å bytte til et annet tema (f.eks. dark mode) uten å endre implementasjonen til barnekomponentene",
            "Props er raskere enn import i runtime",
            "Det er nødvendig for at SafeAreaView skal fungere",
        ],
        correct: 1,
        explanation:
            "Ved å sende tema via props kan forskjellige deler av appen få ulike tema, eller hele temaet byttes, uten å endre komponentlogikk. Det gjør komponenter mer fleksible og testbare.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            'Hva er en typisk "lukt" (dårlig tegn) på at du burde innføre props i stedet for å lage flere separate komponenter?',
        options: [
            "At alle komponentene importerer React",
            "At du har mange nesten like komponenter som bare varierer i tekst, farger eller små detaljer",
            "At appen har mer enn ti filer",
            "At du bruker StyleSheet.create flere steder",
        ],
        correct: 1,
        explanation:
            "Hvis du har flere komponenter som er nesten like, og forskjellene bare handler om data/utseende, er det et tegn på at du burde samle logikken i én komponent og bruke props til å variere innhold.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er den mest presise forskjellen mellom props og state i en React Native-komponent slik det er relevant her?",
        options: [
            "Props er kun for tekst, state er kun for tall",
            "Props kan bare brukes i funksjonskomponenter, state bare i klassekomponenter",
            "Props kommer utenfra og skal ikke muteres direkte i komponenten; state er kontrollert av komponenten selv og kan endres over tid",
            "Props brukes kun for styling, state brukes kun for data",
        ],
        correct: 2,
        explanation:
            "Props representerer innkommende konfigurasjon/data, mens state er komponentens egen, interne tilstand som endres med f.eks. hooks (useState) – selv om dere ser mer på state senere.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "En `ThemedText`-komponent tar `variant`-prop (f.eks. 'primary' | 'secondary') i tillegg til vanlige Text-props. Hva er hovedpoenget med å lage en slik themed wrapper-komponent?",
        options: [
            "For å kunne bruke HTML i React Native",
            "For å samle tema-logikk ett sted slik at alle tekster som bruker ThemedText følger samme designregler",
            "For å unngå å bruke StyleSheet helt",
            "For å slippe å sende children inn som prop",
        ],
        correct: 1,
        explanation:
            "ThemedText kapsler inn tema- og variantlogikk én gang, slik at resten av appen kan bruke den konsekvent uten å duplisere stylingbeslutninger.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "I TypeScript definerer du `type StudentListProps = { students: Student[]; theme: Theme }`. Hva er den viktigste gevinsten ved å typet-definere props på denne måten?",
        options: [
            "Det gjør at komponenten kan rendres utenfor React",
            "Det sikrer at alle som bruker komponenten må sende inn riktig struktur, og gir bedre IntelliSense og feilmeldinger i IDE",
            "Det gjør at props blir globalt tilgjengelige i hele appen automatisk",
            "Det erstatter behovet for testing",
        ],
        correct: 1,
        explanation:
            "Typed props i TypeScript sørger for at feil (manglende eller feil typer) fanges i utvikling, og gjør editoren i stand til å gi gode forslag og advarsler.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            'En komponent `StudentID` viser tekst "Inaktiv" bare når `isActive`-proppen er false. Hvilket begrep beskriver dette mønsteret?',
        options: [
            "Prop spreading",
            "Betinget rendering",
            "Global state management",
            "Memoization",
        ],
        correct: 1,
        explanation:
            "Når vi viser/skjuler elementer basert på props (f.eks. `!isActive && <Text>Inaktiv</Text>`), driver vi med betinget rendering.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "En `StudentList` bruker `ScrollView` og sender `contentContainerStyle={{ gap: 25 }}`. Hvorfor kan det være fornuftig å la avstanden mellom elementene styres på dette nivået i stedet for inne i `StudentID`?",
        options: [
            "Det er bare ScrollView som støtter gap",
            "Spacing mellom kortene er en egenskap ved layouten (listen), ikke selve kort-komponenten",
            "StudentID kan ikke ha noen marginer",
            "ScrollView krever contentContainerStyle for å fungere",
        ],
        correct: 1,
        explanation:
            "Avstand mellom elementer hører hjemme der layouten bestemmes (her i listen), mens `StudentID` beskriver et enkelt kort uten å vite hvordan det senere plasseres i en liste.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            "App-komponenten wraper hele innholdet i en `SafeAreaView` og sender deretter `students` og `Theme` videre som props. Hva er en god måte å tolke SafeAreaView sin rolle her sammenlignet med de andre komponentene?",
        options: [
            "SafeAreaView er en data-komponent, mens de andre er presentasjonskomponenter",
            "SafeAreaView er en plattformspesifikk layout-komponent som tar hensyn til system-UI, mens StudentList og StudentID rendrer innhold basert på props",
            "SafeAreaView brukes for å håndtere props, mens de andre ikke bruker props",
            "SafeAreaView erstatter behovet for ScrollView",
        ],
        correct: 1,
        explanation:
            "SafeAreaView sørger for at innholdet ikke havner bak f.eks. notch/statusbar på iOS, mens StudentList/StudentID konsentrerer seg om å vise data som kommer inn via props.",
    },
];

export const quiz_props_bzj = {
    id: "props-bzj",
    title: "L8 - React Native – props, children og theming - BZJ",
    description:
        "Quiz om props i React Native: dataflyt fra foreldre til barn, destrukturering, defaultverdier, children, stil via props, prop spreading, forskjellen på props og state, typed props, theming og liste-rendering.",
    theme: ["react-native", "komponenter_props", "mobilprogrammering"],
    questions: [...questions],
};
