const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question:
            "Case: Du skal bruke Expo Camera og Media Library i en app. Hva er det viktigste første steget før du prøver å bruke kameraet i UI?",
        options: [
            "Bare rendre <CameraView /> direkte – Expo spør automatisk om alt",
            "Legge til riktige plugins/permissions i app.json/app.config og be brukeren om tillatelser med hooks",
            "Installere expo-camera, men ikke gjøre noe mer",
            "Skrive en custom native modul i Android Studio og Xcode"
        ],
        correct: 1,
        explanation:
            "Expo-moduler som camera og media library trenger både installasjon og konfigurasjon av permissions (app.json/app.config) samt runtime-forespørsel om tilgang via hooks. :contentReference[oaicite:1]{index=1}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question:
            "Case: Du vil be om både kamera- og mediebibliotek-tilgang når brukeren skal ta et bilde. Hvilken tilnærming er mest idiomatisk?",
        options: [
            "Be om begge rettighetene hver gang komponenten rendrer",
            "Bruke Expo-hooks som useCameraPermissions og usePermissions (media library), og ha en egen funksjon som ber om begge før du går videre",
            "Alltid anta at brukeren har gitt tilgang og håndtere feil via try/catch",
            "Bare be om én rettighet – den andre kommer automatisk"
        ],
        code: `const [cameraPermission, requestCameraPermission] = useCameraPermissions();
const [libraryPermission, requestLibraryPermission] = usePermissions();`,
        correct: 1,
        explanation:
            "Expo gir egne hooks for permissions – du kan kombinere dem i en funksjon som sjekker og ber om begge før du lar brukeren fortsette. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question:
            "Case: Du vil kun vise en 'permission gate' første gang brukeren åpner kamera-funksjonen, og ikke spørre på nytt senere. Hva er en god løsning?",
        options: [
            "Spørre hver gang og håpe brukeren ikke blir irritert",
            "Lagre et flagg i AsyncStorage når alle permissions er godkjent, og sjekke dette med et custom hook før du viser skjermen",
            "Lagre flagget i en vanlig useState, så det huskes mellom app restarts",
            "Lagre flagget i en global variabel i filen"
        ],
        correct: 1,
        explanation:
            "AsyncStorage er egnet til enkel persistering av små data (som et 'permissionsGranted'-flagg) mellom app-økter. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question:
            "Case: Du skal ta et bilde med Expo Camera fra en egen komponent. Hvordan får du tak i metoden takePictureAsync på en trygg måte?",
        options: [
            "Kalle CameraView.takePictureAsync() statisk",
            "Bruke useRef til å holde på en ref til CameraView, og så kalle ref.current?.takePictureAsync() i en async-funksjon",
            "Bruke useState til å holde på CameraView",
            "Bruke setTimeout rundt CameraView"
        ],
        code: `const cameraRef = React.useRef<CameraView | null>(null);

async function handleTakePicture() {
  const result = await cameraRef.current?.takePictureAsync();
}`,
        correct: 1,
        explanation:
            "Ref-er gir imperativ tilgang til komponenten og dens metoder uten å tvinge re-renders. Dette er standardmønsteret med Expo Camera. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question:
            "Case: Du har tatt et bilde og får en URI tilbake fra kameraet. Hva er riktig måte å lagre dette bildet i brukerens mediebibliotek?",
        options: [
            "Kalle saveToLibraryAsync(uri) fra expo-media-library etter at du har fått riktig permission",
            "Kopiere filen manuelt til /photos på filsystemet",
            "Konvertere bildet til base64 og lagre i AsyncStorage",
            "Det lagres automatisk hvis du ikke sletter det"
        ],
        code: `import { saveToLibraryAsync } from "expo-media-library";

await saveToLibraryAsync(pictureUri);`,
        correct: 0,
        explanation:
            "expo-media-library har et eget API for å lagre assets til biblioteket — det håndterer resten. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question:
            "Case: Du vil gjøre en 'permission gate' som kan brukes flere steder i appen for kamera-relaterte features. Hvilken arkitektur er mest gjenbrukbar?",
        options: [
            "Legge all permission-logikk direkte i hver skjerm",
            "Lage et custom hook (f.eks. usePermissions) som sjekker AsyncStorage og returnerer { hasPermissions, isLoading }",
            "Bruke global variabel permissionsGranted og oppdatere den manuelt",
            "Hardkode en boolean hasPermissions = true"
        ],
        correct: 1,
        explanation:
            "Et custom hook samler logikken, håndterer async-sjekk mot AsyncStorage og kan gjenbrukes i flere skjermer. "
    },

    {
        id: "q7",
        type: "multiple-choice",
        question:
            "Case: Du merker at access-skjermen blinker kort før kamera-skjermen vises, selv om brukeren allerede har gitt tilgang tidligere. Hva er en sannsynlig årsak?",
        options: [
            "AsyncStorage er for treg til å brukes i hooks",
            "Du viser permission-skjermen mens isLoading fortsatt er true, i stedet for å vente til sjekken er ferdig",
            "Expo Router støtter ikke Redirect",
            "CameraView må være mountet før du kan sjekke permissions"
        ],
        code: `const { hasPermissions, isLoading } = usePermissions();

if (isLoading) return <></>;
if (!hasPermissions) return <Redirect href="/access" />;`,
        correct: 1,
        explanation:
            "Man bør ha en ren 'loading state' før man tar beslutning om redirect – ellers kan det flimre/blinke mens AsyncStorage sjekkes. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q8",
        type: "multiple-choice",
        question:
            "Case: Du vil cache et bilde-objekt (med flere felter) lokalt, slik at brukeren får se siste bilde de tok når de åpner appen igjen. Hvordan bør du lagre det?",
        options: [
            "Direkte som objekt: await AsyncStorage.setItem('lastImage', imageObj)",
            "Som JSON-string med JSON.stringify(imageObj) ved lagring og JSON.parse ved henting",
            "Som tall, ved å caste objektet til number",
            "Du kan kun lagre booleans i AsyncStorage"
        ],
        code: `const jsonValue = JSON.stringify(imageObj);
await AsyncStorage.setItem("lastImage", jsonValue);`,
        correct: 1,
        explanation:
            "AsyncStorage lagrer bare strenger; objekter må serialiseres og parses. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question:
            "Case: Du lager en gjenbrukbar <SharedCamera> komponent som tar et callback onSetImage(uri: string). Hva er et godt mønster for å 'lukke' kameraet når bildet er tatt?",
        options: [
            "La kameraet være synlig til brukeren manuelt lukker appen",
            "Kalle onSetImage('') hver gang et nytt bilde tas",
            "Kalle onSetImage(uri) og la forelderen sette showCamera = false når den får en gyldig URI",
            "Bruke Alert.alert for å skjule kameraet"
        ],
        code: `function SharedCamera({ onSetImage }: { onSetImage: (uri: string) => void }) {
  async function handleTakePicture() {
    const result = await cameraRef.current?.takePictureAsync();
    if (!result) return;
    onSetImage(result.uri);
  }
}`,
        correct: 2,
        explanation:
            "Kamera-komponenten bør være dum og bare rapportere resultatet; forelder styrer visning (f.eks. modal) basert på om det finnes en URI. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Case: Du vil speilvende selfiekamera-bildet når du viser det, slik at brukeren ser seg selv som i en speil-app. Hvordan kan du gjøre dette i en ren visningskomponent?",
        options: [
            "Endre raw-bildedata før lagring",
            "Bruke transform: [{ scaleX: -1 }] på Image-komponenten når type === 'front'",
            "Bruke resizeMode='mirror' på Image",
            "Expo gjør dette automatisk; man bør ikke gjøre noe"
        ],
        code: `<Image
  source={pictureUri}
  style={[
    styles.image,
    cameraType === "front" ? { transform: [{ scaleX: -1 }] } : null,
  ]}
/>`,
        correct: 1,
        explanation:
            "En enkel transform på X-aksen speilvender bildet uten å endre selve filen. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q11",
        type: "multiple-choice",
        question:
            "Case: Du vil lage en 'ta bilde'-knapp som bruker iOS SF Symbols der det er tilgjengelig, men fortsatt fungerer på Android. Hvilket mønster passer best?",
        options: [
            "Bruke kun Ionicons – glem SF Symbols",
            "Bruke SymbolView fra expo-symbols med en fallback-prop som rendrer en vanlig TouchableOpacity på plattformer uten støtte",
            "Bruke Text-komponent med en emoji",
            "Det er ikke mulig å ha forskjellig ikon-løsning per plattform"
        ],
        code: `<SymbolView
  name="circle"
  size={90}
  tintColor="white"
  fallback={
    <TouchableOpacity onPress={handleTakePicture}>
      <Text>●</Text>
    </TouchableOpacity>
  }
/>`,
        correct: 1,
        explanation:
            "SymbolView er iOS-spesifikt; fallback sikrer at Android/web også får en brukbar knapp. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question:
            "Case: Du ønsker å samle all kamera- og bildevisningslogikk i skjemafelter (f.eks. PictureField) slik at form-komponenten bare ser det som et vanlig felt. Hva kjennetegner en god prop-kontrakt for et slikt felt?",
        options: [
            "PictureField eier sin egen state og ikke eksponerer noe til skjemaet",
            "PictureField får onFieldChange(uri: string), value (string | undefined) og meta/error-informasjon, og skjuler interne detaljer som modal, kamera, bildevisning",
            "PictureField håndterer også innsending til API",
            "PictureField må vite hele form-objektet for å fungere"
        ],
        code: `<PictureField
  label="Bilde"
  value={field.state.value}
  onFieldChange={field.handleChange}
  meta={field.state.meta}
/>`,
        correct: 1,
        explanation:
            "Skjemaet eier verdien; feltet er ansvarlig for UX (kamera, preview, lagring) men eksponerer én enkel verdi til resten av appen. :contentReference[oaicite:12]{index=12}"
    }
];

export const ulearn_20_21_camera_storage_kml = {
    id: "uelarn_20_21_camera_storage_kml",
    title: "L20/L21 - Expo Camera & Media Library – permissions, caching og refs - KML",
    description:
        "En case-basert quiz om praktisk bruk av Expo Camera og Media Library i React Native: permissions, AsyncStorage-caching, useRef, gjenbrukbare komponenter og bildevisning.",
    theme: [
        "expo",
        "hooks",
        "forms",
    ],
    questions: [...questions]
};
