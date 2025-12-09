const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva kjennetegner et kontrollert input-felt i React Native?",
        options: [
            "Verdien lagres i input-komponenten og leses ut når skjemaet sendes",
            "Verdien styres av state og oppdateres via onChangeText/onValueChange",
            "Input-komponenten oppdaterer seg selv uten bruk av state",
            "Feltet håndterer validering automatisk uten programmering"
        ],
        correct: 1,
        explanation:
            "Kontrollerte inputs er knyttet til state via value + onChangeText. Dette er grunnleggende i forms. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva er en vanlig ulempe med å bruke én useState per felt i et større skjema?",
        options: [
            "Det fungerer ikke på Android",
            "Det blir unødvendig mye duplisert kode og vanskelig å vedlikeholde",
            "Det gir dårlig ytelse på alle skjemaer",
            "Det gjør validering umulig"
        ],
        correct: 1,
        explanation:
            "Mange separate variabler fører til repetisjon og kaotisk kode når skjemaer vokser. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å bruke ett state-objekt for hele skjemaet?",
        options: [
            "State oppdateres automatisk uten kode",
            "Det blir enklere å sende hele skjemaet til API og mindre duplisering i handler-funksjoner",
            "Det gjør skjemaet tregere",
            "Det støtter kun tekstfelt"
        ],
        correct: 1,
        explanation:
            "State-objekt gir konsentrert logikk og enklere vedlikehold. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva er en vanlig feil når man håndterer Switch-komponenten?",
        options: [
            "Å bruke onChangeText i stedet for onValueChange",
            "Å anta at Switch oppdaterer verdien selv om man ikke setter state",
            "Å bruke boolean verdier i state",
            "Å sette trackColor direkte"
        ],
        correct: 1,
        explanation:
            "Switch er en kontrollert komponent — value må oppdateres via state ellers 'hopper' den tilbake. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva er det viktigste prinsippet når man bruker DateTimePicker?",
        options: [
            "Picker må alltid være synlig på skjermen",
            "Picker må vises/skjules basert på state",
            "Picker må ligge i en modalkomponent",
            "Picker må bruke absolute positioning"
        ],
        correct: 1,
        explanation:
            "DateTimePicker åpnes og lukkes via state og fungerer ulikt på iOS/Android. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva er en potensiell fallgruve med dette feltet?",
        options: [
            "value må være i et objekt",
            "onChangeText må ikke brukes på TextInput",
            "Bruk av spread kan overskrive andre felter i objektet hvis man ikke passer på",
            "TextInput støtter ikke placeholder"
        ],
        code: `setForm(prev => ({ ...prev, name: text }));`,
        correct: 2,
        explanation:
            "Spread må brukes korrekt slik at man ikke mister andre felter når man oppdaterer ett. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen ved å lage egne feltkomponenter (FieldInput, FieldPicker osv.)?",
        options: [
            "Komponenter blir raskere",
            "De håndterer automatisk API-kall",
            "Gjenbruk, konsistens og enklere vedlikehold",
            "Det fjerner behovet for styling"
        ],
        correct: 2,
        explanation:
            "Abstraksjon gir bedre struktur, mindre duplikasjon og mer konsistente forms. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q8",
        type: "true-false",
        question:
            "Påstand: Et skjema bør håndtere all innsendinglogikk selv og ikke motta dette via props.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Forms bør være UI-komponenter, mens forelder bestemmer hva som skjer med data. Dette øker gjenbrukbarhet. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Hvorfor er det nyttig å ha en egen Error-komponent?",
        options: [
            "Feil vises raskere i DevTools",
            "Det reduserer behov for statiske typer",
            "Feilvisning blir konsistent, gjenbrukbar og enklere å style",
            "Feilkomponenten håndterer all validering"
        ],
        correct: 2,
        explanation:
            "Separasjon av ansvar gjør skjemaet ryddigere og enklere å utvide. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er en fordel med valideringsbibliotek som Zod i forms?",
        options: [
            "Zod gjør forms tregere, men mer sikre",
            "Zod kan generere TypeScript-typer og valideringslogikk fra samme kilde",
            "Zod validerer kun ved onSubmit, aldri underveis",
            "Zod fungerer kun for tekstfelt"
        ],
        correct: 1,
        explanation:
            "Zod gir schema + type + validering i én kilde → færre feil og mer robust form-logikk. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvorfor er funksjonell oppdatering nyttig i skjemaer?",
        options: [
            "Den gjør koden tregere",
            "Den garanterer at input ikke oppdaterer state",
            "Den sikrer riktig state når flere felt oppdateres raskt eller avhengig av forrige verdi",
            "Den fungerer kun med TanStack Form"
        ],
        correct: 2,
        explanation:
            "Funksjonell state gir stabil oppdatering når flere endringer skjer samtidig."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hva er en god indikator på at skjemaet bør refaktoreres til en komponentbasert struktur?",
        options: [
            "Når skjemaet inneholder mer enn tre felter",
            "Når det er duplisering av labels, input-felter og feilvisning",
            "Når man bare har én TextInput",
            "Når appen bruker bare Android"
        ],
        correct: 1,
        explanation:
            "Duplisert og repetitiv kode er et tegn på at abstraksjon gir bedre arkitektur. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er en vanlig årsak til at et formfelt ikke oppdaterer som forventet?",
        options: [
            "TextInput krever useEffect",
            "Man har glemt å spre forrige state",
            "Android støtter ikke kontrollert input",
            "Value-prop må hete 'text'"
        ],
        correct: 1,
        explanation:
            "Glemmer man `...prev`, overskrives state slik at andre felt forsvinner, og skjemaet slutter å fungere. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å bruke et form-bibliotek som TanStack Form fremfor manuell håndtering?",
        options: [
            "Man slipper å skrive inputs",
            "State, validering og innsending håndteres konsistent og med mindre boilerplate",
            "Biblioteket genererer UI-komponenter automatisk",
            "Det fungerer kun med små skjemaer"
        ],
        correct: 1,
        explanation:
            "Biblioteket abstraherer state, validering og innsending, og gir bedre struktur og færre feil. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er god praksis når et form skal kunne brukes både til 'lag ny' og 'rediger eksisterende'?",
        options: [
            "Hardkode defaultValues i skjemaet",
            "Lage to separate skjemaer",
            "Gi skjemaet initialValues som prop og la forelder bestemme innholdet",
            "Validere kun ved innsending"
        ],
        correct: 2,
        explanation:
            "Ved å ta initialValues som prop kan samme skjema brukes for create & edit → gjenbrukbar og ren arkitektur. :contentReference[oaicite:15]{index=15}"
    }
];

export const ulearn_16_17_forms_rn_kml = {
    id: "ulearn_16_17_forms_rn_kml",
    title: "L16/L17 - Forms – State, Validering og Struktur - KML",
    description:
        "En generell quiz som tester teori og praktisk bruk av forms i React Native, inkludert state-håndtering, validering, refaktorering og god arkitektur.",
    theme: [
        "forms",
        "states",
    ],
    questions: [...questions]
};
