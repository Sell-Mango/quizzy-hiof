const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du vil hente data fra et API i en React Native-komponent når komponenten rendres første gang. Hvilken tilnærming er mest idiomatisk med async/await?",
        options: [
            "Kalle `fetch` direkte i komponent-bodyen",
            "Bruke `useEffect` med en async funksjon inni for å hente data",
            "Bruke `setTimeout` for å forsinke `fetch`-kallet",
            "Bruke en global variabel til å lagre fetch-responsen"
        ],
        code: `const MyScreen = () => {
  const [data, setData] = useState(null);

  // Hvor bør asynkron henting av data plasseres?
  return <View>{/* ... */}</View>;
};`,
        correct: 1,
        explanation:
            "I React/React Native henter vi data i sideeffekter, typisk i en `useEffect` som kalles ved mount. Da kan vi bruke async/await inne i effekten til å kalle `fetch` og oppdatere state."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er den korrekte måten å bruke async/await med `fetch` i en React Native-komponent?",
        options: [
            "await fetch(...) må alltid stå utenfor funksjoner",
            "fetch() returnerer ikke et Promise, så async/await kan ikke brukes",
            "Du må wrappe fetch i en ny Promise for å bruke await",
            "fetch() returnerer et Promise, så du kan await'e både fetch og response.json()"
        ],
        code: `async function loadUsers() {
  const response = await fetch('https://example.com/users');
  const data = await response.json();
  return data;
}`,
        correct: 3,
        explanation:
            "`fetch` returnerer et Promise. Vi bruker `await` både på `fetch(...)` og på `response.json()` for å få ut JSON-data på en lesbar måte."
    },

    {
        id: "q3",
        type: "true-false",
        question:
            "Påstand: En funksjon merket med `async` vil alltid returnere et Promise, også i React Native.",
        options: ["Sant", "Usant"],
        code: `async function getNumber() {
  return 5;
}

const result = getNumber(); // Hva er typen?`,
        correct: 0,
        explanation:
            "`async` gjør at funksjonen alltid returnerer et Promise. `getNumber()` vil være et `Promise<number>`, ikke tallet direkte."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Du har lastet inn en liste med produkter i state, og vil vise kun de produktene som er på lager. Hvilken array-metode passer best?",
        options: [
            "map",
            "filter",
            "reduce",
            "forEach"
        ],
        code: `const [products, setProducts] = useState([
  { id: 1, name: 'Phone', inStock: true },
  { id: 2, name: 'Tablet', inStock: false },
]);

// Hvilken metode bør brukes for å lage en liste med bare products der inStock === true?`,
        correct: 1,
        explanation:
            "`filter` brukes når du vil plukke ut elementer som matcher en betingelse, f.eks. `products.filter(p => p.inStock)`."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva blir resultatet av funksjonen `getTitles` under?",
        options: [
            "En array med hele produkt-objekter",
            "En array med kun navn (strings)",
            "En enkelt streng med alle navn sammenkoblet",
            "Et tall som representerer antall produkter"
        ],
        code: `const products = [
  { id: 1, title: 'Phone' },
  { id: 2, title: 'Laptop' },
];

function getTitles(items) {
  return items.map(item => item.title);
}

const result = getTitles(products);`,
        correct: 1,
        explanation:
            "`map` transformerer hvert element. Her plukker vi ut `title`, så resultatet blir `['Phone', 'Laptop']` – en array med strenger."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Du vil legge til et nytt element i en liste lagret i state, uten å mutere original-arrayet. Hvilket alternativ er riktig og idiomatisk i React Native?",
        options: [
            "items.push(newItem); setItems(items);",
            "setItems(items.push(newItem));",
            "setItems([...items, newItem]);",
            "items[items.length] = newItem; setItems(items);"
        ],
        code: `const [items, setItems] = useState(['a', 'b']);
const newItem = 'c';

// Hvilken linje under bør brukes for å oppdatere state?`,
        correct: 2,
        explanation:
            "I React må vi unngå å mutere state direkte. `setItems([...items, newItem])` lager en ny array basert på den gamle + det nye elementet."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva blir rekkefølgen på loggene i konsollen når denne koden kjøres?",
        options: [
            `"start" -> "after await" -> "end"`,
            `"start" -> "end" -> "after await"`,
            `"after await" -> "start" -> "end"`,
            `"end" -> "start" -> "after await"`
        ],
        code: `async function load() {
  console.log('start');
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('after await');
}

load();
console.log('end');`,
        correct: 1,
        explanation:
            "Synkron kode kjører først: `start`, så `end`. Etter await (når Promise resolves) logges `after await`. Rekkefølgen er derfor `start`, `end`, `after await`."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Du henter en liste fra et API og vil beregne totalpris på klienten. Hvilken array-metode er mest egnet til å summere priser?",
        options: [
            "map",
            "filter",
            "reduce",
            "find"
        ],
        code: `const items = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
];

const total = ???; // Hva skal stå her?`,
        correct: 2,
        explanation:
            "`reduce` brukes til å akkumulere en verdi (f.eks. sum). Eksempel: `items.reduce((sum, item) => sum + item.price, 0)` gir totalprisen."
    },

    {
        id: "q9",
        type: "true-false",
        question:
            "Påstand: `Promise.all` kan være nyttig i en React Native-app når du vil hente flere ressurser parallelt (for eksempel brukere og produkter samtidig).",
        options: ["Sant", "Usant"],
        code: `const usersPromise = fetch('https://api.example.com/users');
const productsPromise = fetch('https://api.example.com/products');

const [usersRes, productsRes] = await Promise.all([
  usersPromise,
  productsPromise,
]);`,
        correct: 0,
        explanation:
            "`Promise.all` lar deg kjøre flere async-operasjoner parallelt og vente til alle er ferdige. Det er typisk i apps hvor du trenger flere datasett samtidig."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Du har en FlatList som viser `todos`. Når brukeren markerer en todo som ferdig, vil du oppdatere ett objekt i arrayet på en immutabel måte. Hvilket alternativ er mest korrekt?",
        options: [
            "Finne todoen og sette `todo.done = true` direkte, så kalle setTodos(todos)",
            "Kopiere arrayet med spread, så mutere objektet i kopien og kalle setTodos",
            "Bruke `map` til å lage en ny array der kun matchende todo får endret `done`",
            "Bruke `filter` til å fjerne alle todos som har `done === false`"
        ],
        code: `const [todos, setTodos] = useState([
  { id: 1, text: 'Learn RN', done: false },
  { id: 2, text: 'Build app', done: false },
]);

// fullførTodo(id) skal sette done = true for riktig todo`,
        correct: 2,
        explanation:
            "Den vanligste tilnærmingen er å bruke `map` til å lage en ny array, der vi returnerer et nytt objekt for todoen som skal oppdateres: `setTodos(todos.map(todo => todo.id === id ? {...todo, done: true} : todo));`."
    }
];

export const js_rn_async_array_kml = {
    id: "quiz-async-and-arrays_kml",
    title: "Asynkron JavaScript og array-metoder i React Native - KML",
    description:
        "Quiz som kombinerer asynkron JavaScript (async/await, Promise, fetch) med array-metoder (map, filter, reduce, immutabilitet) slik de brukes i React Native.",
    theme: ["async", "javascript", "react-native"],
    questions: [...questions]
};
