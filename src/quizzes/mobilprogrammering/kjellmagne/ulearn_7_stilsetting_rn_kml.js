const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva er standardverdien for flexDirection i React Native?",
        options: ["row", "row-reverse", "column", "column-reverse"],
        correct: 2,
        explanation:
            "React Native bruker `flexDirection: 'column'` som default. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question: "Hva er riktig beskrivelse av justifyContent når flexDirection er 'row'?",
        options: [
            "Justerer innhold vertikalt",
            "Justerer innhold horisontalt",
            "Justerer spacing mellom linjer",
            "Justerer basert på tekstbaseline"
        ],
        correct: 1,
        explanation:
            "Ved `flexDirection: 'row'` er hovedaksen horisontal → justifyContent styrer horisontal justering. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question: "Hva er feil i denne stilen?",
        options: [
            "Man kan ikke bruke px i React Native",
            "borderColor må være et nummer",
            "borderRadius krever prosent",
            "backgroundColor må bruke rgba"
        ],
        code: `const styles = {
  box: {
    width: 100,
    height: "100px",
    borderColor: "#000",
    borderRadius: 10,
  }
};`,
        correct: 0,
        explanation:
            "React Native støtter ikke px-enheter → dimensjoner må være tall uten enheter. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question: "Hva skjer når overflow ikke settes eksplisitt i React Native?",
        options: ["Innhold vises utenfor containeren", "Innhold kuttes", "Error kastes", "Overflow fungerer som på web"],
        correct: 1,
        explanation:
            "React Native klipper innhold som default (`overflow: 'hidden'`). :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question: "Hva er feil i denne koden?",
        options: [
            "alignItems støttes ikke",
            "textAlign brukes feil",
            "alignItems påvirker ikke Text-komponenter i flexDirection 'row'",
            "justifyContent kan ikke brukes sammen med flex"
        ],
        code: `container: {
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center"
}`,
        correct: 2,
        explanation:
            "Text-komponenter i en RENDERED 'row' påvirkes ikke av alignItems; de justeres av sin egen tekststil. textAlign fungerer kun på Text og vil ikke sentrere andre barns posisjon. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question: "Hva er riktig måte å lage responsiv bredde basert på skjermen?",
        options: [
            "width: Dimensions.width",
            "width: Dimensions.get('screen')",
            "width: Dimensions.get('window').width * 0.8",
            "width: '80vw'"
        ],
        correct: 2,
        code: `const { width } = Dimensions.get("window");`,
        explanation:
            "React Native støtter ikke vw-enheter; Dimensions API brukes for responsive mål. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question: "Hva gjør denne styling-kombinasjonen?",
        options: [
            "Overskriver alltid styles.base",
            "styles.base har prioritet over inline",
            "Inline-stiler overstyrer styles.base",
            "Det oppstår konflikt og appen crasher"
        ],
        code: `<View style={[styles.base, { padding: 20 }]} />`,
        correct: 2,
        explanation:
            "Stiler i arrays evalueres i rekkefølge, og senere stiler overstyrer tidligere. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question: "Hva er feil i denne layouten?",
        options: [
            "flexGrow støttes ikke",
            "flex: 1 må brukes på parent for å fungere",
            "justifyContent mangler",
            "alignItems fungerer ikke med row"
        ],
        code: `<View style={{ flexGrow: 1 }}>
  <Text>Hello</Text>
</View>`,
        correct: 1,
        explanation:
            "flexGrow fungerer ikke uten at parent container bruker en layout som gir tilgjengelig plass (oftest flex: 1)."
    },

    {
        id: "q9",
        type: "multiple-choice",
        question: "Hva skjer her?",
        options: [
            "Boksen blir alltid kvadratisk",
            "aspectRatio ignoreres",
            "height overskriver aspectRatio",
            "width ignoreres og bare aspectRatio brukes"
        ],
        code: `box: {
  width: 200,
  aspectRatio: 1,
  height: 100,
};`,
        correct: 2,
        explanation:
            "Dersom både height og aspectRatio er satt, vil height ha prioritet og width justeres deretter. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question: "Hva er problemet i denne koden?",
        options: [
            "shadowColor må være nummer",
            "Android støtter ikke elevation",
            "iOS støtter ikke elevation — kun shadowProps",
            "shadowOffset må være en string"
        ],
        code: `const styles = StyleSheet.create({
  box: {
    elevation: 5,
    shadowColor: "#000",
  }
});`,
        correct: 2,
        explanation:
            "iOS bruker shadows; Android bruker elevation. elevation alene gir ingen effekt på iOS. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q11",
        type: "true-false",
        question: "Påstand: margin påvirker den synlige størrelsen på komponenten.",
        options: ["Sant", "Usant"],
        correct: 1,
        explanation:
            "Margin er utenfor komponenten og påvirker ikke innvendig størrelse. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question: "Hva er feil i denne koden?",
        options: [
            "borderRadius må være en string",
            "overflow: 'visible' støttes ikke",
            "Høyden må settes eksplisitt",
            "Text kan ikke ha backgroundColor"
        ],
        code: `text: {
  overflow: "visible",
  borderRadius: 10,
  backgroundColor: "red"
}`,
        correct: 2,
        explanation:
            "Overflow 'visible' er støttet, men fungerer bare når width/height er definert; ellers gir ingen effekt."
    },

    {
        id: "q13",
        type: "multiple-choice",
        question: "Hva er galt i denne komponenten?",
        options: [
            "Image må ha width og height",
            "imageStyle må være et StyleSheet",
            "source må bruke local path",
            "flexDirection mangler"
        ],
        code: `<Image
  source={{ uri: "https://example.com/img.jpg" }}
  style={{ borderRadius: 50 }}
/>`,
        correct: 0,
        explanation:
            "URL-bilder krever eksplisitt width & height for å bli rendret. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question: "Hva gjør alignSelf?",
        options: [
            "Overstyrer justifyContent",
            "Lar elementet overstyre parent's alignItems",
            "Setter komponentens margin automatisk",
            "Brukes kun på tekst"
        ],
        correct: 1,
        explanation:
            "alignSelf gjør at ett barn kan ha annen kryssakse-justering enn resten."
    },

    {
        id: "q15",
        type: "multiple-choice",
        question: "Hva er feil i denne stilen?",
        options: [
            "padding kan ikke være et objekt",
            "justifyContent støttes ikke på Text",
            "center er ikke en gyldig verdi",
            "nested padding er feilsyntaks"
        ],
        code: `textBox: {
  padding: { top: 10, bottom: 10 },
  justifyContent: "center"
}`,
        correct: 0,
        explanation:
            "padding må være `paddingTop`, `paddingBottom` eller én numerisk verdi. Object er ikke lov. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q16",
        type: "multiple-choice",
        question: "Hva skjer hvis du bruker zIndex uten position: 'absolute'?",
        options: [
            "zIndex ignoreres",
            "Elementet flyttes alltid foran andre",
            "Composisjon feiler",
            "Bakgrunnsfargen fjernes"
        ],
        correct: 0,
        explanation:
            "zIndex fungerer kun på elementer med posisjonering context og mellom siblings. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q17",
        type: "multiple-choice",
        question: "Hva er feil i denne koden?",
        options: [
            "Man kan ikke bruke Platform.select inni StyleSheet",
            "Android må bruke boxShadow",
            "iOS-shadow må definere shadowOpacity",
            "Man kan ikke blande inline og static styles"
        ],
        code: `const card = {
  ...Platform.select({
    ios: { shadowColor: "#000" },
    android: { elevation: 8 }
  })
};`,
        correct: 2,
        explanation:
            "iOS-shadow krever minst shadowColor, shadowOffset, shadowOpacity og shadowRadius. :contentReference[oaicite:15]{index=15}"
    },

    {
        id: "q18",
        type: "multiple-choice",
        question: "Hva mangler her for at absolute-posisjoneringen skal fungere riktig?",
        options: [
            "backgroundColor",
            "position: 'relative' på parent",
            "flex: 1",
            "top må være negativ"
        ],
        code: `<View style={{ width: 200, height: 200 }}>
  <Text style={{ position: "absolute", bottom: 0 }}>Hi</Text>
</View>`,
        correct: 1,
        explanation:
            "Absolute-posisjonering skjer relativt til nærmeste ikke-static forelder; parent må ha position: 'relative'. :contentReference[oaicite:16]{index=16}"
    },

    {
        id: "q19",
        type: "multiple-choice",
        question: "Hva er riktig måte å definere en dynamisk stil basert på en prop?",
        options: [
            "style={styles.base(prop)}",
            "style={() => styles.base}",
            "style={[styles.base, prop && styles.active]}",
            "style={{ styles.base, styles.active }}"
        ],
        correct: 2,
        explanation:
            "Dynamiske stiler bygges med conditional arrays: `[base, condition && extra]`. :contentReference[oaicite:17]{index=17}"
    },

    {
        id: "q20",
        type: "multiple-choice",
        question: "Hva er feil i denne box model-beregningen?",
        options: [
            "Border påvirker ikke størrelse",
            "Padding påvirker ikke høyde",
            "React Native inkluderer ikke padding og border i total størrelse",
            "Total størrelse inkluderer padding og border"
        ],
        code: `const total = width + padding + border;`,
        correct: 2,
        explanation:
            "React Native inkluderer padding og border i total størrelse, i motsetning til web med border-box. :contentReference[oaicite:18]{index=18}"
    }
];

export const ulearn_7_stilsetting_rn_kml = {
    id: "ulearn_7_stilsetting_rn_kml",
    title: "Styling i React Native – KML",
    description:
        "En avansert stil-quiz med fokus på layout, flexbox, posisjonering, plattformspesifikke stiler, dynamiske stiler og feilidentifisering.",
    theme: ["styling", "debugging"],
    questions: [...questions]
};
