const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du oppretter en `(admin)` mappe i `app/`, med en fil `demo.tsx` inni. Når du navigerer i appen ser du at demo-siden åpnes via `/demo`. Hva sier dette om rollen til `(admin)`-mappen?",
        options: [
            "Mapper i parentes skjules fra URL-en, så innholdet tilgjengeliggjøres uten segmentet",
            "Expo Router har en bug som ignorerer gruppenavn",
            "Alle mapper i app/ blir automatisk fjernet fra URL-er",
            "URL-en burde egentlig vært `/admin/demo`, men Expo viser bare første skjerm",
        ],
        correct: 0,
        explanation:
            "Route groups er strukturer for organisering og layout – de påvirker ikke URL-pathen. Derfor blir demo tilgjengelig via `/demo`.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Du lager en route group `(admin)` med egen `_layout.tsx` som **ikke** bruker `Stack` eller `Slot`, men bare:\n\n```tsx\nexport default function AdminLayout() {\n  return (\n    <View>\n      <Text>Admin Layout</Text>\n    </View>\n  );\n}\n```\n\nHva skjer når du navigerer til `/demo` (som ligger i `(admin)`-gruppen)?",
        options: [
            "Bare teksten fra `demo.tsx` vises, siden `_layout.tsx` ignoreres i grupper",
            "Kun innholdet fra `AdminLayout` vises, og innholdet fra `demo.tsx` vises ikke",
            "Begge komponentene rendres automatisk under hverandre uten ekstra kode",
            "Appen krasjer fordi grupper alltid må bruke `Slot` eller `Stack`",
        ],
        correct: 1,
        explanation:
            "Layout-filen definerer hva som faktisk rendres for ruten. Uten `Slot`/`Stack` rendres aldri child-siden, så du ser kun `Admin Layout`.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            'Hva er hovedgrunnen til at vi legger til `<Stack.Screen name="(admin)" />` i `app/_layout.tsx` når vi har en `(admin)`-gruppe?',
        options: [
            "For at `(admin)`-mappen skal bli synlig i URL-en",
            "For å kunne bruke `useLocalSearchParams` inne i `(admin)`-sider",
            "For at hele gruppen skal behandles som én skjerm i hoved-Stacken, slik at navigasjonen inn i admin-delen får header og back-oppførsel",
            "For å deaktivere navigasjon til alle andre skjermer mens vi er i admin",
        ],
        correct: 2,
        explanation:
            "Ved å registrere `name=\"(admin)\"` i Stack, behandles hele gruppen som en 'screen entry' i hovedstabelen. Interne admin-sider håndteres av gruppens egen layout (f.eks. Slot), men stack-header/back-knapp kommer fra root-Stacken.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "I `(admin)/_layout.tsx` skriver du:\n\n```tsx\nexport default function AdminLayout() {\n  return (\n    <View>\n      <Text>Admin Layout</Text>\n      <Slot />\n    </View>\n  );\n}\n```\n\nHva er den beste beskrivelsen av hva `Slot` gjør her?",
        options: [
            "Den registrerer nye ruter dynamisk basert på children-props",
            "Den rendrer innholdet til den aktive child-ruten (for eksempel `demo.tsx` eller `demotwo.tsx`) inne i layouten",
            "Den skaper en egen Stack automatisk for alle admin-sider",
            "Den hindrer at admin-sidene påvirker root-Stacken",
        ],
        correct: 1,
        explanation:
            "`Slot` er et 'placeholder' der Expo Router putter den aktuelle child-ruten. I eksempelet vil `demo.tsx` eller `demotwo.tsx` rendres der `Slot` står.",
    },
    {
        id: "q5",
        type: "true-false",
        question:
            "Når du navigerer fra `/demo` til `/demotwo` inne i `(admin)`-gruppen (som bruker `Slot` i sin layout), vil Stack-headeren fra root-`_layout.tsx` typisk være uendret – det er bare innholdet under route-group-layouten som byttes ut.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Root-Stack ser `(admin)` som én 'screen'. Hvilken child-side (demo/demotwo) som rendres via `Slot` skjer inni denne, mens headeren fortsatt styres av root-Stacken.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            'I `(admin)/demo.tsx` har du:\n\n```tsx\n<Link href="/demotwo">Go to Another Demo</Link>\n```\n\nGitt at både `demo.tsx` og `demotwo.tsx` ligger i `(admin)`-gruppen, hva er mest korrekt om denne `href`-verdien?',
        options: [
            "Den er riktig, fordi route groups skjules fra URL-en og du skal navigere til `/demotwo`",
            'Den må være `href="/(admin)/demotwo"` for å fungere',
            'Den må være `href="/admin/demotwo"` fordi mappen heter `(admin)`',
            "Den fungerer bare hvis du samtidig registrerer `demotwo` eksplisitt i root-Stack",
        ],
        correct: 0,
        explanation:
            "Siden `(admin)` ikke er en del av URL-en, er den riktige URL-en `/demotwo`. Expo Router vet at siden ligger i `(admin)` basert på filstrukturen, ikke på URL-strengen.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er en typisk grunn til å bruke en route group som `(auth)` eller `(admin)` i en større app, i stedet for å bare legge alle filer direkte under `app/`?",
        options: [
            "For å tvinge alle disse sidene til å bruke samme TypeScript-konfigurasjon",
            "For å kunne gi hele gruppen en egen layout og/eller spesifikk navigasjonslogikk, uten at gruppen påvirker URL-strukturen",
            "For at sidene i gruppen skal lastes først når appen starter",
            "For å hindre at sidene i gruppen kan bruke hooks som `useRouter`",
        ],
        correct: 1,
        explanation:
            "Route groups gir struktur og gjør det mulig å definere egne `_layout.tsx` per gruppe (f.eks. annen header, annen guard, annen stil) uten å introdusere ekstra segmenter i URL-en.",
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "Hvis du glemmer å plassere `<Slot />` i en group-`_layout.tsx`, vil Expo Router automatisk rendere child-siden under layout-komponenten likevel, slik at ingenting egentlig brytes.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Uten `Slot` (eller tilsvarende mekanisme som `Stack` i layouten) blir ikke child-route-innholdet rendret i det hele tatt. Du ser kun layout-komponenten.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Du bruker både en global `_layout.tsx` og en gruppe-layout i `(admin)/_layout.tsx`. Root-layouten inneholder Stack, mens admin-layouten rendrer `<Slot />`. Hva betyr dette for hvordan admin-sidene håndteres?",
        options: [
            "Root-layouten bestemmer navigasjonen inn og ut av admin, mens admin-layouten kontrollerer hvordan sidene i gruppen vises internt",
            "Admin-layouten overstyrer alltid root-layouten, så Stack konfigurasjonen ignoreres",
            "Bare admin-layouten rendres — root-layouten brukes ikke for grupper",
            "Root-layouten håndterer bare URL-regler, mens admin-layouten rendrer hele UI",
        ],
        correct: 0,
        explanation:
            "Root-layoutens Stack registrerer admin som én skjerm i navigasjonen, mens admin-layouten styrer hvordan sider i gruppen vises via Slot.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            'Du ønsker at alle sider i `(admin)` skal ha et lite banner over innholdet som sier "Admin Layout", men at resten av navigasjonen (Stack, back-knapp, tittel) skal fungere som før. Hvilken løsning er mest i tråd med mønsteret du har lært?',
        options: [
            "Flytte all admin-kode ut av `(admin)`-gruppen og kun bruke root-`_layout.tsx`",
            'I `(admin)/_layout.tsx` rendrer du `<Text>Admin Layout</Text>` og `<Slot />` under, mens root-`_layout.tsx` fortsatt definerer Stack og `<Stack.Screen name="(admin)" />`',
            "Lage en ekstra `_layout.tsx` under hver admin-side (én per fil)",
            "Kun bruke `Link`-komponenten og droppe Stack helt",
        ],
        correct: 1,
        explanation:
            "En group-`_layout.tsx` er perfekt til å legge felles UI (som banner) rundt alle admin-sider, mens root-Stack fortsatt håndterer overordnet navigasjon.",
    },
    {
        id: "q11",
        type: "true-false",
        question:
            "Route groups gjør det mulig å være streng på mappestruktur og organisering, men de er helt usynlige for brukeren i URL-en.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Hele poenget med `(group)`-syntaksen er å strukturere og styre layout/navigasjon uten å påvirke URL-pathen brukeren ser.",
    },
];

export const quiz_route_groups_slot_bzj = {
    id: "route-groups-slot-bzj",
    title: "L13 - Route groups og Slot i Expo Router - BZJ",
    description:
        "Quiz om route groups og Slot i Expo Router: hvordan (admin)-grupper fungerer, hvordan group-layouts påvirker rendring, og hvordan Slot og Stack samarbeider om navigasjon.",
    theme: [
        "react-native",
        "expo-router",
        "route-groups",
        "slot",
        "navigasjon",
    ],
    questions,
};
