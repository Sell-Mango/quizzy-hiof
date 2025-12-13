const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er den grunnleggende forskjellen mellom utility-first CSS (Tailwind) og tradisjonell semantisk CSS?",
        options: [
            "Utility-first bruker inline styles i stedet for klasser",
            "Utility-first beskriver hva elementet ER, ikke hvordan det ser ut",
            "Utility-first bygger stil ved å kombinere små visuelle hjelpeklasser direkte i markup",
            "Utility-first kan ikke brukes med React"
        ],
        correct: 2,
        explanation:
            "Tailwind bruker mange små utility-klasser (p-4, bg-white, text-sm) som beskriver utseende direkte, i motsetning til semantiske klasser som .card eller .user-card. :contentReference[oaicite:1]{index=1}"
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er en sentral nyhet i Tailwind CSS v4 sammenlignet med v3?",
        options: [
            "Støtte for JSX uten React",
            "Bruk av @theme-blokker i CSS i stedet for tailwind.config.js",
            "At alle klasser må skrives manuelt",
            "At responsive utilities er fjernet"
        ],
        correct: 1,
        explanation:
            "Tailwind v4 flytter konfigurasjon inn i CSS via @theme, og fjerner behovet for tailwind.config.js. :contentReference[oaicite:2]{index=2}"
    },
    {
        id: "q3",
        type: "true-false",
        question:
            "I Tailwind CSS v4 blir CSS custom properties definert i @theme automatisk tilgjengelige som utility-klasser.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "For eksempel blir --color-primary tilgjengelig som bg-primary, text-primary og border-primary. :contentReference[oaicite:3]{index=3}"
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hvorfor passer Tailwind spesielt godt sammen med komponentbaserte rammeverk som React?",
        options: [
            "Fordi Tailwind genererer React-komponenter automatisk",
            "Fordi styling og struktur kan holdes tett sammen i samme fil",
            "Fordi Tailwind erstatter behovet for JSX",
            "Fordi Tailwind krever class components"
        ],
        correct: 1,
        explanation:
            "Utility-first passer naturlig med komponenter fordi stil er knyttet direkte til komponentens struktur, noe som reduserer kontekstbytte. :contentReference[oaicite:4]{index=4}"
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvordan implementeres responsive design i Tailwind?",
        options: [
            "Ved å skrive egne media queries i CSS",
            "Ved å bruke JavaScript for å måle skjermstørrelse",
            "Ved å prefikse utility-klasser med sm:, md:, lg:, osv.",
            "Ved å lage separate komponenter per skjermstørrelse"
        ],
        correct: 2,
        explanation:
            "Tailwind bruker mobile-first breakpoints som sm:, md:, lg: for å aktivere styling ved bestemte skjermbredder. :contentReference[oaicite:5]{index=5}"
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å refaktorere fra vanilla CSS til Tailwind utilities?",
        options: [
            "Man slipper helt å skrive CSS",
            "Man får færre filer i prosjektet",
            "Man reduserer CSS-bloat og får mer konsistent styling",
            "Man får automatisk bedre ytelse i JavaScript"
        ],
        correct: 2,
        explanation:
            "Leksjonen peker på mindre dødkode, færre varianter og bedre konsistens som store fordeler ved utility-first. :contentReference[oaicite:6]{index=6}"
    },
    {
        id: "q7",
        type: "true-false",
        question:
            "Tailwind CSS gjør det umulig å bruke custom CSS når behovet oppstår.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Usant. Tailwind er ment å kombineres med custom CSS (f.eks. via @theme eller egne klasser) når utilities ikke er tilstrekkelige. :contentReference[oaicite:7]{index=7}"
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er et performance-messig poeng med Tailwind CSS i produksjon?",
        options: [
            "Alle utility-klasser lastes alltid, uansett bruk",
            "Tailwind v4 har forbedret treeshaking som fjerner ubrukte klasser",
            "Tailwind genererer CSS dynamisk i runtime",
            "Tailwind bruker inline styles for raskere rendering"
        ],
        correct: 1,
        explanation:
            "Tailwind v4 har forbedret treeshaking slik at kun klasser som faktisk brukes havner i produksjonsbundlen. :contentReference[oaicite:8]{index=8}"
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Når kan tradisjonell semantisk CSS fortsatt være et bedre valg enn Tailwind?",
        options: [
            "Når man bygger små, isolerte engangs-komponenter",
            "Når man har komplekse animasjoner eller svært spesifikke stilregler",
            "Når man bruker React",
            "Når man ønsker konsistent design"
        ],
        correct: 1,
        explanation:
            "Leksjonen er tydelig på at Tailwind ikke er en erstatning for all CSS – spesialtilfeller kan egne seg bedre med tradisjonell CSS. :contentReference[oaicite:9]{index=9}"
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er en anbefalt teststrategi for komponenter stylet med Tailwind?",
        options: [
            "Teste eksakt rekkefølge på alle utility-klasser",
            "Teste visuelle detaljer pixel-for-pixel",
            "Teste observerbar atferd og tilgjengelighet, ikke spesifikke klassenavn",
            "Unngå testing av UI helt"
        ],
        correct: 2,
        explanation:
            "Som med annen React-testing bør fokus være på brukeropplevelse og atferd, ikke interne implementasjonsdetaljer som klassenavn. :contentReference[oaicite:10]{index=10}"
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er en potensiell skaleringsutfordring ved omfattende bruk av Tailwind utilities?",
        options: [
            "At React slutter å fungere",
            "At markup kan bli lang og mindre lesbar uten struktur",
            "At CSS-filen blir for stor",
            "At breakpoints ikke fungerer"
        ],
        correct: 1,
        explanation:
            "Leksjonen viser at mange utility-klasser kan gi støy i markup, og anbefaler struktur, abstrahering og hjelpefunksjoner (cn) ved behov. :contentReference[oaicite:11]{index=11}"
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "Et viktig poeng i leksjonen er at Tailwind CSS støtter Convention over Configuration ved å tilby et ferdig designsystem med fornuftige standarder.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Tailwind tilbyr ferdige skalaer for spacing, farger, typografi og breakpoints, som kan brukes direkte uten egen konfigurasjon. :contentReference[oaicite:12]{index=12}"
    }
];

export const react_tailwind_v4_quiz = {
    id: "react-tailwind-v4-utility-first",
    title: "L11 - Tailwind CSS v4 og utility-first styling - KML",
    description:
        "Quiz som tester forståelsen av utility-first CSS, Tailwind v4-konfigurasjon, responsive design, performance, testing og arkitekturvalg.",
    theme: [
        "styling",
        "testing"
    ],
    questions: [...questions]
};
