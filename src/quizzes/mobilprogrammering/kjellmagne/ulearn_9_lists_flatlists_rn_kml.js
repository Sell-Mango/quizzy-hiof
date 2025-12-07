const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva er hovedgrunnen til å bruke FlatList fremfor .map() i React Native?",
        options: [
            "FlatList skriver mindre JSX",
            "FlatList rendrer kun synlige elementer og gir bedre ytelse",
            "FlatList krever ingen nøkler",
            "FlatList bruker mindre styling"
        ],
        correct: 1,
        explanation:
            "FlatList rendrer kun synlige elementer og forbedrer ytelse og minnebruk ved store lister. :contentReference[oaicite:1]{index=1}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question: "Hva gjør keyExtractor?",
        options: [
            "Bestemmer rekkefølgen i listen",
            "Returnerer en unik nøkkel for hvert element",
            "Sletter elementer fra listen",
            "Hindrer dobbelt-render"
        ],
        correct: 1,
        explanation:
            "FlatList krever en unik nøkkel per element for optimal rendering. keyExtractor gir denne. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question: "Hva er problemet med denne bruken av FlatList?",
        options: [
            "keyExtractor mangler",
            "renderItem returnerer ikke JSX",
            "key er unødvendig inne i renderItem",
            "data må være et objekt"
        ],
        code: `<FlatList
  data={students}
  renderItem={({ item }) => <Card key={item.id} student={item} />}
/>`,
        correct: 2,
        explanation:
            "FlatList håndterer keys selv; å legge key inne i renderItem gir advarsler og feil. Bruk keyExtractor. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question: "Når er det bedre å bruke .map() enn FlatList?",
        options: [
            "Når listen er svært stor",
            "Når man trenger dynamisk paginering",
            "Når listen er kort (f.eks. < 20 elementer)",
            "Aldri — FlatList er alltid best"
        ],
        correct: 2,
        explanation:
            "map() er helt fint for korte, statiske lister. FlatList er mest nyttig for store og dynamiske datasett. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question: "Hva gjør windowSize?",
        options: [
            "Antall elementer som rendres på skjermen + utenfor skjerm",
            "Hvor stort FlatList-vinduet er fysisk",
            "Hvor mange headers som rendres",
            "Hvor mange lister som rendres samtidig"
        ],
        correct: 0,
        explanation:
            "windowSize styrer hvor mange skjermer med elementer som rendres rundt viewporten. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er fordelen med initialNumToRender?",
        options: [
            "Det gjør listen raskere å scrolles",
            "Bestemmer hvor mange elementer som rendres først, og forbedrer initial load performance",
            "Det sorterer listen",
            "Det gjør keyExtractor unødvendig"
        ],
        correct: 1,
        explanation:
            "initialNumToRender reduserer ventetid på første visning av listen. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er riktig om ListEmptyComponent?",
        options: [
            "Kalles etter scroll",
            "Renderes når data-array er tom",
            "Kan kun brukes med SectionList",
            "Er obligatorisk for FlatList"
        ],
        correct: 1,
        explanation:
            "ListEmptyComponent gir brukerfeedback når listen ikke har innhold. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er formålet med onEndReached?",
        options: [
            "Oppdatere UI når et element klikkes",
            "Kalles når brukeren når toppen av listen",
            "Kalles når brukeren nærmer seg bunnen, ofte brukt for paginering",
            "Fjerner elementer fra listen"
        ],
        correct: 2,
        explanation:
            "onEndReached brukes til last-inn-mer funksjonalitet. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva gjør removeClippedSubviews?",
        options: [
            "Fjerner ubrukt CSS",
            "Skjuler elementer som ikke er synlige for raskere scroll",
            "Sletter state knyttet til skjulte elementer",
            "Hindrer at lister blir scrollbare"
        ],
        correct: 1,
        explanation:
            "removeClippedSubviews klipper usynlige elementer for bedre ytelse. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er feil i denne implementasjonen?",
        options: [
            "keyExtractor er feil definert",
            "onRefresh mangler en setter for refreshing-state",
            "FlatList støtter ikke refreshing",
            "renderItem må være memoized"
        ],
        code: `<FlatList
  data={items}
  refreshing={isRefreshing}
  onRefresh={() => loadData}
/>`,
        correct: 1,
        explanation:
            "`onRefresh={() => loadData}` returnerer funksjonen uten å kjøre den. Må være `onRefresh={loadData}` eller `() => loadData()` for å trigge refresh. FlatList støtter pull-to-refresh. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er fordelen med ItemSeparatorComponent?",
        options: [
            "Den rendrer en divider mellom elementer uten ekstra logikk i renderItem",
            "Den sorterer data",
            "Den skjuler scrollbars",
            "Den binder state mellom elementer"
        ],
        correct: 0,
        explanation:
            "ItemSeparatorComponent gjør innrykk/linjer mellom elementer enklere og mer performant. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er riktig om renderItem?",
        options: [
            "Den må returnere en Text-komponent",
            "Den må være en PureComponent",
            "Den mottar { item, index } og bestemmer hvordan hvert element vises",
            "Den brukes ikke når keyExtractor er definert"
        ],
        correct: 2,
        explanation:
            "renderItem definerer hvordan hvert element rendres — tilsvarer map().children i vanlig React. :contentReference[oaicite:12]{index=12}"
    }
];

export const ulearn_9_lists_flatlists_kml = {
    id: "ulearn_9_lists_flatlists_kml",
    title: "FlatList – Praktisk bruk, ytelse og fallgruver - KML",
    description:
        "En quiz om praktisk bruk av FlatList, ytelsesoptimering, interaksjoner, fordeler, ulemper og vanlige feil i React Native.",
    theme: [
        "lists"
    ],
    questions: [...questions]
};
