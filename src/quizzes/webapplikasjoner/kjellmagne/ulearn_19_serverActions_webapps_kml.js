const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva er den viktigste forskjellen mellom useActionState og tradisjonell form-håndtering med useState + fetch?",
        options: [
            "useActionState krever alltid JavaScript, mens tradisjonelle skjema ikke gjør det",
            "useActionState kobler form submission direkte til en Server Action og gir innebygget state/pending/error-håndtering",
            "useActionState kan kun brukes i Server Components",
            "useActionState erstatter behovet for validering helt"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser at useActionState reduserer boilerplate, gir pending states og state preservation, og lar deg kalle server actions direkte. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question: "Hvilke to parametre tar en typisk Server Action når den brukes med useActionState?",
        options: [
            "(req, res)",
            "(prevState, formData)",
            "(props, context)",
            "(queryKey, queryFn)"
        ],
        correct: 1,
        explanation:
            "I leksjonen forklares at action får prevState (for state preservation) og formData (innsendte felter). :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "multiple-choice",
        question: "Hva er formålet med å returnere fieldErrors fra en Server Action?",
        options: [
            "Å logge feil på serveren",
            "Å kunne vise feltspesifikke valideringsfeil ved input-feltene i UI",
            "Å gjøre action raskere",
            "Å unngå å bruke Zod"
        ],
        correct: 1,
        explanation:
            "Utvidet Result/ServerResult kan inkludere fieldErrors slik at UI kan vise granulerte feil pr. felt. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "true-false",
        question: "Påstand: useFormStatus er nyttig for å vise pending/disabled state på submit-knappen uten å manuelt holde pending i lokal state.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "useFormStatus brukes for pending state management i forms, typisk i en SubmitButton-komponent. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question: "Vil denne koden fungere som en Server Action?",
        code: `
"use server";
export async function createAction(prevState, formData) {
  const question = formData.get("question");
  return { success: true, data: { question } };
}
    `,
        options: [
            "Ja, den er korrekt strukturert som server action",
            "Nei, Server Actions kan ikke bruke FormData",
            "Nei, den mangler useActionState",
            "Ja, men bare hvis filen også har 'use client'"
        ],
        correct: 0,
        explanation:
            "Server Actions merkes med 'use server' og kan ta formData. useActionState brukes på klientsiden for å kalle den. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question: "Hva er en sentral begrensning med React Server Components (RSC)?",
        options: [
            "De kan ikke være async",
            "De kan ikke hente data fra server",
            "De kan ikke bruke hooks som useState/useEffect",
            "De må merkes med 'use client'"
        ],
        correct: 2,
        explanation:
            "Server Components kjører på server og kan bruke async/await, men kan ikke bruke client hooks som useState/useEffect. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "multiple-choice",
        question: "Hvilken retning er korrekt når det gjelder RSC og Client Components?",
        options: [
            "Client Components kan importere Server Components direkte",
            "Server Components kan rendre Client Components, men ikke omvendt",
            "Client Components og Server Components kan ikke kombineres",
            "Server Components må alltid kompileres til client bundle"
        ],
        correct: 1,
        explanation:
            "Leksjonen beskriver at Server Components kan rendre Client Components, men ikke omvendt. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "multiple-choice",
        question: "Når er det typisk best å bruke en Server Component fremfor en Client Component?",
        options: [
            "Når du trenger interaktivitet og event handlers",
            "Når du trenger å bruke local state og useEffect",
            "Når du primært skal hente data på serveren og minimere client bundle",
            "Når du trenger WebSocket/polling"
        ],
        correct: 2,
        explanation:
            "Server Components passer godt for datahenting direkte på server (mindre bundle, ingen useEffect/useQuery behov). :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question: "Hva er et korrekt utsagn om 'use client' directive?",
        options: [
            "'use client' betyr at filen og avhengighetene dens blir del av client bundle",
            "'use client' gjør at komponenten kjører på serveren",
            "'use client' kan brukes i alle filer uten konsekvenser",
            "'use client' trengs kun for Server Actions"
        ],
        correct: 0,
        explanation:
            "Leksjonen understreker at 'use client' gjør komponenten (og deps) til en del av client bundle. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question: "Hva er hovedpoenget med Suspense i denne konteksten?",
        options: [
            "Å gjøre forms mer sikre",
            "Å håndtere loading states deklarativt når async komponenter henter data",
            "Å erstatte useActionState",
            "Å cache alle API-kall automatisk"
        ],
        correct: 1,
        explanation:
            "Suspense lar deg definere fallback UI mens serveren henter data i async komponenter. :contentReference[oaicite:10]{index=10}"
    },
    {
        id: "q11",
        type: "multiple-choice",
        question: "Hvordan passer Server Actions inn i en etablert Service/Repository-arkitektur?",
        options: [
            "De bør bypass’e service-laget og skrive direkte til databasen alltid",
            "De kan gjenbruke DTO-validering, mappers/ACL og kalle service-laget som før",
            "De gjør repository-laget unødvendig",
            "De krever at all logikk flyttes til client"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser dataflyten: Form → Server Action → DTO Validation → Service → Repo → DB → Mapper/DTO Response. :contentReference[oaicite:11]{index=11}"
    },
    {
        id: "q12",
        type: "multiple-choice",
        question: "Hvorfor er Mappers/DTO fortsatt relevante når du bruker Server Actions?",
        options: [
            "Fordi Server Actions alltid må returnere Response-objekter",
            "For å holde en stabil kontrakt og beskytte mot interne endringer, selv uten REST-endepunkt",
            "Fordi FormData må serialiseres med JSON",
            "For å slippe validering"
        ],
        correct: 1,
        explanation:
            "Mapper/ACL og DTO-er beskytter kontrakten mot interne endringer uansett transport (REST eller Server Actions). :contentReference[oaicite:12]{index=12}"
    },
    {
        id: "q13",
        type: "multiple-choice",
        question: "Hva er en praktisk fordel med å bruke samme form-komponent for både create og edit?",
        options: [
            "Du slipper server-side validering",
            "Du får mindre duplisert UI-kode og mer konsistent UX",
            "Du trenger ikke DTO-schemas",
            "Det gjør at RSC kan bruke hooks"
        ],
        correct: 1,
        explanation:
            "Leksjonen beskriver create/edit pattern med initial state og valg av action basert på isEdit/mode. :contentReference[oaicite:13]{index=13}"
    },
    {
        id: "q14",
        type: "multiple-choice",
        question: "Hva er et viktig prinsipp i progressive enhancement for forms?",
        options: [
            "Skjema skal kun fungere med JavaScript",
            "Start med HTML-first som fungerer uten JS, og legg på forbedringer med JS",
            "All validering må skje på klienten",
            "Bruk alltid optimistic updates, ellers er det ikke PE"
        ],
        correct: 1,
        explanation:
            "Progressive enhancement: HTML foundation først (fungerer uten JS), deretter forbedringer. :contentReference[oaicite:14]{index=14}"
    },
    {
        id: "q15",
        type: "true-false",
        question: "Påstand: En form som bruker action={formAction} kan fortsatt ha en fungerende fallback via vanlig form POST når JavaScript er disabled.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Leksjonen beskriver at Server Actions + forms kan støtte progressive enhancement og fungere uten JS (fallback/standard form submission). :contentReference[oaicite:15]{index=15}"
    },
    {
        id: "q16",
        type: "multiple-choice",
        question: "Case: Du har ikke revalidatePath tilgjengelig. Hvilken enkel (men mindre optimal) cache invalidation-strategi kan brukes etter suksess?",
        options: [
            "Ikke gjør noe – cachen oppdateres alltid automatisk",
            "window.location.reload() etter suksess",
            "Å bytte alle Server Components til Client Components",
            "Å flytte all state til Redux"
        ],
        correct: 1,
        explanation:
            "Leksjonen nevner manuell invalidation ved f.eks. reload som enkel fallback når mer avansert invalidation ikke er tilgjengelig. :contentReference[oaicite:16]{index=16}"
    },
    {
        id: "q17",
        type: "multiple-choice",
        question: "Hvilken påstand om error handling i Server Actions vs REST API er mest riktig?",
        options: [
            "Server Actions må alltid returnere HTTP status codes",
            "Server Actions kan returnere et Result/ServerResult direkte uten HTTP mapping, mens REST ofte krever status codes + body",
            "REST har ingen fordel ved public APIs",
            "Server Actions kan ikke håndtere valideringsfeil"
        ],
        correct: 1,
        explanation:
            "Server Actions kan returnere strukturert Result direkte til UI, mens REST typisk må mappe feil til HTTP status codes og JSON-respons. :contentReference[oaicite:17]{index=17}"
    },
    {
        id: "q18",
        type: "multiple-choice",
        question: "Når er REST API fortsatt ofte et bedre valg enn Server Actions?",
        options: [
            "Når du kun har én web-klient",
            "Når du lager public API eller har flere ulike klienter (mobile, eksterne integrasjoner)",
            "Når du vil redusere boilerplate i én app",
            "Når du trenger fieldErrors"
        ],
        correct: 1,
        explanation:
            "Leksjonen poengterer at Server Actions er et supplement, mens REST er bedre for public APIs og flere klienter. :contentReference[oaicite:18]{index=18}"
    }
];

export const quiz_server_actions_forms_progressive_enhancement = {
    id: "quiz-server-actions-forms-progressive-enhancement",
    title: "L19 - Server Actions & Forms med Progressive Enhancement - KML",
    description:
        "Quiz om useActionState, fieldErrors/state preservation, useFormStatus, React Server Components vs Client Components, Suspense, integrasjon med Service/Repository + DTO/Mappers + Result pattern, create/edit gjenbruk, progressive enhancement og cache invalidation uten revalidatePath.",
    theme: [
        "serverActions",
        "forms",
        "suspense",
        "dto",
        "patterns"
    ],
    questions: [...questions]
};
