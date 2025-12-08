const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva er hovedgrunnen til å lage en egen FieldErrors-komponent i stedet for å vise feilmeldinger direkte i hvert felt?",
        options: [
            "For å redusere antall imports i komponentene",
            "For å samle all valideringslogikk i én global funksjon",
            "For å få enklere, mer konsistent og gjenbrukbar feilhåndtering på tvers av skjemaer",
            "For at TanStack Form skal fungere riktig",
        ],
        correct: 2,
        explanation:
            "FieldErrors abstraherer visning av feil, gir konsistent UI, mindre duplisering og gjør det enklere å tilpasse feilmeldinger ett sted.",
    },
    {
        id: "q2",
        type: "true-false",
        question:
            "FieldErrors-komponenten bør vise feilmeldinger med en gang skjemaet lastes, uavhengig av om feltet er berørt (touched) eller ikke.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "I eksempelet returnerer FieldErrors null hvis feltet ikke er berørt (isTouched). Det gir en bedre brukeropplevelse enn å vise feil før brukeren har gjort noe.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å lage en gjenbrukbar FieldInput-komponent rundt TanStack Form-felt og TextInput?",
        options: [
            "At vi slipper å bruke validering helt",
            "At vi kan gjemme all styling og feltlogikk ett sted og få mindre duplikat og mer konsistent UI",
            "At vi kan bruke FieldInput uten noen props",
            "At vi ikke lenger trenger å bruke TanStack Form",
        ],
        correct: 1,
        explanation:
            "FieldInput samler label, input, validering og feilvisning på ett sted, noe som gir mindre duplikatkode og mer konsistent utseende og oppførsel.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "I teksten nevnes det at man kunne skilt visningen av TextInput fra TanStack-spesifikk logikk. Hva er fordelen med det?",
        options: [
            "Da kan komponenten lett brukes uten TanStack Form eller med andre form-bibliotek",
            "Det gjør komponenten avhengig av flere globale variabler",
            "Det gjør at vi må skrive mer duplisert kode",
            "Det hindrer oss i å støtte validering i det hele tatt",
        ],
        correct: 0,
        explanation:
            "Ved å lage en «ren» input-komponent som bare får onChange, value og errors som props, blir den uavhengig av TanStack og mer gjenbrukbar i andre sammenhenger.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Hvorfor er det en god idé å ta inn onSubmit som prop til StudentForm-komponenten?",
        options: [
            "Fordi det er påkrevd av React Native",
            "For at skjemaet alltid skal sende data til samme API",
            "For å gjøre skjemaet gjenbrukbart med forskjellig innsendingslogikk og skille UI fra forretningslogikk",
            "For å kunne bruke useState inni onSubmit",
        ],
        correct: 2,
        explanation:
            "Når onSubmit kommer utenfra, kan samme skjema brukes til ulike use cases (create, update, lokal behandling osv.), og ansvarsområder blir tydeligere separert.",
    },
    {
        id: "q6",
        type: "true-false",
        question:
            "initialValues-propen gjør det mulig å bruke samme StudentForm både til å opprette og til å redigere en student.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Med initialValues kan skjemaet forhåndsutfylles med eksisterende data (f.eks. ved redigering), eller være tomt ved opprettelse.",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hvorfor brukes ActivityIndicator og isSubmitting/state rundt innsending i skjemaet?",
        options: [
            "Kun for å teste at TanStack Form oppdaterer state riktig",
            "For å vise brukeren at noe skjer mens asynkron innsending pågår, og unngå dobbeltklikk på knappen",
            "For å gjøre koden tregere med vilje",
            "For å fjerne behovet for onSubmit",
        ],
        correct: 1,
        explanation:
            "Spinner og disabled-knapp gir tydelig tilbakemelding under innsending og forhindrer at brukeren sender skjemaet flere ganger.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er et viktig prinsipp som demonstreres ved DatePickerField-komponenten?",
        options: [
            "At dato alltid bør skrives som fritekst for maksimal fleksibilitet",
            "At spesialiserte input-komponenter (som dato-picker) kan gi færre feil og bedre UX enn et vanlig tekstfelt",
            "At man alltid bør hardkode dagens dato i skjemaet",
            "At det er bedre å unngå eksterne biblioteker som date-fns helt",
        ],
        correct: 1,
        explanation:
            "En egen datokomponent reduserer risiko for feilformatert input og gir brukeren et mer naturlig og tilpasset grensesnitt for å velge dato.",
    },
    {
        id: "q9",
        type: "true-false",
        question:
            "DatePickerField-komponenten er helt uavhengig av TanStack Form og får all informasjon via props som value og onChange.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "I eksempelet er DatePickerField koblet direkte til TanStack Form via form.Field og form.setFieldValue, så den er ikke helt bibliotek-uavhengig.",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er den viktigste grunnen til at FieldPicker-komponenten (for program-valg) er laget uten direkte TanStack-avhengighet?",
        options: [
            "For at den skal kunne rendres utenfor React Native",
            "For å kunne gjenbruke samme Picker-komponent i andre sammenhenger og form-bibliotek ved å bruke callbacks og meta som props",
            "For å deaktivere all validering",
            "For at den ikke skal kunne ha children",
        ],
        correct: 1,
        explanation:
            "FieldPicker tar inn onFieldChange, selectedValue, meta og children som props. Dermed kan den brukes både med TanStack og andre løsninger.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hvordan brukes form.Subscribe i forbindelse med feltet for program og 'annet'?",
        options: [
            "For å logge alle endringer til konsollen",
            "For å automatisk sende skjemaet inn når program endres",
            "For å overvåke verdien av program og kun rendere et ekstra tekstfelt når brukeren velger 'annet'",
            "For å deaktivere alle andre felter mens program er valgt",
        ],
        correct: 2,
        explanation:
            "form.Subscribe brukes til å reagere på endringer i state (state.values.program) og rendrer et ekstra FieldInput bare når program === 'annet'.",
    },
    {
        id: "q12",
        type: "true-false",
        question:
            "Refine i StudentSchema brukes til å kreve at feltet other fylles ut hvis program er 'annet'.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Refine sjekker hele datastrukturen og returnerer feil på path ['other'] dersom program === 'annet' og other er tomt.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er hensikten med å bruke transform på expireAt-feltet i StudentSchema?",
        options: [
            "Å konvertere datoen til et tall (timestamp) for styling",
            "Å gjøre det umulig å lagre datoen",
            "Å konvertere innkommende streng til ISO-dato-string slik at den lagres i et konsistent format",
            "Å gjøre at feltet alltid blir tomt",
        ],
        correct: 2,
        explanation:
            "Transform brukes til å gjøre om verdien til new Date(val).toISOString(), slik at expireAt lagres i et standardisert format.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva illustrerer bruken av validators på både felt-nivå (onChange) og form-nivå (onSubmit) i TanStack Form?",
        options: [
            "At validering bør bare skje ett sted i hele skjemaet",
            "At vi kan kombinere tidlig tilbakemelding per felt med en endelig helhetssjekk når skjemaet sendes inn",
            "At onSubmit ikke trenger validering når feltene er valide",
            "At vi ikke trenger Zod når vi bruker validators",
        ],
        correct: 1,
        explanation:
            "Validering per felt gir rask feedback, mens validering ved onSubmit sikrer at hele datastrukturen er gyldig før innsending.",
    },
    {
        id: "q15",
        type: "true-false",
        question:
            "Et sentralt prinsipp i leksjonen er å bruke komponentbasert tenkning og separasjon av ansvar for å gjøre komplekse skjemaer enklere å vedlikeholde.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Hele leksjonen bygger på å bryte ned skjemaet i mindre komponenter (FieldInput, FieldErrors, DatePickerField, FieldPicker, StudentForm) med tydelige ansvarsområder.",
    },
];

export const react_native_forms_advanced_quiz = {
    id: "react-native-forms-advanced-quiz",
    title: "L17 - React Native Forms – avansert skjemahåndtering - BZJ",
    description:
        "Quiz om videreføring av forms i React Native: komponentbasert skjemadesign, TanStack Form-bruk, Zod-validering, DateTimePicker, Picker og god brukeropplevelse. Laget som repetisjon mot eksamen i mobilprogrammering.",
    theme: ["react-native", "forms", "zod", "validering", "komponenter_props"],
    questions: [...questions],
};
