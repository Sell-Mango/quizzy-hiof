const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du har en komponent som både: (1) henter data, (2) filtrerer og sorterer data, (3) rendrer tabell, (4) håndterer alle knapp-klikk. Hvilken strategi samsvarer BEST med leksjonens prinsipper?",
        options: [
            "Beholde alt i én komponent for å unngå props drilling",
            "Flytte all logikk til en global store og la komponenten kun abonnere",
            "Ekstrahere filtreringslogikk til en hook, knappe-UI til ActionButtons, og rad-visning til QuestionRow",
            "Kun ekstrahere CSS til en egen fil og la all logikk bli igjen"
        ],
        correct: 2,
        explanation:
            "Leksjonen viser nettopp denne retningen: custom hook for logikk (useTableFilters) + små, fokuserte komponenter som QuestionRow og ActionButtons. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Se på dette utsnittet fra en stor komponent. Hvor er det mest naturlige første brytningspunktet?",
        code: `
function HugeComponent() {
  // state & hooks...

  return (
    <section className="question-table-container">
      <section className="filters">
        {/* masse filter-UI */}
      </section>

      <div className="results-info">
        Viser {filteredQuestions.length} av {allQuestions.length} spørsmål
      </div>

      <section className="table-container">
        <table className="questions-table">
          <thead>...</thead>
          <tbody>
            {filteredQuestions.map((q) => (
              <tr key={q.id}>
                <td>{q.question}</td>
                <td>{q.answers.length}</td>
                <td>{q.createdAt.toLocaleDateString("nb-NO")}</td>
                <td>
                  <button onClick={() => handleView(q.id)}>Se</button>
                  <button onClick={() => handleEdit(q.id)}>Rediger</button>
                  <button onClick={() => handleDelete(q.id)}>Slett</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}
    `,
        options: [
            "Flytte hele komponenten uendret til en annen fil",
            "Ekstrahere filter-seksjonen til en TableFilters-komponent",
            "Bare flytte createdAt.toLocaleDateString til en egen funksjon",
            "Bare legge til flere knapper i samme komponent"
        ],
        correct: 1,
        explanation:
            "Leksjonen starter nettopp med å lage TableFilters og QuestionTable/QuestionRow som egne komponenter – filtrene er et tydelig ansvar. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Du skal designe props-API-et til QuestionTable. Hvilket alternativ gir best balanse mellom modulæritet og ansvarfordeling?",
        options: [
            "QuestionTable henter selv data med fetch og håndterer alle callbacks internt",
            "QuestionTable får questions og callbacks (onView, onEdit, onDelete) som props",
            "QuestionTable får kun en prop: config, som inneholder absolutt alt (data, callbacks, styling)",
            "QuestionTable brukes kun inne i én spesifikk side og trenger derfor ingen props"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser QuestionTable som en ren presentasjonskomponent: data og callbacks injiseres via props fra QuestionsPage. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "true-false",
        question:
            "Når du har separert til små komponenter (ActionButtons, QuestionRow, TableFilters), er det ikke lenger nødvendig med integrasjonstester – enhetstester er nok.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Leksjonen bruker både enhetstesting (ActionButtons, formatDate) og integrasjonstesting (QuestionsPage). Små komponenter gjør integrasjonstester lettere, ikke overflødige. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Du oppdager at props-trærne begynner å bli dype: QuestionsPage → QuestionTable → QuestionRow → ActionButtons. Hvilket tiltak er MEST i tråd med leksjonens tankegang om skaleringsutfordringer?",
        options: [
            "Fjerne alle mellomliggende komponenter og gå tilbake til én stor komponent",
            "Introdusere Context/Global state når samme data og callbacks må brukes bredt, ikke bare i denne stien",
            "La ActionButtons hente data direkte fra API for å slippe props",
            "Deaktivere TypeScript for å gjøre det enklere å sende props"
        ],
        correct: 1,
        explanation:
            "Leksjonen peker på props drilling som et fremtidig problem og nevner Context/state-management-bibliotek som mulige løsninger når appen vokser. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q6",
        type: "true-false",
        question:
            "Å flytte mockQuestions ut av QuestionsPage og inn som prop inn i QuestionsPage (f.eks. questionsFromServer) vil gjøre QuestionsPage enklere å teste og mer gjenbrukbar.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Å injisere data via props (dependency injection) gjør komponenten mindre koblet til en bestemt datakilde og enklere å mocke i tester – helt i tråd med leksjonens prinsipper. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Du vil skrive en test for ActionButtons som skal beskytte mot regresjon når noen endrer intern HTML-struktur. Hvilken tilnærming er BEST?",
        code: `
// pseudo-eksempel
render(
  <ActionButtons
    onView={mockOnView}
    onEdit={mockOnEdit}
    onDelete={mockOnDelete}
  />
);

// Hva bør du asserte?
    `,
        options: [
            "Teste at ActionButtons rendrer akkurat tre <button>-elementer med spesifikke CSS-klasser og rekkefølge",
            "Kun sjekke at komponenten rendrer uten å kaste feil",
            "Sjekke bruker-observerbar atferd: at riktige callbacks kalles når knappene klikkes, og at de har meningsfulle aria-labels/tekster",
            "Mocke React og sjekke interne hook-kall"
        ],
        correct: 2,
        explanation:
            "Leksjonen bruker Testing Library og fokuserer på atferd («kaller onView når Se klikkes») og tilgjengelig tekst/aria-labels, ikke intern implementasjonsdetalj. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Du vurderer å slå sammen TableFilters og QuestionTable igjen for å «forenkle» API-et. Hvilket argument fra leksjonen taler STERKET mot dette?",
        options: [
            "Testene vil ikke lenger kunne bruke Vitest",
            "Du mister den klare separasjonen mellom filter-UI og tabell-visning, og komponentene blir vanskeligere å gjenbruke på andre sider",
            "CSS vil slutte å fungere",
            "Det vil skape en sirkelavhengighet i importene"
        ],
        correct: 1,
        explanation:
            "TableFilters og QuestionTable har hver sitt ansvar (filters vs tabell). Å slå dem sammen igjen gjør dem mindre modulære og gjenbrukbare. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q9",
        type: "true-false",
        question:
            "Et viktig poeng i leksjonen er at refaktorering til modulær arkitektur skal bevare funksjonalitet (ingen funksjonell endring) mens struktur og testbarhet forbedres.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Vi følger fortsatt «Make it work, then make it better»: samme oppførsel utad, men koden deles opp i mindre, ansvarlige komponenter. Testene hjelper å sikre at ingenting funksjonelt brytes. :contentReference[oaicite:10]{index=10}"
    }
];

export const react_component_separation_advanced_quiz = {
    id: "react-component-separation-advanced",
    title: "L8 – Avansert komponent-separasjon og modulær arkitektur - KML",
    description:
        "En avansert quiz om arkitekturvalg, brytningspunkter, props-drilling, callback-patterns, dependency injection og testing i modulære React-applikasjoner.",
    theme: [
        "arkitektur",
        "props",
        "testing",
    ],
    questions: [...questions]
};
