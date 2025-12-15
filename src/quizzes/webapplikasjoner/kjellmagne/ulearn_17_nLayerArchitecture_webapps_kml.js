const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "I en klassisk n-layer arkitektur (Controller → Service → Repository), hva er den mest korrekte ansvarsfordelingen?",
        options: [
            "Controller: database queries, Service: HTTP parsing, Repository: response formatting",
            "Controller: HTTP request/response, Service: business logic og regler, Repository: data access",
            "Controller: alt ansvar, Service: logging, Repository: caching",
            "Controller: UI, Service: database, Repository: auth"
        ],
        correct: 1,
        explanation:
            "Controller håndterer HTTP-spesifikke ting (parsing, statuskoder, responsformat), Service håndterer business logic, Repository håndterer database/data access. :contentReference[oaicite:0]{index=0}"
    },

    {
        id: "q2",
        type: "true-false",
        question:
            "Påstand: Repository-layer bør kjenne til HTTP (f.eks. statuskoder) slik at den kan returnere riktig respons til klienten.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Repository skal være uavhengig av transport (HTTP) og kun håndtere data access. Statuskoder og responsformat hører hjemme i controller. :contentReference[oaicite:1]{index=1}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er riktig dependency direction i n-layer arkitektur?",
        options: [
            "Repository avhenger av Service, Service avhenger av Controller",
            "Controller avhenger av Service, Service avhenger av Repository",
            "Controller og Repository avhenger av hverandre direkte",
            "Service avhenger av Controller, men ikke Repository"
        ],
        correct: 1,
        explanation:
            "Øvre lag avhenger av nedre lag: Controller → Service → Repository. Ikke omvendt. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Når er n-layer arkitektur ofte OVERKILL?",
        options: [
            "Når du har kompleks business logikk og flere integrasjoner",
            "Når du har mange utviklere og trenger tydelige grenser",
            "Når du har en enkel CRUD-app med lite forretningslogikk",
            "Når du trenger høy testbarhet"
        ],
        correct: 2,
        explanation:
            "Leksjonen peker på at ren CRUD uten mye logikk ofte ikke trenger full n-layer. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvilken er en sentral fordel med å flytte business logic fra Controller/handler til Service-layer?",
        options: [
            "Du slipper å håndtere feil",
            "Business logic blir gjenbrukbar på tvers av ulike grensesnitt (REST, GraphQL, Server Actions)",
            "Du trenger ikke lenger å validere input",
            "Repository kan nå kalle controller direkte"
        ],
        correct: 1,
        explanation:
            "Service-layer gjør business logic uavhengig av HTTP, og kan gjenbrukes av flere typer “front doors”. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: Du får en request med feil JSON (ugyldig body). Hvor bør denne feilen primært håndteres?",
        options: [
            "Repository (data access-laget)",
            "Service (business-laget)",
            "Controller (HTTP-laget)",
            "Database (schema-laget)"
        ],
        correct: 2,
        explanation:
            "JSON parsing og HTTP-body er controller-ansvar. Service bør få allerede parsed/validerte inputs. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er et godt mønster for error mapping mellom Service og Controller?",
        options: [
            "Service returnerer alltid HTTP Response direkte",
            "Service returnerer domain/business errors (f.eks. Result med error code), Controller mapper til HTTP status codes",
            "Controller kaster alle errors til global handler uten mapping",
            "Repository mapper alle errors til 4xx"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser at Service håndterer business-feil med etablerte patterns, og Controller mapper disse til statuskoder og responsformat. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Vil denne koden følge n-layer ansvarsfordeling (gitt at repo er data access)?",
        code: `// controller
const body = await req.json();
const data = Schema.parse(body);
const result = await questionService.create(data);
return toHttpResponse(result);`,
        options: [
            "Nei, controller skal ikke parse body",
            "Ja, controller parser/validerer HTTP input og delegerer business logic til service",
            "Nei, service må returnere Response direkte",
            "Ja, men bare hvis repository også gjør validering"
        ],
        correct: 1,
        explanation:
            "Controller kan håndtere HTTP parsing/validering og delegere videre. Alternativt kan noe validering også ligge i service for business rules, men HTTP parsing er controller sitt ansvar. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvilken type validering hører typisk hjemme i Service-layer (ikke bare i Controller)?",
        options: [
            "Parsing av URL query params",
            "Autentisering av Authorization-header",
            "Business rules som 'kan ikke publisere uten minst 3 answers'",
            "Serialisering av JSON-respons"
        ],
        correct: 2,
        explanation:
            "Business rules er service-ansvar, og bør være uavhengige av HTTP. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hvilket service communication pattern passer best når logikken kun gjelder én ressurs og ikke trenger andre domener?",
        options: [
            "Service → Repository (direct repository access)",
            "Service → Service (alltid)",
            "Orchestration service (alltid)",
            "Controller → Repository direkte"
        ],
        correct: 0,
        explanation:
            "Når domenet er selvstendig og logikken er enkel, er direct service→repository ofte nok. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Når kan service-to-service calls være riktig valg?",
        options: [
            "Når du vil unngå gjenbruk av logikk",
            "Når du trenger veldefinert, gjenbrukbar domenelogikk fra en annen service",
            "Når controlleren trenger å vite om database-detaljer",
            "Når du vil øke coupling bevisst"
        ],
        correct: 1,
        explanation:
            "Service-to-service gir gjenbruk av domenelogikk (ikke bare data-henting), men kan øke coupling hvis det misbrukes. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er en orchestration service mest nyttig for?",
        options: [
            "Enkle CRUD-operasjoner på én tabell",
            "Komplekse workflows som krever koordinering av flere tjenester/domener",
            "Kun logging og metrics",
            "Å erstatte repositories"
        ],
        correct: 1,
        explanation:
            "Orchestration service samler en “høyere-nivå operasjon” og koordinerer flere services uten å gjøre alle services “tett sammenfiltret”. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er en god teststrategi for Service-layer i n-layer arkitektur?",
        options: [
            "Kun E2E-tester",
            "Unit-tester av business rules med mockede repositories",
            "Kun snapshot-tester",
            "Teste service via HTTP alltid"
        ],
        correct: 1,
        explanation:
            "Leksjonen fremhever at service blir enklere å teste isolert ved å mocke repository-avhengigheter. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er en god teststrategi for Controller-layer?",
        options: [
            "Mocke service layer og teste request parsing, statuskoder, response-format og error mapping",
            "Mocke database og teste SQL",
            "Teste kun UI",
            "Controller testes ikke"
        ],
        correct: 0,
        explanation:
            "Controller-tester bør fokusere på HTTP-relaterte concerns og mapping, ikke business logic. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q15",
        type: "true-false",
        question:
            "Påstand: Service interface design (tydelige metoder/typer) kan fungere som en kontrakt som gjør det enklere å bytte ut repository-implementasjon senere.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Et tydelig service-interface og dependency injection via factory functions gjør implementasjoner utskiftbare og mer testbare. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hva er en sentral grunn til at progressiv refaktorering ofte foretrekkes framfor “big bang”-refaktorering når man går til n-layer?",
        options: [
            "Big bang er alltid raskere",
            "Progressiv refaktorering lar deg beholde fungerende features og redusere risiko underveis",
            "Big bang gir bedre ytelse",
            "Progressiv refaktorering gjør at man slipper tester"
        ],
        correct: 1,
        explanation:
            "Leksjonen vektlegger pragmatisk utvikling: bygg videre på fungerende kode og patterns, og refaktorer gradvis. :contentReference[oaicite:15]{index=15}"
    },

    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hvilket alternativ beskriver best en trade-off ved å innføre mange services som kaller hverandre direkte?",
        options: [
            "Det reduserer alltid kompleksitet",
            "Det kan skape tight coupling og gjøre testing/mocking mer komplekst",
            "Det gjør controlleren unødvendig",
            "Det gjør repositories raskere"
        ],
        correct: 1,
        explanation:
            "Leksjonen peker på at cross-service communication kan skape coupling, og at orchestration/event-driven kan vurderes ved vekst. :contentReference[oaicite:16]{index=16}"
    }
];

export const quiz_nlayer_controller_service_repository = {
    id: "quiz-nlayer-controller-service-repository",
    title: "L17 - N-layer arkitektur: Controller, Service og Repository - KML",
    description:
        "Quiz om n-layer prinsipper, ansvarsdeling, dependency direction, service communication patterns, controller-refaktorering, error mapping, testing-strategier og når arkitekturen er nyttig vs overkompliserende.",
    theme: [
        "arkitektur",
        "layers",
        "testing",
        "refaktor",
    ],
    questions: [...questions]
};
