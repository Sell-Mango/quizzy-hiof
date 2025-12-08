const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedgrunnen til at vi trenger både expo-camera og expo-media-library i denne konteksten?",
        options: [
            "expo-camera brukes til lagring, expo-media-library til å ta bilder",
            "expo-camera gir tilgang til kameraet, mens expo-media-library lar oss lagre bildet i telefonens mediebibliotek",
            "Begge brukes kun for animasjoner",
            "De trengs bare for å kunne vise ikoner i kameraet",
        ],
        correct: 1,
        explanation:
            "expo-camera gir oss tilgang til kameraet og funksjoner som å ta bilder, mens expo-media-library brukes til å lagre bildet permanent i mediebiblioteket.",
    },
    {
        id: "q2",
        type: "true-false",
        question:
            "Tillatelsestekstene for kamera og mediebibliotek må konfigureres i app.json for at plattformene skal vise riktige dialoger til brukeren.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "I app.json settes f.eks. cameraPermission og photosPermission, som styrer hva brukeren ser når systemet spør om tillatelse.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hvorfor ble id-feltet i StudentSchema endret til å bruke z.coerce.number() med begrensning til 7 sifre?",
        options: [
            "For å gjøre det enklere å lagre ID som boolean",
            "For å kunne godta både tall og tall-strenger, og samtidig sikre at ID er et heltall mellom 1000000 og 9999999",
            "For å tillate bokstaver i ID",
            "For å deaktivere validering av id helt",
        ],
        correct: 1,
        explanation:
            "coerce.number gjør at vi kan skrive inn tall som streng, men fortsatt validere som number, og min/max sikrer 7-sifret heltall.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvorfor er det viktig at image-feltet ble lagt til og gjort påkrevd i StudentSchema?",
        options: [
            "For at skjemaet skal kunne submitte uten andre verdier",
            "For å kunne bruke bildet i validering av id",
            "For å sikre at hver student har et bilde, og at skjemaet ikke kan sendes inn uten bilde",
            "For å deaktivere bruk av kamera",
        ],
        correct: 2,
        explanation:
            "Når image er et påkrevd felt, tvinger vi fram at registrerte studenter faktisk har et knyttet bilde (URI) i dataene.",
    },
    {
        id: "q5",
        type: "true-false",
        question:
            "Mappen (zShared) er navngitt med z for å sikre at Expo Router vurderer andre mapper først, slik at dette innholdet fungerer som en slags global guard.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Expo Router leser mapper alfabetisk. Ved å bruke zShared reduserer vi risiko for at disse skjermene kolliderer med andre ruter og bruker det som en type «global» område.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er hovedrollen til Permissions-komponenten som vises før Add-skjermen?",
        options: [
            "Å vise selve kameraet og ta bilder",
            "Å håndtere innlogging for brukeren",
            "Å be om og sjekke kamera- og bibliotekstillatelser, og deretter sende brukeren videre til riktig route",
            "Å lagre alle studenter lokalt",
        ],
        correct: 2,
        explanation:
            "Permissions-komponenten bruker expo-hooks til å be om rettigheter og, hvis alt er OK, navigerer til neste skjerm (f.eks. Add).",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor brukes AsyncStorage i denne leksjonen i forbindelse med permissions?",
        options: [
            "For å lagre alle bildene lokalt",
            "For å cache nettverkskall",
            "For å huske at bruker allerede har godkjent tillatelser, slik at vi ikke viser access-skjermen hver gang",
            "For å lagre animasjonsinnstillinger",
        ],
        correct: 2,
        explanation:
            "AsyncStorage lagrer f.eks. nøkkelen 'permissionsGranted', slik at appen kan hoppe over access-skjermen ved senere besøk.",
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "AsyncStorage kan lagre vilkårlige JavaScript-objekter direkte uten konvertering.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "AsyncStorage lagrer kun strenger. Objekter må serialiseres med JSON.stringify ved lagring og JSON.parse ved lesing.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er den viktigste gevinsten med å lage et eget custom hook som usePermissions?",
        options: [
            "At vi kan bruke useEffect utenfor React-komponenter",
            "At vi kan gjemme hele permission-logikken i én gjenbrukbar funksjon og bare forholde oss til hasPermissions og isLoading der vi trenger det",
            "At vi slipper å bruke AsyncStorage",
            "At vi kan kjøre kode uten å følge Reacts regler for hooks",
        ],
        correct: 1,
        explanation:
            "Hooken kapsler inn all sjekkelogikk (AsyncStorage + state) og eksponerer kun det vi trenger: hasPermissions og isLoading.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva illustrerer SharedCamera-komponenten best, sett fra et prinsippnivå?",
        options: [
            "At all logikk bør ligge i skjermkomponenten og ikke i egne komponenter",
            "Et eksempel på en gjenbrukbar, spesialisert komponent som håndterer kamera-visning og bildetaking, og eksponerer resultatet via en onSetImage-callback",
            "At vi bør ta bilde direkte i StudentForm uten mellomkomponenter",
            "At man bør unngå animasjoner når man bruker kamera",
        ],
        correct: 1,
        explanation:
            "SharedCamera kapsler inn kamerabruk, animasjoner og ikoner, og gir bare fra seg bildeadressen via onSetImage.",
    },
    {
        id: "q11",
        type: "true-false",
        question:
            "React refs brukes her for å få direkte tilgang til kameraets metoder, som takePictureAsync, uten å gå veien om props.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "cameraRef lages med useRef og knyttes til CameraView, slik at vi kan kalle metoder som takePictureAsync() imperativt.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er hovedpoenget med å bruke Animated.View og layout/entering/exiting i kamera- og bildekomponentene?",
        options: [
            "Å kunne bruke flere styles samtidig",
            "Å kunne kjøre validering direkte i animasjonen",
            "Å gi en mykere og mer profesjonell opplevelse når komponentene vises/skjules og layout endrer seg",
            "Å redusere ytelsen slik at appen virker tregere",
        ],
        correct: 2,
        explanation:
            "Reanimated gir smooth inn-/ut-fade og layoutoverganger, som gjør at kamera og bildesvisning føles mer naturlig for brukeren.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question: "Hvorfor har SymbolView en fallback-prop i SharedCamera?",
        options: [
            "For å deaktivere ikonet på iOS",
            "For å ha en alternativ representasjon (f.eks. emoji eller knapp) på plattformer som ikke støtter SF Symbols, som Android og web",
            "For å kunne lagre bilder direkte",
            "Fordi Expo krever minst to ikoner per knapp",
        ],
        correct: 1,
        explanation:
            "SF Symbols finnes bare på iOS. Fallback gjør at vi kan vise en annen knapp/ikon på andre plattformer og fortsatt ha fungerende UI.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er ansvaret til PictureView-komponenten, sett fra prinsippet separation of concerns?",
        options: [
            "Å både ta bilde, vise bilde og hente permissions",
            "Kun å vise bildet, tilby lagring til mediebiblioteket og gi mulighet til å «lukke»/nullstille bildet",
            "Kun å validere StudentSchema",
            "Kun å styre navigasjonen mellom skjermene",
        ],
        correct: 1,
        explanation:
            "PictureView har ansvar for visning og lagring av allerede tatt bilde, ikke for å styre kamera eller permissions.",
    },
    {
        id: "q15",
        type: "true-false",
        question:
            "PictureField binder sammen skjemalogikk (TanStack Form) og kamera-/bildekomponentene ved å bruke modal for kameravisning og et felt for å vise bildet eller en placeholder.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "PictureField er selve «form-feltet» som bruker SharedCamera via Modal for å ta bilde, og PictureView for å vise/lagre det, knyttet til én skjemaverdi.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hva beskriver best helheten i kamera-oppsettet slik det brukes i StudentForm?",
        options: [
            "Et fokus på å skrive minst mulig kode uansett struktur",
            "En kombinasjon av biblioteker, custom hooks, local storage og gjenbrukbare komponenter som sammen gir en trygg, brukervennlig og testbar måte å ta og lagre bilder for en student",
            "En ren demo uten praktisk anvendelse",
            "En løsning som kun fungerer på én plattform",
        ],
        correct: 1,
        explanation:
            "Hele oppsettet viser hvordan man kombinerer permissions, AsyncStorage, kamera, animasjoner og skjemavalidering til en helhetlig løsning.",
    },
];

export const react_native_camera_quiz = {
    id: "react-native-camera-quiz",
    title: "L19 - React Native Camera, permissions og bildehåndtering - BZJ",
    description:
        "Quiz om prinsippene rundt kamera, permissions, AsyncStorage, custom hooks og komponenter for bildehåndtering i en mobilapp. Fokus på forståelse, ikke kode.",
    theme: [
        "React Native",
        "Kamera",
        "Permissions",
        "AsyncStorage",
        "Forms",
        "UX",
        "Komponentdesign",
    ],
    questions: [...questions],
};
