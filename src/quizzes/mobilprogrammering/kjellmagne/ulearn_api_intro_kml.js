const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du skal designe et REST API. Hvilken av disse praksisene følger spec-driven design best?",
        options: [
            "Bygge backend først og justere APIet etterpå",
            "Starte med å skrive kode og dokumentere til slutt",
            "Spesifisere endepunkt, datatyper, response-format og tester FØR man skriver kode",
            "Lage dynamiske endepunkter som endres etter behov uten spesifikasjon"
        ],
        correct: 2,
        explanation:
            "Spec-driven design handler om å definere APIet først, testbar spesifikasjon, konsistens og immutabilitet. Dette er eksplisitt omtalt i pensum. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvilken ressursnavngivning følger beste praksis i REST?",
        options: [
            "/getUsers",
            "/user",
            "/users",
            "/user/getAll"
        ],
        correct: 2,
        explanation:
            "Ressurser skal være substantiv, i flertallsform, og frikoblet fra metoder. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Vil denne designen bli vurdert som konsistent og REST-vennlig?",
        code: `
GET /api/movie
GET /api/movies
GET /api/movies/:id
GET /api/movie/:slug
    `,
        options: [
            "Ja, alle gir fleksible måter å hente data på",
            "Nei, her mikses slug/id og entall/flertall som skaper inkonsistens",
            "Ja, så lenge dokumentasjonen er god",
            "Bare hvis klienten håndterer begge formatene"
        ],
        correct: 1,
        explanation:
            "Pensum viser eksplisitt dette som et dårlig eksempel. Inkonsistens er en anti-pattern. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Du skal lage et endepunkt for å hente alle kommentarer til en post. Hva er riktig REST-design?",
        options: [
            "/comments/:postId",
            "/posts/comments/:id",
            "/posts/:id/comments",
            "/getComments?postId=x"
        ],
        correct: 2,
        explanation:
            "Når ressursen er avhengig av en hovedressurs, skal den kobles via URL-struktur. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "POST skal brukes til å opprette data. Hvorfor skal man IKKE sende data via querystring i POST?",
        options: [
            "Det fungerer ikke i nettlesere",
            "Det bryter med HTTP-standarden: body skal brukes for data",
            "Querystrings er for trege",
            "POST støtter kun JSON"
        ],
        correct: 1,
        explanation:
            "Pensum viser at POST-data sendes i body, ikke querystring. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Vil dette fungere riktig?",
        code: `
async function updateUser(id, data) {
  return fetch("/api/users", {
    method: "PUT",
    body: JSON.stringify(data)
  });
}
    `,
        options: [
            "Ja",
            "Nei, PUT må peke på en spesifikk ressurs: /users/:id",
            "Ja, så lenge JSON er gyldig",
            "Kun hvis serveren aksepterer batch-oppdateringer"
        ],
        correct: 1,
        explanation:
            "PUT brukes for å oppdatere en **item**, ikke en collection. Collections skal ikke PUT’es. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvilken HTTP-metode egner seg for delvis oppdatering av en ressurs?",
        options: ["PUT", "PATCH", "POST", "UPDATE"],
        correct: 1,
        explanation:
            "PATCH brukes til partial updates, mens PUT overskriver hele ressursen. :contentReference[oaicite:15]{index=15}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Du mottar ofte 304-statuskode i svar fra serveren. Hva betyr dette?",
        options: [
            "Noe gikk galt i requesten",
            "Ressursen er ikke modifisert og kan hentes fra cache",
            "Server har slettet ressursen",
            "Du mangler tilgang"
        ],
        correct: 1,
        explanation:
            "304 Not Modified brukes ved caching, som beskrevet i pensum. :contentReference[oaicite:16]{index=16}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Vil denne feilhåndteringen være god praksis?",
        code: `
try {
  const res = await fetch("/api/users");
  if (!res.ok) throw res;
} catch (error) {
  alert("Something went wrong.");
}
    `,
        options: [
            "Ja, alert er nok feilhåndtering",
            "Nei, feilmeldinger skal være konkrete, inneholde kontekst, og følge en definert struktur",
            "Ja, feil skal alltid vises direkte til bruker",
            "Kun feil 500 skal håndteres"
        ],
        correct: 1,
        explanation:
            "Pensum viser at gode API-feil skal gi konkrete beskrivelser, intern kode og gjerne en lenke videre. :contentReference[oaicite:17]{index=17}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Er følgende god dokumentasjonspraksis?",
        code: `
GET /api/users/:id

Response:
{
  "name": "Per"
}
    `,
        options: [
            "Ja, dette er tilstrekkelig",
            "Nei, dokumentasjon bør inkludere typer, required-felter, eksempler, metadata, og feilkoder",
            "Ja, så lenge APIet er lite",
            "Kun hvis OpenAPI ikke brukes"
        ],
        correct: 1,
        explanation:
            "Dokumentasjon bør inneholde parametre, typer, eksempler, respons-format og feilsituasjoner. :contentReference[oaicite:18]{index=18}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Din app krasjer etter flere raske API-kall fra klienten. Etter logging oppdager du HTTP 429. Hva betyr dette?",
        options: [
            "Feil data i request body",
            "Serveren er nede",
            "Du har passert rate-limit, en del av throttling",
            "Innloggingsfeil"
        ],
        correct: 2,
        explanation:
            "Rate limiting (429 Too Many Requests) er en av metodene for throttling nevnt i pensum. :contentReference[oaicite:19]{index=19}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Vil denne koden fungere som et korrekt REST-kall?",
        code: `
fetch("/api/users/1/delete", { method: "DELETE" })
    `,
        options: [
            "Ja, delete i URL er god praksis",
            "Nei, REST skal unngå actions i URL; DELETE /api/users/1 er riktig",
            "Ja, så lenge dokumentasjon forklarer det",
            "Kun når ressursen er kompleks"
        ],
        correct: 1,
        explanation:
            "Pensum sier eksplisitt at actions i URL bør unngås. Metoden (DELETE) skal uttrykke handlingen. :contentReference[oaicite:20]{index=20}"
    }
];

export const ulearn_api_intro_kml = {
    id: "ulearn_api_intro_kml",
    title: "API-design, debugging & beste praksiser - KML",
    description:
        "En eksamensrettet quiz som tester forståelsen av REST, HTTP-metoder, ressurser, feilhåndtering, caching, versjoner, dokumentasjon og debugging.",
    theme: [
        "api",
        "rest",
    ],
    questions: [...questions]
};
