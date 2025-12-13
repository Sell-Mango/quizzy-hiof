const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva betyr Convention over Configuration i konteksten av denne tabell-arkitekturen?",
        options: [
            "At komponenten alltid må konfigureres fullt ut med mange props",
            "At komponenten har fornuftige standarder som fungerer uten mye konfigurasjon, men kan tilpasses ved behov",
            "At komponenten må bruke Context API for konfigurasjon",
            "At man unngår generics og bruker unions i stedet"
        ],
        correct: 1,
        explanation:
            "Convention over Configuration betyr at det finnes gode default-verdier (som SimpleTable) for vanlige behov, men at man kan konfigurere mer (Table + TableConfig) når man trenger kontroll. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvorfor brukes TypeScript generics (Table<T>) i denne leksjonen?",
        options: [
            "For å kunne bruke React uten JSX",
            "For å gjøre en tabell som kan håndtere hvilken som helst datatype, men fortsatt være type-sikker",
            "For å redusere antall filer i prosjektet",
            "For å erstatte behovet for tester"
        ],
        correct: 1,
        explanation:
            "Med Table<T> kan tabellen brukes med mange datatyper, samtidig som TypeScript sikrer korrekt bruk for hver type (compile-time safety). :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å bruke `keyof T` i ColumnConfig<T>?",
        options: [
            "Det gjør at alle kolonner alltid blir sortable",
            "Det sikrer at du bare kan referere til felter som faktisk finnes på typen T",
            "Det gjør at React kan rendere raskere",
            "Det gjør at man slipper å sende inn data som props"
        ],
        correct: 1,
        explanation:
            "`keyof T` gjør at TypeScript fanger skrivefeil og ugyldige feltnavn ved kompilering, noe som gir bedre type-sikkerhet for konfigurasjonen. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "true-false",
        question:
            "En render-funksjon i en kolonnekonfigurasjon brukes for å kunne formatere celler ulikt basert på verdi og rad-data.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "ColumnConfig<T> har `render?: (value, row) => ReactNode` som gjør det mulig å lage spesialformattering (badges, lenker, ‘time ago’, osv.). :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvilken påstand beskriver BEST tradeoffen mellom fleksibilitet og kompleksitet i konfigurerbare komponenter?",
        options: [
            "Mer fleksibilitet betyr alltid mindre kompleksitet",
            "Mer fleksibilitet kan gi mer kompleks API og høyere terskel for nye utviklere",
            "Kompleksitet oppstår bare hvis man bruker Tailwind",
            "Komponenter blir alltid enklere å teste jo mer konfigurerbare de er"
        ],
        correct: 1,
        explanation:
            "Leksjonen beskriver dilemmaet: fleksibilitet vs enkelhet. Full Table gir mye kontroll men mer konfig, mens SimpleTable gjør det lett å komme i gang. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvordan er sorterings-tilstanden (sortConfig) designet i Table<T> / useTableSort?",
        options: [
            "Som en string med format 'col:asc'",
            "Som `{ column: keyof T; direction: 'asc' | 'desc' } | null`",
            "Som et nummer som representerer sorteringsmodus",
            "Som et globalt objekt delt mellom alle tabeller"
        ],
        correct: 1,
        explanation:
            "Leksjonen bruker en tydelig typed struktur for sortering med generics, og null betyr 'ingen sortering'. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er hovedpoenget med å trekke sorteringslogikken ut av Table-komponenten og inn i et custom hook (useTableSort) og en ren sorteringsmodul (lib/sorting)?",
        options: [
            "For å gjøre JSX-koden lengre men mer eksplisitt",
            "For å skille presentasjon fra logikk og gjøre sorteringsdelen mer testbar og gjenbrukbar",
            "For å kunne bruke class-komponenter senere",
            "For å unngå bruk av useMemo"
        ],
        correct: 1,
        explanation:
            "Dette lager tydelige lag: ren sorteringslogikk (framework-agnostisk), hook-lag (React state + useMemo) og UI-lag (Table). Dette forbedrer vedlikehold og testing. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "useMemo i sorteringsflyten brukes primært for å unngå unødvendig re-sortering når data eller sortConfig ikke har endret seg.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "useMemo memoiserer sortert resultat slik at sorteringen kun beregnes på nytt når dependencies endres. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvordan er handlinger (actions) gjort konfigurerbare i tabellen?",
        options: [
            "Actions er hardkodet som tre knapper i Table.tsx",
            "Actions beskrives som en liste (TableAction<T>[]) med onClick(row), og kan være hidden/disabled per rad",
            "Actions blir generert automatisk fra column keys",
            "Actions kan bare være 'View', 'Edit', 'Delete'"
        ],
        correct: 1,
        explanation:
            "TableAction<T> definerer label, onClick(row), og valgfrie hidden/disabled-funksjoner for radbasert kontroll. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er et godt testfokus for en generisk Table-komponent?",
        options: [
            "Teste eksakt HTML-struktur og rekkefølge på alle tailwind-klasser",
            "Teste observerbar atferd: rendering av data, sortering ved klikk, custom render output, empty state og actions-callbacks",
            "Teste at useMemo blir kalt riktig antall ganger",
            "Teste at alle datatyper fungerer uten å skrive noen konfig"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser tester som fokuserer på atferd: sortering, custom render, empty state og actions som trigges med riktig rad. :contentReference[oaicite:10]{index=10}"
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvilken skaleringsutfordring nevnes eksplisitt når tabellkonfigurasjoner blir store og må sendes gjennom mange komponentlag?",
        options: [
            "Props drilling i komplekse konfigurasjoner",
            "At generics slutter å fungere",
            "At React ikke støtter tabeller over 100 rader",
            "At TypeScript ikke kan kompilere store prosjekter"
        ],
        correct: 0,
        explanation:
            "Leksjonen peker på props drilling som utfordring og nevner Context API for table-konfigurasjon som mulig fremtidig løsning. :contentReference[oaicite:11]{index=11}"
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "En sentral arkitekturgevinst ved å refaktorere fra hardkodet QuestionTable til en konfigurerbar Table<T> er at nye tabeller (f.eks. UserTable) kan lages uten å duplisere sorterings- og action-logikk.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Ved å flytte felles logikk inn i generiske lag (Table + useTableSort + sortTableData) kan nye datatyper (UserTable osv.) lages via konfigurasjon, med mindre duplisering og bedre konsistens. :contentReference[oaicite:12]{index=12}"
    }
];

export const react_configurable_generic_components_quiz = {
    id: "react-configurable-generic-components",
    title: "L10 - Konfigurerbare komponenter og generisk design - KML",
    description:
        "Quiz om Convention over Configuration, generics, konfigurerbare kolonner/handlinger/sortering, testing, performance og skaleringsutfordringer i modulær React-arkitektur.",
    theme: [
        "generics",
        "testing",
        "scalability"
    ],
    questions: [...questions]
};
