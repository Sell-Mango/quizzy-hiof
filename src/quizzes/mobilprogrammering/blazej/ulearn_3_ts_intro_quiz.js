const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er TypeScript i forhold til JavaScript i en React Native-kontekst?",
        options: [
            "Et helt nytt språk som ikke har noe med JavaScript å gjøre",
            "Et superset av JavaScript som legger til statisk typing og kompileres til vanlig JavaScript",
            "Et rammeverk for styling av komponenter",
            "Et verktøy kun for å konfigurere tsconfig.json",
        ],
        correct: 1,
        explanation:
            "TypeScript er et superset av JavaScript med statisk typing. Koden kompileres til vanlig JavaScript som kan kjøres i nettleser eller Node/React Native.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question: "Hva er en viktig fordel med statisk typing i TypeScript?",
        options: [
            "Appen kjører alltid raskere i produksjon",
            "Vi slipper å skrive tester",
            "Vi fanger mange feil allerede i utvikling/kompilering i stedet for ved runtime",
            "Koden kan bare kjøres i nettleser, ikke på server",
        ],
        correct: 2,
        explanation:
            "Statisk typing gjør at TypeScript-kompilatoren kan fange typefeil og andre problemer før koden kjøres, noe som gir færre runtime-feil.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question: 'Hva menes med "type inference" i TypeScript?',
        options: [
            "At vi alltid må eksplisitt skrive type på alle variabler",
            "At TypeScript automatisk kan utlede typen basert på verdien vi gir variabelen",
            "At TypeScript alltid gjetter feil type",
            "At typer kun sjekkes i tsconfig.json",
        ],
        correct: 1,
        explanation:
            'Type inference betyr at TypeScript ofte kan utlede typen selv, for eksempel `const name = "Lars"` blir automatisk type string uten at vi skriver `: string`.',
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er den viktigste forskjellen mellom typene any og unknown i TypeScript?",
        options: [
            "Det er ingen forskjell, de brukes likt",
            "any deaktiverer typesjekking for verdien, mens unknown må type-sjekkes før bruk",
            "unknown kan bare brukes i React, any bare i Node",
            "any er raskere å kjøre enn unknown",
        ],
        correct: 1,
        explanation:
            "any skrur i praksis av typesikkerheten for den verdien. unknown er mer restriktiv og krever type-sjekk før vi bruker verdien, og er derfor tryggere.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question: "Når brukes returtypen void på en funksjon i TypeScript?",
        options: [
            "Når funksjonen aldri kan stoppe",
            "Når funksjonen ikke returnerer noen verdi",
            "Når funksjonen alltid kaster en error",
            "Når funksjonen bare brukes i async-kode",
        ],
        correct: 1,
        explanation:
            "void brukes når en funksjon ikke returnerer noe. never brukes derimot når funksjonen aldri kommer til å fullføre (f.eks. kaster error hver gang).",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            'Hva beskriver best en tuple i TypeScript, for eksempel `const person: [string, number] = ["John", 30];`?',
        options: [
            "En vanlig array uten begrensninger",
            "En array med fast lengde og bestemte typer på hver posisjon",
            "En enum med to verdier",
            "En union-type av string og number",
        ],
        correct: 1,
        explanation:
            "En tuple er en array med fast lengde og forhåndsdefinerte typer for hver indeks, for eksempel [navn, alder].",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva gjør ? etter et property-navn i et interface, for eksempel `age?: number;` i `interface User`?",
        options: [
            "Markerer at property alltid må ha en verdi",
            "Markerer at property er readonly",
            "Markerer at property er optional (kan mangle)",
            "Markerer at property er deprecated",
        ],
        correct: 2,
        explanation:
            "age?: number betyr at age er en optional property. Objektet kan ha age, men det er ikke påkrevd.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er en viktig forskjell mellom interface og type i TypeScript slik det ble beskrevet?",
        options: [
            "Interface kan aldri brukes på objekter",
            "type kan ikke brukes på funksjoner",
            "interface kan utvides (extends) på en naturlig måte, mens type aliases ofte brukes mer generelt",
            "Det er ulovlig å blande interface og type i samme prosjekt",
        ],
        correct: 2,
        explanation:
            "Begge kan beskrive objekter, men interface har en naturlig mekanisme for å bruke extends. I praksis brukes type mye, og diskusjonen handler ofte om stil/ytelse.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            'Hva beskriver best en union type i TypeScript, for eksempel `type Status = "active" | "inactive" | "pending";`?',
        options: [
            "En type som må ha alle verdiene samtidig",
            "En type som kan være én av flere tillatte verdier",
            "En type som alltid er null",
            "En type som automatisk konverteres til enum",
        ],
        correct: 1,
        explanation:
            "En union-type beskriver at en verdi kan være én av flere spesifikke typer eller literaler, for eksempel tre mulige status-strenger.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hvorfor anbefales ofte string literal unions eller `as const`-objekter som alternativ til enums?",
        options: [
            "De er mindre lesbare enn enums",
            "De gir dårligere typesikkerhet enn enums",
            "De gir bedre typesikkerhet, enklere typer og mindre runtime-overhead enn mange enum-varianter",
            "De fungerer kun i backend-kode",
        ],
        correct: 2,
        explanation:
            "String-literal unions og `as const` gir forutsigbare og typesikre verdier uten ekstra runtime-objekter, og unngår flere av utfordringene med enums.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er hovedpoenget med generics i TypeScript, som i `function identity<T>(arg: T): T`?",
        options: [
            "Å fjerne all typesjekking",
            "Å skrive funksjoner og typer som kan gjenbrukes med flere konkrete typer, samtidig som vi beholder typesikkerhet",
            "Å tvinge alle funksjoner til å bruke any",
            "Å gjøre koden tregere, men mer fleksibel",
        ],
        correct: 1,
        explanation:
            "Generics lar oss lage fleksible, gjenbrukbare komponenter (funksjoner, klasser, interfaces) som fortsatt er typesikre, ved å parameterisere typen med <T>.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva gjør `T extends HasLength` i funksjonen `function getLength<T extends HasLength>(arg: T)`?",
        options: [
            "Forbyr bruk av interfaces",
            "Sier at T må være en number",
            "Begrenser T til typer som har en length-property",
            "Gjør at funksjonen bare kan bruke any",
        ],
        correct: 2,
        explanation:
            "Constrainten `T extends HasLength` betyr at T må ha minimum de egenskapene som HasLength beskriver (her en length), noe som gjør bruk av `arg.length` typesikkert.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er en user-defined type guard i TypeScript, for eksempel `function isString(value: any): value is string { ... }`?",
        options: [
            "En funksjon som konverterer alle typer til string",
            "En funksjon som slår av TypeScript-kompilatoren",
            "En funksjon som forteller TypeScript hvilken type en verdi har inne i en if-blokk når den returnerer true",
            "En funksjon som kun brukes i tsconfig.json",
        ],
        correct: 2,
        explanation:
            "Returtypen `value is string` gjør funksjonen til en type guard. Etter en `if (isString(value))` vet TypeScript at value er string inne i blokken.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er den største risikoen ved å bruke type assertions, for eksempel `value as SomeType` eller non-null `!`?",
        options: [
            "Koden nekter å kompilere",
            "Assertions gjør koden tregere i runtime",
            "Vi kan overstyre TypeScript sin sikkerhet og dermed introdusere bugs hvis vi egentlig tar feil type",
            "Koden kan ikke lenger bruke async/await",
        ],
        correct: 2,
        explanation:
            'Assertions sier "stol på meg" til kompilatoren. Hvis vi tar feil, kan vi få runtime-feil som TypeScript ellers ville fanget opp.',
    },
    {
        id: "q15",
        type: "multiple-choice",
        question: "Hva kjennetegner utility-typen Partial<T> i TypeScript?",
        options: [
            "Gjør alle properties i T readonly",
            "Fjerner alle properties i T",
            "Gjør alle properties i T optional",
            "Legger til ekstra properties i T automatisk",
        ],
        correct: 2,
        explanation:
            "Partial<T> gjør alle properties i T valgfrie. Dette brukes typisk når vi skal oppdatere deler av et objekt, f.eks. payload til en update-funksjon.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question: 'Hva gjør utility-typen Pick<User, "id" | "name" | "email">?',
        options: [
            "Fjerner feltene id, name og email fra User",
            "Lager en type med kun feltene id, name og email fra User",
            "Gjør alle feltene i User nullable",
            "Legger til id, name og email i alle typer",
        ],
        correct: 1,
        explanation:
            "Pick lager en ny type basert på et utvalg av felter fra en eksisterende type. Her får vi en type som kun har id, name og email fra User.",
    },
    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hva er hovedidéen bak mapped types, som for eksempel `type Optional<T> = { [P in keyof T]?: T[P] };`?",
        options: [
            "Å generere tilfeldige typer",
            "Å lage nye typer ved å iterere over alle keys i en type og transformere dem på en konsekvent måte",
            "Å fjerne alle keys i en type",
            "Å tvinge alle typer til å bli any",
        ],
        correct: 1,
        explanation:
            "Mapped types lar oss gå gjennom alle properties i en type (keyof T) og lage en ny variant, for eksempel gjøre alle optional eller readonly.",
    },
    {
        id: "q18",
        type: "multiple-choice",
        question:
            "Hva returnerer en async-funksjon i TypeScript, for eksempel `async function fetchUser(id: number): Promise<UserData>`?",
        options: [
            "Alltid en void",
            "Alltid en UserData, uten Promise",
            "Et Promise som til slutt løses til typen i generics-parameteren, her UserData",
            "En enum med UserData-verdier",
        ],
        correct: 2,
        explanation:
            "En async-funksjon returnerer alltid et Promise. Signaturen `Promise<UserData>` betyr at den asynkront vil gi oss en UserData når den er ferdig.",
    },
    {
        id: "q19",
        type: "multiple-choice",
        question:
            "Hva er en god måte å definere et trygt API-kall i TypeScript, basert på eksempelet `async function fetchUser(id: number): Promise<UserData>`?",
        options: [
            "La funksjonen returnere any for å unngå typer",
            "Gi funksjonen en tydelig returtype (for eksempel Promise<UserData>) og bruke try/catch for å håndtere feil",
            "Bare logge feil i konsollen og ignorere typer",
            "Bare bruke unknown overalt",
        ],
        correct: 1,
        explanation:
            "Vi vil vanligvis ha en spesifikk returtype (Promise<UserData>) og håndtere feil med try/catch eller en wrapper-funksjon, slik at vi har kontroll både på data-typen og feilhåndtering.",
    },
    {
        id: "q20",
        type: "multiple-choice",
        question:
            'Hva gjør innstillingen `"strict": true` typisk i en tsconfig.json?',
        options: [
            "Slår av all typesjekking",
            "Aktiverer et sett med strenge type-regler som gjør koden mer typesikker",
            "Forhindrer bruk av generics",
            "Gjør at TypeScript bare kompilerer til ES3",
        ],
        correct: 1,
        explanation:
            "strict aktiverer flere strenge typechecks (som strictNullChecks m.m.). Dette gir mer robust og forutsigbar koding, og er anbefalt i moderne TypeScript-prosjekter.",
    },
];

export const quiz_typescript_basics_bzj = {
    id: "typescript-basics-bzj",
    title: "L3 - TypeScript – grunnleggende konsepter - BZJ",
    description:
        "Quiz om TypeScript i mobil-/React Native-kontekst: statisk typing, type inference, interface vs type, unions, generics, type guards, utility types, async/await og tsconfig.",
    theme: ["typescript", "mobilprogrammering"],
    questions: [...questions],
};
