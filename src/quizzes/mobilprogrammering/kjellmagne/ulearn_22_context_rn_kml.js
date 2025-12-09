const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Case: Du skal dele globalt tema (dark/light). Hva er mest idiomatisk bruk av Context API?",
        options: [
            "Lagre tema i global variabel",
            "Prop-drille tema fra App helt ned til alle komponenter",
            "Lage ThemeContext + Provider + custom hook useTheme",
            "Lagre tema i AsyncStorage og lese det i hver komponent"
        ],
        correct: 2,
        explanation:
            "Tema er global tilstand som passer godt i Context, og en dedicated Provider + hook gir ren struktur."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Case: Et lite skjema brukes kun i én komponent. Bør du bruke Context API?",
        options: [
            "Ja, all state bør ligge i Context",
            "Ja, det er fremtidsrettet",
            "Nei, useState/useReducer lokalt er enklere og mer passende",
            "Nei, du bør alltid bruke Redux"
        ],
        correct: 2,
        explanation:
            "For lokal state (kun én komponent) er Context unødvendig og skaper mer kompleksitet."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Case: Du vil unngå prop drilling av auth-info. Hva er riktig løsning?",
        options: [
            "Passe user som prop nedover manuelt",
            "AuthContext + Provider + useAuth-hook",
            "Lagre user i AsyncStorage og lese det direkte",
            "Bruke navigation params til auth"
        ],
        correct: 1,
        explanation:
            "Context API er laget for nettopp dette – delt global state uten prop drilling."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Case: En Context inneholder masse data. Mange komponenter rerendrer når én verdi endres. Hva er et effektivt tiltak?",
        options: [
            "Bruke globale variabler for alt",
            "Splitt Context i flere mindre contexts",
            "React.memo rundt alle komponenter",
            "Kun bruke useState i hver komponent"
        ],
        correct: 1,
        explanation:
            "Store contexts gir unødvendige rerenders. Splitting reduserer omfanget."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Case: Du vil modellere global form-state med forutsigbare endringer. Hvilken løsning passer best?",
        options: [
            "Context + useReducer",
            "Context + bare useState",
            "Kun useReducer uten Context",
            "Global variabel"
        ],
        correct: 0,
        explanation:
            "Reducer gir forutsigbare 'actions' og Context gir tilgang overalt."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: React 19 introduserer en enklere Provider-syntaks. Hva er riktig?",
        options: [
            "Context fungerer ikke i React 19",
            "Du må bruke Provider nøyaktig som før",
            "Du kan skrive <ThemeContext value={theme}> i stedet for .Provider",
            "useContext er fjernet"
        ],
        correct: 2,
        explanation:
            "React 19 lar deg bruke context som komponent direkte med value-prop."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Case: React 19 introduserer hooken `use`. Hva er riktig om den?",
        options: [
            "Den erstatter useContext fullstendig",
            "Den kan lese Context direkte: use(MyContext)",
            "Den brukes kun på serveren",
            "Den fungerer kun i useEffect"
        ],
        correct: 1,
        explanation:
            "`use()` støtter Context og gjør koden kortere og mer konsistent."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Case: Flere tabs trenger tilgang til samme state. Hva må være tilfellet for at useContext skal fungere?",
        options: [
            "At Context importeres øverst i filen",
            "At alle tabs ligger under samme Provider i treet",
            "At Context ligger i root",
            "At Context kun brukes i _layout"
        ],
        correct: 1,
        explanation:
            "Context-verdi sprer seg kun nedover i komponenttreet."
    },

    //
    // --- NYTT “VIL DETTE FUNGERE?” SPØRSMÅL ---
    //
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Vil dette fungere? Du lager en Provider slik:",
        code: `export const CountContext = createContext(0);

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

// En komponent:
function Child() {
  const count = use(CountContext);
  return <Text>{count.count}</Text>;
}`,
        options: [
            "Ja, dette fungerer i React 19 fordi `use(Context)` støtter objekter",
            "Nei, fordi createContext(0) må matche et objekt senere",
            "Nei, fordi use() kun fungerer i server-komponenter",
            "Ja, men bare hvis du legger Provider i App.tsx"
        ],
        correct: 0,
        explanation:
            "`use(Context)` fungerer likt som useContext – Provider overstyrer defaultValue (0) og alt fungerer fint."
    },

    //
    // --- NYTT “VIL DETTE FUNGERE?” SPØRSMÅL ---
    //
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Vil dette fungere? Målet er at Child kan lese context-verdi fra GroupLayout.",
        code: `// app/(group)/_layout.tsx
export const GroupContext = createContext("default");

export default function GroupLayout() {
  return (
    <View>
      <GroupContext value="active">
        <Slot />
      </GroupContext>
    </View>
  );
}

// app/(group)/child.tsx
function Child() {
  const val = use(GroupContext);
  return <Text>{val}</Text>;
}`,
        options: [
            "Ja, React 19 støtter bruk av Context direkte som komponent med value-prop",
            "Nei, fordi GroupContext må bruke GroupContext.Provider",
            "Nei, fordi Context ikke kan brukes i layouts",
            "Det fungerer bare i en Tab-layout"
        ],
        correct: 0,
        explanation:
            "React 19 lar deg skrive `<Context value={...}>` i stedet for `<Context.Provider>`. Dette fungerer helt fint."
    },

    //
    // --- NYTT “VIL DETTE FUNGERE?” SPØRSMÅL ---
    //
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Vil dette fungere? En custom hook sjekker om context finnes og kaster feil hvis ikke.",
        code: `const SettingsContext = createContext(null);

export function useSettings() {
  const ctx = use(SettingsContext);
  if (!ctx) throw new Error("Missing SettingsProvider");
  return ctx;
}

function Screen() {
  const { theme } = useSettings();
  return <Text>{theme}</Text>;
}`,
        options: [
            "Ja, men kun hvis SettingsProvider faktisk wrapper Screen et sted",
            "Ja, alltid – createContext(null) gjør at use() alltid returnerer en verdi",
            "Nei, use(Context) fungerer ikke i custom hooks",
            "Nei, Context kan ikke inneholde objekter"
        ],
        correct: 0,
        explanation:
            "Custom hooks som dette er standard – men Screen *må* ligge under en Provider, ellers kastes feilen."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Case: Appen vokser og du har mange providers: AuthProvider, ThemeProvider, FormProvider, SettingsProvider osv. Hva er beste praksis?",
        options: [
            "Wrappe hele appen i én gigantisk Provider",
            "Flytte alle til root og ignorere struktur",
            "Lage en Providers-komponent som komposisjonelt wrapper alle Providers i riktig rekkefølge",
            "Ikke bruke Context i det hele tatt"
        ],
        correct: 2,
        explanation:
            "En egen Providers.tsx gir struktur og reduserer støy i App.tsx."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Case: Appen blir stor, Context brukes mange steder og rerendrer hyppig. Hva kan du vurdere?",
        options: [
            "Bytte hele appen til prop drilling",
            "Bruke Redux, Zustand eller Jotai for global state med selektorer og optimalisering",
            "Lagre all global state i AsyncStorage",
            "Flytte alt inn i én useRef"
        ],
        correct: 1,
        explanation:
            "State management-biblioteker gir ofte bedre ytelse og struktur enn store contexts."
    }
];

export const ulearn_22_context_rn_kml = {
    id: "ulearn_22_context_rn_kml",
    title: "L22 - Context API – Casebasert bruk - KML",
    description:
        "En case- og kodebasert quiz om Context API, React 19-endringer, struktur, fordeler/ulemper og alternativer. Inkluderer vurdering av faktiske kodeeksempler.",
    theme: [
        "context",
        "hooks",
    ],
    questions: [...questions]
};
