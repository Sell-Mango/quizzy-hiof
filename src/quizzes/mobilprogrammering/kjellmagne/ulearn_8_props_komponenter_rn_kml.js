const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Hva beskriver best props i React Native?",
        options: [
            "Data en komponent selv eier og kan endre",
            "Konfigurasjon og data som sendes fra foreldre til barn",
            "Globale variabler tilgjengelig i hele appen",
            "Funksjoner som kun brukes i navigasjon"
        ],
        correct: 1,
        explanation:
            "Props sendes nedover i hierarkiet og er uforanderlige i komponenten som mottar dem. Dette dekkes i pensumet. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Hva kjennetegner unidirectional data flow i React?",
        options: [
            "Data flyter i vilkårlig retning mellom komponenter",
            "Data flyter oppover uten props",
            "Data flyter fra foreldre → barn, mens callbacks brukes for å sende data opp",
            "Data synkroniseres automatisk mellom komponenter"
        ],
        correct: 2,
        explanation:
            "React følger prinsippet 'data down, actions up'. Props går ned, callbacks sendes opp. Dette ligger til grunn for komponentarkitektur. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Hva er riktig om props vs state?",
        options: [
            "Begge kan endres i komponenten",
            "State er readonly, mens props kan endres",
            "Props er readonly, mens state kan endres i komponenten",
            "Begge må sendes helt fra App-komponenten"
        ],
        correct: 2,
        explanation:
            "Props er uforanderlige, mens state brukes for dynamisk oppførsel. Pensum skiller dette tydelig. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Hva skjer når props endres i foreldrekomponenten?",
        options: [
            "Barnet må manuelt oppdatere seg selv",
            "Barnet re-render automatisk",
            "Barnet må bruke useEffect for å få med seg endringer",
            "Endringen ignoreres"
        ],
        correct: 1,
        explanation:
            "React re-render komponenten når props endrer seg. Det krever ingen ekstra logikk."
    },

    {
        id: "q5",
        type: "multiple-choice",
        question: "Hva er feil i denne komponenten?",
        options: [
            "children brukes feil",
            "props må destruktureres",
            "props.title må sendes som prop, ellers undefined",
            "Komponenten må returnere én root"
        ],
        code: `function Card(props) {
  return (
    <View>
      <Text>{title}</Text>
      {props.children}
    </View>
  );
}`,
        correct: 2,
        explanation:
            "title er ikke definert — den må refereres som props.title eller gjennom destrukturering. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Hva brukes children-proppen til?",
        options: [
            "Å sende callbacks oppover",
            "Å bestemme state-håndtering",
            "Å sende JSX-innhold inn i en komponent",
            "Å importere eksterne komponenter automatisk"
        ],
        correct: 2,
        explanation:
            "Children gjør komponenter mer fleksible ved å la dem omslutte annet innhold. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Hva gjør callback-propper mulig?",
        options: [
            "Å sende data nedover i hierarkiet",
            "Å sende data opp igjen til foreldrekomponenten",
            "Å definere globale typer",
            "Å synkronisere navigasjonstilstand"
        ],
        correct: 1,
        explanation:
            "Barn kan ikke oppdatere forelderens state direkte, men callback-propper gir muligheten. Pensum viser dette i interaksjoner. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Hva er riktig om state lifting?",
        options: [
            "State flyttes nedover i hierarkiet for å gjøre koden enklere",
            "State flyttes opp til et felles foreldrekomponent for å dele data mellom barn",
            "State deles automatisk mellom søskenkomponenter",
            "State lagres utenfor React"
        ],
        correct: 1,
        explanation:
            "State løftes opp når flere komponenter trenger tilgang til samme data."
    },

    {
        id: "q9",
        type: "true-false",
        question:
            "Påstand: En komponent bør være gjenbrukbar ved at all logikk ligger inni komponenten og ikke styres av props.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Gjenbrukbarhet oppnås når logikk og visning kan styres via props, ikke ved å hardkode oppførsel. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er feil i denne komponenten som skal håndtere klikk?",
        options: [
            "onPress er ikke en gyldig prop",
            "Pressable må returnere en View",
            "Callback må wrappes i en funksjon",
            "Man kan ikke sende funksjoner som props"
        ],
        code: `<Pressable onPress={onSelect(item.id)}>
  <Text>{item.name}</Text>
</Pressable>`,
        correct: 2,
        explanation:
            "`onPress={onSelect(item.id)}` kalles med én gang. Den skal være `() => onSelect(item.id)` for å kalle funksjonen ved trykk. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Hva er fordelen med prop-spreading (`...props`)?",
        options: [
            "Man kan sende props til feil komponenter",
            "Det gir forutsigbarhet ved restrukturering av kode",
            "Det lar wrapper-komponenter sende alle mottatte props videre",
            "Det gjør props mutable"
        ],
        correct: 2,
        explanation:
            "Prop-spreading er nyttig i wrapper-komponenter som EnhancedText, Card m.m. Pensum demonstrerer dette. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Hvilket utsagn stemmer for denne koden?",
        options: [
            "backgroundColor blir alltid rød",
            "props.style overstyrer styles.base",
            "styles.base overstyrer props.style",
            "children kan ikke brukes med denne syntaksen"
        ],
        code: `<Text style={[styles.base, props.style]}>
  {props.children}
</Text>`,
        correct: 1,
        explanation:
            "Når stiler kombineres i et array, overstyrer senere elementer tidligere. props.style kommer sist. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva skjer når en komponent ikke får sendt nødvendige props?",
        options: [
            "React kaster alltid en error",
            "Komponenten krasjer runtime",
            "Props vil være undefined med mindre defaultverdier brukes",
            "React fyller inn standardverdier automatisk"
        ],
        correct: 2,
        explanation:
            "Props uten standardverdi vil være undefined. Pensum viser bruk av default props. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva er formålet med å sende callback som prop i lister, f.eks. StudentList eller FlatList?",
        options: [
            "For å rendre lister raskere",
            "For å sende informasjon opp til foreldre ved interaksjon",
            "For å unngå å bruke state",
            "For å automatisk oppdatere styling"
        ],
        correct: 1,
        explanation:
            "I pensum brukes onStudentPress for å sende ID-en tilbake til App-komponenten. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva vil skje hvis en komponent prøver å endre en prop direkte?",
        options: [
            "React vil stille inn ny verdi",
            "Endringen ignoreres og kan føre til feil",
            "State endres automatisk",
            "React sender en warning men oppdaterer UI"
        ],
        correct: 1,
        explanation:
            "Props er immutable – å mutere dem bryter Reacts dataflyt og vil ikke gi ønsket resultat."
    },

    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Hva er riktig måte å løfte state opp på?",
        options: [
            "Gi barnet sin egen useState og synkronisere manuelt",
            "Lagre state i global variabel",
            "Flytte state til nærmeste felles forelder",
            "Bruke props for å endre barnets state"
        ],
        correct: 2,
        explanation:
            "State løftes opp til felles forelder når to eller flere barn trenger samme data."
    },

    {
        id: "q17",
        type: "multiple-choice",
        question:
            "Hvorfor brukes callback-propper ofte sammen med Pressable?",
        options: [
            "For å style komponenten",
            "For å sende brukerens handling opp igjen til foreldrekomponenten",
            "For å skape barn → barn kommunikasjon",
            "Pressable krever alltid en callback-prop"
        ],
        correct: 1,
        explanation:
            "Pressable håndterer interaksjon, men forelder bestemmer hva som skjer. Pensum viser onPress i StudentID. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q18",
        type: "multiple-choice",
        question:
            "Hva er hovedfordelen med å gjøre komponenter gjenbrukbare via props?",
        options: [
            "Man får færre filer",
            "Komponenten kan brukes i flere kontekster med ulik data og oppførsel",
            "Man slipper å bruke state",
            "Barn kan endre foreldrekomponenter direkte"
        ],
        correct: 1,
        explanation:
            "Pensum illustrerer hvordan Card og StudentID blir gjenbrukbare når de styres via props. :contentReference[oaicite:15]{index=15}"
    }
];

export const ulearn_8_props_komponenter_kml = {
    id: "ulearn_8_props_komponenter_kml",
    title: "L8 - Props & komponenter – KML",
    description:
        "En quiz som tester kunnskap om unidirectional data flow, props, children, callbacks, state lifting og praktisk komponentarkitektur i React Native.",
    theme: ["props", "states", "interaction"],
    questions: [...questions]
};
