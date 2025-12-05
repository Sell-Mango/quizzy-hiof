const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du har laget mappen `app/` og filen `app/index.tsx`. Uten ekstra konfigurasjon i Expo Router, hva representerer denne filen i navigasjonen?",
        options: [
            "En skjerm som kun kan nås via `useRouter.push('/index')`",
            "En global layout-fil som alltid må hete `_layout.tsx`",
            "Rot-/hjemskjermen som rendres på `/`",
            "En skjult systemfil som ikke gir noen rute",
        ],
        correct: 2,
        explanation:
            "I Expo Router er `app/index.(tsx|jsx)` standard for rot-/hjemsiden og blir tilgjengelig på `/`.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            'Hvorfor må `main`-feltet i `package.json` settes til `"expo-router/entry"` når du bruker Expo Router?',
        options: [
            "For at TypeScript skal kompilere til riktig mappe",
            "For at Expo skal vite at navigasjonen styres av Expo Router sin entry-fil",
            "For å aktivere React Native Debugger",
            "For å kunne bruke FlatList i flere skjermer",
        ],
        correct: 1,
        explanation:
            "Ved å peke `main` til `expo-router/entry` forteller du Expo at den skal bruke Expo Router sitt innstegspunkt for å konfigurere navigasjon automatisk.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Du lager filen `app/about.tsx` etter å ha satt opp Expo Router. Hva blir den naturlige URL-/rute-stien til denne siden i appen?",
        options: ["/", "/about", "/app/about", "/about/index"],
        correct: 1,
        explanation:
            "I filbasert routing i Expo Router blir `app/about.tsx` tilgjengelig på `/about`.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er hovedforskjellen på å bruke `<Link href=\"/students\" />` og `router.push('/students')` fra `useRouter()` i Expo Router?",
        options: [
            "Link kan kun brukes på web, useRouter er kun for mobil",
            "Link brukes for deklarativ navigasjon i JSX, mens useRouter gir deg programmatisk navigasjon fra funksjoner/logikk",
            "useRouter oppretter en ny skjerm, Link kan bare lukke skjermer",
            "Link krever at man ikke har en app-mappe, useRouter krever app-mappe",
        ],
        correct: 1,
        explanation:
            "Link brukes direkte i JSX som en lenke, mens `useRouter().push()` brukes når du vil navigere basert på hendelser eller betingelser i logikk.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Du ønsker å vise en detaljvisning for en student basert på student-ID i URL-en. Hvilken filstruktur utnytter dynamiske ruter i Expo Router korrekt?",
        options: [
            "app/students/id.tsx",
            "app/[id].tsx",
            "app/students/[id].tsx",
            "app/students/details.tsx",
        ],
        correct: 2,
        explanation:
            "En mappe `students` med filen `app/students/[id].tsx` gir en dynamisk rute som matcher `/students/123456`, `/students/789012` osv.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "I `app/students/[id].tsx` bruker du `const { id } = useLocalSearchParams();`. Konseptuelt, hva representerer `id` her?",
        options: [
            "En tilfeldig generert nøkkel fra React",
            "En query-parameter som alltid kommer fra en backend",
            "Den dynamiske delen av rute-stien (f.eks. 123456 i `/students/123456`)",
            "En lokal variabel fra komponentens state",
        ],
        correct: 2,
        explanation:
            "`useLocalSearchParams` leser ut ruteparametere. For `[id].tsx` vil `id` typisk være verdien fra segmentet etter `/students/`.",
    },
    {
        id: "q7",
        type: "true-false",
        question:
            "I Expo Router kan både `Link`-komponenten og `useRouter().push()` brukes til å navigere til den samme dynamiske ruten, for eksempel `/students/123456`.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "De er to forskjellige måter å trigge samme navigasjon på: én deklarativ (Link), én programmatisk (useRouter).",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hvorfor kan det være en fordel å flytte `Theme`-objektet og listen over `Students` til en egen `constants/`-mappe i en navigasjonsbasert app?",
        options: [
            "For at Expo Router skal gjenkjenne dynamiske ruter",
            "For å redusere antall imports i `index.tsx`",
            "For å kunne gjenbruke de samme dataene/stilene på flere skjermer uten å sende alt som props gjennom hele navigasjons-treet",
            "For at TypeScript ikke skal sjekke typene",
        ],
        correct: 2,
        explanation:
            "Ved å flytte delte konstante data og tema til `constants/` kan flere skjermer importere dem direkte i stedet for å prop-drille alt gjennom navigasjonen.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Du har en `Students`-side som viser en liste, og en dynamisk `[id]`-side for detaljer. Hvorfor er det fortsatt fornuftig at `[id]`-siden selv slår opp studenten fra en felles `Students`-liste (eller API), i stedet for å stole på at hele student-objektet sendes via navigasjon?",
        options: [
            "Fordi Expo Router ikke kan sende data mellom skjermer",
            "For å gjøre ruten mer robust: den kan fungere selv om appen lastes direkte inn på en detalj-URL",
            "For at TypeScript skal kunne kompilere",
            "Fordi React-komponenter ikke kan motta props i navigasjonskontekst",
        ],
        correct: 1,
        explanation:
            "Hvis detaljsiden finner data selv basert på id, fungerer den også ved direkte deep link, reload eller deling av URL.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "En utvikler vil gjøre hvert element i studentlisten klikkbart slik at man kommer til detaljvisningen. Hvilket mønster er mest i tråd med det du har lært?",
        options: [
            "Wrappe StudentListItem i `<Link href={`/students/${student.id}`}>...</Link>`",
            "Bruke `onClick` direkte på `<StudentListItem />`",
            "Endre `StudentListItem` til å importere `useRouter` og hardkode `router.push('/students/123456')`",
            "Kun logge ID i konsollen uten å navigere",
        ],
        correct: 0,
        explanation:
            "Ved å wrappe listeelementet i en `Link` får du deklarativ navigasjon og kan gjenbruke StudentListItem som en ren visningskomponent.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Når vil det være mest naturlig å bruke `useRouter().push()` i stedet for bare å bruke `Link`?",
        options: [
            "Når du navigerer basert på en hendelse eller logikk som ikke bare er et enkelt trykk på en lenke, f.eks. etter validering eller API-kall",
            "Når du ønsker at navigasjonen bare skal fungere på Android",
            "Når du vil at en side aldri skal kunne gå tilbake",
            "Når du ikke ønsker å vise noen knapp eller interaksjon",
        ],
        correct: 0,
        explanation:
            "`useRouter().push()` er praktisk når navigasjon skjer som resultat av logikk (f.eks. vellykket lagring, valg av element inne i en handler osv.).",
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "I Expo Router er det filstrukturen under `app/` som definerer hvilke skjermer som eksisterer og hvilke ruter brukeren kan navigere til.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Det er selve poenget med filbasert routing: struktur og filnavn i `app/` mappes til ruter.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er en typisk grunn til å ha både en `StudentListItem` (forenklet kort) og en mer detaljert `StudentID`-komponent i en navigasjonsapp?",
        options: [
            "For å unngå å bruke FlatList",
            "For å kunne ha en lettvekts, oversiktlig visning i lister og en mer detaljert visning på egen skjerm",
            "Fordi Expo Router krever to komponenter per rute",
            "For at useLocalSearchParams skal fungere",
        ],
        correct: 1,
        explanation:
            "Lister har ofte enklere layout for oversikt, mens detaljsider viser mer informasjon. Å skille dem gir bedre struktur og fleksibilitet.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Du endrer filen `app/students.tsx` til mappen `app/students/index.tsx`. Hva er den praktiske effekten på rute-stien?",
        options: [
            "Ruten endres fra `/students` til `/students/index`",
            "Ruten blir utilgjengelig før du oppdaterer `main` i package.json",
            "Ruten fortsetter å være `/students`, men du får mulighet til å legge flere filer (som `[id].tsx`) under samme mappe",
            "Ruten blir omdirigert til `/`",
        ],
        correct: 2,
        explanation:
            "`index` i en mappe representerer fortsatt mappe-ruten (`/students`), men strukturen er nå fleksibel for flere under-sider som `[id].tsx`.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Du har satt opp en dynamisk detaljside for studenter. Hva er et godt mønster for å håndtere tilfeller der `useLocalSearchParams().id` ikke matcher noen student i den delte `Students`-listen?",
        options: [
            "La komponenten krasje slik at du oppdager feilen tidlig",
            "Navigere automatisk til `/` uten beskjed",
            "Vise en egen tom-/feilkomponent (for eksempel en `EmptyStudent`-komponent) med lenke tilbake til listen",
            "Returnere `null` uten noe mer",
        ],
        correct: 2,
        explanation:
            "En dedikert tom-/feilvisning gir bedre brukeropplevelse og gjør det tydelig at ID-en ikke finnes, samtidig som du tilbyr en vei tilbake.",
    },
    {
        id: "q16",
        type: "true-false",
        question:
            "Når du bruker Expo Router, må alle navigasjonslenker være `Link`-komponenter. Det er ikke mulig å navigere via trykkbare listeelementer eller knapper som bruker `useRouter().push()`.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Begge mønstrene er støttet: `Link` for deklarative lenker, og `useRouter().push()` for programmatisk navigasjon fra interaksjoner eller logikk.",
    },
];

export const quiz_navigasjon_bzj = {
    id: "navigasjon-bzj",
    title: "L11 - Navigasjon og Expo Router i React Native - BZJ",
    description:
        "Quiz om navigasjon i React Native med Expo Router: filbasert routing, app-mappe, index-filer, dynamiske ruter som [id].tsx, Link vs useRouter, useLocalSearchParams og bruk av felles constants som Theme og Students.",
    theme: ["react-native", "expo-router", "navigasjon", "mobilprogrammering"],
    questions: [...questions],
};
