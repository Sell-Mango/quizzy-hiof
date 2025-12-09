const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedformålet med testing i et React Native-prosjekt?",
        options: [
            "Å sikre 100% test coverage",
            "Å verifisere at koden oppfører seg som forventet, fange feil tidlig og gjøre refaktorering tryggere",
            "Å gjøre applikasjonen raskere i produksjon",
            "Å unngå behovet for debugging"
        ],
        correct: 1,
        explanation:
            "Pensum viser at testing gir tryggere refaktorering, dokumentasjon og reduserer manuell testing. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Ifølge testing-pyramiden, hvilke tester bør du ha flest av?",
        options: ["E2E-tester", "Integrasjonstester", "Unit-tester", "Mocks"],
        correct: 2,
        explanation:
            "Unit-tester er raskest og mest stabile. Pensum viser pyramiden: Unit → Integrasjon → E2E. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Vil denne testen fungere for en komponent som laster data asynkront?",
        code: `
test("shows data", () => {
  render(<DataView />);
  expect(screen.getByText("Data er lastet")).toBeOnTheScreen();
});
    `,
        options: [
            "Ja, komponenten rendres direkte",
            "Nei, asynkrone tester må vente på at data lastes med findBy eller waitFor",
            "Ja, hvis komponenten bruker useEffect",
            "Ja, så lenge test-runneren kjører i watch-mode"
        ],
        correct: 1,
        explanation:
            "Pensum viser at vi må bruke waitFor/findBy for async states. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er forskjellen på mock, fake og stub?",
        options: [
            "Ingen forskjell",
            "Mock = overvåke funksjonskall, Stub = returnerer forhåndsdefinerte verdier, Fake = enkel implementasjon av noe komplekst",
            "Fake = logging, Stub = database, Mock = kun synkron kode",
            "Stub og Fake er det samme"
        ],
        correct: 1,
        explanation:
            "Pensum skiller tydelig mellom mock, stub og fake. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question: "Er dette god testpraksis?",
        code: `
test("updates internal state", () => {
  const comp = render(<Login />);
  expect(comp.state.isLoggedIn).toBe(false);
});
    `,
        options: [
            "Ja, man bør teste interne states",
            "Nei, testen er for tett koblet til implementasjonsdetaljer",
            "Ja, state-testing gir bedre dekning",
            "Ja, men bare i mobile prosjekter"
        ],
        correct: 1,
        explanation:
            "Pensum understreker at tester bør fokusere på OBSERVERBAR oppførsel, ikke interne states. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er regelen for 'act()' i testing?",
        options: [
            "Det er bare nødvendig hvis komponenten har props",
            "Det brukes rundt all kode som trigger state-endringer",
            "Det må brukes i alle tester",
            "Det fungerer kun i Jest, ikke Vitest"
        ],
        correct: 1,
        explanation:
            "act() sørger for at alle oppdateringer fullføres før assertions. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question: "Vil denne testen fungere for en nedtelling?",
        code: `
test("countdown works", () => {
  render(<Timer />);
  jest.advanceTimersByTime(1000);
  expect(screen.getByText("9")).toBeOnTheScreen();
});
    `,
        options: [
            "Ja",
            "Nei, jest.useFakeTimers() mangler",
            "Ja, men kun i React 19",
            "Ja, hvis komponenten bruker setInterval"
        ],
        correct: 1,
        explanation:
            "Pensum viser eksplisitt at vi må aktivere fake timers. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva bør du IKKE mocke i tester?",
        options: [
            "API-kall",
            "Databaser",
            "Kompleks forretningslogikk du faktisk vil verifisere",
            "Tredjepartstjenester"
        ],
        correct: 2,
        explanation:
            "Pensum sier at intern forretningslogikk ofte blir mindre verdifull når den mockes. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er en fordel med Vitest sammenlignet med Jest?",
        options: [
            "Det er tregere",
            "Det integreres bedre med Vite og gir raskere feedback-loop",
            "Det støtter ikke mocks",
            "Det fungerer ikke med React Native"
        ],
        correct: 1,
        explanation:
            "Vitest er kjent for ytelse og nær Vite-integrasjon."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Vil denne hook-testen fungere?",
        code: `
const { result } = renderHook(() => useCount());
result.current.increment();
expect(result.current.count).toBe(1);
    `,
        options: [
            "Ja",
            "Nei, increment må wrappes i act()",
            "Ja, hvis count bruker Redux",
            "Ja, hvis hooken er synkron"
        ],
        correct: 1,
        explanation:
            "Pensum viser at tilstandsendringer i hook-testing krever act(). :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvorfor er MSW (Mock Service Worker) anbefalt for API-testing i mobilprosjekter?",
        options: [
            "Det er raskere enn mocking av funksjoner og tester HTTP-kommunikasjon realistisk",
            "Det brukes kun i web og ikke i mobilprosjekter",
            "Det krever ingen konfigurering",
            "Det fungerer bare med Axios"
        ],
        correct: 0,
        explanation:
            "Pensum viser at MSW gir realistisk API-testing på nettverksnivå, uavhengig av implementasjon. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva bør man vurdere mht. test coverage?",
        options: [
            "Alt under 100% er uakseptabelt",
            "70–80% for kritiske deler, kvalitet > kvantitet",
            "Kun UI bør testes",
            "Coverage er irrelevant"
        ],
        correct: 1,
        explanation:
            "Pensum sier at kvalitet og hva du tester betyr mer enn 100% coverage. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Vil denne testen fungere?",
        code: `
test("renders welcome", async () => {
  render(<Welcome name="Mari" />);
  expect(await screen.findByText("Velkommen, Mari!")).toBeOnTheScreen();
});
    `,
        options: [
            "Ja, dette er korrekt bruk av findBy for async assertions",
            "Nei, findBy må stå i act()",
            "Nei, man kan ikke rendre props i tester",
            "Ja, men bare i Vitest"
        ],
        correct: 0,
        explanation:
            "findBy venter automatisk på elementet, som pensum demonstrerer. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q14",
        type: "true-false",
        question:
            "En test bør verifisere hvordan brukeren opplever UI-et, ikke interne implementasjonsdetaljer.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Pensum viser eksplisitt dette i avsnittet om dårlig/god testing av login-state. :contentReference[oaicite:15]{index=15}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er en vanlig årsak til flaky tester i React Native?",
        options: [
            "Man bruker for få mocks",
            "Man ikke rydder opp etter tester (timere, mocking, event listeners)",
            "Man har for mye business logic",
            "Man bruker Vitest i stedet for Jest"
        ],
        correct: 1,
        explanation:
            "Pensum viser at manglende cleanup kan lage lekkasjer og uforutsigbarhet. :contentReference[oaicite:16]{index=16}"
    }
];

export const ulearn_30_test_rn_kml = {
    id: "ulearn_30_test_rn_kml",
    title: "L30 - Testing i React Native – Vitest & Jest introduksjon - KML",
    description:
        "En introduksjonsquiz som tester kunnskap om teststrategi, Jest/Vitest-syntaks, mocks, spies, async testing, MSW, debugging og testkvalitet.",
    theme: [
        "testing",
    ],
    questions: [...questions]
};
