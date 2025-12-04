import React, { useState, useEffect } from 'react';
import QuizNavigation from './QuizNavigation';
import QuizQuestion from './QuizQuestion';
import QuizResults from './QuizResults';

const QuizApp = ({ quiz, onBackToLanding }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showPeek, setShowPeek] = useState(false);
  const [hasCompletedOnce, setHasCompletedOnce] = useState(false);

  // Initialize shuffled options for all questions
  useEffect(() => {
    const shuffledMap = {};
    quiz.questions.forEach((question, questionIndex) => {
      console.log(question.options.map(m => console.log("TEST ", m)))
      const shuffledOptions = question.options
        .map((text, originalIndex) => ({ text, originalIndex }))
        .sort(() => Math.random() - 0.5);
      shuffledMap[questionIndex] = shuffledOptions;
    });
    setShuffledOptionsMap(shuffledMap);
  }, [quiz]);

  const handleAnswerSelect = (optionIndex) => {
    if (showResults) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNavigate = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    setShowResults(true);
    setHasCompletedOnce(true);
  };

  const handleRetake = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowPeek(false);

    // Reshuffle options
    const shuffledMap = {};
    quiz.questions.forEach((question, questionIndex) => {
      const shuffledOptions = question.options
        .map((text, originalIndex) => ({ text, originalIndex }))
        .sort(() => Math.random() - 0.5);
      shuffledMap[questionIndex] = shuffledOptions;
    });
    setShuffledOptionsMap(shuffledMap);
  };

  const handleShowPeek = () => {
    setShowResults(false);
    setShowPeek(true);
    setCurrentQuestionIndex(0);
  };

  const allQuestionsAnswered =
    Object.keys(answers).length === quiz.questions.length;
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const currentShuffledOptions = shuffledOptionsMap[currentQuestionIndex] || [];

  if (showResults) {
    return (
      <QuizResults
        quiz={quiz}
        answers={answers}
        questions={quiz.questions}
        shuffledOptionsMap={shuffledOptionsMap}
        onRetake={handleRetake}
        onShowPeek={handleShowPeek}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={onBackToLanding}
                className="mb-5 hover:text-gray-800 transition-colors flex justify-center items-center gap-2 font-normal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />{' '}
                </svg>
                Tilbake
              </button>
              <h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
              <p className="text-gray-600">{quiz.description}</p>
            </div>
          </div>
        </div>
      </div>

      <QuizNavigation
        questions={quiz.questions}
        currentIndex={currentQuestionIndex}
        answers={answers}
        results={showResults}
        onNavigate={handleNavigate}
      />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <QuizQuestion
            question={currentQuestion}
            shuffledOptions={currentShuffledOptions}
            selectedAnswer={answers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            showPeek={showPeek}
            results={showResults}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-5 h-5 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Forrige
          </button>

          <div className="flex space-x-4">
            {showPeek && hasCompletedOnce && (
              <button
                onClick={() => {
                  setShowPeek(false);
                  setShowResults(true);
                }}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Tilbake til Resultater
              </button>
            )}

            {currentQuestionIndex === quiz.questions.length - 1 && !showPeek ? (
              <button
                onClick={handleSubmit}
                disabled={!allQuestionsAnswered}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Fullfør Quiz
              </button>
            ) : !showPeek ? (
              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === quiz.questions.length - 1}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Neste
                <svg
                  className="w-5 h-5 inline ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
