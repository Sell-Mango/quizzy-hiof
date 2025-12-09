const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva beskriver best state i React Native?",
        options: [
            "Data som kommer fra foreldre via props",
            "Data komponenten selv eier og kan endre over tid",
            "Immutable verdier som aldri skal endres",
            "Globale variabler tilgjengelig i hele appen"
        ],
        correct: 1,
        explanation:
            "State er data komponenten selv kontrollerer og som endrer seg over tid, og utløser re-render når det oppdateres. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva skjer når `setCount(count + 1)` kalles flere ganger raskt etter hverandre?",
        options: [
            "State øker korrekt for hvert kall uansett timing",
            "Kun det siste kallet teller fordi React batcher oppdateringer",
            "Alle oppdateringer avvises",
            "React kaster en warning"
        ],
        correct: 1,
        explanation:
            "React batcher state-oppdateringer, noe som kan føre til at `count + 1` bruker gammel verdi. Funksjonell stateform anbefales. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er riktig måte å oppdatere state basert på forrige stateverdi?",
        options: [
            "setCount(count + 1)",
            "setCount(prev => prev + 1)",
            "setCount(() => count + 1)",
            "setCount(prev => count)"
        ],
        correct: 1,
        explanation:
            "Funksjonell oppdatering er riktig når ny state avhenger av forrige state. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q4",
        type: "true-false",
        question:
            "Påstand: Pressable sin onPress kan direkte oppdatere state uten problemer.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Pressable fungerer fint sammen med state-oppdatering; interaksjon skaper nye re-renders. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er feil i denne komponenten?",
        options: [
            "setVisible(!visible) må skrives som funksjonell oppdatering",
            "Button støtter ikke onPress",
            "visible bør ikke være en boolean",
            "Komponenten mangler return"
        ],
        code: `const [visible, setVisible] = useState(false);
<Button title="Toggle" onPress={() => setVisible(!visible)} />`,
        correct: 0,
        explanation:
            "Når ny state avhenger av forrige state, bør man bruke `setVisible(prev => !prev)` for å unngå stale state. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor fungerer ikke dette som forventet?",
        options: [
            "State kan ikke være et objekt",
            "Setter-funksjonen merger ikke objektet",
            "name mangler defaultverdi",
            "React støtter ikke objekter i state"
        ],
        code: `const [user, setUser] = useState({ name: "Ola", age: 25 });
setUser({ name: "Kari" });`,
        correct: 1,
        explanation:
            "Setter erstatter hele objektet — ikke merge. Man må bruke spread: setUser(p => ({...p, name:'Kari'})). :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva beskriver state lifting?",
        options: [
            "State flyttes ned i barn for å gjøre dem enklere",
            "State flyttes opp i forelder for å deles mellom flere barn",
            "State lagres i global fil",
            "State synkroniseres automatisk mellom komponenter"
        ],
        correct: 1,
        explanation:
            "State løftes opp til nærmeste felles forelder når flere komponenter trenger den. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva skjer når man muterer state direkte?",
        options: [
            "React oppdaterer UI korrekt",
            "React kaster en runtime-feil",
            "React kan ignorere endringen fordi immutability brytes",
            "State merges automatisk med forrige verdi"
        ],
        correct: 2,
        explanation:
            "Mutasjon kan føre til at React ikke oppdager endringer → ingen re-render."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er riktig om denne koden?",
        options: [
            "count øker alltid med 2",
            "count øker med 1 på grunn av batching",
            "count øker med 3",
            "Feil: man kan ikke kalle setCount flere ganger"
        ],
        code: `setCount(count + 1);
setCount(count + 1);`,
        correct: 1,
        explanation:
            "Begge kallene bruker samme gamle count → øker kun 1. Funksjonell state ville økt 2. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med Pressable over Button i statefulle interaksjoner?",
        options: [
            "Pressable krever ingen stiler",
            "Pressable støtter flere interaksjonsstadier (pressed, longPress)",
            "Button er tregere",
            "Pressable endrer automatisk state"
        ],
        correct: 1,
        explanation:
            "Pressable støtter onPressIn, onPressOut, onLongPress + pressed-state for visuell feedback. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er feil i denne koden?",
        options: [
            "setActive må kalles med en verdi",
            "onPress må bruke pressed-argument",
            "setActive(!active) kan bruke stale state",
            "Pressable må bruke android_ripple"
        ],
        code: `<Pressable onPress={() => setActive(!active)} />`,
        correct: 2,
        explanation:
            "Interaksjon flere ganger raskt kan føre til at active toggles med gammel verdi. bruk: setActive(p => !p)."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er riktig måte å sende state oppover i hierarkiet?",
        options: [
            "Barn endrer foreldres state direkte",
            "Forelder sender en callback-prop som barnet kaller",
            "State deles automatisk",
            "Context API kreves alltid"
        ],
        correct: 1,
        explanation:
            "Callbacks brukes for 'actions up' – barnet trigger funksjon som oppdaterer state i forelder. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q13",
        type: "true-false",
        question:
            "Påstand: `useState` setter state umiddelbart og synlig i samme render.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "State settes asynkront; ny verdi vises i neste render, ikke i samme render."
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hvorfor fungerer ikke dette som forventet?",
        options: [
            "React støtter ikke + med strings",
            "setName må bruke funksjonell oppdatering",
            "name er ikke i dependency array",
            "State oppdateres asynkront, så console.log viser gammel verdi"
        ],
        code: `setName("Ola");
console.log(name);`,
        correct: 3,
        explanation:
            "State oppdateres ikke synlig før neste render → console.log viser gammel state. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er riktig måte å oppdatere array-state uten å mutere?",
        options: [
            "items.push(newItem); setItems(items)",
            "setItems(prev => prev.push(newItem))",
            "setItems([...items, newItem])",
            "setItems(items)"
        ],
        correct: 2,
        explanation:
            "Immutability krever ny array → spread. Mutasjon (`push`) gir feil i React."
    },

    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hva skjer når user trykker denne komponenten?",
        options: [
            "title endres to ganger",
            "title toggles riktig med funksjonell state",
            "title oppdateres ikke",
            "onPress kalles to ganger"
        ],
        code: `const [title, setTitle] = useState("A");
<Pressable onPress={() => setTitle(prev => prev === "A" ? "B" : "A")}>`,
        correct: 1,
        explanation:
            "Funksjonell state sikrer korrekt toggle uansett timing."
    },

    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hva brukes hitSlop til i Pressable?",
        options: [
            "Å gjøre knappen større visuelt",
            "Å øke det trykkbare området uten å endre layout",
            "Å redusere marginer",
            "Å øke re-render hastighet"
        ],
        correct: 1,
        explanation:
            "hitSlop gjør interaksjonsområdet større uten å endre visuell størrelse. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q18",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å dele opp interaksjonslogikk i en custom hook?",
        options: [
            "Hooken kan rendre UI direkte",
            "Logikk kan gjenbrukes mellom komponenter uten prop drilling",
            "Hooks kan endre props direkte",
            "Reducer behovet for Pressable"
        ],
        correct: 1,
        explanation:
            "Custom hooks gjør interaksjonslogikk gjenbrukbar og isolert, en vanlig praksis i større apper."
    },

    {
        id: "q19",
        type: "multiple-choice",
        question:
            "Hva er riktig om oppdatering av nested state?",
        options: [
            "React merger automatisk dype objekter",
            "Man må lage en helt ny kopi via spread på alle nivåer",
            "setState støtter merge hvis det er et objekt",
            "Pressable håndterer dette automatisk"
        ],
        correct: 1,
        explanation:
            "React erstatter hele verdien → dypt inne i objekter må man kopiere alle nivåer."
    },

    {
        id: "q20",
        type: "multiple-choice",
        question:
            "Hvorfor er det viktig å gjøre interaksjonslogikk idempotent i React Native (f.eks. unngå duplikate API-kall)?",
        options: [
            "Fordi onPress alltid trigges to ganger",
            "Fordi state oppdateres synkront",
            "Fordi brukere ofte trykker flere ganger i rask rekkefølge",
            "Fordi Pressable ikke gir pressed-status"
        ],
        correct: 2,
        explanation:
            "Mobiler → hyppige trykk. Uten guarding kan API-kall sendes flere ganger. pressed-status og disable-løsninger brukes ofte."
    }
];

export const ulearn_10_15_interaction_states_kml = {
    id: "ulearn_10_15_interaction_states_kml",
    title: "L10/L15 - Interaksjon + State Management",
    description:
        "Tester forståelsen av state, interaksjoner, immutability, callbacks, Pressable, batching, funksjonell state og praktiske fallgruver.",
    theme: [
        "states",
        "interaction",
    ],
    questions: [...questions]
};
