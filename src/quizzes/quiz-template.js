const questions = [
  {
    id: "q1",
    type: "multiple-choice",
    question: "Spørsmål eller påstand",
    options: [
      "Svar alternativ 1",
        "Svar alternativ 2",
        "Svar alternativ 3",
        "Svar alternativ 4"
    ],
    correct: 1,
    explanation:
      "Forklaring på riktig svar."
  },
  {
    id: "q2",
    type: "true-false",
    question: "Spørsmål eller påstand",
    options: ["Sant", "Usant"],
    correct: 1,
    explanation:
        "Forklaring på riktig svar."
  },
];


export const quiz_name = {
    id: 'quiz-id',
    title: 'Quiz tittel',
    description:
        'Introduksjon av quiz',
    theme: ["tema 1", "tema 2"],
    questions: [
        ...questions
    ]
}
