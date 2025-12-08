export const api_quiz = {
    id: "react_native_api_quiz",
    title: "L22 - React Native API, Appwrite, Query & Datahåndtering - BZJ",
    description:
        "Quiz basert på API-del 1 og 2, 3, 4 – nettverk, database, abstraksjon, søk, Appwrite og TanStack Query",
    questions: [
        // --- HTTP & REQUEST-RESPONSE ---

        {
            id: "q1",
            type: "multiple-choice",
            question: "Hva betyr det at HTTP er stateless?",
            options: [
                "Serveren husker tidligere forespørsler",
                "Hver forespørsel behandles isolert uten automatisk kontekst",
                "Klienten må sende alle forespørsler samtidig",
                "Kun POST-requests fungerer",
            ],
            correct: 1,
            explanation:
                "HTTP holder ingen implicit state mellom forespørsler – klient må sende alt som trengs hver gang.",
        },

        {
            id: "q2",
            type: "true-false",
            question:
                "HTTP-verb som GET, POST, PATCH og DELETE beskriver hva klienten ønsker å gjøre.",
            options: ["Sant", "Usant"],
            correct: 0,
            explanation:
                "Verb signaliserer operasjonstype i request-response syklusen.",
        },

        {
            id: "q3",
            type: "multiple-choice",
            question: "Hva representerer statuskode 201?",
            options: [
                "Ugyldig forespørsel",
                "Ny ressurs ble opprettet",
                "Ressurs slettet",
                "Klienten må autentisere",
            ],
            correct: 1,
            explanation: "201 = Created.",
        },

        {
            id: "q4",
            type: "multiple-choice",
            question: "Hvorfor bruker vi JSON i request/response?",
            options: [
                "Det er det eneste gyldige formatet",
                "Det er lett å lese og enkelt for backend/frontend å jobbe med",
                "Det er tregere enn XML",
                "Det støttes kun i React Native",
            ],
            correct: 1,
            explanation: "JSON er lettvekts, lesbart og universelt støttet.",
        },

        // --- FETCH vs AXIOS ---

        {
            id: "q5",
            type: "multiple-choice",
            question: "Hva er en viktig forskjell mellom Fetch og Axios?",
            options: [
                "Axios returnerer automatisk JSON, fetch gjør ikke det",
                "Fetch støtter ikke POST",
                "Axios kan ikke håndtere errors",
                "Fetch kan ikke brukes i mobil-apper",
            ],
            correct: 0,
            explanation:
                "Axios gjør JSON-parsingen automatisk og gir bedre error-modellering.",
        },

        // --- DATABASE / APPWRITE GRUNNPRINSIPP ---

        {
            id: "q6",
            type: "multiple-choice",
            question:
                "Hva er hensikten med å lage et database-abstraksjonslag?",
            options: [
                "Å gjøre koden mer komplisert",
                "For å unngå å skrive Appwrite-kall direkte i komponenter og samle feilhåndtering, validering og typer ett sted",
                "Slik at React Query kan hente data direkte fra databasen",
                "For å slippe å bruke Appwrite",
            ],
            correct: 1,
            explanation:
                "Abstraksjon gir kontroll, testbarhet og single responsibility.",
        },

        {
            id: "q7",
            type: "true-false",
            question:
                "Zod brukes for å validere data både før sending og når respons parses.",
            options: ["Sant", "Usant"],
            correct: 0,
            explanation:
                "Zod schema parse/safeParse sikrer at data følger typekrav både inn og ut.",
        },

        // --- USER ↔ STUDENT RELASJON ---

        {
            id: "q8",
            type: "multiple-choice",
            question:
                "Hvorfor trengs både Profile og Student tabell (alternativ 2)?",
            options: [
                "For å gjøre koden lengre",
                "For å kunne slå opp brukere + ha student-data separat samt kunne søke og koble basert på userId/email",
                "Fordi Appwrite ikke støtter flere attributter",
                "Det er et krav i React Query",
            ],
            correct: 1,
            explanation:
                "Profil fungerer som ‘lim’ og søkbar metadata rundt user ↔ student kobling.",
        },

        // --- SØK, URL-PARAMS og DEBOUNCE ---

        {
            id: "q9",
            type: "multiple-choice",
            question: "Hvorfor lagrer søket i URL-query params (`?query=...`)?",
            options: [
                "For å style appen",
                "Slik at andre komponenter og skjermbytte kan hente verdien – uten global state",
                "Det gjør søket raskere",
                "Fetch krever det",
            ],
            correct: 1,
            explanation:
                "Query params gir state persistence + navigasjonssamarbeid.",
        },

        {
            id: "q10",
            type: "true-false",
            question:
                "Debounce reduserer antall API-kall ved å vente til bruker er ferdig å skrive.",
            options: ["Sant", "Usant"],
            correct: 0,
        },

        // --- CUSTOM HOOK LOGIKK ---

        {
            id: "q11",
            type: "multiple-choice",
            question: "Hvorfor lage et custom hook som useAppwrite?",
            options: [
                "For å duplisere tilstandskode",
                "For å kapsle inn loading/error/data/async-logikk i én gjenbrukbar enhet",
                "Fordi TanStack Query krever det",
                "For å erstatte Appwrite",
            ],
            correct: 1,
        },

        // --- TANSTACK QUERY / DATAHÅNDTERING ---

        {
            id: "q12",
            type: "multiple-choice",
            question: "Hva er TanStack Query sin største verdi?",
            options: [
                "Den bytter ut React",
                "Automatiserer caching, refetching og statehåndtering for serverdata",
                "Lar deg lage SQL",
                "Brukes kun for animasjoner",
            ],
            correct: 1,
        },

        {
            id: "q13",
            type: "true-false",
            question:
                "useMutation brukes når man skal sende data som endrer state (opprette/endre/slette).",
            options: ["Sant", "Usant"],
            correct: 0,
        },

        {
            id: "q14",
            type: "multiple-choice",
            question:
                "Hva gjør `invalidateQueries({ queryKey: ['students'] })`?",
            options: [
                "Sletter databasen",
                "Forteller Query at cached data er utdatert og bør refetches",
                "Logger brukeren ut",
                "Stopper API-kall",
            ],
            correct: 1,
        },

        // --- LISTE OG FLATLIST ---

        {
            id: "q15",
            type: "multiple-choice",
            question:
                "Hvorfor bruke FlatList fremfor map() når listen kan bli stor?",
            options: [
                "FlatList lastes i batcher og optimaliserer renderingen",
                "map() ikke fungerer i React Native",
                "FlatList er lettere å lese",
                "map() krever backend",
            ],
            correct: 0,
        },

        // --- PAGINERING & INFINITE SCROLL ---

        {
            id: "q16",
            type: "multiple-choice",
            question:
                "Hva er hovedforskjellen på offset- og cursor-paginering?",
            options: [
                "Offset hopper X elementer fram basert på page, mens cursor starter fra et ID-ankepunkt (mer stabil ved dynamisk data)",
                "Cursor fungerer bare på web",
                "Offset brukes kun i SQL",
                "Cursor er tregere",
            ],
            correct: 0,
        },

        {
            id: "q17",
            type: "multiple-choice",
            question:
                "Hvorfor er cursor-paginering best egnet for infinite scroll?",
            options: [
                "Gir konsistent ytelse uansett dataset, mindre duplisering og stabil rekkefølge",
                "Det krever mindre kode",
                "Offset støttes ikke i Appwrite",
                "Cursor viser alltid 5 elementer",
            ],
            correct: 0,
        },

        {
            id: "q18",
            type: "true-false",
            question:
                "useInfiniteQuery henter sider sekvensielt og gir fetchNextPage() og hasNextPage.",
            options: ["Sant", "Usant"],
            correct: 0,
        },

        {
            id: "q19",
            type: "multiple-choice",
            question:
                "Hvorfor bruker vi useMemo når vi flater ut pages → students?",
            options: [
                "For å animere UI",
                "For å unngå å recomputere store datasett ved hver render",
                "For å sortere listen alfabetisk",
                "For å disable infinite scroll",
            ],
            correct: 1,
        },

        {
            id: "q20",
            type: "multiple-choice",
            question:
                "Hva er formålet med en mock API (getStudentsWithCursorMock)?",
            options: [
                "Erstatte Appwrite permanent",
                "Generere testdata lokalt uten kostnad / API-avhengighet",
                "Gjøre appen treg",
                "Unngå å bruke React Query",
            ],
            correct: 1,
        },
        {
            id: "q21",
            type: "multiple-choice",
            question:
                "Hva er hovedmålet med useStudent-hooket og de relaterte hookene (useStudentById, useCreateStudent, osv.)?",
            options: [
                "Å kunne kalle Appwrite direkte fra komponentene uten ekstra lag",
                "Å samle all student-relatert datahåndtering (queries/mutations, keys, caching, feilhåndtering) i gjenbrukbare hooks",
                "Å erstatte TanStack Query helt",
                "Kun å navngi funksjoner mer fancy",
            ],
            correct: 1,
            explanation:
                "useStudent-hookene kapsler inn TanStack Query + Appwrite-abstraksjoner + keys + feilhåndtering, slik at komponenter kan ha enkel og konsistent tilgang til studentdata.",
        },

        {
            id: "q22",
            type: "true-false",
            question:
                "`enabled`-flagget i en query brukes for å hindre at spørringen kjører før nødvendige kriterier (f.eks. userId) er på plass.",
            options: ["Sant", "Usant"],
            correct: 0,
            explanation:
                "Med `enabled: !!userId` unngår vi at queryen kjører før vi faktisk har en gyldig userId.",
        },

        {
            id: "q23",
            type: "multiple-choice",
            question:
                "Hva er poenget med at `getProfileByEmail` filtrerer bort profiler som allerede er brukt av en student?",
            options: [
                "For å gjøre spørringen tregere",
                "For å sikre at én bruker ikke får flere aktive student-ID-er med samme userId",
                "For å tillate duplikate studentkontoer",
                "For å unngå å måtte bruke indexer i databasen",
            ],
            correct: 1,
            explanation:
                "Metoden sjekker mot eksisterende studenter slik at vi ikke kobler samme profil/userId til flere student-objekter.",
        },

        {
            id: "q24",
            type: "multiple-choice",
            question:
                "Hvorfor trenger vi typen `StudentWithId = Student & { $id: string }`?",
            options: [
                "Fordi Student-typen ikke kan brukes i React",
                "For å ha både vår egen student-id og Appwrite sitt dokument-id ($id) tilgjengelig",
                "For å kunne lagre flere id-felter i databasen",
                "For å unngå å bruke Zod",
            ],
            correct: 1,
            explanation:
                "Appwrite sitt dokument-id ($id) brukes bl.a. som cursor og til routing, og er separat fra studentens ‘faglige’ id.",
        },

        {
            id: "q25",
            type: "true-false",
            question:
                "`createStudent` vil kaste en AppwriteException hvis `userId` mangler i student-dataen.",
            options: ["Sant", "Usant"],
            correct: 0,
            explanation:
                "Det er et eksplisitt krav: `if (!userId) throw new AppwriteException('User ID is required', 400);`.",
        },

        {
            id: "q26",
            type: "multiple-choice",
            question:
                "Hva gjør `getStudents`-funksjonen når det gjelder filtrering og sortering?",
            options: [
                "Henter alle studenter uten begrensning og tilfeldig rekkefølge",
                "Henter maks 100 studenter, sortert nyeste først, og filtrerer på `isActive` (default true)",
                "Henter bare inaktive studenter",
                "Sorterer alfabetisk på navn",
            ],
            correct: 1,
            explanation:
                "Den bruker Query.limit(100), Query.orderDesc('$createdAt') og Query.equal('isActive', filter?.isActive ?? true).",
        },

        {
            id: "q27",
            type: "multiple-choice",
            question: "Hva er hensikten med `QueryWrapper`-komponenten?",
            options: [
                "Å style alle skjermene likt",
                "Å gi en felles håndtering for loading- og error-tilstander for både queries og mutations",
                "Å erstatte Loading- og Error-komponentene fullstendig",
                "Å lage navigasjonslogikk",
            ],
            correct: 1,
            explanation:
                "QueryWrapper ser på `query?.isPending` / `mutation?.isPending` og `error`, og rendrer Loading eller ErrorComp på en konsistent måte.",
        },

        {
            id: "q28",
            type: "true-false",
            question:
                "QueryWrapper kan håndtere både en query og en mutation samtidig, og viser loading hvis en av dem er pending.",
            options: ["Sant", "Usant"],
            correct: 0,
        },

        {
            id: "q29",
            type: "multiple-choice",
            question:
                "Hva skjer i `DeleteStudent`-komponenten når brukeren bekrefter sletting?",
            options: [
                "Studenten slettes lokalt, men ikke i databasen",
                "Mutation (`useDeleteStudent`) kjører `mutateAsync`, modalen lukkes og brukeren får en Alert før navigasjon tilbake til listen",
                "Kun en Alert vises, ingen sletting skjer",
                "Appen restartes",
            ],
            correct: 1,
            explanation:
                "Flyten er: `mutateAsync` → lukke modal → Alert → `router.push('/list')`.",
        },

        {
            id: "q30",
            type: "multiple-choice",
            question:
                "Hvorfor kan vi ikke sette permissions for andre brukere direkte fra web-SDK-et (klient) i Appwrite?",
            options: [
                "Fordi det er en bug i Appwrite",
                "Klient-SDK-et er begrenset av sikkerhetshensyn – tilgangsstyring for andre brukere krever API-key og server-/function-kode",
                "React Native støtter ikke permissions",
                "Det er kun lov i utviklingsmiljø",
            ],
            correct: 1,
            explanation:
                "Å gi andre brukere rettigheter krever sikker serverkontekst (API-nøkkel), ikke ren klientkode.",
        },

        {
            id: "q31",
            type: "true-false",
            question:
                "`getStudentIdByUser` kaster en AppwriteException (404) hvis ingen student finnes for brukerens userId.",
            options: ["Sant", "Usant"],
            correct: 0,
            explanation:
                "Dette hindrer UI i å tro at den fikk ‘gyldig, men tom’ respons – feilen håndteres eksplisitt.",
        },

        {
            id: "q32",
            type: "multiple-choice",
            question:
                "Hva gjør `uploadImage` før filen lastes opp til Appwrite Storage?",
            options: [
                "Ingenting, den sender bare filen videre",
                "Validerer at filen er under 2MB og av typen JPEG eller PNG, ellers kaster den AppwriteException",
                "Konverterer alle filer til PDF",
                "Sletter filen lokalt",
            ],
            correct: 1,
            explanation:
                "Størrelses- og typevalidering skjer før `storages.createFile` kalles.",
        },

        {
            id: "q33",
            type: "multiple-choice",
            question: "Hva er rollen til `prepareFile` i `utils/file.ts`?",
            options: [
                "Å skrive filen til databasen",
                "Å lese metadata om filen via FileSystem, mappe til korrekt MIME-type og validere strukturen med Zod",
                "Å gjøre bilde-oppløsningen høyere",
                "Å komprimere alle bilder til 1KB",
            ],
            correct: 1,
            explanation:
                "`prepareFile` bruker `expo-file-system` + Zod-schema for å produsere et `StorageFile` som Storage-API-et kan bruke.",
        },

        {
            id: "q34",
            type: "true-false",
            question:
                "Ved oppdatering av student (`updateStudent`) lastes bildet alltid opp på nytt uansett om vi allerede har en URL.",
            options: ["Sant", "Usant"],
            correct: 1,
            explanation:
                "Det lastes kun opp hvis `student.image` finnes og *ikke* inneholder 'http' – dvs. når det er en ny lokal filsti.",
        },

        {
            id: "q35",
            type: "multiple-choice",
            question:
                "Hvorfor skiller vi mellom `file://`-stier og `http(s)://`-URL-er for bilde-feltet?",
            options: [
                "For å kunne bruke ulike bildeformater",
                "For å vite om vi skal laste opp en ny fil (lokal sti) eller gjenbruke en eksisterende URL (lagret i Appwrite)",
                "Fordi React Native krever begge formater samtidig",
                "For å unngå å bruke Storage",
            ],
            correct: 1,
        },

        {
            id: "q36",
            type: "multiple-choice",
            question:
                "Hva er poenget med å ha en placeholder-URL (f.eks. placehold.co) når `image` mangler på en student?",
            options: [
                "For å teste nettverket",
                "For å alltid vise et bilde i UI-et, selv om det ikke er lastet opp noe for studenten",
                "For å raskere trigge errors",
                "For å lagre mindre data i databasen",
            ],
            correct: 1,
            explanation:
                "En fallback gir et mer komplett og forutsigbart UI når ekte bilde ikke finnes.",
        },

        {
            id: "q37",
            type: "true-false",
            question:
                "Ved å flytte `handleError`, `handleResponse` og `asyncWrapper` til `lib.ts` reduserer vi ansvaret til `database.ts` og kan gjenbruke logikken i f.eks. `storages.ts`.",
            options: ["Sant", "Usant"],
            correct: 0,
            explanation:
                "Felles helpers i lib gjør koden mer DRY og enklere å vedlikeholde på tvers av Appwrite-moduler.",
        },
    ],
};
