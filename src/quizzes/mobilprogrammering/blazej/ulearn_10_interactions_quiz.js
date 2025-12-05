const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er den viktigste grunnen til å sende inn en prop som `onPress` til en knapp/komponent i stedet for å hardkode hva som skjer inni komponenten?",
        options: [
            "For at komponenten skal kunne endre egen state automatisk",
            "For å gjøre komponenten gjenbrukbar, slik at foreldrekomponenten kan bestemme hvilken logikk som skal kjøres ved trykk",
            "For at Pressable skal fungere på Android",
            "For å unngå å bruke TypeScript",
        ],
        correct: 1,
        explanation:
            "Ved å motta en `onPress`-prop blir komponenten mer generisk og gjenbrukbar. Forelderen kan selv avgjøre hva som skal skje når brukeren trykker.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er den mest korrekte beskrivelsen av hva Pressable er designet for i React Native?",
        options: [
            "En komponent som kun kan brukes til å fange long-press, ikke vanlige trykk",
            "En komponent som håndterer touch-interaksjoner (trykk, long-press osv.) og gir hooks inn i hele trykk-livssyklusen",
            "En komponent som kun brukes til å lage standard system-knapper",
            "En layout-komponent for å posisjonere innhold med flexbox",
        ],
        correct: 1,
        explanation:
            "Pressable er en generell touch-komponent som er laget for å håndtere hele trykk-livssyklusen og gi oss kontroll over hvordan UI-et reagerer på berøring.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Du vil gi visuell feedback når brukeren trykker ned på en Pressable. Hvilket stilmønster er typisk for Pressable sin `style`-prop?",
        options: [
            "style={styles.button}",
            "style={(pressed) => [styles.button, pressed && styles.pressed]}",
            "style={({ pressed }) => [styles.button, pressed && styles.pressed]}",
            "style={[styles.button, { pressed: true }]}",
        ],
        correct: 2,
        explanation:
            "Pressable sin `style`-prop får et objekt med blant annet `pressed`. Riktig signatur er f.eks. `style={({ pressed }) => [...]}` for å kunne styre stil basert på trykkstatus.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvilken kombinasjon beskriver rekkefølgen på hendelser ved et vanlig, kort trykk på en Pressable (ingen long-press)?",
        options: [
            "onPress → onPressIn → onPressOut",
            "onPressIn → onPressOut → onPress",
            "onPressOut → onPressIn → onPress",
            "onLongPress → onPress → onPressOut",
        ],
        correct: 1,
        explanation:
            "Typisk rekkefølge: finger ned → `onPressIn`, finger opp → `onPressOut`, og hvis det regnes som et gyldig trykk → `onPress`.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Du vil at en liten +-ikonknapp skal være lettere å treffe på mobil, uten å endre selve ikonets visuelle størrelse. Hvilken Pressable-prop er mest relevant?",
        options: ["android_ripple", "hitSlop", "onLongPress", "windowSize"],
        correct: 1,
        explanation:
            "`hitSlop` utvider det trykkbare området rundt komponenten uten at selve visuelle størrelsen endres, og gjør små mål enklere å treffe.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er hovedgrunnen til at Pressable ofte foretrekkes fremfor den innebygde `Button`-komponenten i mer avanserte apper?",
        options: [
            "Pressable fungerer kun på iOS, noe som gir bedre kvalitet",
            "Button støtter ikke onPress",
            "Pressable gir full kontroll over design, tilbakemelding og interaksjoner på tvers av plattformer",
            "Button kan ikke brukes inne i en FlatList",
        ],
        correct: 2,
        explanation:
            "Pressable gir langt mer fleksibilitet mht. layout, styling, tilbakemelding og hendelser. Button er en rask, men begrenset løsning.",
    },
    {
        id: "q7",
        type: "true-false",
        question:
            "En Pressable kan ha både onPress, onPressIn, onPressOut og onLongPress definert samtidig.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Alle disse kan brukes samtidig. De representerer ulike tidspunkt i interaksjonen (start, slutt, fullført trykk, langt trykk).",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Du ser en Pressable definert slik: `android_ripple={{ color: '#ffffff50', borderless: false, radius: 30 }}`. Hva er en korrekt tolkning av dette?",
        options: [
            "Den konfigurerer en wave/ripple-effekt på Android ved trykk, med angitt farge og radius",
            "Den brukes til å justere padding på iOS",
            "Den gjør at Pressable bare fungerer på Android",
            "Den tvinger Pressable til å bruke absolute positioning",
        ],
        correct: 0,
        explanation:
            "`android_ripple` gir en visuell bølgeeffekt ved touch på Android. På iOS ignoreres denne prop-en.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "En komponent `StudentCard` tar en prop `onPress?: (id: string) => void`. Hva er effekten av spørsmålstegnet etter `onPress` i denne sammenhengen?",
        options: [
            "onPress må alltid være en tom funksjon",
            "onPress er valgfri; komponenten må tåle at det ikke sendes inn en callback",
            "onPress kan kun brukes én gang",
            "onPress må være en string i stedet for en funksjon",
        ],
        correct: 1,
        explanation:
            "`onPress?` betyr at propen er optional. Komponenten må derfor sjekke om `onPress` finnes før den kalles.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "I en interaktiv StudentID-komponent kalles en intern funksjon `handleStudentPress(event)` som igjen kaller `onPress(id)` fra props. Hvorfor er denne ekstra funksjonen nyttig?",
        options: [
            "Vi kan logge eller inspisere eventet før vi sender videre ID-en",
            "Det er ikke lov å kalle props direkte",
            "Den gjør at onPress aldri får vite hvilken student som ble trykket på",
            "Den er nødvendig for at StyleSheet.create skal fungere",
        ],
        correct: 0,
        explanation:
            "En egen handler gir oss et naturlig sted å logge, debugge eller transformere data (f.eks. hente ut id) før vi kaller callbacken fra forelderen.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "CustomPress-komponenten utvider PressableProps i TypeScript. Hva er den viktigste fordelen ved å gjøre dette i stedet for å definere helt nye props fra scratch?",
        options: [
            "Vi mister støtte for onPress, onLongPress osv.",
            "Vi får med alle standard Pressable-props i tillegg til våre egne, med typesjekking og IntelliSense",
            "Komponenten kan ikke lenger brukes i FlatList",
            "Det forhindrer bruk av hitSlop",
        ],
        correct: 1,
        explanation:
            "Ved å utvide `PressableProps` arver vi alle standard props for Pressable, og kan legge til egne (som `feedbackStyle`, `useRipple`) uten å miste funksjonalitet.",
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "En fordel med en egen `CustomPress`-komponent er at du kan endre standard trykk-feedback ett sted, og alle steder som bruker den vil få den nye oppførselen.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Dette er kjernen i DRY-prinsippet: én felles abstraksjon gjør det enkelt å endre global interaksjon/feedback uten å oppdatere alle knapper manuelt.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "I en FlatList wrappes hvert kort slik: `<CustomPress onPress={() => onStudentPress?.(item.id)}> ... </CustomPress>`. Hvor bør typisk logikken ligge som f.eks. navigerer til en detaljskjerm eller logger hvilken student som ble trykket?",
        options: [
            "Inne i CustomPress, slik at alle trykk håndteres på samme måte",
            "I StudentID, ved å hardkode `console.log` der",
            "I forelderen som eier FlatList, gjennom callbacken `onStudentPress`",
            "Kun i StyleSheet, gjennom stilendringer",
        ],
        correct: 2,
        explanation:
            'FlatList-eieren (f.eks. App) har ofte ansvaret for navigasjon og "hva skjer når vi trykker". Derfor er det naturlig å sende inn en `onStudentPress`-prop som håndterer dette på et høyere nivå.',
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            'Hva beskriver best hvorfor det er lurt å skille mellom en "visningskomponent" (StudentID) og en "interaksjons-wrapper" (CustomPress + Card rundt)?',
        options: [
            "Fordi visningskomponenten ikke skal bruke props",
            "Fordi React Native ikke støtter onPress på komponenter med bilder",
            "For å kunne bruke samme visuelle komponent både i interaktive og ikke-interaktive kontekster",
            "For at FlatList skal kunne generere keys automatisk",
        ],
        correct: 2,
        explanation:
            "Når visningskomponenten ikke selv styrer interaksjon, kan den gjenbrukes både som statisk visning og som trykkbar ved å wrappes i en Pressable/CustomPress uten å endre innmaten.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Du logger `event` i en onPress-handler og ser at `nativeEvent` inneholder koordinater og touch-informasjon. Hva er en praktisk grunn til å ha tilgang til dette event-objektet, selv om du ikke alltid bruker det?",
        options: [
            "For å kunne endre tema-fargene dynamisk",
            "For å kunne debugge og forstå hvor brukeren trykker, eller lage mer avansert logikk basert på posisjon/gestures",
            "For å deaktivere onPress globalt",
            "For å generere tilfeldige student-ID-er",
        ],
        correct: 1,
        explanation:
            "Event-objektet gir innsikt i hvor og hvordan touch skjer. Typisk brukes det til debugging eller mer avanserte interaksjoner (gestures, posisjonsbasert logikk).",
    },
    {
        id: "q16",
        type: "true-false",
        question:
            "Hvis du kun trenger en veldig enkel knapp med tekst og onPress i en liten demo-app, er det fortsatt greit å bruke den innebygde `Button`-komponenten i stedet for Pressable.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Button er fortsatt nyttig som en rask løsning i enkle tilfeller. Pressable og egne abstraherte komponenter kommer til sin rett når du trenger mer kontroll og konsist design.",
    },
];

export const quiz_interactions_bzj = {
    id: "interactions-bzj",
    title: "L10 - Interaksjoner, Pressable og CustomPress - BZJ",
    description:
        "Quiz om brukerinteraksjoner i React Native: Pressable vs Button, onPress/onPressIn/onPressOut/onLongPress, pressed-tilstand, hitSlop, ripple-effekt, callback-props, CustomPress og samspillet mellom liste, kort og interaksjon.",
    theme: ["react-native", "interactions", "pressable", "mobilprogrammering"],
    questions: [...questions],
};
