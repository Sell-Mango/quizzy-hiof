const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedhensikten med en route group i Expo Router?",
        options: [
            "Å gjøre URL-er lengre og mer detaljerte",
            "Å gruppere skjermer i mapper uten at mappenavn påvirker URL-strukturen",
            "Å aktivere automatisk autentisering",
            "Å lage dynamiske ruter"
        ],
        correct: 1,
        explanation:
            "Route groups gjør det mulig å organisere appen uten at strukturen reflekteres i URL-en."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva kjennetegner <Slot /> i et layout?",
        options: [
            "Den lager en egen navigasjonsstack",
            "Den rendrer nested skjermer inni layout-komponenten",
            "Den fungerer bare i kombinasjon med Tabs",
            "Den brukes kun i dynamiske ruter"
        ],
        correct: 1,
        explanation:
            "Slot er et 'placeholder' som viser innholdet til barnruter."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Når bør du bruke en Stack i en route groups _layout.tsx?",
        options: [
            "Når gruppen trenger egen header og navigasjonslogikk",
            "Når du vil skjule alle ruter",
            "Når du ikke har planer om å vise nested ruter",
            "Når du kun skal rendrer UI uten navigasjon"
        ],
        correct: 0,
        explanation:
            "En Stack gir kontroll over header, gestures, back behavior og skjermflyt."
    },

    {
        id: "q4",
        type: "true-false",
        question:
            "Påstand: Tabs kan fungere alene uten en layout-fil rundt.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Tabs må være definert i en _layout.tsx for å strukturere de underliggende filene som egne faner."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er en vanlig grunn til å splitte navigasjon i flere nivåer (f.eks. nested stacks eller nested tabs)?",
        options: [
            "Å redusere antall filer",
            "Å gi ulike deler av appen forskjellig navigasjonsopplevelse",
            "Å unngå bruk av dynamiske ruter",
            "Å forhindre global state"
        ],
        correct: 1,
        explanation:
            "Nested navigasjon lar deg ha en opplevelse i én seksjon (f.eks. tab-basert) og en annen i en annen del av appen."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor kan det være en fallgruve å legge Tabs i den øverste rotlayouten?",
        options: [
            "Tabs støtter kun én skjerm",
            "Tabs vil da vises over hele appen, også skjermbilder der du ikke ønsker dem",
            "Det gjør navigasjonen tregere",
            "Det fjerner muligheten for dynamiske ruter"
        ],
        correct: 1,
        explanation:
            "Tabs i root betyr at alle skjermer får tab-navigasjon — sjelden ønskelig."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er korrekt bruk av en route group når du vil lage en seksjon i appen som har eget navigasjonsoppsett?",
        options: [
            "Opprette en mappe uten navn",
            "Opprette en mappe med parenteser, f.eks. (dashboard)",
            "Opprette en mappe med underscore, f.eks. _dashboard",
            "Opprette en mappe som heter routes"
        ],
        correct: 1,
        explanation:
            "Parenteser forteller Expo Router at mappen er en gruppe, ikke et URL-segment."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva skjer hvis en route group mangler en _layout.tsx fil?",
        options: [
            "Nested skjermer rendres helt fint uten layout",
            "Bare første skjerm i gruppen rendres, resten ignoreres",
            "Nested ruter rendres ikke fordi det ikke finnes et punkt å plassere dem",
            "Expo Router lager en default layout automatisk"
        ],
        correct: 2,
        explanation:
            "Uten layout finnes ingen 'plass' å rendrer de underliggende skjermene."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å bruke Tabs i en egen route group (f.eks. (mainTabs))?",
        options: [
            "Tabs får sin egen navigasjonskontekst og påvirker ikke resten av appen",
            "Tabs kan ikke fungere i root uansett",
            "Det gir bedre ytelse",
            "Det gjør det mulig å bruke Tabs uten ikoner"
        ],
        correct: 0,
        explanation:
            "Tabs som egen gruppe hindrer dem i å blande seg med stack-level navigasjon andre steder i appen."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hvorfor bør 'name' i <Tabs.Screen> stemme nøyaktig med filnavnet?",
        options: [
            "Expo Router krever dette for å koble fanen til riktig fil",
            "Det påvirker ytelsen",
            "Det bestemmer header-stilen",
            "Det er kun en konvensjon og spiller ingen rolle"
        ],
        correct: 0,
        explanation:
            "Tabs bruker filnavnet for routing — mismatch betyr at fanen ikke fungerer."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er et vanlig navigasjonsproblem når man kombinerer Tabs og Stack nesting?",
        options: [
            "Stack overskriver all state i Tabs",
            "Man får dobbelt header hvis man ikke setter headerShown korrekt",
            "Tabs krasjer automatisk når man åpner flere stacks",
            "Stack fungerer ikke med dynamiske ruter"
        ],
        correct: 1,
        explanation:
            "Manglende header-config kan gi overlappende eller doble headere."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva brukes dynamiske ruter som [id].tsx til?",
        options: [
            "Å generere tilfeldige skjermnavn",
            "Å vise innhold basert på URL-parametere",
            "Å lage globale variabler",
            "Å generere listekomponenter automatisk"
        ],
        correct: 1,
        explanation:
            "Dynamiske ruter gjør det mulig å vise innhold basert på identifikatorer i pathen."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er en god grunn til å bruke nested stacks inni route groups?",
        options: [
            "Å lage flere globale headere",
            "Å gi kontroll over navigasjonsrekkefølgen i et avgrenset område av appen",
            "Å tvinge brukeren tilbake til root hver gang",
            "Å deaktivere back-knappen"
        ],
        correct: 1,
        explanation:
            "Nested stack gir separat navigasjonslogikk for en avgrenset seksjon."
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva skjer dersom en Tab-skjerm får `href: null`?",
        options: [
            "Fanen vises som disabled",
            "Fanen fjernes helt fra tab-baren",
            "Filen slettes automatisk",
            "Fanen blir kun tilgjengelig via programmatisk navigasjon"
        ],
        correct: 1,
        explanation:
            "href: null betyr at skjermen eksisterer, men ikke har en tab-knapp."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er den største fallgruven når man blander relative paths (f.eks. 'details') og absolutte paths ('/details') i navigasjon?",
        options: [
            "Relative paths er raskere",
            "Absolutte paths fungerer kun i Tabs",
            "Relative paths navigerer basert på nåværende rute og kan føre til feil eller uventede mål",
            "Absolutte paths støttes ikke i Expo Router"
        ],
        correct: 2,
        explanation:
            "Relativ navigasjon er kraftig, men kan gå til feil skjerm dersom man ikke kjenner rutehierarkiet godt."
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
