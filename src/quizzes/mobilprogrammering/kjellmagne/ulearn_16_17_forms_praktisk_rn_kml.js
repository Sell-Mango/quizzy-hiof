const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Case: Du skal lage et enkelt login-skjema med e-post og passord. Hvilken løsning gir et ryddig, kontrollert skjema med minimal duplisering?",
        options: [
            "Én useState per felt: const [email, setEmail] = useState(''); const [password, setPassword] = useState('');",
            "Én useState for begge felt: const [form, setForm] = useState({ email: '', password: '' }); og oppdatere med setForm(prev => ({ ...prev, email: text })) osv.",
            "Ingen state – lese verdier direkte fra TextInput med ref når brukeren trykker på Logg inn",
            "Lag en global variabel loginForm og oppdater den direkte"
        ],
        code: `// Hvilken tilnærming er mest skalerbar?
// A, B, C eller D`,
        correct: 1,
        explanation:
            "Å samle feltene i ett form-objekt skalerer bedre, gir mindre duplisering og er mer likt hvordan man sender data videre til API."
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Case: Du skal lage et skjema for å opprette bruker og vil gjenbruke det samme skjemaet når en bruker skal redigeres. Hvilken strategi gir best gjenbruk?",
        options: [
            "Ha to separate skjema-komponenter: CreateUserForm og EditUserForm",
            "Ha én komponent UserForm som får initialValues som prop, og bruker onSubmit-prop for å sende data opp",
            "La skjemaet selv bestemme om det er create eller edit basert på om id finnes i state",
            "Ha ett skjema, men hardkode default-verdier inni komponenten"
        ],
        correct: 1,
        explanation:
            "En generisk UserForm med initialValues og onSubmit gjør skjemaet gjenbrukbart for både create og edit uten duplisering."
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Case: Du har dette password-feltet som noen ganger slutter å oppdatere UI-et korrekt. Hva er sannsynligvis problemet?",
        options: [
            "TextInput støtter ikke secureTextEntry og value samtidig",
            "onChangeText kalles ikke på Android",
            "State blir overskrevet fordi du glemte å spre prev når du oppdaterer form-objektet",
            "secureTextEntry må settes til en string, ikke boolean"
        ],
        code: `<TextInput
  value={form.password}
  secureTextEntry
  onChangeText={(text) => setForm({ password: text })}
/>`,
        correct: 2,
        explanation:
            "setForm({ password: text }) overskriver hele form-objektet og fjerner andre felter. Riktig er f.eks. setForm(prev => ({ ...prev, password: text }))."
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Case: Du vil vise valideringsfeil under hvert felt. Hvilken arkitektur gir mest fleksibel og ryddig kode?",
        options: [
            "Lagre errors i en egen state: const [errors, setErrors] = useState<{ [key: string]: string }>() og sende riktig error ned til hvert felt",
            "console.log-feil og håpe brukeren ser dem i dev-tools",
            "Vis én felles Alert med alle feil uten å knytte dem til konkrete felt",
            "Kaste Error i onChangeText hvis validering feiler"
        ],
        correct: 0,
        explanation:
            "Egen errors-state gjør det lett å knytte egne meldinger til spesifikke felter og er standard mønster i skjemaer."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Case: Du har et felt for å velge en dato (f.eks. fødselsdato). Hvordan håndterer du dette ryddig i et skjema?",
        options: [
            "Bruke DateTimePicker, og lagre valgt dato i samme form-state som de andre feltene",
            "La DateTimePicker styre all state selv og lese ut datoen i onSubmit",
            "Konvertere dato til string og ikke lagre den i state",
            "Hardkode en default-dato og ikke la brukeren endre den"
        ],
        correct: 0,
        explanation:
            "Dato er også input-data og bør være en del av samme form-state-objekt for å gjøre innsending og validering enkel."
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: Du lager en <FormField> komponent for TextInput + label + feiltekst. Hvilken prop-signatur er mest fleksibel?",
        options: [
            "FormField mottar bare label og placeholder, håndterer egen state internt",
            "FormField mottar value, onChangeText, label, placeholder og optional error, og lar forelder eie state",
            "FormField mottar kun error og finner resten i en global context",
            "FormField bruker useState inni seg og eksporterer verdiene via en global variabel"
        ],
        correct: 1,
        explanation:
            "At forelder eier state og FormField er ‘dum’ presentasjonskomponent gjør den gjenbrukbar og lett å teste."
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Case: Du skal sende skjema-data til en API når brukeren trykker på 'Lagre'. Hvilken tilnærming er best praksis?",
        options: [
            "Kalle API-et direkte inne i TextInput sitt onChangeText",
            "Ha en onSubmit-funksjon i forelder som skjema-komponenten kaller med form-verdier",
            "La hvert felt kalle API-et når det endres",
            "Lagre data i en global variabel og sende den fra hvor som helst i appen"
        ],
        correct: 1,
        explanation:
            "Skjemaet bør være ansvarlig for UI + innsamling, mens forelder bestemmer hva som skjer med dataene i onSubmit."
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Case: Flere felter i skjemaet avhenger av hverandre (f.eks. totalpris = antall * pris). Hvordan bør dette håndteres?",
        options: [
            "Bare la brukeren taste inn totalpris manuelt",
            "Bruke useEffect i forelder for å reagere på endring av antall/pris og oppdatere total i state",
            "Oppdatere total kun når skjemaet sendes inn",
            "Regne ut total i render uten å lagre det i state"
        ],
        correct: 1,
        explanation:
            "Når ett felt faktisk er avhengig av andre felt, er useEffect + form-state en god måte å holde verdiene i sync på (eller derive verdien hver render hvis det ikke trengs i mer logikk)."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Case: Du ser at brukeren kan trykke 'Lagre' flere ganger raskt, og da sendes samme form-data til API flere ganger. Hvilken løsning er mest robust?",
        options: [
            "Ignorere det – API bør håndtere duplikater",
            "Disable knappen mens onSubmit kjører, ved å ha en isSubmitting-state",
            "Bruke en global boolean isBusy utenfor komponenten",
            "Logge en warning men fortsatt sende kallene"
        ],
        correct: 1,
        explanation:
            "En egen isSubmitting-state lar deg disable knapper og vise spinner, og hindrer duplikate requests fra UI."
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Case: Du bruker et valideringsschema (f.eks. Zod) for skjemaet. Hvor bør du typisk kalle valideringsfunksjonen?",
        options: [
            "Inni hvert onChangeText‐kall",
            "Kun når komponenten mountes første gang",
            "I onSubmit, og eventuelt i feltspesifikk validering (onBlur) ved behov",
            "Bare på serveren – aldri i klienten"
        ],
        correct: 2,
        explanation:
            "Full validering ved submit + ev. feltvis validering ved blur er vanlig og balanserer brukeropplevelse og robusthet."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Case: Du har et komplekst skjema som begynner å bli uoversiktlig selv med form-objekt i state. Hva er en naturlig neste refaktorering?",
        options: [
            "Flytte all logikk inn i App.tsx",
            "Bruke en custom hook (f.eks. useForm) som kapsler inn state, handlers og validering",
            "Lage flere useState for hvert felt igjen",
            "Bytte til u-kontrollerte inputs for alle felter"
        ],
        correct: 1,
        explanation:
            "En custom hook for form-logikk gir en renere komponent og lar deg gjenbruke logikken på tvers av skjemaer."
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Case: Du vil vise en bekreftelsesdialog når bruker prøver å gå ut av skjemaet med endringer som ikke er lagret. Hvordan kan skjemaet kommunisere dette oppover?",
        options: [
            "Skjemaet bør selv håndtere navigasjon og blokkere routing",
            "Skjemaet eksponerer en prop som heter canLeave og endrer den direkte på forelder",
            "Skjemaet gir forelder en callback som onDirtyChange(isDirty: boolean) når form-endringer skjer",
            "Det er ikke mulig – forms kan ikke styre navigasjon"
        ],
        correct: 2,
        explanation:
            "Skjemaet er best egnet til å vite når det er 'dirty', mens forelder (eller navigasjon) bestemmer hva som skjer. Callback-propper er et godt mønster for dette."
    }
];

export const ulearn_16_17_forms_praktisk_rn_kml = {
    id: "ulearn_16_17_forms_praktisk_rn_kml",
    title: "L16/L17 - Forms – bruk & implementasjon - KML",
    description:
        "En case-basert quiz hvor du får praktiske form-scenarier i React Native og må velge den mest robuste, skalerbare og idiomatiske implementasjonen.",
    theme: [
        "forms",
        "states",
    ],
    questions: [...questions]
};
