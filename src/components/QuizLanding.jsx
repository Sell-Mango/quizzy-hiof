import React from 'react';
import BackButton from "./BackButton.jsx";

const QuizLanding = ({ quizzes, theme, onSelect }) => {

    const filteredQuiz = theme === "alle" ? quizzes : quizzes.filter(quiz => quiz.theme.includes(theme))

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tema: {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Velg en quiz for å teste dine kunnskaper.
          </p>
        </div>

          <div className="items-center w-full mb-8">
              <BackButton label="tema" reset="selectedTheme" onSelect={onSelect} />
          </div>

        <div className="grid md:grid-cols-2 gap-6">
          { filteredQuiz.length > 0 ? filteredQuiz.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onSelect("selectQuiz", quiz)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {quiz.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {quiz.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {quiz.questions.length} spørsmål
                </span>
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Start Quiz
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )) : <h2>Ingen quizzer:(</h2>}
        </div>
      </div>
    </div>
  );
};

export default QuizLanding;