const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du har en liste på flere tusen elementer i en React Native-app. Du rendrer dem med ScrollView + map, og brukere melder om hakkete scrolling og høy minnebruk. Hva er det mest målrettede første tiltaket basert på anbefalt praksis?",
        options: [
            "Bytte ScrollView til SafeAreaView",
            "Fjerne key-props fra listeelementene",
            "Øke fontSize på tekstene for bedre lesbarhet",
            "Bytte fra ScrollView + map til FlatList med data/renderItem",
        ],
        correct: 3,
        explanation:
            "FlatList er laget for å håndtere store lister ved å virtualisere og bare rendre synlige elementer. Det er derfor et naturlig førstevalg ved ytelsesproblemer i lange lister.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er hovedrollen til data-propen i en FlatList sammenlignet med å bruke map direkte på et array i JSX?",
        options: [
            "data gir FlatList kontroll over hvilke elementer som er rendret til enhver tid, slik at den kan virtualisere og optimalisere listen",
            "data brukes kun for å telle antall elementer som skal vises i en ScrollView",
            "data gjør at React automatisk genererer unike nøkler",
            "data er kun nødvendig når listen er tom",
        ],
        correct: 0,
        explanation:
            "FlatList trenger data-propen for å kunne styre hvilke elementer som er i viewport, hvilke som skal gjenbrukes, og hvordan listen optimaliseres.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "I en FlatList definerer du `renderItem={({ item, index }) => (...)}`. Konseptuelt, hva tilsvarer denne funksjonen hvis du sammenligner med en ren map-løsning?",
        options: [
            "En custom hook for state-håndtering",
            "En effekt som kjøres hver gang listen oppdateres",
            "Callback-funksjonen du normalt gir til array.map når du rendrer elementer",
            "En event-handler for scroll-posisjon",
        ],
        correct: 2,
        explanation:
            "renderItem spiller samme rolle som callbacken i map: den beskriver hvordan ett element i data skal rendres til JSX.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Du setter `keyExtractor={(item) => item.id}` i en FlatList. Hvorfor er dette viktig når du sammenligner med det å sette `key={student.id}` i en map-loop?",
        options: [
            "keyExtractor er kun dekorasjon, det har ingen praktisk effekt",
            "FlatList bruker keyExtractor til å identifisere, gjenbruke og oppdatere listeceller effektivt når data endres",
            "keyExtractor trengs kun dersom data er sortert",
            "keyExtractor er nødvendig for at scrolling skal fungere i det hele tatt",
        ],
        correct: 1,
        explanation:
            "Akkurat som key i map hjelper React å følge med på elementer, bruker FlatList keyExtractor til å knytte virtuelle celler mot data og gjenbruke dem på en effektiv måte.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            'Du profilerer en FlatList og ser at første visning tar litt lang tid. Du vil redusere hvor mye som rendres i første omgang for raskere "første visning". Hvilken prop er mest relevant å justere først?',
        options: [
            "initialNumToRender",
            "onEndReachedThreshold",
            "removeClippedSubviews",
            "showsVerticalScrollIndicator",
        ],
        correct: 0,
        explanation:
            "initialNumToRender styrer hvor mange elementer som rendres i første batch. En lavere verdi kan gi raskere første visning, spesielt ved store lister.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Du vil at FlatList skal fortsette å scrolle nesten like smidig selv når brukeren scroller raskt gjennom en lang liste. Hvilken kombinasjon av props er mest relevant for finjustering av dette?",
        options: [
            "refreshing og onRefresh",
            "ListHeaderComponent og ListFooterComponent",
            "showsHorizontalScrollIndicator og showsVerticalScrollIndicator",
            "windowSize og maxToRenderPerBatch",
        ],
        correct: 3,
        explanation:
            "windowSize og maxToRenderPerBatch påvirker hvor mange elementer som holdes og rendres rundt viewport. Justering av disse kan gi bedre balanse mellom minnebruk og scroll-opplevelse.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "En FlatList har `removeClippedSubviews={true}`. Hvilken type optimalisering er dette først og fremst relatert til?",
        options: [
            "Bedre håndtering av touch-events",
            "Redusert CPU-bruk ved animasjoner",
            "Automatisk generering av keys for elementer",
            "Fjerning av elementer utenfor synsfeltet fra native view-hierarkiet for å spare ressurser",
        ],
        correct: 3,
        explanation:
            "removeClippedSubviews gjør at elementer som ligger utenfor skjermen faktisk fjernes fra native view-hierarkiet (clippes bort), noe som kan gi bedre ytelse.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            'Du implementerer "trekk ned for å oppdatere" (pull-to-refresh) i en FlatList. Hvilken kombinasjon brukes typisk for å koble UI til logikken for å hente nye data?',
        options: [
            "onEndReached og ListFooterComponent",
            "windowSize og initialNumToRender",
            "refreshing og onRefresh",
            "keyExtractor og ItemSeparatorComponent",
        ],
        correct: 2,
        explanation:
            "refreshing forteller FlatList om en oppdatering pågår (brukes ofte til å vise en spinner), mens onRefresh er callbacken som trigges når brukeren drar ned for å oppdatere.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "En FlatList har `onEndReached={handleLoadMore}` og `onEndReachedThreshold={0.5}`. Hvilket scenario beskriver bruken av disse best?",
        options: [
            "Oppdatering av layout hver gang brukeren stopper å scrolle",
            "Visning av en tom-liste-melding når data er tom",
            "Kall til handleLoadMore når brukeren nærmer seg bunnen, for eksempel når halvparten av listen er scrollet",
            "Kontroll av hvor mange elementer som rendres i første batch",
        ],
        correct: 2,
        explanation:
            'onEndReached fires når listen nærmer seg bunnen, og onEndReachedThreshold styrer hvor tidlig dette skjer (her rundt 50 % fra bunnen). Perfekt for "last inn mer"-funksjonalitet.',
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            'Du vil vise en melding når data-listen til FlatList er tom, for eksempel "Ingen studenter funnet". Hvilken prop er laget for dette formålet?',
        options: [
            "ListFooterComponent",
            "ItemSeparatorComponent",
            "contentContainerStyle",
            "ListEmptyComponent",
        ],
        correct: 3,
        explanation:
            "ListEmptyComponent rendres når data-listen er tom, og er nyttig for å vise tom-tilstand (empty state) i en liste.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Du har en liste med studenter som sjelden overstiger 10–15 elementer. Ingen avanserte scroll-funksjoner trengs. Hvilken tilnærming er mest fornuftig i en slik situasjon?",
        options: [
            "Alltid FlatList, siden FlatList er anbefalt for alle lister",
            "Alltid SectionList, siden den gir best ytelse",
            "ScrollView + map, siden listen er kort og behovet for virtualisering er minimalt",
            "Kun SafeAreaView, uten noen form for listekomponent",
        ],
        correct: 2,
        explanation:
            "For korte og enkle lister er ScrollView + map ofte tilstrekkelig og enklere å lese, siden gevinsten ved FlatList er mindre når antall elementer er lavt.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Du vil ha en tittel som alltid vises øverst på skjermen over alle listeelementene i en FlatList, uansett hvor langt brukeren scroller. Hva er den mest naturlige løsningen?",
        options: [
            "Bruke ListFooterComponent",
            "Bruke ListHeaderComponent og eventuelt wrappe FlatList i en overordnet container for layout",
            "Bruke ItemSeparatorComponent og sette teksten der",
            "Plassere tittelen inne i renderItem slik at den gjentas for hvert element",
        ],
        correct: 1,
        explanation:
            "ListHeaderComponent gir en fast header for listen. Hvis du trenger noe over hele FlatList visuelt, kan du kombinere det med en overordnet wrapper-komponent.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "En utvikler har implementert en FlatList, men har i tillegg lagt en ScrollView rundt hele FlatList. Hvilket problem kan dette føre til?",
        options: [
            "FlatList vil automatisk bytte til horisontal scrolling",
            "virtualiseringen i FlatList undergraves, og du kan ende opp med dårligere ytelse og uforutsigbar scrolloppførsel",
            "keyExtractor slutter å fungere",
            "onRefresh vil bli trigget på hvert scroll-event",
        ],
        correct: 1,
        explanation:
            "Å wrappe FlatList i en ekstra ScrollView bryter poenget med FlatList som scroll-container, og kan føre til at virtualisering og optimalisering ikke fungerer som forventet.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Du har en FlatList som viser studentkort. Hvert kort bruker en kompleks komponent med bilder, betinget styling og flere underkomponenter. Hvilket argument taler likevel for å beholde FlatList fremfor ScrollView + map?",
        options: [
            "FlatList støtter ikke komplekse komponenter i renderItem",
            "FlatList begrenser antall nivåer i komponenttreet",
            "FlatList håndterer fortsatt virtualisering uavhengig av kompleksiteten til hvert element",
            "ScrollView støtter ikke komponenter med props",
        ],
        correct: 2,
        explanation:
            "Selv om hvert element er komplekst, vil FlatList fortsatt bare montere et begrenset antall av dem samtidig, noe som er viktig for ytelse i lange lister.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "En FlatList har `contentContainerStyle={{ gap: 25 }}`. Konseptuelt, hva forsøker du å styre med denne propen?",
        options: [
            "Hvordan data sorteres før rendering",
            "Hvor ofte renderItem kalles",
            "Hvordan keyExtractor genererer nøkler",
            "Layout/styling av containeren som omslutter alle listeelementene, inkludert avstand mellom dem",
        ],
        correct: 3,
        explanation:
            "contentContainerStyle brukes for å style containeren som inneholder alle elementene, f.eks. padding, gap eller justering – i motsetning til style som styrer selve scroll-flaten.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            'Du må velge mellom ScrollView + map og FlatList for en liste som i dag har 30 elementer, men senere kan vokse til flere hundre. Du vet også at du sannsynligvis vil trenge "last inn mer" senere. Hvilken vurdering er mest fornuftig?',
        options: [
            "Velge ScrollView + map nå, og håpe at listen aldri blir lengre",
            "Velge FlatList allerede nå, siden den er laget for lengre lister og har innebygget støtte for last-inn-mer-mønstre",
            "Bruke verken ScrollView eller FlatList, bare View",
            "Bruke FlatList, men deaktivere data og renderItem",
        ],
        correct: 1,
        explanation:
            "Når listen forventes å vokse, og du vet du vil ha funksjoner som onEndReached, er det lurt å starte med FlatList, selv om den i utgangspunktet er litt mer avansert enn ScrollView + map.",
    },
];

export const quiz_flatlist_bzj = {
    id: "flatlist-bzj",
    title: "L9 - FlatList, lister og ytelse i React Native - BZJ",
    description:
        "Quiz om FlatList i React Native: når den bør brukes, data/renderItem/keyExtractor, virtualisering, initialNumToRender, windowSize, pull-to-refresh, last-inn-mer og forskjeller fra ScrollView + map.",
    theme: ["react-native", "flatlist", "lister", "mobilprogrammering"],
    questions: [...questions],
};
