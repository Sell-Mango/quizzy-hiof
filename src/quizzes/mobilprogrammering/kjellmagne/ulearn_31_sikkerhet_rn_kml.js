const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er et av hovedprinsippene i mobil sikkerhet slik det beskrives i pensum?",
        options: [
            "Klienten er trygg så lenge appen distribueres via App Store/Play Store",
            "Klienten må alltid antas som kompromittert – derfor kan ikke sikkerhet baseres på klientsiden alene",
            "Sikkerhet på klienten er viktigere enn på serveren",
            "All kritisk logikk bør ligge i React Native-koden"
        ],
        correct: 1,
        explanation:
            "Pensum sier eksplisitt at *klienten alltid må betraktes som kompromittert*. Man kan ikke stole på klientside-validering eller skjult logikk. :contentReference[oaicite:1]{index=1}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva står CIA-modellen for, og hvorfor brukes den?",
        options: [
            "Cache, Integrity, Authorization – for å beskrive performance",
            "Confidentiality, Integrity, Availability – for å forstå sikkerhetsrisikoer",
            "Client, Internet, API – for å forstå kommunikasjon i mobilapper",
            "Credentials, Identity, Access – for å beskrive login"
        ],
        correct: 1,
        explanation:
            "CIA-modellen er et grunnprinsipp i sikkerhet og omtales tydelig i pensum. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Vil dette være en sikker måte å lagre et auth-token i en Expo-app?",
        code: `
await AsyncStorage.setItem("authToken", token);
    `,
        options: [
            "Ja, AsyncStorage er designet for sensitiv data",
            "Nei, AsyncStorage er ikke sikkert og skal ikke brukes til tokens",
            "Ja, så lenge token er kortvarig",
            "Ja, hvis appen kjører i dev-modus"
        ],
        correct: 1,
        explanation:
            "Pensum sier at AsyncStorage ikke er sikkert og ikke skal brukes til tokens. Bruk SecureStore. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question: "Hva er riktig måte å lagre tokens sikkert i React Native / Expo?",
        options: [
            "I en global variabel i appen",
            "I EXPO_PUBLIC_ miljøvariabler",
            "I SecureStore / Keychain / Keystore",
            "I en hardkodet streng i kildekoden"
        ],
        correct: 2,
        explanation:
            "Konfidensielle data som tokens skal lagres i sikker lagring, ikke i AsyncStorage eller .env som eksponeres. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Vil denne 'hemmelige' algoritmen være trygg i en React Native-app?",
        code: `
const SECRET_MULTIPLIER = 1.337;
function calculatePrice(price) {
  return price * SECRET_MULTIPLIER;
}
    `,
        options: [
            "Ja, hemmelig logikk i JS-filer er usynlig for brukere",
            "Nei, JS-bundle kan inspiseres og logikk kan avsløres",
            "Ja, så lenge Metro bundler er aktiv",
            "Ja, men bare i produksjons-build"
        ],
        correct: 1,
        explanation:
            "Pensum viser at 'skjult logikk' i klienten ikke er sikkert – bundle kan inspiseres. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hvorfor må alle API-kall i en mobilapp bruke HTTPS/TLS?",
        options: [
            "Fordi HTTP er tregere",
            "Fordi app stores krever det",
            "Fordi nettverkstrafikk ellers kan avlyttes eller manipuleres (MITM-angrep)",
            "Kun fordi fetch krever det i produksjon"
        ],
        correct: 2,
        explanation:
            "Pensum understreker at ukryptert trafikk kan avlyttes. HTTPS er ikke valgfritt. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Vil denne API-nøkkelen være trygg i en mobilapp?",
        code: `
const API_KEY = "sk-proj-1234567890abcdef";
    `,
        options: [
            "Ja, fordi koden bundler og minifiseres",
            "Nei, API-nøkler i klientkoden kan alltid ekstraheres",
            "Ja, hvis man skjuler variabelen i en funksjon",
            "Ja, hvis appen kun bruker HTTPS"
        ],
        correct: 1,
        explanation:
            "Pensum viser at API-nøkler aldri må hardkodes i apper, de kan leses ut av bundle. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hvorfor skal man ikke stole på input-validering på klienten?",
        options: [
            "Fordi validering bremser appen",
            "Fordi brukeren kan manipulere data, og klienten kan ikke beskytte seg selv",
            "Fordi React Native ikke støtter regex",
            "Fordi servervalidering er raskere"
        ],
        correct: 1,
        explanation:
            "Pensum understreker at all validering *må* gjøres på serveren, klientvalidering er kun UX. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Når bør du bruke sanitization / escaping av tekst?",
        options: [
            "Aldri – native apper er ikke utsatt for XSS",
            "Kun når data skal lagres",
            "Når du håndterer brukerinput som kan brukes i UI eller sendes til serveren",
            "Kun når du jobber i web, ikke mobil"
        ],
        correct: 2,
        explanation:
            "Pensum viser sanitizing/escaping av input som nødvendig selv i mobilapper, særlig ved rendering av tekst. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Vil denne deep-link-håndteringen være trygg?",
        code: `
const handleDeepLink = (url) => {
  const userId = url.split("user/")[1];
  navigate("User", { id: userId });
};
    `,
        options: [
            "Ja, enkel parsing er nok",
            "Nei, deep-link parametere må valideres, saniteres og domenet må sjekkes",
            "Ja, deep links er alltid sikret av operativsystemet",
            "Ja, hvis userId er et tall"
        ],
        correct: 1,
        explanation:
            "Pensum viser at deep links er en risikofaktor og krever streng validering av URL, domene og parametere. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva mener man med 'feile sikkert' (fail secure)?",
        options: [
            "Feile på en måte som er mest komfortabel for brukeren",
            "Eksponere detaljerte feilmeldinger for debugging",
            "Ved usikkerhet, heller nekte tilgang enn å gi tilgang",
            "Tillate fallback-adferd for å unngå frustrasjon"
        ],
        correct: 2,
        explanation:
            "Pensum beskriver fail-secure: ved usikkerhet → blokker, ikke tillat. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er best praksis for rolle- og rettighetskontroll?",
        options: [
            "Bruke blacklist (forby ondsinnede roller)",
            "Bruke whitelist (definere kun hva som er tillatt)",
            "Hardkode roller i UI-komponenter",
            "La klienten bestemme rolle basert på tokens"
        ],
        correct: 1,
        explanation:
            "Pensum viser at whitelist er tryggere enn blacklist, som kan mislykkes ved glemte edge cases. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hvorfor bør token-fornyelse (refresh tokens) implementeres?",
        options: [
            "For å gjøre appen raskere",
            "For å redusere risiko ved token-kompromittering og sørge for kortlevde tokens",
            "For å lagre færre data i SecureStore",
            "Fordi Expo krever det"
        ],
        correct: 1,
        explanation:
            "Pensum viser at nøkler/tokens bør roteres og ha utløp for å minimere skade ved lekkasje. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q14",
        type: "true-false",
        question:
            "Påstand: Det er trygt å anta at mobilappen kjører i et sikkert miljø og at brukeren ikke kan inspisere koden.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Pensum understreker at klienten *alltid* må anses som kompromittert. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er *ikke* en oppgave klienten skal ha ansvar for?",
        options: [
            "Presentere data sikkert",
            "Enkel input-validering for UX",
            "Sikker håndtering av tokens",
            "Autorisasjon av kritiske handlinger"
        ],
        correct: 3,
        explanation:
            "Autorisasjon må verifiseres på serveren – ikke stole på lokale sjekker. :contentReference[oaicite:15]{index=15}"
    }
];

export const ulearn_31_sikkerhet_rn_kml = {
    id: "ulearn_31_sikkerhet_rn_kml",
    title: "L31 - Introduksjon til sikkerhet - KML",
    description:
        "Quiz om grunnleggende sikkerhetsprinsipper, sikker lagring, validering, deep links, autorisasjon, sikker nettverkskommunikasjon og risiko i mobilapper.",
    theme: [
        "sikkerhet",
        "expo",
        "auth"
    ],
    questions: [...questions]
};
