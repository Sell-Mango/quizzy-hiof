const questions = [
    {
        id: "q1",
        type: "multiple-choice",
        question: "Hva gjør Stack Navigation i Expo Router?",
        options: [
            "Navigerer mellom skjermer uten historikk",
            "Bruker en stabel der nye skjermer pushes og fjernes med back",
            "Rendrer alle skjermer samtidig for bedre ytelse",
            "Gjør at appen kun kan ha én aktiv skjerm"
        ],
        correct: 1,
        explanation:
            "Stack Navigation fungerer som en stabel av skjermer – nye skjermer pushes, og tilbakeknappen popper toppen. :contentReference[oaicite:2]{index=2}"
    },

    {
        id: "q2",
        type: "multiple-choice",
        question: "Hvorfor vil denne navigasjonen fungere feil eller uforutsigbart?",
        options: [
            "router.push må bruke hele URL-en",
            "router.push krever absolutt path",
            "Hakeparenteser brukes feil",
            "students/[id].tsx samsvarer med path '/students/1', men router.push('students/1') mangler leading slash"
        ],
        code: `const router = useRouter();
router.push("students/1");`,
        correct: 3,
        explanation:
            "Expo Router krever absolutte paths: `/students/1`. Uten leading slash navigerer du relativt basert på nåværende rute. :contentReference[oaicite:3]{index=3}"
    },

    {
        id: "q3",
        type: "multiple-choice",
        question: "Hva er hovedforskjellen mellom Link og router.push?",
        options: [
            "Link er deklarativ, router.push er programmatisk",
            "router.push er tregere",
            "Link krever ikke en path",
            "router.push fungerer kun for statiske sider"
        ],
        correct: 0,
        explanation:
            "Link = deklarativ (som <a>), router.push = programmer styrt navigasjon basert på logikk. :contentReference[oaicite:4]{index=4}"
    },

    {
        id: "q4",
        type: "multiple-choice",
        question: "Hva betyr `[id].tsx` i Expo Router?",
        options: [
            "En fil som bare rendres når id finnes i props",
            "En dynamisk rute der id leses fra URL-en",
            "En skjerm som kun rendres én gang",
            "En route som krever query parameters"
        ],
        correct: 1,
        explanation:
            "`[id]` betyr et dynamisk segment. `useLocalSearchParams()` gir tilgang til id. :contentReference[oaicite:5]{index=5}"
    },

    {
        id: "q5",
        type: "multiple-choice",
        question: "Hva skjer når denne filstrukturen brukes?",
        options: [
            "`students/index.tsx` overskriver `[id].tsx`",
            "`students/[id].tsx` fanger alle under-ruter i students/",
            "Routeren vil feile siden index må ligge på rot",
            "Expo Router støtter ikke undermapper"
        ],
        code: `
app/
 └── students/
      ├── index.tsx
      └── [id].tsx
`,
        correct: 1,
        explanation:
            "Dette er standard struktur for liste → detalj-visning. index blir `/students`, [id] blir `/students/123`. :contentReference[oaicite:6]{index=6}"
    },

    {
        id: "q6",
        type: "multiple-choice",
        question: "Hva er galt med denne stack-definisjonen?",
        options: [
            "name må være et unikt navn",
            "Stack.Screen må ligge i en <Stack>",
            "index må hete Home",
            "Det er ikke mulig å lage screens i _layout"
        ],
        code: `<Stack.Screen name="index" />
<Stack.Screen name="index" />`,
        correct: 0,
        explanation:
            "Routes må ha unike navn – du kan ikke definere to screens med samme name. :contentReference[oaicite:7]{index=7}"
    },

    {
        id: "q7",
        type: "multiple-choice",
        question: "Hva er korrekt bruk for dynamisk tittel basert på rute-parameter?",
        options: [
            "`options={{ title: route.params.id }}`",
            "`options={({route}) => ({ title: route.params.id })}`",
            "`title={() => route.params.id}`",
            "Expo Router støtter ikke dynamiske titler"
        ],
        correct: 1,
        explanation:
            "Stack.Screen støtter en funksjon i options som får route og lar oss sette dynamisk header. :contentReference[oaicite:8]{index=8}"
    },

    {
        id: "q8",
        type: "true-false",
        question:
            "Påstand: I Expo Router trenger man aldri å sette opp navigasjonscontainer manuelt.",
        options: ["Sant", "Usant"],
        correct: 0,
        explanation:
            "Expo Router abstraherer vekk NavigationContainer – det håndteres automatisk. :contentReference[oaicite:9]{index=9}"
    },

    {
        id: "q9",
        type: "multiple-choice",
        question: "Hvorfor vil dette føre til merkelig oppførsel?",
        options: [
            "router.push må ikke brukes i onPress",
            "Man kan ikke bruke programmatisk navigasjon i komponenter",
            "StudentIDItem må wrappes i Link",
            "router.push ligger inni map() uten key og vil trigge unødige re-renders"
        ],
        code: `{students.map(s => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push('/students/' + s.id)}>
      <StudentIDItem student={s}/>
    </Pressable>
  );
})}`,
        correct: 3,
        explanation:
            "useRouter() må ikke kalles gjentatte ganger inni map. Det bryter Hook-reglene og gir unpredictable behavior. :contentReference[oaicite:10]{index=10}"
    },

    {
        id: "q10",
        type: "multiple-choice",
        question:
            "Hva er riktig når man vil navigere programmatisk etter en async operasjon (f.eks. API-kall)?",
        options: [
            "`router.push()` må kalles før await",
            "Man bør bruke `router.push()` etter at promise er fulfilled",
            "Man bør bruke Link i stedet",
            "Det er ikke mulig å navigere etter et async-kall"
        ],
        correct: 1,
        explanation:
            "Programmatisk navigasjon fungerer fint etter async arbeid. Link egner seg mest for statiske navigasjoner."
    },

    {
        id: "q11",
        type: "multiple-choice",
        question: "Hvorfor vil dette gi feil?",
        options: [
            "Link må bruke absolute paths",
            "StudentListItem kan ikke brukes inni Link",
            "Link må bruke asChild når man wrapper custom komponenter",
            "href kan ikke bruke template-literals"
        ],
        code: `<Link href={\`/students/\${student.id}\`}>
  <StudentListItem student={student}/>
</Link>`,
        correct: 2,
        explanation:
            "Når man wrappper egne komponenter inni Link må man bruke `asChild`. Ellers rendres en ekstra <Text> wrapper. :contentReference[oaicite:11]{index=11}"
    },

    {
        id: "q12",
        type: "multiple-choice",
        question: "Hva gjør router.dismissAll()?",
        options: [
            "Popper én skjerm",
            "Popper to skjermer",
            "Går til root (første skjerm i stacken)",
            "Lukker appen"
        ],
        correct: 2,
        explanation:
            "dismissAll() går tilbake til start-skjemen. :contentReference[oaicite:12]{index=12}"
    },

    {
        id: "q13",
        type: "multiple-choice",
        question:
            "Hva er korrekt når man vil lage en custom header-knapp?",
        options: [
            "Legge knappen inni komponenten",
            "Bruke Stack.Screen options.headerRight",
            "Endre global headerStyle",
            "Legge en Pressable inni <Stack>"
        ],
        correct: 1,
        explanation:
            "`headerRight` lar deg definere interaktive elementer i headeren. :contentReference[oaicite:13]{index=13}"
    },

    {
        id: "q14",
        type: "multiple-choice",
        question:
            "Hva skjer om man skriver `<Stack.Screen name='students/[id]' />` men filen faktisk heter `[studentId].tsx`?",
        options: [
            "Det fungerer helt fint",
            "Bare id: 'studentId' vil fungere",
            "Navigasjonen feiler fordi name må samsvare med filnavnet",
            "Expo Router autokonverterer navnet"
        ],
        correct: 2,
        explanation:
            "Stack-navnet må matche filstrukturen – ellers vil routeren ikke finne siden. :contentReference[oaicite:14]{index=14}"
    },

    {
        id: "q15",
        type: "multiple-choice",
        question:
            "Hva er fordelen med å bruke Stack.Screen i _layout.tsx for å definere hvilke skjermer som finnes?",
        options: [
            "Siden rendres raskere",
            "Navigasjonen blir forutsigbar, med felles styling og automatisk header",
            "Man slipper å opprette filer for skjermene",
            "Expo Router krever Stack.Screen for å fungere"
        ],
        correct: 1,
        explanation:
            "Stack i layout gir sentral kontroll over global styling og struktur. Dynamiske Screens får også auto-back-knapp. :contentReference[oaicite:15]{index=15}"
    }
];

export const ulearn_11_12_stack_navigasjon_rn_kml = {
    id: "ulearn_11_12_stack_navigasjon_rn_kml",
    title: "L11/L12 - Navigasjon med Stack - KML",
    description:
        "En quiz om praktisk navigasjon i React Native med Expo Router: stack navigation, programmatisk navigasjon, deklarative lenker, dynamiske ruter og vanlige fallgruver.",
    theme: [
        "expo",
        "navigation",
    ],
    questions: [...questions]
};
