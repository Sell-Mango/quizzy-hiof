const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva kjennetegner en custom hook i React, slik den brukes i leksjonen?",
        options: [
            "En funksjon som kun returnerer JSX",
            "En JavaScript-funksjon som starter med 'use' og kan kalle andre hooks",
            "En klasse som arver fra React.Component",
            "En funksjon som kun brukes til API-kall"
        ],
        code: ``,
        correct: 1,
        explanation:
            "En custom hook er en funksjon som starter med 'use' og kan bruke andre hooks som useState, useEffect, useMemo osv. I leksjonen lages f.eks. useTableFilters som samler filter-logikk. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er HOVEDGRUNNEN til at filtreringslogikken ble flyttet fra QuestionTable til en egen useTableFilters-hook?",
        options: [
            "For å gjøre komponenten raskere å skrive",
            "For å kunne bruke Context API i stedet",
            "For å separere ansvar og gjøre logikken mer gjenbrukbar og testbar",
            "For å kunne bruke class-komponenter senere"
        ],
        code: ``,
        correct: 2,
        explanation:
            "Refaktoreringen handler om separasjon av ansvarsområder: komponenten fokuserer på UI/rendering, mens hooken håndterer filter-state og logikk, noe som øker gjenbrukbarhet og testbarhet. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er hovedformålet med å bruke useMemo rundt filtreringslogikken i useTableFilters?",
        options: [
            "Å sørge for at state aldri oppdateres",
            "Å unngå at React re-rendrer komponenten",
            "Å cache resultatet av filtreringen og bare rekalkulere når dependencies endrer seg",
            "Å erstatte behovet for useState"
        ],
        code: `
const filteredQuestions = useMemo(() => {
  let result = [...questions];

  if (filters.searchTerm.trim() !== "") {
    result = result.filter((question) =>
      question.question
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase())
    );
  }

  if (filters.statusFilter !== "all") {
    result = result.filter(
      (question) => question.status === filters.statusFilter
    );
  }

  return result;
}, [questions, filters]);
    `,
        correct: 2,
        explanation:
            "useMemo brukes for å unngå unødvendige rekalkuleringer av filteredQuestions. Med store datasett kan dette gi bedre ytelse, ved at beregningen kun kjøres når questions eller filters endres. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvorfor defineres egne TypeScript-interfaces som UseTableFiltersReturn, TableFilters og FilterActions for hookens API?",
        options: [
            "For at hooken kun skal kunne brukes i én komponent",
            "For å unngå å bruke generics i TypeScript",
            "For å beskrive tydelig hvilke data og funksjoner hooken eksponerer, og sikre type-sikkerhet",
            "For at Vitest skal kunne kjøre testene raskere"
        ],
        code: `
interface TableFilters {
  searchTerm: string;
  statusFilter: "all" | "draft" | "published" | "archived";
}

interface FilterActions {
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: TableFilters["statusFilter"]) => void;
  clearAllFilters: () => void;
}

interface UseTableFiltersReturn {
  filters: TableFilters;
  actions: FilterActions;
  filteredQuestions: Question[];
  resultCount: number;
}
    `,
        correct: 2,
        explanation:
            "Hookens API beskrives eksplisitt med interfaces, slik at forbrukende komponenter vet nøyaktig hvilke felter og funksjoner som finnes. Dette gir sterk type-sikkerhet og et ryddig, selv-dokumenterende API. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "true-false",
        question:
            "Etter refaktorering til useTableFilters fokuserer QuestionTable primært på rendering av UI, mens hooken håndterer state og filtreringslogikk.",
        options: ["Sant", "Usant"],
        code: ``,
        correct: 0,
        explanation:
            "Det er hele poenget med refaktoreringen: komponenten leser filters, actions og filteredQuestions fra hooken, og ansvarene separeres tydelig mellom logikk og presentasjon. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvilken teststrategi samsvarer BEST med det som beskrives i leksjonen for testing av filtreringslogikken?",
        options: [
            "Kun teste hooken isolert med renderHook, og aldri teste komponenter",
            "Kun teste komponenten via DOM og ignorere all filtreringslogikk",
            "Kombinere tester av brukerinteraksjoner i UI med eventuelt ekstra tester av hooken dersom logikken er kompleks",
            "Ikke teste noe, siden TypeScript allerede fanger alle feil"
        ],
        code: `
import { renderHook, act } from "@testing-library/react";
import { useTableFilters } from "../hooks/useTableFilters";

test("should filter questions by search term", () => {
  const { result } = renderHook(() => useTableFilters());
  act(() => {
    result.current.actions.setSearchTerm("React");
  });
  expect(result.current.filteredQuestions).toHaveLength(1);
});
    `,
        correct: 2,
        explanation:
            "Leksjonen sier at det ofte er mest nyttig å teste logikken i kontekst av brukerinteraksjon (komponenttester), men at ekstra hook-tester kan være verdifulle ved mer kompleks logikk. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor valgte leksjonen å bruke ett samlet state-objekt for filtre (filters) i stedet for flere separate useState-kall?",
        options: [
            "Det er ikke lov å bruke mer enn én useState i en hook",
            "Det gjør det lettere å oppdatere flere filter-felter samlet og gir mer oversiktlig debugging",
            "Det gjør at React ikke re-rendrer komponenten",
            "Det er eneste måten å kunne bruke TypeScript på"
        ],
        code: `
const DEFAULT_FILTERS: TableFilters = {
  searchTerm: "",
  statusFilter: "all",
};

const [filters, setFilters] = useState<TableFilters>(DEFAULT_FILTERS);
    `,
        correct: 1,
        explanation:
            "Ved å samle filterverdiene i ett objekt blir oppdateringer mer atomiske og enklere å håndtere, og det gir et mer naturlig API når vi eksponerer filters ut av hooken. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "true-false",
        question:
            "En viktig refaktoreringsregel i leksjonen er at all eksisterende funksjonalitet skal bevares (ingen funksjonell endring utad), selv om implementasjonen flyttes til custom hooks.",
        options: ["Sant", "Usant"],
        code: ``,
        correct: 0,
        explanation:
            "Refaktoreringen er «sikker» nettopp fordi vi flytter logikk uten å endre brukeropplevelsen. Resultatet skal være det samme, men koden blir mer strukturert og vedlikeholdbar. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er en begrensning ved useTableFilters-hooken slik den er illustrert i leksjonen, når vi tenker på gjenbrukbarhet?",
        options: [
            "Den kan bare brukes i class-komponenter",
            "Den er hardkodet til Question-typen og en spesifikk filters-struktur, noe som gjør den mindre generisk",
            "Den kan ikke bruke useMemo",
            "Den kan ikke testes med Vitest"
        ],
        code: `
export function useTableFilters(): UseTableFiltersReturn {
  // ...
  const filteredQuestions = useMemo(() => {
    let result = [...questions];
    // filtrering basert på filters ...
    return result;
  }, [questions, filters]);
  // ...
}
    `,
        correct: 1,
        explanation:
            "Hooken er svært nyttig, men den er spesialisert til Question og de definerte filtrene. For å gjøre den mer generisk måtte man parametrisere den eller gjøre API-et mer abstrakt. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hvilket utsagn om dependencies for useMemo i useTableFilters stemmer BEST med leksjonen?",
        options: [
            "Det er tryggest å la dependency-arrayen være tom for å unngå re-rendringer",
            "Objekter og arrayer som filters og questions bør aldri brukes som dependencies",
            "Siden filters er et objekt som alltid får ny referanse ved endring, vil useMemo trigges når filtrene faktisk endres – noe som er ønsket atferd",
            "Man bør alltid bruke kun én primitiv verdi som dependency"
        ],
        code: `
const filteredQuestions = useMemo(() => {
  // ... filtreringslogikk
  return result;
}, [questions, filters]);
    `,
        correct: 2,
        explanation:
            "Leksjonen forklarer at filters er et objekt som skifter referanse ved oppdatering, så useMemo vil kjøre på nytt når filtrene endres – og det er nettopp det vi vil. Man må likevel være bevisst på referanser og oppdateringsfrekvens for questions. :contentReference[oaicite:10]{index=10}"
    }
];

export const ulearn_7_customHooks_webapps_kml = {
    id: "ulearn_7_customHooks_webapps_kml",
    title: "L7 - React – Refaktorering med custom hooks - KML",
    description:
        "Quiz om custom hooks, separasjon av ansvar, useMemo, TypeScript-typer for hooks, testing og gjenbrukbar arkitektur.",
    theme: [
        "hooks",
        "typescript",
        "testing",
        "refaktor"
    ],
    questions: [...questions]
};
