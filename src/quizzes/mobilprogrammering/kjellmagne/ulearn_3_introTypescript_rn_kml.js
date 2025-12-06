const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med TypeScript i et React Native-prosjekt?",
        options: [
            "At appen kjører raskere på enheten",
            "At man kan bruke C#-syntaks i JavaScript",
            "At feil fanges under utvikling via statisk typekontroll",
            "At appen automatisk optimaliserer bundlestørrelsen"
        ],
        correct: 2,
        explanation:
            "TypeScript gir statisk typekontroll og fanger feil tidlig, noe som gjør React Native-prosjekter tryggere og mer vedlikeholdbare. :contentReference[oaicite:1]{index=1}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva vil TypeScript automatisk utlede som type (type inference) for `value`?",
        options: ["string", "any", "unknown", "never"],
        code: `const value = "Hello";`,
        correct: 0,
        explanation:
            "TypeScript ser at verdien er en streng og utleder automatisk typen `string`. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er forskjellen mellom `any` og `unknown` i TypeScript?",
        options: [
            "`any` og `unknown` fungerer helt likt",
            "`unknown` krever typesjekk før bruk, `any` gjør ikke det",
            "`any` er tryggere enn `unknown`",
            "`unknown` kan ikke brukes i React Native"
        ],
        correct: 1,
        explanation:
            "`unknown` er en tryggere variant av fleksibelt data — du må sjekke typen før du bruker verdien. `any` bypasser typesjekk helt og bør unngås. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva betyr `?` når det brukes i et interface?",
        options: [
            "At feltet er readonly",
            "At feltet er deprecated",
            "At feltet er valgfritt (optional)",
            "At feltet må være null"
        ],
        code: `interface User {
  id: number;
  name: string;
  age?: number;
}`,
        correct: 2,
        explanation:
            "`age?: number` betyr at egenskapen er valgfri. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er korrekt beskrivelse av `readonly` i et interface?",
        options: [
            "At verditypen må være en string",
            "At egenskapen bare kan settes én gang",
            "At egenskapen blir tømt ved runtime",
            "At egenskapen automatisk genererer en getter"
        ],
        code: `interface User {
  readonly createdAt: Date;
}`,
        correct: 1,
        explanation:
            "`readonly` betyr at egenskapen ikke kan endres etter at objektet er opprettet. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er riktig måte å beskrive en funksjons signatur i TypeScript?",
        options: [
            "const fn = (a, b): a + b;",
            "function fn(a: number, b: number): number { return a + b; }",
            "fn(a: number, b: number) -> number",
            "const fn: number = (a, b) => a + b;"
        ],
        correct: 1,
        explanation:
            "Man angir parametertyper og returtype eksplisitt: `(a: number, b: number): number`. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva returnerer denne funksjonen (hva er typen)?",
        options: ["never", "void", "string", "unknown"],
        code: `function throwErr(): never {
  throw new Error("Oops!");
}`,
        correct: 0,
        explanation:
            "`never` brukes for funksjoner som aldri returnerer — f.eks. fordi de kaster feil. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er en fordel med `type` fremfor `interface` ifølge pensumet?",
        options: [
            "`type` kan utvides dynamisk på tvers av filer",
            "`type` har bedre runtime-ytelse",
            "`type` brukes alltid automatisk i React Native",
            "`interface` kan ikke inneholde objekter"
        ],
        correct: 1,
        explanation:
            "I materialet fremheves at `type` har noen ytelsesfordeler og ofte brukes. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva betyr union types i TypeScript?",
        options: [
            "At en variabel kan ha flere typer samtidig",
            "At vi må velge én av flere mulige typer ved bruk",
            "At TypeScript fjernes ved runtime",
            "At variabelen blir readonly"
        ],
        code: `type Status = "active" | "inactive" | "pending";`,
        correct: 1,
        explanation:
            "En union betyr at en verdi **må være én av** de angitte typene. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva skjer i denne funksjonen når `input` er et tall?",
        options: [
            "Den feiler kompilering",
            "Den returnerer et objekt",
            "Den returnerer en streng",
            "Den returnerer aldri"
        ],
        code: `function convertValue(value: string): number;
function convertValue(value: number): string;
function convertValue(value: string | number): string | number {
  if (typeof value === "string") return parseInt(value);
  return value.toString();
}`,
        correct: 2,
        explanation:
            "Ved tall input går funksjonen til `else` og gjør tallet om til en streng. Dette er et eksempel på function overloading. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva brukes generics til i TypeScript?",
        options: [
            "Å lage variabler med uspesifiserte navn",
            "Å kunne bruke flere typer i samme prosjekt",
            "Å lage funksjoner og komponenter som er fleksible, men typesikre",
            "Å skrive kode som kun fungerer i React Native"
        ],
        correct: 2,
        explanation:
            "Generics gir fleksibilitet samtidig som vi beholder typekontroll. Særlig nyttig for komponenter og API-funksjoner. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva vil denne generiske funksjonen returnere?",
        options: [
            "Alltid en string",
            "En verdi av typen T",
            "Et Promise<T>",
            "En union type"
        ],
        code: `function identity<T>(val: T): T {
  return val;
}`,
        correct: 1,
        explanation:
            "`identity` returnerer akkurat den typen som sendes inn (T). :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva gjør en type guard som `isString` under?",
        options: [
            "Den transformerer verdien til string",
            "Den lar TypeScript vite hvilken type vi jobber med i en if-blokk",
            "Den blokkerer verdier av andre typer",
            "Den konverterer automatisk unions til single types"
        ],
        code: `function isString(v: any): v is string {
  return typeof v === "string";
}`,
        correct: 1,
        explanation:
            "Type guards hjelper TypeScript med å snevre inn union typer basert på runtime-sjekker. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva gjør `Partial<User>` ?",
        options: [
            "Gjør alle felter readonly",
            "Gjør alle felter null",
            "Gjør alle felter valgfrie",
            "Fjerner alle felter som er optional"
        ],
        correct: 2,
        explanation:
            "`Partial<T>` gjør alle egenskaper i en type valgfrie. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva vil være typen til `UserInfo`?",
        options: [
            "Returtypen til funksjonen `getUserInfo`",
            "En union av User og number",
            "En any-type basert på infer",
            "En Promise<User>"
        ],
        code: `function getUserInfo(id: number) {
  return { id, name: "User" };
}

type UserInfo = ReturnType<typeof getUserInfo>;`,
        correct: 0,
        explanation:
            "`ReturnType<T>` henter ut returtypen fra funksjonen — her `{ id: number; name: string }`. :contentReference[oaicite:15]{index=15}"
    },

    {
        id: "q16",
        type: "multiple-choice",
        question:
            "I React Native brukes ofte API-kall med async/await. Hva er korrekt TypeScript-signatur for en funksjon som henter brukerdata og returnerer et Promise<User>?",
        options: [
            "async function getUser(id: number): User {}",
            "function getUser(id: number): Promise<User> {}",
            "async function getUser(id: number): Promise<User> {}",
            "function getUser(id: number): User | Promise<User>"
        ],
        correct: 2,
        explanation:
            "Async-funksjoner returnerer alltid et Promise, og vi angir returtypen eksplisitt som `Promise<User>`. :contentReference[oaicite:16]{index=16}"
    }
];

export const ulearn_3_introTypescript_rn_kml = {
    id: "ulearn_3_introTypescript_rn_kml",
    title: "TypeScript for React Native – KML",
    description:
        "En quiz som tester TypeScript-begreper relevante for React Native: interfaces, types, generics, utility types, async/await, type guards m.m.",
    theme: ["typescript", "react-native", "async"],
    questions: [...questions]
};
