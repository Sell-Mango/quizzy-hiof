const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Case: Etter login kaller du getUser() i RootLayout. Noen ganger overskrives den ferske login-verdien med null. Hva er den mest sannsynlige årsaken?",
        options: [
            "getUser returnerer alltid null første gang",
            "Race condition: login setter user, men RootLayout sin async getUser avsluttes senere og skriver over state",
            "router.replace blokkerer state",
            "Expo Router støtter ikke async-kall i layout"
        ],
        correct: 1,
        explanation:
            "Dette er en vanlig auth-race condition: async fetching etter login kan overskrive bruker-state."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Vil denne koden fungere som forventet?",
        code: `async function login(email, password) {
  setLoading(true)
  const user = client.login(email, password) // <-- mangler await
  setUser(user)
  setLoading(false)
}`,
        options: [
            "Ja, user blir riktig satt",
            "Nei, user blir satt til en Promise og kan trigge bugs i redirect-logikk",
            "Ja, fordi async funksjoner alltid venter automatisk",
            "Kun på Android"
        ],
        correct: 1,
        explanation:
            "Uten await blir user = Promise, ikke brukerdata → fører til 'undefined user' og redirect-feil."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Case: Appen bruker denne koden for redirect:",
        code: `useEffect(() => {
  if (isLoaded && !user) router.replace("/login")
}, [user]);`,
        options: [
            "Sikkert og riktig",
            "Kan føre til redirect-loop hvis user er midlertidig null under loading",
            "onReplace må brukes i stedet for replace",
            "Kun feil hvis user har rolle ADMIN"
        ],
        correct: 1,
        explanation:
            "Hvis user er null mens loading fortsatt pågår, trigges redirect unødvendig → loop."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Case: Logout fungerer, men appen logger deg umiddelbart inn igjen. Hva er et sannsynlig problem?",
        options: [
            "Logout sletter ikke cookies automatisk",
            "En getUser() kall i RootLayout kjører etter logout og setter user tilbake",
            "router.replace må være push",
            "Brukeren har feil rolle"
        ],
        correct: 1,
        explanation:
            "Et race-condition: logout setter user=null, men en senere async getUser setter user til den gamle verdien igjen."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Vil denne feilhåndteringen fungere?",
        code: `try {
  await client.login(email, pass)
  return { ok: true }
} catch (error) {
  return error // <-- returnerer rå error
}`,
        options: [
            "Ja, det er anbefalt å returnere error direkte",
            "Nei, error-objektet kan inneholde sensitive detaljer og mangler struktur — bør pakkes i et kontrollert format",
            "Ja, men bare i TypeScript",
            "Kun hvis error er string"
        ],
        correct: 1,
        explanation:
            "Pensum foreslår uniform Result-type. Rå errors kan være ustrukturerte og vanskelige å håndtere."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: Du bruker en callback for registrering:",
        code: `async function handleRegister() {
  await registerUser(data)
  router.replace("/")
}`,
        options: [
            "Trygt og korrekt",
            "Kan være feil dersom registerUser selv kaller login eller henter bruker — router kan trigges før state er satt",
            "router.replace må være inni registerUser",
            "registerUser må være memoized"
        ],
        correct: 1,
        explanation:
            "Hvis registerUser oppdaterer user-state async → router.replace kan trigge for tidlig → feil visning."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Vil denne rollen sjekkes riktig?",
        code: `const isAdmin = user.role === "ADMIN"`,

        options: [
            "Ja, men bare hvis user aldri er null",
            "Nei, dette vil kaste feil hvis user er null i en av render-syklusene",
            "Ja, optional chaining er ikke nødvendig",
            "Ja, React håndterer dette automatisk"
        ],
        correct: 1,
        explanation:
            "user kan være null før autentisering er ferdig → user.role vil kaste feil."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Case: getUser() kalles to steder: i RootLayout og i AuthProvider. Appen gjør dobbelt arbeid og noen ganger overskrives state. Hva er riktig tiltak?",
        options: [
            "Flytte alt inn i RootLayout",
            "Flytte alt inn i AuthProvider og stoppe kall i RootLayout",
            "Beholde begge for robusthet",
            "Kun bruke useEffect"
        ],
        correct: 1,
        explanation:
            "Pensum viser at du må Velge ETT sted som 'source of truth' — dobbelt async skaper race conditions."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Vil denne guard-koden være trygg?",
        code: `if (user && !user.roles.includes("ADMIN")) {
  router.replace("/forbidden")
}`,
        options: [
            "Trygg og korrekt",
            "Kan gi feil fordi roles kanskje ikke er lastet enda — user finnes, men user.roles er undefined",
            "Router.replace kan ikke brukes i guards",
            "Ja, hvis roles er en string"
        ],
        correct: 1,
        explanation:
            "User kan være delvis lastet (shape ikke klar) → roles undefined → crash eller feil redirect."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Case: Du håndterer login slik:",
        code: `async function login(email, pass) {
  const res = await client.login(email, pass)
  setUser(res.user)
  return res
}`,
        options: [
            "Trygt og riktig",
            "Kan være feil fordi hvis to login-calls trigges samtidig, kan det siste som fullfører 'vinne' og sette feil state",
            "React garanterer at async-calls alltid kjører sekvensielt",
            "Dette fungerer bare i development"
        ],
        correct: 1,
        explanation:
            "To async login-kall → 'last write wins' → klassisk race condition."
    }
];

export const ulearn_23_24_autentisering_adv_rn_kml = {
    id: "ulearn_23_24_autentisering_adv_rn_kml",
    title: "L23/L24 - Avansert Autentiseringsquiz – Race Conditions, Callbacks, Feilhåndtering - KML",
    description:
        "En eksamensrelevant quiz om race conditions, async bugs, guards, redirect-feil, rollesjekk-problemer og robust feilhåndtering.",
    theme: [
        "auth",
        "expo",
        "appwrite",
    ],
    questions: [...questions]
};
