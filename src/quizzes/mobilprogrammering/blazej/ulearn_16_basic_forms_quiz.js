const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva kjennetegner en «floating button» i mobil-UI slik den er brukt i leksjonen?",
        options: [
            "En knapp som alltid ligger i toppen av skjermen, under headeren",
            "En knapp som er plassert inne i en liste og scroller sammen med innholdet",
            "En knapp som «svever» over annet innhold med absolutt posisjonering, ofte i et hjørne",
            "En knapp som kun vises når brukeren holder inne en annen knapp",
        ],
        correct: 2,
        explanation:
            "Floating button er posisjonert med absolute (f.eks. bottom/right) og har høy zIndex slik at den «svever» over annet innhold, ofte i et hjørne.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hvorfor brukes PropsWithChildren i FloatingButton-komponenten?",
        options: [
            "For å automatisk legge til standard onPress-handlere",
            "For å kunne sende inn og typesikre children (f.eks. ikon eller tekst) på en typesikker måte",
            "For å sørge for at knappen alltid har samme størrelse på tvers av plattformer",
            "For å legge til støtte for animasjoner uten ekstra kode",
        ],
        correct: 1,
        explanation:
            "PropsWithChildren legger til children-propen i props-typen, slik at vi kan sende inn vilkårlig innhold (ikon/tekst) til FloatingButton.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva skjer i FloatingButton-komponenten dersom onPress-propen ikke sendes inn?",
        options: [
            "Knappen rendres ikke i det hele tatt",
            "Knappen kaster en runtime-feil når komponenten mountes",
            "Knappen rendres som en statisk View uten trykk-funksjonalitet",
            "Knappen får en default onPress som logger til konsollen",
        ],
        correct: 2,
        explanation:
            "Hvis onPress ikke er definert returnerer komponenten en View-variant av knappen uten CustomPress og dermed uten trykk-håndtering.",
    },
    {
        id: "q4",
        type: "true-false",
        question:
            "React Native har et innebygd <form>-element som fungerer likt som i vanlig web-HTML.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "React Native har ikke et innebygd <form>-element. Skjema bygges med ulike input-komponenter kombinert med state-håndtering.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hva menes med at TextInput brukes som en «kontrollert komponent» i eksemplene?",
        options: [
            "At TextInput aldri kan endre verdi etter første render",
            "At TextInput selv holder styr på state internt uten bruk av useState",
            "At TextInput styres av en state-variabel (value) og oppdateres via onChangeText",
            "At TextInput alltid har secureTextEntry satt til true",
        ],
        correct: 2,
        explanation:
            "En kontrollert komponent får verdien sin fra state (value) og oppdaterer denne via onChangeText, slik at UI alltid reflekterer state.",
    },
    {
        id: "q6",
        type: "true-false",
        question:
            "En Switch vil alltid visuelt bytte mellom av/på når brukeren trykker, selv om value-propen aldri oppdateres.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Switch er også en kontrollert komponent. Hvis value ikke oppdateres når onValueChange trigges, vil den bli «låst» til verdien som sendes inn via props.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva er hovedforskjellen mellom Variant 1 (FormSeparate) og Variant 2 (Form med state-objekt)?",
        options: [
            "Variant 1 bruker bare TextInput, mens Variant 2 bare bruker Switch",
            "Variant 1 samler alle feltene i ett state-objekt, Variant 2 har én state per felt",
            "Variant 1 har én state per felt, Variant 2 samler alle feltene i ett state-objekt",
            "Variant 1 bruker TanStack Form, Variant 2 bruker kun useState",
        ],
        correct: 2,
        explanation:
            "Variant 1 har separate useState-hooks for hvert felt. Variant 2 bruker ett state-objekt (student) som inneholder alle feltene.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er en viktig fordel med å bruke ett samlet state-objekt for skjemadata (Variant 2)?",
        options: [
            "Det blir umulig å legge til nye felter i skjemaet",
            "Man slipper å bruke onChangeText på TextInput",
            "All skjemadata ligger samlet ett sted, og samme handleChange-funksjon kan oppdatere alle feltene",
            "Det gjør at komponenten ikke trenger å re-renderes ved endringer",
        ],
        correct: 2,
        explanation:
            "Med ett state-objekt blir skjemadata samlet og en generisk handleChange kan oppdatere felter ved hjelp av nøkkel (keyof Student).",
    },
    {
        id: "q9",
        type: "true-false",
        question:
            "DateTimePicker er en del av kjernebiblioteket i React Native og krever ingen ekstra installasjon.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "DateTimePicker er ikke en del av core; den må installeres separat med f.eks. `npx expo install @react-native-community/datetimepicker`.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hvorfor brukes date-fns sammen med DateTimePicker i eksempelet?",
        options: [
            "For å kunne vise Switch-komponenten samtidig",
            "For å gjøre det enklere å formatere datoer og beregne intervaller (f.eks. +5 år)",
            "For å gjøre DateTimePicker til en kontrollert komponent",
            "For å automatisk validere datoer mot et Zod-schema",
        ],
        correct: 1,
        explanation:
            "date-fns brukes blant annet til å formatere datoen til f.eks. 'dd. MMMM yyyy' og til å beregne grenser som maksimal dato (addYears).",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er hovedrollen til useForm fra TanStack Form i Variant 3 og 4?",
        options: [
            "Å erstatte alle React-komponenter med native komponenter",
            "Å generere automatisk UI uten at vi definerer komponenter",
            "Å håndtere skjemastate, innsending (onSubmit) og legge til rette for validering",
            "Å styre navigasjon mellom skjermer i appen",
        ],
        correct: 2,
        explanation:
            "useForm oppretter en skjemainstans som håndterer state, onSubmit-logikk og integrasjon med felter (form.Field), samt validering.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            'Hva gjør name-propen på <form.Field name="id" /> i TanStack Form-eksemplet?',
        options: [
            "Den gir feltet en unik HTML-id for CSS",
            "Den brukes kun til testverktøy og har ingen betydning for skjemaet",
            "Den kobler feltet til riktig felt i defaultValues/skjemadata (f.eks. student.id)",
            "Den bestemmer om feltet er required eller ikke",
        ],
        correct: 2,
        explanation:
            "name forteller TanStack Form hvilket felt i skjemadata dette Field representerer, og binder det mot defaultValues og state.",
    },
    {
        id: "q13",
        type: "true-false",
        question:
            "Selv om vi bruker TanStack Form, må vi fortsatt selv skrive logikken i onSubmit for å f.eks. sende data til et API.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "TanStack Form hjelper med skjemahåndtering, men det er fortsatt opp til oss å implementere hva som faktisk skjer i onSubmit (f.eks. API-kall).",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å bruke Zod sammen med TanStack Form i Variant 4?",
        options: [
            "Zod erstatter behovet for å bruke useForm",
            "Zod gjør at vi ikke trenger å definere defaultValues",
            "Zod gir deklarativ og typesikker validering av skjemadata, med gode feilmeldinger",
            "Zod gjør at vi slipper å bruke TextInput og Switch i det hele tatt",
        ],
        correct: 2,
        explanation:
            "Zod lar oss definere et schema for data, validere på en deklarativ måte og gir tydelige feilmeldinger, samtidig som vi kan inferere typer.",
    },
    {
        id: "q15",
        type: "true-false",
        question:
            "I Zod-skjemaet kan vi bruke regex for å sikre at expireAt har formatet YYYY-MM-DD.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "I eksemplet brukes `z.string().regex(/^\\d{4}-\\d{2}-\\d{2}$/)` nettopp for å validere datoformatet som en streng på formen YYYY-MM-DD.",
    },
];

export const react_native_forms_quiz = {
    id: "react-native-forms-quiz",
    title: "L16- React Native Forms og skjemahåndtering - BZJ",
    description:
        "Quiz om forms i React Native, ulike input-komponenter, skjemahåndtering med state, TanStack Form og validering med Zod. Tilpasset som repetisjon mot eksamen i mobilprogrammering.",
    theme: ["react-native", "forms", "zod"],
    questions: [...questions],
};
