const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Case: Du bygger en mobilapp med brukerinnlogging. Hvilken påstand beskriver best forskjellen mellom autentisering og autorisasjon?",
        options: [
            "Autentisering handler om hva du kan gjøre; autorisasjon handler om hvem du er",
            "Autentisering handler om å bekrefte hvem brukeren er; autorisasjon handler om hvilken tilgang brukeren skal ha",
            "Autentisering og autorisasjon betyr det samme",
            "Autorisering skjer før autentisering"
        ],
        correct: 1,
        explanation:
            "Autentisering = identitet. Autorisasjon = hvilke rettigheter brukeren får. Pensum beskriver dette eksplisitt. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Case: I en mobilapp beskytter du skjermer på klientsiden. Hva må du være bevisst på?",
        options: [
            "At klientside-guards er like sikre som serverside-autorisering",
            "At klientside-autorisering ikke kan hindre angrep fra manipulerte klienter og må støttes av serveren",
            "At klientside-guards fjerner behovet for servervalidering",
            "At guards kun fungerer hvis appen er offline"
        ],
        correct: 1,
        explanation:
            "Pensum understreker at klientside-guards ikke er sikre og må kombineres med server-beskyttelse. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Vil dette fungere? AuthContext har isAdmin definert slik:",
        code: `isAdmin: user?.role === ROLES.ADMIN`,
        options: [
            "Ja, dette fungerer så lenge user eksisterer",
            "Nei, fordi user må være undefined",
            "Nei, isAdmin må være en funksjon",
            "Ja, men kun hvis rollene kommer fra backend"
        ],
        correct: 0,
        explanation:
            "Pensum viser samme implementasjon; det fungerer fordi optional chaining håndterer user=null. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Case: RootLayout omdirigerer admin-brukere når appen lastes. Hva er en vanlig årsak til at appen havner i en evig redirect-loop?",
        options: [
            "isAdmin er en boolean",
            "useEffect avhenger av state som endrer seg i redirecten",
            "Router.replace fungerer ikke i Expo Router",
            "SplashScreen hindrer navigasjon"
        ],
        correct: 1,
        explanation:
            "Hvis redirect logikken trigges for ofte, kan layout remountes → redirect kjører igjen. Pensum forklarer dette i 'Issues'. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Case: Du implementerer login slik:",
        code: `await login(email, password)
router.replace("/")`,
        options: [
            "Dette fungerer alltid fint",
            "Kan være problematisk fordi login setter state, som trigger RootLayout på nytt og kan overskrive bruker",
            "Blir ignorert av Expo Router",
            "Replace må være async for å fungere"
        ],
        correct: 1,
        explanation:
            "Pensum viser at login → redirect → RootLayout reload → getUser kan resette user. Vanlig bug. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: Du vil beskytte kun noen skjermer. Hva gir minst boilerplate og god DX?",
        options: [
            "Lage egendefinerte hooks og wrappe alle skjermer manuelt",
            "Bruke <Stack.Protected guard={...}> i Expo Router",
            "Putte alt bak en eneste global if-sjekk",
            "Bruke bare CSS for å skjule skjermene"
        ],
        correct: 1,
        explanation:
            "Stack.Protected er spesifikt laget for rute-guards og introdusert i pensum. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Vil denne Admin-wrapperen fungere korrekt?",
        code: `useEffect(() => {
  if (isLoaded && !isAdmin) router.replace("/login")
}, [isAdmin, isLoaded])`,
        options: [
            "Ja, den fungerer som forventet",
            "Nei, den vil alltid redirecte selv admin-brukere",
            "Nei, router må være i dependency array",
            "Ja, men loading state må også sjekkes"
        ],
        correct: 3,
        explanation:
            "Pensum understreker at guards må ta hensyn til isLoading/isLoaded for å unngå unødige redirects. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q8",
        type: "true-false",
        question:
            "Påstand: Det er trygt å lagre tokens eller sensitive hemmeligheter i EXPO_PUBLIC_ variabler.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Pensum advarer eksplisitt: EXPO_PUBLIC_ betyr synlig kode, ikke trygt for secrets. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Case: Appen bruker deep linking for auth callback. Hva må du ha på plass for at dette skal fungere i en mobilapp?",
        options: [
            "En vanlig nettleser i appen",
            "Oppsett av scheme i app.json + development build",
            "Kun Expo Go",
            "Router.push må være async"
        ],
        correct: 1,
        explanation:
            "Deep linking krever scheme og development build. Pensum bruker 'studentidapp://' som eksempel. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Vil dette fungere? getUser returnerer en Promise, men du bruker den slik:",
        code: `const user = getUser()
setUser(user.data)`,
        options: [
            "Ja, getUser returnerer alltid data direkte",
            "Nei, data finnes ikke før Promise resolves",
            "Ja, hvis user ikke er admin",
            "Kun hvis getUser er synkron"
        ],
        correct: 1,
        explanation:
            "Alle appwrite-kall er async. Du må await responsen. Pensum understreker dette. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Case: Under logout blir brukeren logget ut, men umiddelbart logget inn igjen automatisk. Hva er en sannsynlig årsak?",
        options: [
            "Logout virker ikke i Expo",
            "RootLayout laster getUser igjen og overskriver logout-state",
            "Router.replace må være push",
            "State må være global variabel"
        ],
        correct: 1,
        explanation:
            "Pensum beskriver denne bugen eksakt — nytt fetchUser resetter user etter logout. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Case: Du implementerer role-baserte rettigheter. Hva er mest robust?",
        options: [
            "Hardkode rolletilgang som strenger i komponenter",
            "Ha roller som type-safe enum/const-objekt i én definert kilde",
            "Lagre rolle i AsyncStorage",
            "Bare lese rollen fra frontend"
        ],
        correct: 1,
        explanation:
            "Pensum anbefaler typed ROLES-objekt for å unngå bugs. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Case: Guards beskytter kun UI, ikke data. Hva må du fortsatt gjøre?",
        options: [
            "Ikke noe – klientside-guards er nok",
            "Sikre backend-endepunkter med serverside autorisasjon",
            "Lagre alt på klienten",
            "Bruke useEffect for å sjekke rolle"
        ],
        correct: 1,
        explanation:
            "Pensum understreker at klientsiden ikke stopper misbrukere — serveren må validere tilgang. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Vil denne AuthProvider-funksjonen fungere?",
        code: `const login = async (email, password) => {
  setLoading(true)
  const result = loginAndGetUser(email, password)
  setUser(result.data)
  setLoading(false)
}`,
        options: [
            "Ja, den er korrekt",
            "Nei, loginAndGetUser returnerer en Promise som må await'es",
            "Ja, fordi React venter på async",
            "Den fungerer kun i web"
        ],
        correct: 1,
        explanation:
            "Manglende await vil sette user = undefined og føre til race conditions. Pensum viser riktig implementasjon. :contentReference[oaicite:15]{index=15}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Case: Du tester registrering. Admin-brukere sendes til /list, andre til '/'. Hvordan håndterer du dette best i en ekte app?",
        options: [
            "Hardkode if-setninger i hver skjerm",
            "Legg redirects i AuthProvider etter vellykket login/register",
            "Bruk router.replace i et useEffect i skjermen",
            "La brukeren velge manuelt"
        ],
        correct: 1,
        explanation:
            "Pensum-flyten viser at dette ligger i AuthProvider/RootLayout for å holde skjermene rene. :contentReference[oaicite:16]{index=16}"
    },

    {
        id: "q16",
        type: "true-false",
        question:
            "Påstand: Development builds trengs for alt som bruker native kode, deep linking eller appwrite SDK.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Dette er eksplisitt omtalt i pensum om dev builds og deep linking. :contentReference[oaicite:17]{index=17}"
    },

    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Case: Du ønsker å debugge hvorfor brukeren er null selv etter login. Hva er et sannsynlig steg?",
        options: [
            "Sjekke at AuthProvider faktisk wrapper hele appen",
            "Starte appen på nytt med hard reload",
            "Rydde node_modules",
            "Kalle login flere ganger"
        ],
        correct: 0,
        explanation:
            "Om konteksten ikke wrapper alle ruter, vil state forsvinne. Vanlig feil i React/Expo Router."
    },

    {
        id: "q18",
        type: "multiple-choice",
        question:
            "Case: Etter innlogging vil du vise en loader mens brukerdata hentes. Hva er riktig strategi?",
        options: [
            "Setter isLoaded = true umiddelbart",
            "Bruke en kombinert loader (isLoading + isLoaded) slik pensum viser",
            "Kun sette isLoading",
            "Hente brukerdata i hver eneste skjerm"
        ],
        correct: 1,
        explanation:
            "Pensum viser at man må differensiere mellom 'vi laster' og 'vi er ferdige med å sjekke auth'. :contentReference[oaicite:18]{index=18}"
    }
];

export const ulearn_23_24_autentisering_rn_kml = {
    id: "ulearn_23_24_autentisering_rn_kml",
    title: "L23/L24 - Autentisering & Roller i React Native – Casebasert Quiz - KML",
    description:
        "En praktisk quiz om autentisering, roller, guards, deep linking, debugging og best practices. Basert på konseptene i Autentisering del 1 og 2, men med generelle problemstillinger.",
    theme: [
        "auth",
        "expo",
    ],
    questions: [...questions]
};
