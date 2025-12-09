const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Case: Du får følgende API-design fra et annet team. Hva er det største problemet?",
        code: `
GET /api/getAllUsers
POST /api/createUser
DELETE /api/deleteUser?id=5
    `,
        options: [
            "Bruken av HTTP-metoder er feil",
            "At handlinger (getAll, create, delete) ligger i URL i stedet for å bruke RESTful ressurser",
            "At URL-er ikke bruker JSON",
            "At DELETE ikke støttes via HTTP"
        ],
        correct: 1,
        explanation:
            "Pensum viser eksplisitt at REST ikke skal ha handlinger i URL. Metoden representerer handlingen."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Vil dette REST-endepunktet være korrekt?",
        code: `
PUT /api/users
Body: { "id": 10, "name": "New Name" }
    `,
        options: [
            "Ja, PUT kan oppdatere flere ressurser",
            "Nei, PUT skal peke på en spesifikk ressurs: /users/10",
            "Ja, så lenge body inneholder id",
            "Bare hvis det dokumenteres i OpenAPI"
        ],
        correct: 1,
        explanation:
            "PUT oppdaterer en spesifikk ressurs, ikke en collection."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Case: APIet tilbyr dette endepunktet:",
        code: `
GET /api/users?limit=10000
    `,
        options: [
            "Dette er fint – klienten bør kunne hente alt på en gang",
            "Kan være farlig: uten rate limiting og paging kan man eksponere store datamengder eller DOS seg selv",
            "GET støtter ikke query parameters",
            "Dette er et sikkerhetsproblem kun for POST-kall"
        ],
        correct: 1,
        explanation:
            "API bør håndtere paging og rate limiting. Pensum (proxy/throttling) omtaler dette."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Du finner dette i app-koden. Hva er bug’en?",
        code: `
async function loadUsers() {
  let res = fetch("/api/users")
  const json = await res.json()
  return json
}
    `,
        options: [
            "fetch må stå inni useEffect",
            "await mangler foran fetch – res er en Promise",
            "json() må kalles uten await",
            "GET må være POST"
        ],
        correct: 1,
        explanation:
            "fetch returnerer Promise. res.json() vil feile fordi res ikke er resolved."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Case: Et API returnerer dette ved feil:",
        code: `
500 Server Error
{"message": "Something broke"}
    `,
        options: [
            "Dette er god feilhåndtering",
            "Feilmeldingen mangler felt som 'reason', 'help', 'errorCode' og konsistent struktur som pensum anbefaler",
            "JSON bør sendes i HTML-format",
            "Feil skal aldri sendes til klient"
        ],
        correct: 1,
        explanation:
            "Pensum sier API-feil bør følge en konsistent struktur som klienter kan tolke."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Vil denne API-designen fungere etter beste praksis?",
        code: `
GET /api/products
GET /api/product/1
GET /api/products/find/1
    `,
        options: [
            "Ja, fleksibilitet er bra",
            "Nei, det er inkonsistent mellom /product og /products",
            "Ja, så lenge frontend er rask nok",
            "Ja, hvis serveren er dokumentert"
        ],
        correct: 1,
        explanation:
            "Pensum viser at blanding av entall/flertall og actions i URL skaper dårlig API-design."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Case: Frontend mottar svært mange 304-responses. Hva betyr dette?",
        options: [
            "Caching fungerer – ressursen er ikke endret siden sist",
            "APIet er nede",
            "304 betyr feil med tokens",
            "API må redesignes"
        ],
        correct: 0,
        explanation:
            "304 Not Modified betyr at klienten kan bruke cached innhold."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Case: En utvikler foreslår dette for å slette bruker:",
        code: `
POST /api/users/delete
    `,
        options: [
            "Helt riktig – POST er fleksibel",
            "Dårlig praksis – handling i URL. DELETE /users/:id skal brukes",
            "Bare feil hvis backend er skrevet i Node",
            "Dette er standard i REST"
        ],
        correct: 1,
        explanation:
            "Actions skal ikke ligge i URL. Metoden uttrykker handlingen."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Case: Du mottar ofte 429 Too Many Requests. Hva er riktig tiltak?",
        options: [
            "Bytte metode fra GET til POST",
            "Implementere exponential backoff og forstå rate limiting-reglene til APIet",
            "Cache responsene på server",
            "Slå av throttling"
        ],
        correct: 1,
        explanation:
            "Pensum om proxy og throttling forklarer at klienten må justere kallfrekvens (retry/backoff)."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Vil denne koden fungere korrekt?",
        code: `
const res = await fetch("/api/products", {
  method: "POST",
  body: { name: "Phone" } // <--- ikke string
})
    `,
        options: [
            "Ja, fetch serialiserer body automatisk",
            "Nei, body må serialiseres manuelt (JSON.stringify)",
            "Ja, så lenge serveren er riktig konfigurert",
            "Bare feil i React Native"
        ],
        correct: 1,
        explanation:
            "fetch tar kun strenger (eller streams) som body. JSON må være serialisert."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Case: Backend har endret APIets struktur. Hva er riktig prosedyre i et velutformet REST API?",
        options: [
            "Bryte eksisterende enpoints og oppdatere dokumentasjonen",
            "Introdusere versjonering, f.eks. /v2/ og beholde /v1/ intakt",
            "Bare vise Deprecated i dokumentasjonen",
            "Tvinge alle klienter til å oppdatere umiddelbart"
        ],
        correct: 1,
        explanation:
            "Pensum beskriver versjonering som nødvendig for stabilitet over tid."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Case: APIet ditt krever API-nøkkel. Er dette sikkert?",
        options: [
            "Ja, så lenge API-nøkkelen ligger i EXPO_PUBLIC_ variabler",
            "Nei, EXPO_PUBLIC_ betyr at nøkkelen eksponeres til klienten og ikke er trygg",
            "Ja, React Native skjuler API-nøkler automatisk",
            "Ja, så lenge du bruker HTTPS"
        ],
        correct: 1,
        explanation:
            "Klientsiden kan ikke beskytte hemmeligheter. Dette nevnes i autentiseringspensum også."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Case: Noen foreslår å bruke dette URL-designet for å søke:",
        code: `
GET /api/products/search?minPrice=100&maxPrice=500
    `,
        options: [
            "Dårlig praksis – søk må ligge i body",
            "Helt ok – filtrering via querystring er standard REST-mønster",
            "Feil – querystrings brukes kun for autentisering",
            "Feil metode – PATCH må brukes"
        ],
        correct: 1,
        explanation:
            "Pensum viser at søk og filtrering gjøres via query parameters."
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Case: Debugging. Dette gir 400 Bad Request på server:",
        code: `
await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" }
})
    `,
        options: [
            "Fordi server ikke støtter POST",
            "Fordi body mangler – Content-Type sier JSON forventes",
            "Fordi URL må være /users/post",
            "Det må brukes PATCH"
        ],
        correct: 1,
        explanation:
            "Hvis Content-Type = JSON må body faktisk være JSON."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Case: Du skal forbedre APIet. Hva er god REST-design basert på pensum?",
        options: [
            "Bruk alltid POST – det er mest fleksibelt",
            "La hver ressurs ha et eget endepunkt, bruk konsistent navngivning, og gi klare responser og feilkoder",
            "Legg mest mulig i URL for debugging",
            "Bruk bare HTTP 200 for alle responser – enklere for klienter"
        ],
        correct: 1,
        explanation:
            "Pensum oppsummerer at konsiste ressurser, god responsstruktur, og riktig bruk av metoder gir robust API."
    }
];

export const ulearn_api_adv_kml = {
    id: "ulearn_api_adv_kml",
    title: "Avansert API-design & Debugging – Casebasert Quiz - KML",
    description:
        "En avansert quiz som tester evnen til å avdekke dårlig API-design, identifisere sikkerhetsproblemer, forstå REST-prinsipper, designe gode ressursstrukturer og debugge praktiske problemer.",
    theme: [
        "api",
        "rest",
    ],
    questions: [...questions]
};
