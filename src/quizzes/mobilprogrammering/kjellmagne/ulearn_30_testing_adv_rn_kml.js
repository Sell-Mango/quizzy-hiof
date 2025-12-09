const questions = [
    // --- TDD & test-strategi ---

    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedidéen bak TDD (Test Driven Development)?",
        options: [
            "Skriv all produksjonskode først, så tester til slutt",
            "Skriv tester og produksjonskode samtidig uten rekkefølge",
            "Skriv en test som feiler, så minst mulig kode for å få den grønn, og til slutt refaktorer",
            "Skriv kun integrasjonstester"
        ],
        correct: 2,
        explanation:
            "TDD-syklusen er: Red → Green → Refactor. Test først (feil), så enkel implementasjon, så rydding/refaktorering."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Case (TDD): Du skal lage en hook useCounter. Hva er et naturlig første steg?",
        options: [
            "Implementere hele hooken ferdig og så skrive tester",
            "Skrive en test som beskriver ønsket API/oppførsel, f.eks. at count starter på 0",
            "Skrive dokumentasjon, men ikke tester",
            "Starte med å refaktorere gammel kode"
        ],
        correct: 1,
        explanation:
            "TDD starter med å konkretisere ønsket oppførsel via en test – f.eks. 'skal starte på 0'."
    },

    // --- Finne feil i tester (generelt) ---

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Vil denne testen fungere som forventet?",
        code: `
test("add returns 3", () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
    `,
        options: [
            "Ja, dette er en helt grei unit-test",
            "Nei, det mangler async/await",
            "Nei, matcher må være toEqual i stedet for toBe",
            "Nei, test må være async"
        ],
        correct: 0,
        explanation:
            "For primitive verdier er toBe helt fint. Dette er en helt ok, enkel unit-test."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Vil denne testen fungere som forventet for en asynkron funksjon?",
        code: `
test("fetchUser returns name", () => {
  const user = fetchUser(1); // async
  expect(user.name).toBe("Kari");
});
    `,
        options: [
            "Ja, fetchUser blir automatisk awaited",
            "Nei, testen må være async og bruke await eller returnere Promise",
            "Ja, så lenge fetchUser bruker fetch()",
            "Ja, hvis Jest brukes, men ikke i Vitest"
        ],
        correct: 1,
        explanation:
            "fetchUser er async → må awaites (eller bruke then/return). Ellers tester du Promise-objektet, ikke resultatet."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Case: Du tester en komponent med React Native Testing Library. Testen feiler ustabilt. Hva er en vanlig årsak?",
        code: `
test("shows success message", () => {
  render(<Form />);
  fireEvent.press(screen.getByText("Send"));
  expect(screen.getByText("Lagret!")).toBeOnTheScreen();
});
    `,
        options: [
            "fireEvent må alltid wrappes i act() manuelt",
            "assertion skjer med en gang, før async oppdatering er ferdig – du bør bruke findBy eller waitFor",
            "man kan ikke teste knapper",
            "toBeOnTheScreen() fungerer ikke i mobilprosjekter"
        ],
        correct: 1,
        explanation:
            "Hvis resultatet kommer etter en async operasjon, må man vente: `await screen.findByText(...)` eller `waitFor`."
    },

    // --- Navigasjon & hooks ---

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: Du vil teste en skjerm som bruker useNavigation() fra en navigasjonslib. Hva er vanlig tilnærming?",
        options: [
            "Kalle useNavigation direkte i testen",
            "Mocke navigasjonsbiblioteket og la useNavigation returnere et objekt med f.eks. navigate-mock",
            "Bruke ekte navigasjon i alle tester",
            "Unngå å teste navigasjon helt"
        ],
        correct: 1,
        explanation:
            "I unit/komponent-tester mocker man useNavigation (eller useRouter) slik at man kan asserte på `navigate`-kall uten ekte navigasjon."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Vil denne testen av navigasjon fungere?",
        code: `
// skjerm:
function DetailsButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Gå til detalj"
      onPress={() => navigation.navigate("Details", { id: 1 })}
    />
  );
}

// test:
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() })
}));

test("navigerer til Details", () => {
  render(<DetailsButton />);
  fireEvent.press(screen.getByText("Gå til detalj"));
  expect(useNavigation().navigate).toHaveBeenCalledWith("Details", { id: 1 });
});
    `,
        options: [
            "Ja, dette er korrekt",
            "Nei, useNavigation() kan ikke kalles inne i testen slik – hooken er allerede kalt i komponenten",
            "Nei, navigate kan ikke mockes",
            "Ja, men bare i Jest, ikke Vitest"
        ],
        correct: 1,
        explanation:
            "I testen må du fange mock-instansen uten å kalle hooken direkte. F.eks. lag en egen navigateMock og returner den fra mocken, og asserte på den."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Bedre versjon av forrige test – hvilken struktur er mest riktig?",
        code: `
const navigateMock = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: navigateMock })
}));

test("navigerer til Details", () => {
  render(<DetailsButton />);
  fireEvent.press(screen.getByText("Gå til detalj"));
  expect(navigateMock).toHaveBeenCalledWith("Details", { id: 1 });
});
    `,
        options: [
            "Denne tilnærmingen er mye bedre – asserter på en kjent mock",
            "Dette fungerer ikke – navigate kan ikke mocks",
            "navigateMock må deklareres inni testen",
            "useNavigation må wrappes i act()"
        ],
        correct: 0,
        explanation:
            "Her mocks useNavigation til å bruke en ekstern navigateMock som testen kan asserte på – vanlig mønster."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Case: Du tester en guard-komponent som redirecter brukeren hvis hen ikke er innlogget, ved å kalle navigation.replace('Login') i useEffect. Testen asserter at replace er kalt, men feiler. Hva er sannsynligvis problemet?",
        options: [
            "useEffect kjører ikke i testmiljø",
            "useEffect er async og du må vente (f.eks. med waitFor) før du asserter",
            "replace kan ikke mockes",
            "React Native Testing Library støtter ikke useEffect"
        ],
        correct: 1,
        explanation:
            "Effekter kjører etter første render; du må vente til effekten har kjørt (ofte med waitFor) før du forventer at replace er kalt."
    },

    // --- Finne feil i hook-/TDD-tester ---

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Vil denne hook-testen fungere korrekt?",
        code: `
function useCounter() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  return { count, inc };
}

test("increment øker count", () => {
  const { result } = renderHook(() => useCounter());
  result.current.inc();
  expect(result.current.count).toBe(1);
});
    `,
        options: [
            "Ja, den er helt riktig",
            "Nei, state-oppdateringen må wrappes i act()",
            "Nei, useCounter kan ikke testes med renderHook",
            "Kun Vitest støtter dette"
        ],
        correct: 1,
        explanation:
            "State-endring i hooks må wrappes i `act(() => result.current.inc())` for å være korrekt."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Case (TDD + edge cases): Du har en funksjon formatName(first, last). Hvilken test er et godt TDD-eksempel for edge cases?",
        options: [
            'Formatere "Ola" "Nordmann" til "Ola Nordmann"',
            "Teste at funksjonen ikke kaster når last er tom streng",
            "Teste at funksjonen finnes som eksport",
            "Teste at funksjonen ikke er async"
        ],
        correct: 1,
        explanation:
            "Edge cases handler om uvanlige, men realistiske verdier – f.eks. at etternavn kan være tomt/null."
    },

    // --- Debugging / vil testen fungere? ---

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Vil denne testen for en async knapp fungere som tenkt?",
        code: `
test("viser feilmelding ved feil", async () => {
  render(<SaveButton />); // SaveButton kaller async API i onPress
  fireEvent.press(screen.getByText("Lagre"));
  await waitFor(() => {
    expect(screen.getByText("Noe gikk galt")).toBeOnTheScreen();
  });
});
    `,
        options: [
            "Ja, den venter på async operasjon og asserter på resultatet",
            "Nei, waitFor kan ikke brukes med async",
            "Nei, testen må ikke være async",
            "Nei, waitFor må være inne i act()"
        ],
        correct: 0,
        explanation:
            "Dette er idiomatisk RNTL-bruk: bruker waitFor for å vente på endring i UI-et etter async operasjon."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Case: Du kjører testene og får feil om at det finnes 'act(...) warning' (not wrapped in act). Hva betyr det typisk?",
        options: [
            "At testfilen må hete *.spec.tsx",
            "At du har en state- eller effect-oppdatering som ikke er wrappet i act eller håndtert via Testing Library sine helpers",
            "At render må kalles inni useEffect",
            "At jest.config er feil"
        ],
        correct: 1,
        explanation:
            "act warning betyr at React oppdager async/state-endringer som ikke er synkronisert med testasserts."
    },

    // --- Hvor mye teste? / TDD-filosofi ---

    {
        id: "q14",
        type: "true-false",
        question:
            "Påstand (TDD/strategi): Man bør teste alle interne implementasjonsdetaljer, slik at refaktorering fanger flest mulige endringer.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Tester bør fokusere på offentlig oppførsel. For mye fokus på implementasjon gjør tester skjøre og vanskelig å refaktorere rundt."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Case: Du følger TDD for en navigasjonsrelatert feature: 'Når bruker trykker på Logg ut, skal appen navigere til Login-skjermen og nullstille auth-state'. Hva er et godt første steg?",
        options: [
            "Implementere logout-funksjon og navigasjon, så skrive test når alt virker",
            "Skrive en test som simulerer trykk på logg ut-knappen og forventer at navigate('Login') er kalt og at auth-state er nullstilt",
            "Starte med å skrive dokumentasjon",
            "Lage E2E-test først, ingen unit/komponent-tester"
        ],
        correct: 1,
        explanation:
            "I TDD beskriver du ønsket brukeropplevelse og effekt (navigate + state reset) i en test først, så implementerer du akkurat nok kode til å få den grønn."
    }
];

export const ulearn_30_testing_adv_rn_kml = {
    id: "ulearn_30_testing_adv_rn_kml",
    title: "L30 - Testing – finn feil, navigasjon med hooks & TDD - KML",
    description:
        "Quiz om å finne feil i tester, teste navigasjon i React Native med hooks/mocks, og bruke TDD-prinsipper til å forme API og tester.",
    theme: [
        "testing",
    ],
    questions: [...questions]
};
