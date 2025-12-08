const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Case: Du skal lage en typisk app-struktur med en Stack på toppnivå og Tabs inne på hovedskjermen. Hva er mest idiomatisk?",
        options: [
            "Legge Tabs i root, og legge Stack inni en Tab",
            "Ha én global Stack som root, og inne i én av skjermene bruke en Tabs-layout for hovednavigasjonen",
            "Ha både Stack og Tabs i samme _layout uten nesting",
            "Bare bruke Tabs – Stack er unødvendig"
        ],
        code: `// Hva er mest vanlig?
// A, B, C eller D`,
        correct: 1,
        explanation:
            "Et vanlig mønster er: Root Stack (login, onboarding, main) → inne i main bruker du Tabs for hovednavigasjonen."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Case: Du vil organisere 'authed' delen av appen uten at mappenavnet blir en del av URL-en / ruten. Hva velger du?",
        options: [
            "En vanlig mappe 'app/authed'",
            "En route group: app/(authed)/",
            "En dynamisk mappe: app/[authed]/",
            "En mappe med underscore: app/_authed/"
        ],
        correct: 1,
        explanation:
            "Route groups med parenteser lar deg gruppere ruter uten å endre URL-struktur."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Case: Du har en route group med egen Stack-layout. Nested filer under denne gruppen rendres ikke, du ser bare layout-komponenten. Hva er mest sannsynlig problemet?",
        options: [
            "Du har glemt å bruke <Slot /> inne i layouten",
            "Du har for mange Stack.Screen-komponenter",
            "Du må wrappe layouten i Tabs",
            "Layout-filen må hete layout.ts, ikke _layout.tsx"
        ],
        code: `// app/(authed)/_layout.tsx
export default function AuthedLayout() {
  return (
    <View><Text>Authed</Text></View>
  );
}`,
        correct: 0,
        explanation:
            "Uten <Slot /> vet ikke routeren hvor den skal rendere nested ruter – du ser bare layout-komponenten."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Case: Du skal lage en dynamisk detaljskjerm for en ressurs (f.eks. 'post'). Hvilken filstruktur er mest passende?",
        options: [
            "app/post-id.tsx",
            "app/posts/details.tsx",
            "app/posts/[id].tsx",
            "app/[posts]/id.tsx"
        ],
        correct: 2,
        explanation:
            "Dynamiske segmenter skrives som [id].tsx, og legges typisk i en mappe som representerer ressursen, f.eks. /posts."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Case: Du navigerer til en detaljskjerm med router.push når en bruker trykker på en liste. Hvilken implementasjon er mest korrekt og robust?",
        options: [
            "router.push('posts/' + post.id)",
            "router.push('/posts/' + post.id)",
            "router.push('/posts/[id]')",
            "router.push({ pathname: '/posts', params: { id: post.id } }) uten å ha en dynamisk rute"
        ],
        code: `const router = useRouter();
// Hvilken push er mest korrekt fra en hvilken som helst skjerm?`,
        correct: 1,
        explanation:
            "Absolutt path med leading slash og konkret id er mest eksplisitt: '/posts/123'."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: Du vil at hoveddelen av appen skal ha Tabs (Home, Search, Profile), men login-flowet skal ikke ha tabs. Hvilken struktur gir deg mest kontroll?",
        options: [
            "Legge Tabs i root-layout og skjule dem på login-skjermen",
            "Bruke én root Stack med en LoginScreen og en (tabs)-route group der du har en Tabs-layout for innlogget del",
            "Kun bruke Tabs og ha Login som en Tab",
            "Kun bruke Stack og simulere tabs med Buttons"
        ],
        correct: 1,
        explanation:
            "En root Stack for overordnet flyt + egen Tabs-layout inne i en gruppe for innlogget del er et vanlig og ryddig mønster."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Case: Du får dobbelt header (to toolbars) på en skjerm som ligger inni en Tab og også inni en Stack. Hva er den typiske fixen?",
        options: [
            "Fjerne Tabs",
            "Fjerne Stack",
            "Skru av header på én av nivåene, f.eks. options={{ headerShown: false }} der det er mest naturlig",
            "Gi Tabs og Stack ulike navn"
        ],
        correct: 2,
        explanation:
            "Når Stack og Tabs begge tegner header, får du to. Løsningen er å disable header på ett av nivåene."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Case: Du vil ha en egen stack for en seksjon (f.eks. Settings) inne i en Tab. Hvilken tilnærming er mest riktig?",
        options: [
            "Legge alle settings-skjermene i samme fil",
            "Bruke en egen _layout.tsx under settings/ med en Stack inni, og bruke den som en Tab-screen",
            "Bare bruke push('/settings/whatever') uten stack",
            "Nestede stacks er ikke støttet"
        ],
        correct: 1,
        explanation:
            "Nested stack-layout under en mappe gir deg en separat stack-kontekst for den seksjonen, selv om den ligger under en Tab."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Case: Du har en Tab-skjerm som ikke skal være synlig som knapp i tab-baren, men fortsatt skal kunne navigeres til programmatisk. Hva gjør du?",
        options: [
            "Sletter skjermen",
            "Bruker href: null på Tabs.Screen",
            "Skjuler den med CSS",
            "Tabs støtter ikke dette, du må bruke Stack"
        ],
        correct: 1,
        explanation:
            "Med href: null kan skjermen eksistere i navigasjonen uten å ha en synlig tab-knapp."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Case: Du vil at alle skjermer i en route group skal ha en felles bakgrunnsfarge og padding, men ellers sin egen headerlogikk. Hvordan organiserer du dette?",
        options: [
            "Style hver skjerm separat",
            "Legge styling i en global StyleSheet og bruke det overalt",
            "Bruke en layout i route-gruppen som wrapper <Slot /> med View med disse stilene, og la nested stacks håndtere header",
            "Det er ikke mulig å kombinere styling og nested navigasjon"
        ],
        correct: 2,
        explanation:
            "En layout-komponent som wrapper Slot med felles styling gir deg felles UI-ramme + individuell navigasjon inni."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Case: Du vil navigere tilbake til roten av en stack (f.eks. fra en dyp nested skjerm til Home i samme stack). Hva er mest passende API?",
        options: [
            "router.back() flere ganger",
            "router.push('/') hver gang",
            "router.replace('/') eller eget API som går til root",
            "Du kan ikke gjøre dette; brukeren må trykke back selv"
        ],
        correct: 2,
        explanation:
            "replace eller tilsvarende API for 'go to root' gir en klarere historikk enn å spamme back."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Case: Du har en dynamisk rute for en ressurs, og inne i den vil du ha Tabs for ulike “undersider” til den samme ressursen (Info, Comments, Settings). Hvordan får du id-en tilgjengelig i alle tabs?",
        options: [
            "Lagre id i en global variabel",
            "Bare lese id via useLocalSearchParams i én av tabs-komponentene",
            "Sørge for at tabs-layouten ligger inne i den dynamiske ruten (for eksempel [id]/_layout.tsx), og så hente id via param hooks i hver Tab-skjerm",
            "Det er ikke mulig å kombinere dynamiske ruter og tabs"
        ],
        correct: 2,
        explanation:
            "Hvis tabs-layouten lever “under” den dynamiske ruten, arver alle tabs samme param-kontekst og kan hente id via params."
    }
];

export const ulearn_12_13_14_navigation_case_rn_kml = {
    id: "ulearn_12_13_14_navigation_case_rn_kml",
    title: "Navigasjon i React Native – Case bruk av Stack, Tabs, Route Groups & Dynamiske ruter - KML",
    description:
        "En case-basert quiz hvor du må velge den mest robuste og idiomatiske implementasjonen for navigasjon med Stack, Tabs, route groups og dynamiske ruter.",
    theme: [
        "navigation",
        "router",
        "expo"
    ],
    questions: [...questions]
};
