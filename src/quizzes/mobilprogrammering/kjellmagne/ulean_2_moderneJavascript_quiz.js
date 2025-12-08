const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "I moderne JavaScript brukt sammen med React Native, hva er hovedforskjellen på `let` og `const`?",
        options: [
            "`let` kan bare brukes i funksjoner, `const` bare i globale variabler",
            "`let` kan redeklareres i samme scope, `const` kan ikke redeklareres",
            "`let` kan reassignes, `const` kan ikke reassignes",
            "Det er ingen forskjell, de er alias for `var`"
        ],
        code: "let count = 1; const appName = 'MyApp';",
        correct: 2,
        explanation:
            "`let` lar deg endre verdien (reassign), mens `const` låser bindingen til én verdi/reference. I React/React Native bruker vi ofte `const` som default for å unngå utilsiktede endringer. :contentReference[oaicite:1]{index=1}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva vil skje når denne koden kjøres i en React Native-fil (for eksempel inne i en event-handler)?",
        options: [
            "Det logges `Clicked` én gang, med verdien 3",
            "Det logges `Clicked` tre ganger: 0, 1 og 2",
            "Koden krasjer fordi `i` er en `const`",
            "Koden krasjer fordi `console.log` ikke kan brukes i React Native"
        ],
        code:
            "for (let i = 0; i < 3; i++) {\n  console.log('Clicked', i);\n}",
        correct: 1,
        explanation:
            "`let` er blokk-scope og endres i hver iterasjon. Løkken kjører 3 ganger (0, 1, 2), så det logges tre linjer. Dette er helt gyldig i React Native (loggen vises i Metro/terminal eller dev-tools). :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Du vil lage en tekststreng basert på en brukers navn i en React-komponent. Hvilken variant bruker moderne JavaScript (template literals)?",
        options: [
            `"Hello,  + name + !"`,
            `"Hello, \${name}!"`,
            "`Hello, ${name}!`",
            "`Hello, 'name'!`"
        ],
        code:
            "const name = 'Lars';\n// Hvilken linje under er mest idiomatisk i moderne JS?\n// A, B, C eller D",
        correct: 2,
        explanation:
            "Moderne JavaScript bruker template literals: backticks + `${}`. Riktig syntaks er `const message = `Hello, ${name}!`;`. Alternativ C reflekterer dette. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "I React Native er det vanlig å destructure props. Hva vil bli logget til konsollen i eksempelet under?",
        options: [
            "`Title: undefined`",
            "`Title: My screen`",
            "`Title: [object Object]`",
            "Koden krasjer fordi `props` ikke kan destructures i funksjonsparameter"
        ],
        code: "const ScreenTitle = ({ title }) => {\n  console.log('Title:', title);\n  return null;\n};\n\n<ScreenTitle title=\"My screen\" />;",
        correct: 1,
        explanation:
            "Props destruktureres direkte i funksjonsparameteren: `{ title }`. Når komponenten kalles med `title=\"My screen\"`, vil `title` være strengen `\"My screen\"`, og det logges `Title: My screen`. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Du har en state-variabel `items` (array) i React Native og vil legge til et nytt element uten å mutere originalen. Hvilken implementasjon er mest korrekt og idiomatisk?",
        options: [
            "items.push(newItem); setItems(items);",
            "const updated = items; updated.push(newItem); setItems(updated);",
            "const updated = items.concat(newItem); setItems(updated);",
            "items[items.length] = newItem; setItems(items);"
        ],
        code:
            "const [items, setItems] = useState(['a', 'b']);\nconst newItem = 'c';\n// Hvilken linje under bør du bruke i stedet for kommentar?\n// ...",
        correct: 2,
        explanation:
            "I React skal vi unngå å mutere eksisterende arrays/objekter. `concat` og spread (`[...items, newItem]`) lager en ny array. Alternativ C lager en ny array og setter state til denne. Det er derfor mest korrekt i React-kontekst."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Du vil rendre en liste med produkter i en React Native-komponent. Hvilken bruk av `map` er korrekt og vanligst?",
        options: [
            "Bruke `forEach` til å pushe komponenter inn i et separat array",
            "Bruke `map` til å transformere hvert produkt til en JSX-komponent",
            "Bruke `filter` til å filtrere bort `undefined` komponenter",
            "Bruke `reduce` til å slå sammen alle produktene til én komponent"
        ],
        code: "const products = [\n  { id: 1, name: 'Phone' },\n  { id: 2, name: 'Laptop' },\n];\n\n// Hvilken tilnærming er mest idiomatisk?\n// return (\n//   <View>\n//     { /* render produkter her */ }\n//   </View>\n// );",
        correct: 1,
        explanation: "Array.prototype.map brukes til å transformere en liste til en ny liste, f.eks. fra data-objekter til JSX-komponenter: {products.map(product => <Text key={product.id}>{product.name}</Text>)}. Dette er svært vanlig i React. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva blir rekkefølgen på utskriftene i konsollen når denne asynkrone koden kjøres?",
        options: [
            `"1" -> "3" -> "2"`,
            `"1" -> "2" -> "3"`,
            `"2" -> "1" -> "3"`,
            `"3" -> "2" -> "1"`
        ],
        code:
            "console.log('1');\n\nsetTimeout(() => {\n  console.log('2');\n}, 0);\n\nconsole.log('3');",
        correct: 0,
        explanation:
            "`setTimeout` er asynkron og legges på event queue. Først kjører synkron kode: `1`, deretter `3`. Etterpå håndteres callbacken fra `setTimeout`, så `2` logges til slutt. Rekkefølgen blir derfor 1, 3, 2. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q8",
        type: "true-false",
        question:
            "Påstand: En funksjon som er merket med `async` vil alltid returnere et `Promise`, selv om du bare `return 'Hello'` inni funksjonen.",
        options: ["Sant", "Usant"],
        code:
            "async function greet() {\n  return 'Hello';\n}\n\nconst value = greet(); // Hva er typen til value?",
        correct: 0,
        explanation:
            "En `async` funksjon *wraper* returverdien i et `Promise`. I eksempelet vil `greet()` returnere `Promise<string>`, ikke selve strengen. Dette er sentralt når vi bruker `async/await` i React Native for å hente data. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Du har en modul `utils.js` med både default og named exports. Hvilken import-syntaks er korrekt?",
        options: [
            "import { default as utils, formatName } from './utils';",
            "import utils, { formatName } from './utils';",
            "import { utils, formatName } from './utils';",
            "import * as utils, formatName from './utils';"
        ],
        code:
            "// utils.js\nexport const formatName = (firstName, lastName) => `${firstName} ${lastName}`;\nexport default function log(message) {\n  console.log('[LOG]:', message);\n}\n\n// Hvilken av importene under er riktig?\n// A, B, C eller D",
        correct: 1,
        explanation:
            "Når en modul har både default og named exports, brukes syntaksen `import defaultName, { named } from '...'`. Her er det `import log, { formatName } from './utils';` som er den riktige formen. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Du får data fra et API i en React Native-app, men `user.profile` kan være `null`. Hvilken linje under bruker moderne JavaScript på en trygg måte med optional chaining?",
        options: [
            "const city = user.profile.address.city;",
            "const city = user?.profile.address.city;",
            "const city = user.profile?.address.city;",
            "const city = user?.profile?.address?.city ?? 'Unknown';"
        ],
        code:
            "const user = {\n  profile: null\n};\n\n// Hvilken linje sikrer at vi ikke får runtime-feil selv om profile eller address mangler?",
        correct: 3,
        explanation:
            "Optional chaining (`?.`) lar oss stoppe videre oppslag dersom noe er `null` eller `undefined`. Kombinert med nullish coalescing (`??`) kan vi gi en default-verdi. `const city = user?.profile?.address?.city ?? 'Unknown';` er trygg og idiomatisk i moderne JS/React-kode."
    }
];

export const ulearn_2_moderneJavascript = {
    id: "quiz-modern-javascript-kml",
    title: "L2 - Moderne JavaScript - KML",
    description:
        "En quiz som tester moderne JavaScript-konsepter som er viktige for React og mobilutvikling med React Native: variabler, destructuring, spread, array-metoder, moduler og asynkron kode.",
    theme: ["javascript", "async"],
    questions: [...questions]
};
