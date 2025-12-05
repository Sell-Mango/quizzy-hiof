const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Du skal style en knapp i React Native og vil sette bakgrunnsfarge. Hvilken property-navn er gyldig i en StyleSheet-stil?",
        options: [
            "background-color: '#007AFF'",
            "background_color: '#007AFF'",
            "backgroundColor: '#007AFF'",
            "background: '#007AFF'",
        ],
        correct: 2,
        explanation:
            "React Native bruker camelCase for stilnavn, så `backgroundColor` er riktig. Kebab-case (`background-color`) brukes i CSS for web, ikke i StyleSheet.",
    },
    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Du vil gi en container en høyde på 100. Hvilken variant samsvarer med hvordan dimensjoner fungerer i React Native?",
        options: [
            "height: '100px'",
            "height: 100",
            "height: '100'",
            "height: '100rem'",
        ],
        correct: 1,
        explanation:
            "React Native bruker enhetsløse tall for dimensjoner (f.eks. `height: 100`). Du skal ikke bruke 'px', 'em', 'rem' osv.",
    },
    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Du vurderer å definere stiler som rene objekter i komponenten vs. å bruke StyleSheet.create. Hvilket argument taler for å bruke StyleSheet.create?",
        options: [
            "Det er eneste måten å bruke flexbox på",
            "Det gir validering av stilnavn og mulighet for optimalisering, i tillegg til ryddigere feilmeldinger",
            "Det gjør det mulig å bruke px og em som enheter",
            "Det lar deg definere globale CSS-klasser",
        ],
        correct: 1,
        explanation:
            "StyleSheet.create gir litt validering og optimalisering, og gjør feilmeldinger tydeligere. Det er den anbefalte måten å samle stiler på i React Native.",
    },
    {
        id: "q4",
        type: "multiple-choice",
        question:
            "En container har `flexDirection: 'column'` (standard). Hvilken påstand stemmer da om aksene i denne containeren?",
        options: [
            "Hovedaksen er horisontal, kryssaksen er vertikal",
            "Både hovedakse og kryssakse er vertikale",
            "Hovedaksen er vertikal (opp/ned), kryssaksen er horisontal",
            "Hovedaksen er horisontal, det finnes ingen kryssakse",
        ],
        correct: 2,
        explanation:
            "Med `flexDirection: 'column'` går hovedaksen vertikalt (opp/ned). Kryssaksen er da horisontal.",
    },
    {
        id: "q5",
        type: "multiple-choice",
        question:
            "En container har `flexDirection: 'row'` og `justifyContent: 'space-between'`. Hva blir effekten på barna langs hovedaksen?",
        options: [
            "De plasseres tett samlet i midten",
            "De plasseres helt til venstre",
            "De får lik avstand mellom seg med første og siste inntil kantene",
            "De strekkes i høyden til de fyller hele containeren",
        ],
        correct: 2,
        explanation:
            "Med `flexDirection: 'row'` er hovedaksen horisontal. `justifyContent: 'space-between'` legger første barn til venstre, siste til høyre, og lik avstand mellom de i midten.",
    },
    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Du har en container med `flexDirection: 'column'`, `justifyContent: 'center'` og `alignItems: 'center'`. Hvordan vil innholdet typisk oppføre seg?",
        options: [
            "Det sentreres vertikalt, men ligger venstrejustert horisontalt",
            "Det sentreres horisontalt, men starter øverst",
            "Det blir sentrert både vertikalt og horisontalt",
            "Det fyller hele bredden, men plasseres nederst",
        ],
        correct: 2,
        explanation:
            "Med standard `column`-retning betyr `justifyContent: 'center'` vertikal sentrering (langs hovedaksen), og `alignItems: 'center'` horisontal sentrering (langs kryssaksen).",
    },
    {
        id: "q7",
        type: "multiple-choice",
        question:
            "En boks har følgende stiler i React Native:\n\nwidth: 200,\npaddingHorizontal: 10,\nborderWidth: 2\n\nHva blir total bredde (uten margin) basert på Box Model-beskrivelsen?",
        options: ["200", "224", "220", "214"],
        correct: 1,
        explanation:
            "Total bredde = content (200) + paddingLeft (10) + paddingRight (10) + borderLeftWidth (2) + borderRightWidth (2) = 224.",
    },
    {
        id: "q8",
        type: "multiple-choice",
        question:
            "På web brukes ofte `box-sizing: border-box` for å gjøre det enklere å tenke på størrelser. Hvordan oppfører React Native seg i forhold til dette?",
        options: [
            "React Native bruker alltid border-box som standard",
            "React Native bruker verken padding eller border i størrelsesberegningen",
            "React Native oppfører seg tilsvarende content-box: padding og border legges oppå width/height",
            "React Native støtter ikke padding og border",
        ],
        correct: 2,
        explanation:
            "React Native inkluderer ikke padding og border i width/height, så den faktiske totalstørrelsen øker – tilsvarende content-box på web.",
    },
    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Du vil lage et halvgjennomsiktig overlay som dekker hele skjermen (for eksempel bak en modal). Hvilken stilkombinasjon beskriver en typisk løsning?",
        options: [
            "position: 'relative', flex: 1",
            "position: 'absolute', top: 0, left: 0, right: 0, bottom: 0",
            "position: 'absolute', width: 100, height: 100",
            "position: 'relative', width: '100%', height: '100%'",
        ],
        correct: 1,
        explanation:
            "Med `position: 'absolute'` og alle kantene satt til 0 fyller elementet sin forelder helt (forutsatt at forelderen dekker skjermen).",
    },
    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Et badge skal ligge nederst oppå et profilbilde. Badgen har `position: 'absolute', bottom: 0`. Hva er viktig for at den skal posisjoneres relativt til selve bildekontaineren og ikke til hele skjermen?",
        options: [
            "At bildekontaineren har `position: 'relative'`",
            "At badgen har `flex: 1`",
            "At bildekontaineren bruker `zIndex: 0`",
            "At badgen har `alignSelf: 'flex-end'`",
        ],
        correct: 0,
        explanation:
            "Absolutt posisjonering bruker nærmeste forfader med posisjonering (relative/absolute). Derfor må bildekontaineren ha `position: 'relative'` for at badgen skal følge den.",
    },
    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Du vil lage en sirkel-formet avatar. Hvilken kombinasjon beskriver prinsippet som ble forklart?",
        options: [
            "width og height må være like, og borderRadius settes til halvparten av bredden/høyden",
            "borderStyle må settes til 'circle'",
            "width settes til 0, height er valgfritt, og borderRadius settes til 999",
            "Kun `borderRadius: '50%'` er nødvendig, slik som i CSS",
        ],
        correct: 0,
        explanation:
            "For å lage en sirkel bruker man ofte samme width/height og `borderRadius` lik halvparten av denne verdien.",
    },
    {
        id: "q12",
        type: "multiple-choice",
        question:
            "En tekstblokk med mye innhold får `textAlign: 'justify'`. Hva er den viktigste visuelle effekten av dette valget?",
        options: [
            "Teksten vises alltid i én linje",
            "Teksten får lik kant både til venstre og høyre ved å justere mellomrom mellom ordene",
            "Teksten blir automatisk bold",
            "Teksten roteres 90 grader",
        ],
        correct: 1,
        explanation:
            "`textAlign: 'justify'` justerer teksten slik at både venstre og høyre kant blir rettet ut, ved å justere mellomrom mellom ord.",
    },
    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Du ønsker skygge på et kort som skal fungere både på iOS og Android. Hvilken tilnærming er i tråd med plattform-spesifikke stiler som ble beskrevet?",
        options: [
            "Bruke kun `boxShadow`-property, som fungerer likt overalt",
            "Bruke samme shadow-egenskaper på begge plattformer",
            "Bruke Platform.select for å definere shadowColor/shadowOffset/shadowOpacity på iOS og elevation på Android",
            "Kun bruke elevation på begge plattformer",
        ],
        correct: 2,
        explanation:
            "iOS bruker shadow-properties, mens Android ofte bruker `elevation`. Platform.select gjør det enkelt å definere ulike stiler for hver plattform.",
    },
    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Du vil gjøre et kort responsivt slik at det alltid er omtrent 90 % av skjermbredden. Hvilken løsning samsvarer med design-mønstrene som ble tatt opp?",
        options: [
            "Sette width: 90",
            "Bruke Dimensions.get('window').width * 0.9 til å beregne en konstant cardWidth",
            "Sette width: '90px'",
            "Bruke fontSize i stedet for width",
        ],
        correct: 1,
        explanation:
            "Dimensions-API kan brukes for å hente skjermbredden, og deretter beregne en relativ verdi som cardWidth = width * 0.9.",
    },
    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Du har to overlappende elementer som begge er posisjonert absolutt innenfor samme parent. Ett av dem skal alltid ligge over det andre. Hva er riktig om zIndex i denne situasjonen?",
        options: [
            "zIndex har ingen effekt i React Native",
            "zIndex fungerer bare hvis elementene har forskjellige foreldre",
            "zIndex kan brukes til å styre rekkefølgen, men det fungerer kun mellom søsken med samme forelder",
            "zIndex fungerer bare på Android",
        ],
        correct: 2,
        explanation:
            "zIndex brukes til å styre stablingsrekkefølge, men kun mellom elementer som deler samme forelder. Det gjelder spesielt når de er posisjonert.",
    },
    {
        id: "q16",
        type: "multiple-choice",
        question:
            "Et element kuttes av i kanten selv om innholdet egentlig er større enn boksen. Hvilken egenskap er mest relevant å justere for å la innholdet vises utenfor?",
        options: ["display", "overflow", "alignSelf", "fontWeight"],
        correct: 1,
        explanation:
            "React Native klipper innhold som standard. For å vise innhold utenfor grenser må du bruke `overflow: 'visible'` der det er støttet.",
    },
];

export const quiz_styling_bzj = {
    id: "styling-bzj",
    title: "L7 - React Native – styling, layout og box model - BZJ",
    description:
        "Quiz om styling i React Native: StyleSheet, camelCase, enhetsløse verdier, box model, dimensjoner, posisjonering, flexbox, plattform-spesifikke stiler, tekstjustering og zIndex.",
    theme: ["react-native", "styling", "mobilprogrammering"],
    questions: [...questions],
};
