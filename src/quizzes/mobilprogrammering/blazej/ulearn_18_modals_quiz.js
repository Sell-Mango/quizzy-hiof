const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedformålet med å bruke en modal i en mobilapplikasjon?",
        options: [
            "Å erstatte hele navigasjonsstakken",
            "Å vise viktig informasjon eller be om bekreftelse som overlay over eksisterende innhold",
            "Å forbedre appens ytelse",
            "Å cache data lokalt på enheten",
        ],
        correct: 1,
        explanation:
            "Modaler brukes typisk for bekreftelser eller viktig informasjon som bør få full oppmerksomhet, men fortsatt vises over den eksisterende konteksten.",
    },
    {
        id: "q2",
        type: "true-false",
        question:
            "Synligheten til en modal styres vanligvis av en boolean state-variabel, f.eks. modalVisible.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Et klassisk mønster er const [modalVisible, setModalVisible] = useState(false), og å koble denne til visible-propen på Modal.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hvilken kombinasjon beskriver best hvordan en enkel slettemodal fungerer i eksempelet?",
        options: [
            "Modalen vises alltid, men knappen er skjult",
            "Modalen viser en bekreftelse, og ved bekreftelse slettes studenten, modalen lukkes og brukeren får en bekreftelsesmelding før navigasjon tilbake",
            "Modalen åpnes, men har ingen påvirkning på data eller navigasjon",
            "Modalen brukes kun til å vise styling av Theme-farger",
        ],
        correct: 1,
        explanation:
            "Bruker trykker 'Slett student' → modal åpnes → ved bekreft slettes studenten (logisk sett), modalen lukkes, en Alert vises og det navigeres tilbake til studentlisten.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er en viktig forskjell på å bruke React Native sin innebygde Modal vs. en modal via Expo Router (presentation: 'modal')?",
        options: [
            "Native Modal kan ikke bruke state, men Expo Router-modal kan",
            "Expo Router-modal er en del av navigasjonsstakken, mens Native Modal oftest bare overlays på en eksisterende skjerm",
            "Native Modal fungerer kun på Android",
            "Expo Router-modal kan ikke ha egen layout eller stil",
        ],
        correct: 1,
        explanation:
            "En Expo Router-modal er egentlig en egen skjerm/rute som presenteres som modal via navigasjonen, mens Native Modal rendres over den nåværende skjermen og styres direkte via props/state.",
    },
    {
        id: "q5",
        type: "true-false",
        question:
            "Når vi bruker Expo Router med presentation: 'modal', kan vi legge modale skjermer i en egen mappe (f.eks. (modals)) for å gjøre dem tilgjengelige fra hele appen.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Ved å legge modals i en egen route-mappe og konfigurere dem i Stack.Screen med presentation: 'modal', kan de brukes som modale skjermer fra ulike steder i appen.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor kan det være nyttig å lage en egen CustomModal-komponent i stedet for å bruke Modal direkte overalt?",
        options: [
            "For at modaler skal fungere uten state",
            "For å samle styling, tema-farger og oppførsel ett sted og få mer konsistent og gjenbrukbar modal-oppførsel",
            "For å unngå å bruke Theme i resten av appen",
            "For å gjøre det umulig å endre innholdet i modalen",
        ],
        correct: 1,
        explanation:
            "En abstraksjon som CustomModal kan kapsle inn visible-håndtering, Theme-styling og knapper, slik at alle modaler ser og føles like ut.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er poenget med å bruke Link med asChild i headerRight for å åpne remove-student-modalen?",
        options: [
            "For at Pressable skal ignorere trykk",
            "For å gi Pressable navigasjonsoppførsel, men fortsatt beholde utseende og feedback fra Pressable",
            "For å deaktivere routing fullstendig",
            "For å kunne bruke router.push inne i Pressable",
        ],
        correct: 1,
        explanation:
            "asChild gjør at Link overfører sin navigasjonslogikk til Pressable, slik at knappen fungerer som vanlig, men trykk navigerer til modalen.",
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "I en navigasjonsmodal (remove-student) er det viktig å ha en måte å lukke modalen på, for eksempel ved å kalle router.back() hvis router.canGoBack() er true.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "En modal-skjerm er fortsatt en del av navigasjonsstacken, så den bør kunne lukkes ved å gå tilbake i historikken (router.back) dersom det er mulig.",
    },
];

export const react_native_modals_quiz = {
    id: "react-native-modals-quiz",
    title: "L18 - React Native Modals og sletting - BZJ",
    description:
        "Kort quiz om modaler i React Native, state-styring av synlighet, bekreftelsesdialoger for sletting og modaler via Expo Router.",
    theme: ["react-native", "modaler", "expo", "komponenter_props"],
    questions: [...questions],
};
