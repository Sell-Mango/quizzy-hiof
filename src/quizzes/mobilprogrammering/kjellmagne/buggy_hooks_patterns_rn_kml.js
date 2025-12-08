const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Vil dette fungere? Målet er å bruke useState inni en if-blokk basert på props.",
        code: `function Screen({ enabled }) {
  if (enabled) {
    const [count, setCount] = useState(0);
    return <Text>{count}</Text>;
  }
  return <Text>Disabled</Text>;
}`,
        options: [
            "Ja, det fungerer helt fint",
            "Nei, hooks må kalles i samme rekkefølge på hver render, ikke inni betingelser",
            "Ja, hvis enabled er en boolean",
            "Ja, men kun i React Native"
        ],
        correct: 1,
        explanation:
            "Hooks må kalles top-level. Dette bryter hook-reglene og vil krasje appen."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Case: Du prøver å bruke en custom hook inne i en callback. Vil dette fungere?",
        code: `function Screen() {
  function handlePress() {
    const { user } = useAuth(); // <--- custom hook
    console.log(user);
  }

  return <Button onPress={handlePress} title="Press" />;
}`,
        options: [
            "Ja, custom hooks kan brukes hvor som helst",
            "Nei, hooks må kalles på top-level i komponenten",
            "Ja, hvis handlePress er memoized",
            "Ja, men bare i React 19"
        ],
        correct: 1,
        explanation:
            "Hooks kan **kun** kalles direkte i komponent-funksjoner eller andre hooks, aldri i callbacks."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Vil dette fungere? useEffect avhenger av state som oppdateres inni effekten.",
        code: `const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1);
}, [count]);`,
        options: [
            "Ja, dette oppdaterer count riktig",
            "Nei, dette skaper en infinite loop",
            "Ja, hvis count er et tall",
            "Ja, men kun første gang"
        ],
        correct: 1,
        explanation:
            "Effekten setter count → count endres → effekten kjører igjen → loop."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Case: Du har dette i UI-et. Hvorfor oppfører knappen seg rart?",
        code: `<Button onPress={setCount(count + 1)} title="Add" />`,
        options: [
            "Knappen fungerer fint",
            "setCount returnerer en funksjon som Button kjører",
            "setCount kalles med én gang komponenten rendrer, og ikke når knappen trykkes",
            "Button støtter ikke state-oppdatering"
        ],
        correct: 2,
        explanation:
            "onPress forventer en funksjon, men her kalles setCount **umiddelbart**."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Vil denne custom hooken fungere riktig?",
        code: `function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => count + 1
  };
}`,
        options: [
            "Ja, fullverdig counter-hook",
            "Nei, increment oppdaterer ikke state – den returnerer bare ny verdi",
            "Ja, hvis man bruker React.memo",
            "Nei, hooks må returnere arrays"
        ],
        correct: 1,
        explanation:
            "`increment` må bruke setCount(prev => prev + 1)."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Vil denne useEffect fungere som forventet?",
        code: `useEffect(() => {
  fetchData();
}, [fetchData]);`,
        options: [
            "Ja, den kjører fetchData én gang",
            "Den kjører fetchData hver render fordi fetchData er en ny funksjon hver gang",
            "Den krasjer appen",
            "Den kjører aldri"
        ],
        correct: 1,
        explanation:
            "Funksjoner skapes på nytt hver render → dependency endres → effekt kjører igjen. Løsning: useCallback."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Case: Du bruker useMemo for å “optimalisere” en enkel streng. Er dette riktig?",
        code: `const name = useMemo(() => first + " " + last, [first, last]);`,
        options: [
            "Ja, dette gir stor ytelsesgevinst",
            "Nei, useMemo er unødvendig for lett beregning og kan gjøre koden tregere",
            "Nei, useMemo fungerer ikke i React Native",
            "Ja, useMemo er obligatorisk for alle beregninger"
        ],
        correct: 1,
        explanation:
            "useMemo er for tunge beregninger – ellers er det unødvendig overhead."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Vil dette fungere? En komponent bruker state i render-funksjonen til å trigge ny state.",
        code: `function Screen() {
  const [count, setCount] = useState(0);

  if (count < 5) setCount(count + 1);

  return <Text>{count}</Text>;
}`,
        options: [
            "Ja, count øker til 5",
            "Nei, dette lager en render-loop og låser appen",
            "Ja, men kun i webversjonen",
            "Ja, fordi React batches oppdateringer"
        ],
        correct: 1,
        explanation:
            "State må **ikke** oppdateres direkte i render. Dette gir uendelig re-rendering."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Case: En hook kalles betinget, men bare i én av flere branches. Vil dette fungere?",
        code: `if (loggedIn) {
  const data = useData();
}`,
        options: [
            "Ja, React håndterer dette automatisk",
            "Nei, hooks må kalles i samme rekkefølge uansett logikk",
            "Ja, hvis loggedIn er en boolean",
            "Ja, men bare i React 19"
        ],
        correct: 1,
        explanation:
            "Hook-reglene brytes → React får ikke stabil hook-rekkefølge."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Case: Du sender en funksjon som prop, men hver gang forelder renderes, rerender alle barn. Hva mangler?",
        options: [
            "useEffect",
            "useMemo",
            "useCallback",
            "React.memo er feil løst"
        ],
        code: `function Parent() {
  const handlePress = () => console.log("Pressed");
  return <Child onPress={handlePress} />;
}`,
        correct: 2,
        explanation:
            "`handlePress` er ny hver render → barn rerender. Bruk useCallback."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Vil dette fungere? Målet er å unngå re-rendering av en verdi.",
        code: `const value = useRef(0);
value = 5;`,
        options: [
            "Ja, useRef-verdier kan assignes direkte",
            "Nei, useRef-verdien ligger i value.current og kan ikke reassignes slik",
            "Ja, men bare i functional components",
            "Nei, useRef fungerer ikke i React Native"
        ],
        correct: 1,
        explanation:
            "useRef-objektet er immutable; verdien ligger i `.current`."
    },

    {
        id: "q12",
        type: "true-false",
        question:
            "Påstand: useRef kan brukes til å lagre verdier som ikke skal trigge re-render når de endres.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "useRef holder en stabil verdi mellom renders og oppdatering trigger ikke render → perfekt for 'imperativ' local state."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Case: Du har et stort objekt i state og gjør dette. Hva er feilen?",
        code: `setUser(user);`,
        options: [
            "Setter user riktig",
            "Gjør ingen endring → React rerendrer ikke fordi referansen er den samme",
            "React krasjer",
            "State-objekter må være strings"
        ],
        correct: 1,
        explanation:
            "React rerendrer bare på endret referanse. Man må lage nytt objekt via spread."
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Vil dette fungere? Målet er å hente data én gang ved mount.",
        code: `useEffect(() => {
  loadData();
});`,
        options: [
            "Ja, dette fire-and-forget fungerer",
            "Nei, uten dependency-array vil effekten kjøre på *hver* render",
            "Ja, effekter kjører bare ved mount",
            "Nei, useEffect krever alltid en dependency-list"
        ],
        correct: 1,
        explanation:
            "Manglende dependency-array → kjører på hver render → ofte en bug."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Case: En custom hook bruker useEffect som avhenger av en verdi som endrer seg i hver render. Resultatet er konstant re-render. Hva er sannsynlig feil?",
        options: [
            "Effecten mangler cleanup-funksjon",
            "Dependency-listen inneholder en funksjon som ikke er memoized",
            "useEffect må ikke brukes i hooks",
            "useState må brukes i stedet"
        ],
        correct: 1,
        explanation:
            "Funksjoner skapes på nytt hver render. Uten useCallback → konstant trigger av useEffect."
    }
];

export const buggy_hooks_patterns_rn = {
    id: "buggy_hooks_patterns_rn",
    title: "Hook-feil, render-feller & buggy React/React Native patterns",
    description:
        "En case-basert quiz som tester evnen til å gjenkjenne feil bruk av hooks, uendelige renders, dependency-feller og andre vanlige årsaker til ustabile apper.",
    theme: [
        "hooks",
        "debugging",
    ],
    questions: [...questions]
};
