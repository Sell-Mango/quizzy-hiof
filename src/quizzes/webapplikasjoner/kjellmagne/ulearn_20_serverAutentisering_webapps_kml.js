const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er den prinsipielle forskjellen mellom authentication og authorization?",
        options: [
            "Authentication handler om hva brukeren kan gjøre, authorization om hvem brukeren er",
            "Authentication verifiserer identitet, authorization bestemmer tilgang",
            "Authorization skjer alltid før authentication",
            "Det er to ord for samme konsept"
        ],
        correct: 1,
        explanation:
            "Authentication svarer på 'hvem er du?', mens authorization svarer på 'hva har du lov til?'."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvorfor anbefales moderne password hashing-algoritmer som Argon2 fremfor enkle crypto-hash-funksjoner?",
        options: [
            "De er raskere",
            "De er reversible",
            "De er memory-hard og motstandsdyktige mot brute-force og hardware-angrep",
            "De krever ikke salting"
        ],
        correct: 2,
        explanation:
            "Argon2 og lignende algoritmer er designet for passord og beskytter mot GPU/ASIC-angrep gjennom memory-hardness."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er en sentral ulempe med JWT-baserte auth-løsninger sammenlignet med server-side sessions?",
        options: [
            "JWT fungerer ikke på mobile apper",
            "JWT kan ikke brukes med cookies",
            "JWT er vanskelig å tilbakekalle før utløp",
            "JWT støtter ikke roller"
        ],
        correct: 2,
        explanation:
            "JWT er stateless – når et token er utstedt, er det gyldig til det utløper med mindre man har ekstra mekanismer."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvilket cookie-attributt beskytter primært mot at JavaScript får tilgang til session-cookien?",
        options: [
            "Secure",
            "SameSite",
            "HttpOnly",
            "Path"
        ],
        correct: 2,
        explanation:
            "HttpOnly forhindrer at cookies kan leses via JavaScript og beskytter mot XSS-angrep."
    },

    {
        id: "q5",
        type: "true-false",
        question:
            "Påstand: Client-side validering alene er tilstrekkelig for sikker autentisering.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Klienten kan aldri stoles på. All sikkerhetskritisk validering må skje på serveren."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er hovedansvaret til AuthService i en Service Layer-arkitektur?",
        options: [
            "Å håndtere HTTP request og response",
            "Å koordinere business-logikk for autentisering, inkludert validering, hashing og session-opprettelse",
            "Å direkte skrive SQL-spørringer",
            "Å rendre UI-komponenter"
        ],
        correct: 1,
        explanation:
            "AuthService samler autentiseringslogikk og koordinerer repository, hashing og sessions."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor brukes Repository-pattern for brukerdata i autentiseringsflyten?",
        options: [
            "For å gjøre koden raskere",
            "For å isolere database-aksess fra business-logikk",
            "For å slippe DTO-validering",
            "For å kunne bruke cookies"
        ],
        correct: 1,
        explanation:
            "Repository-pattern gir tydelig separasjon mellom datatilgang og forretningslogikk."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er rollen til DTO-validering med Zod i autentiseringsflyten?",
        options: [
            "Å erstatte password hashing",
            "Å sikre runtime-validering av input før business-logikk kjøres",
            "Å gjøre sessions stateless",
            "Å validere cookies"
        ],
        correct: 1,
        explanation:
            "Zod gir runtime-validering og sikrer at innkommende data matcher forventet kontrakt."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hva er hovedoppgaven til authentication middleware?",
        options: [
            "Å sjekke brukerens rolle",
            "Å sette bruker- og session-informasjon i request-context basert på session-cookie",
            "Å validere DTO-er",
            "Å håndtere redirects"
        ],
        correct: 1,
        explanation:
            "Authentication middleware kjører på alle requests og setter ctx.user / ctx.session."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva skiller authorization guards fra authentication middleware?",
        options: [
            "Guards kjører på alle requests",
            "Middleware sjekker roller, guards gjør ikke",
            "Guards håndhever tilgangsregler for spesifikke routes",
            "Det er ingen forskjell"
        ],
        correct: 2,
        explanation:
            "Middleware identifiserer brukeren, guards avgjør om brukeren har lov til å utføre handlingen."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er en viktig sikkerhetsfordel med server-side sessions fremfor tokens lagret i localStorage?",
        options: [
            "De er raskere",
            "De kan beskyttes med HttpOnly cookies",
            "De krever mindre kode",
            "De støtter ikke XSS"
        ],
        correct: 1,
        explanation:
            "HttpOnly cookies kan ikke leses av JavaScript, noe som reduserer risiko ved XSS."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hvorfor kan Server Actions være et godt valg for autentisering i moderne React-apper?",
        options: [
            "De eliminerer behovet for sessions",
            "De lar forms kalle server-side auth-logikk direkte uten eksplisitte REST-endepunkter",
            "De er raskere enn middleware",
            "De kan kjøres i klient-komponenter"
        ],
        correct: 1,
        explanation:
            "Server Actions muliggjør direkte kall til AuthService fra forms, med samme DTO- og Service-patterns."
    }
];

export const quiz_server_side_authentication = {
    id: "quiz-server-side-authentication",
    title: "L20 - Server-side autentisering - KML",
    description:
        "Quiz om server-side autentisering med Service Layer pattern. Dekker authentication vs authorization, password hashing, sessions vs JWT, cookies, middleware, guards, DTO-validering og Server Actions.",
    theme: [
        "auth",
        "layers",
        "middleware",
        "serverActions"
    ],
    questions: [...questions]
};
