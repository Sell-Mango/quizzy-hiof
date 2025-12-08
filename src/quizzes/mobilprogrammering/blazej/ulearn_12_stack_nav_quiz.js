const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedpoenget med å bruke en Stack i Expo Router, sammenlignet med å kun navigere med `<Link>` mellom skjermer?",
        options: [
            "Stack gjør det mulig å automatisk cache alle API-responser mellom skjermer",
            "Stack gir en skjerm-stabel med innebygd tilbake-navigasjon og overganger som ligner native mobilapper",
            "Stack kreves kun hvis du vil bruke TypeScript med Expo Router",
            "Stack gjør at du ikke lenger trenger en `app/`-mappe",
        ],
        correct: 1,
        explanation:
            "Stack bygger opp en stabel av skjermer (push/pop) med automatisk back-knapp og overganger, slik brukere forventer i native mobilapper.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva gjør `_layout.tsx` i `app/` når du bruker `Stack` derfra med Expo Router?",
        options: [
            "Den erstatter `index.tsx` fullstendig og gjør at du ikke kan ha andre skjermer",
            "Den definerer hvordan hele navigasjonsstrukturen skal se ut (f.eks. Stack) og hvordan skjermene i `app/` presenteres",
            "Den brukes kun for å laste inn miljøvariabler ved oppstart",
            "Den kan bare brukes til å definere globale CSS-regler",
        ],
        correct: 1,
        explanation:
            "`_layout.tsx` beskriver navigasjons-strukturen (f.eks. Stack) og hvordan ruter under `app/` skal rendres innenfor denne strukturen.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            'I en Stack-layout har du denne konfigurasjonen:\n`<Stack.Screen name="students/[id]" options={{ title: "Studentdetaljer" }} />`\nHva betyr `name="students/[id]"` i denne sammenhengen?',
        options: [
            "Den peker direkte på en komponent med navn `students/[id]`",
            "Den må matche mappen og filnavnet `app/students/[id].tsx` for at skjermen skal kobles til ruten",
            "Den brukes kun til logging og har ingen kobling til filsystemet",
            "Den må alltid være lik tittelen som vises i headeren",
        ],
        correct: 1,
        explanation:
            "`name` må matche rute-filen under `app/` (her `app/students/[id].tsx`) for at Expo Router skal koble Stack-skjermen til riktig side.",
    },
    {
        id: "q4",
        type: "true-false",
        question:
            "Når du legger til en Stack i `_layout.tsx`, vil Expo automatisk vise en tilbakeknapp i headeren på skjermer som ikke er først i stacken, uten at du selv trenger å legge inn en egen «Tilbake»-knapp.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Stack gir automatisk back-knapp basert på stabelen, derfor kan du fjerne manuelle «Tilbake»-lenker i UI-et.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            'Du har denne Stack-konfigurasjonen i `_layout.tsx`:\n`<Stack.Screen name="index" options={{ title: "Studentapp" }} />`\nHva er mest korrekt å si om hvordan brukeren vil møte denne skjermen?',
        options: [
            "Den vil kun vises hvis brukeren manuelt navigerer til `/index`",
            "Den vil typisk være første skjerm i stacken og vises som appens startskjerm",
            "Den kan kun vises på Android, ikke i iOS-simulator",
            "Den vil overskrive alle andre ruter og være den eneste skjermen",
        ],
        correct: 1,
        explanation:
            "`index` under `app/` er root-siden (`/`), og når den registreres i Stack blir den normalt første skjerm i stacken.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor er det nyttig å sette globale `screenOptions` på `<Stack>` i `_layout.tsx`, for eksempel `headerStyle` og `headerTintColor`?",
        options: [
            "For å deaktivere all navigasjon og tvinge statiske sider",
            "For å styre hvilke skjermer som skal vises i App Store",
            "For å få et konsistent utseende på headeren på tvers av alle skjermene, uten å duplisere stil-konfigurasjon",
            "For å unngå at Expo Router lastes inn før alle API-kall er ferdige",
        ],
        correct: 2,
        explanation:
            "Globale `screenOptions` gir en felles header-styling og atferd for alle Stack-skjermene, slik at du slipper å gjenta det på hver skjerm.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Du har en dynamisk studentdetalj-side `app/students/[id].tsx`. Hvordan kan du sette en tittel i Stack som inkluderer aktuell ID, basert på det du har lært?",
        options: [
            "Ved å sette `title: 'Student [id]'` direkte i `screenOptions` på `<Stack>`",
            "Ved å bruke `options={({ route }) => ({ title: 'Student ' + route?.params?.id })}` på `<Stack.Screen name=\"students/[id]\" />`",
            "Ved å importere `useRouter()` og kalle `router.setTitle()`",
            "Det er ikke mulig å ha dynamiske titler i Stack",
        ],
        correct: 1,
        explanation:
            "Expo Router lar deg definere `options` som en funksjon med `route`, slik at du kan lese parametere og bygge en dynamisk tittel.",
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "Når du bruker Stack med Expo Router, er det alltid nødvendig å ha eksplisitte «Tilbake til forsiden»-knapper på alle undersider for at brukeren skal kunne gå tilbake.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Stack gir back-navigasjon via systemets tilbakeknapp (Android) eller automatisk back-pil i header, så du trenger ofte ikke egne «Tilbake»-knapper i innholdet.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Du bruker `useRouter()` i en komponent. Hvilken beskrivelse matcher best hva `router.dismissAll()` konseptuelt gjør i en Stack-basert app?",
        options: [
            "Den pusher en ny side på toppen av stacken",
            "Den fjerner alle skjermer fra stacken og lukker appen helt",
            "Den rydder stacken slik at du ender opp på den første skjermen i stacken",
            "Den bytter mellom lys og mørk modus på headeren",
        ],
        correct: 2,
        explanation:
            "`dismissAll()` sender deg tilbake til bunnen av stacken (ofte startsiden), og fjerner de andre skjermene fra navigasjonsstabelen.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Du vil lage en knapp som kun viser «Tilbake» hvis det faktisk finnes noe å gå tilbake til i stacken. Hvilken kombinasjon er mest i tråd med det du har lært?",
        options: [
            "Bruke `router.push('/')` for å sjekke om du er på root",
            "Bruke `router.canDismiss()` for å sjekke og kun vise en knapp som kaller `router.dismiss()` hvis det er mulig",
            'Bruke `Link href=".."` uansett, siden den skjuler seg selv når du er på root',
            "Bruke `router.dismissAll()` direkte, siden den alltid fungerer",
        ],
        correct: 1,
        explanation:
            "`router.canDismiss()` kan gi deg informasjon om det finnes noe å gå tilbake til, og du kan da vise en knapp som kaller `router.dismiss()`.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            'Hvorfor kan det være en fordel å la Stack håndtere tilbake-navigasjon i stedet for å beholde manuelle `<Link href="/students">Tilbake</Link>` på hver side?',
        options: [
            "Fordi Link-komponenten ikke fungerer med dynamiske ruter",
            "Fordi Stack sikrer en mer native opplevelse med OS-back og header-back, og du unngår dupliserte navigasjons-knapper overalt",
            "Fordi Stack automatisk lagrer alle skjermene til disk",
            "Fordi manuelle Link-komponenter ikke kan brukes sammen med TypeScript",
        ],
        correct: 1,
        explanation:
            "Stack gir naturlig tilbake-navigasjon og renere UI uten ekstra «Tilbake»-knapper på hver side.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Du legger til denne konfigurasjonen på en Stack-skjerm:\n`headerRight: () => (<Pressable onPress={...}><Text>Handling</Text></Pressable>)`\nHva er hovedhensikten med å bruke `headerRight` her?",
        options: [
            "Å definere hvilken skjerm som skal vises først i stacken",
            "Å legge inn en interaktiv action-knapp i headeren for akkurat denne skjermen",
            "Å deaktivere tilbake-knappen for brukeren",
            "Å sette global bakgrunnsfarge på hele appen",
        ],
        correct: 1,
        explanation:
            "`headerRight` lar deg plassere en egendefinert knapp/komponent i headerens høyre side på den skjermen.",
    },
    {
        id: "q13",
        type: "true-false",
        question:
            "Hvis du har en Stack med både `students/index` og `students/[id]`, kan begge disse rutene vises innenfor samme Stack så lenge navnene i `<Stack.Screen>` matcher filstrukturen.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Stack kan ha flere skjermer som peker til ulike ruter. Så lenge `name` stemmer med filstruktur, kan både liste- og detaljside være med i samme Stack.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er en praktisk grunn til å kombinere Expo Router sin filbaserte routing med Stack-nav i `_layout.tsx`, i stedet for å kun bruke én av delene alene?",
        options: [
            "Fordi Expo Router uten Stack ikke fungerer på iOS",
            "Fordi filbasert routing definerer hvilke sider som finnes, mens Stack styrer hvordan de sidene presenteres med navigasjonslogikk, back-stack og header",
            "Fordi Stack krever at alle filer ligger i `constants/`-mappen",
            "Fordi filbasert routing kun fungerer for webprosjekter",
        ],
        correct: 1,
        explanation:
            "Filstrukturen bestemmer rutene, Stack bestemmer navigasjonsopplevelsen (stabel, back-knapper, header). De utfyller hverandre.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Du vil endre header-stilen kun for detaljsiden `students/[id]`, for eksempel en litt mørkere blåfarge. Hvordan kan dette gjøres uten å endre globale `screenOptions`?",
        options: [
            "Sette en ny `Stack` inne i komponenten `students/[id].tsx`",
            "I `_layout.tsx`, gi `<Stack.Screen name=\"students/[id]\" options={{ headerStyle: { backgroundColor: '#004499' } }} />`",
            "Endre filnavnet til `students/[id].header.tsx`",
            "Det er kun mulig via CSS-filer",
        ],
        correct: 1,
        explanation:
            "Du kan overstyre globale valg ved å spesifisere `options` direkte på en bestemt `Stack.Screen`.",
    },
    {
        id: "q16",
        type: "true-false",
        question:
            "I en Stack-basert navigasjon vil `router.dismiss(2)` fjerne de to øverste skjermene i stacken og vise skjermen som lå under disse.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Konseptuelt fungerer `dismiss(n)` som å poppe `n` skjermer av stabelen, slik at du hopper flere steg tilbake i navigasjonen.",
    },
];

export const quiz_stack_navigasjon_bzj = {
    id: "stack-navigasjon-bzj",
    title: "L12 - Stack-navigasjon med Expo Router - BZJ",
    description:
        "Quiz om Stack-navigasjon i React Native med Expo Router: `_layout.tsx`, Stack.Screen, globale og lokale screenOptions, dynamiske ruter, back-navigasjon og router-metoder som dismiss, dismissAll og dismissTo.",
    theme: [
        "react-native",
        "expo-router",
        "navigasjon",
        "stack",
        "mobilprogrammering",
    ],
    questions: [...questions],
};
