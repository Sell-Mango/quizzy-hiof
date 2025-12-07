const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med route groups i Expo Router?",
        options: [
            "De endrer URL-strukturen",
            "De grupperer filer uten at mappenavnet blir del av URL-en",
            "De fungerer kun for autentiseringsmoduler",
            "De gjør navigasjonen tregere"
        ],
        correct: 1,
        explanation:
            "Route groups (f.eks. (admin)) organiserer filer uten å påvirke URL-strukturen. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva skjer om man lager en route group (admin)/ uten en egen _layout.tsx?",
        options: [
            "Gruppen fungerer helt fint",
            "Appen krasjer",
            "Skjermene rendres uten Stack eller Slot og overskriver innholdet, ofte fører det til 'blanke' sider",
            "URL-er blir ugyldige"
        ],
        correct: 2,
        explanation:
            "Uten en layout vet ikke Expo Router hvordan gruppens skjermhierarki skal rendres, ofte vises kun første komponent. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva gjør <Slot /> når den brukes i et layout?",
        options: [
            "Rendrer all navigasjon på nytt",
            "Bestemmer at innholdet ikke skal vises før man manuelt laster det",
            "Sender nestede ruter videre og rendrer dem inne i layouten",
            "Fjerner headeren automatisk"
        ],
        correct: 2,
        explanation:
            "Slot fungerer som et 'placeholder' for nested routes, og rendrer underliggende sider. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er forskjellen mellom en Stack-layout og en Slot-layout i en route group?",
        options: [
            "Slot gir ingen header og ingen stack-logikk, mens Stack gir navigasjonsbar og back-støtte",
            "Slot støtter kun iOS",
            "Stack må plasseres i rotmappen",
            "Slot fungerer kun for dynamiske ruter"
        ],
        correct: 0,
        explanation:
            "Slot rendrer kun innhold — ingen navigasjonsbar. Stack gir full stack-navigasjon. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvorfor vil dette føre til merkelig oppførsel?",
        options: [
            "Tabs må ligge under en Stack",
            "Tabs kan ikke kombineres med Slot",
            "Layouten mangler Slot, så nested filer i gruppen rendres ikke",
            "Tabs krever egne _layout.tsx-filer i rotmappen"
        ],
        code: `// app/(admin)/_layout.tsx
export default function AdminLayout() {
  return (
    <View>
      <Text>Admin Layout</Text>
    </View>
  );
}`,
        correct: 2,
        explanation:
            "Uten <Slot /> vil demo.tsx, students.tsx osv. aldri rendres. Bare layout vises. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva skjer om du legger Tabs direkte i app/_layout.tsx?",
        options: [
            "Faner vises kun på students-sider",
            "Hele appen får tabs i stedet for stack navigasjon",
            "Det blir en feil fordi Tabs kun kan brukes inni grupper",
            "Tabs fungerer kun sammen med Slot"
        ],
        correct: 1,
        explanation:
            "Tabs i rotlayout gjør dem globale → alle skjermer får tabs, noe som som regel ikke er ønskelig. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor brukes `(students)` og `(student)` som to separate route groups i pensum?",
        options: [
            "For å gjøre URL-en lengre",
            "For å forhindre at tabs på studentlisten også vises på detaljsiden",
            "For å redusere antall filer",
            "For å slå sammen stack og tabs logikk"
        ],
        correct: 1,
        explanation:
            "Ulike navigasjonsoppsett krever separate grupper: studentliste har Tabs, studentdetaljer har egne Tabs + Stack nesting. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er feil i denne Tabs-oppsettingen?",
        options: [
            "Tabs.Screen må ligge inni Stack",
            "`name` må matche filnavn",
            "initialParams kan ikke brukes i Tabs",
            "tabBarIcon krever en tekststreng"
        ],
        code: `<Tabs>
  <Tabs.Screen name="profilePage" />
</Tabs>`,
        correct: 1,
        explanation:
            "profilePage må matche filnavn nøyaktig (f.eks. profilePage.tsx). :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er initialParams brukt til i Tabs i studentdetalj-layouten?",
        options: [
            "Å gi default styling",
            "Å laste lokale data",
            "Å sikre at id sendes til alle faner i studentdetalj-visningen",
            "Å forhindre navigasjon"
        ],
        correct: 2,
        explanation:
            "Faner som 'index', 'edit', 'delete' mister id uten initialParams fordi Tabs ikke automatisk videresender parametere. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva skjer når en Tab-skjerm gis `href: null`?",
        options: [
            "Tabben blir skjult og kan ikke trykkes",
            "Skjermen slettes",
            "Href må være en string",
            "Tabs slutter å fungere"
        ],
        correct: 0,
        explanation:
            "`href: null` skjuler fanen helt, nyttig når en fane ikke skal være tilgjengelig direkte. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er feil i denne strukturen?",
        options: [
            "`students`-mappen må ligge i rotmappen",
            "_layout.tsx mangler Slot eller Stack",
            "Filen [id].tsx må ligge i en egen route group",
            "Nested group-navn må ikke inneholde parenteser"
        ],
        code: `
app/
├── (admin)/
│   ├── (student)/
│   │   └── students/
│   │       ├── _layout.tsx
│   │       └── [id].tsx
`,
        correct: 1,
        explanation:
            "Uten Slot/Stack i nested layout rendres ikke underliggende filer. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hvorfor oppstår 'missing nested route context' feil i Expo Router?",
        options: [
            "Man bruker Link feil",
            "En nested folder har ikke sin egen _layout.tsx",
            "Man har for mange Tabs",
            "Routeren krever absolutte paths"
        ],
        correct: 1,
        explanation:
            "Hver mappenivå med ruter må ha en layout for å gi riktig kontekst. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å bruke Slot i route groups som kun skal bytte innhold uten å endre stack-headeren?",
        options: [
            "Slot gir automatisk tabs",
            "Slot skjuler navigasjon uten ekstra konfigurasjon",
            "Slot lar oss bytte skjermer uten å trigge ny stack-context",
            "Slot overskriver global layout"
        ],
        correct: 2,
        explanation:
            "Slot bytter kun innhold; stack-nivået over forblir det samme. Perfekt når header ikke skal endres. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er konsekvensen av å legge en Stack inni en Tabs-layout?",
        options: [
            "Det er ikke mulig",
            "Stack vil bruke sin egen header og kan kollidere med Tabs hvis headerShown ikke settes riktig",
            "Tabs vil alltid overstyre Stack",
            "Dynamiske ruter slutter å fungere"
        ],
        correct: 1,
        explanation:
            "Stack + Tabs er vanlig, men manglende konfig av headerShown fører ofte til doble headere. :contentReference[oaicite:15]{index=15}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hvorfor navigeres det riktig fra studentlisten til `/students/[id]` i pensumets struktur?",
        options: [
            "Fordi [id] ligger i samme mappe som tabs-layouten",
            "Fordi (student)-gruppen og students-mappen skaper en nested path som matcher URL-strukturen",
            "Fordi Expo Router alltid finner dynamiske ruter automatisk",
            "Fordi Link alltid bruker absolutte paths"
        ],
        correct: 1,
        explanation:
            "Grunnlaget for korrekt navigasjon er at (student) inneholder en nested students-mappe med egen layout. Dette gir riktig path-oppløsning. :contentReference[oaicite:16]{index=16}"
    }
];

export const ulearn_13_14_adv_navigation_routes_kml = {
    id: "ulearn_13_14_adv_navigation_routes_kml",
    title: "Routing med Groups, Nested Stacks, Slot & Tabs - KML",
    description:
        "En quiz som tester avansert navigasjon i Expo Router: route groups, Slot, nested stacks, tabs, initialParams og typiske fallgruver.",
    theme: [
        "expo",
        "navigation",
    ],
    questions: [...questions]
};
