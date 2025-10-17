import React from 'react';

const QuizResults = ({ quiz, answers, questions, shuffledOptionsMap, onRetake, onShowPeek }) => {
  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] !== undefined) {
        const selectedOption = shuffledOptionsMap[index][answers[index]];
        if (selectedOption && selectedOption.originalIndex === question.correct) {
          correct++;
        }
      }
    });
    return { correct, total: questions.length };
  };

  const { correct, total } = calculateScore();
  const percentage = Math.round((correct / total) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    if (percentage >= 80) return 'Excellent! Du behersker dette emnet godt.';
    if (percentage >= 60) return 'Bra jobbet! Du har en god forståelse av emnet.';
    return 'Du bør repetere materialet og prøve igjen.';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Quiz Fullført!
            </h1>
            <div className="flex items-center justify-center mb-4">
              <div className={`text-6xl font-bold ${getScoreColor()}`}>
                {correct}/{total}
              </div>
            </div>
            <div className={`text-2xl font-semibold mb-2 ${getScoreColor()}`}>
              {percentage}%
            </div>
            <p className="text-gray-600 text-lg">
              {getScoreMessage()}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onRetake}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Ta Quiz På Nytt
            </button>
            
            <button
              onClick={onShowPeek}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-colors"
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Se Riktige Svar
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Detaljerte Resultater</h2>
          
          <div className="space-y-6">
            {questions.map((question, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer !== undefined && 
                shuffledOptionsMap[index][userAnswer]?.originalIndex === question.correct;
              
              return (
                <div key={question.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900 flex-1">
                      {index + 1}. {question.question}
                    </h3>
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium ml-4
                      ${isCorrect 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                      }
                    `}>
                      {isCorrect ? 'Riktig' : 'Feil'}
                    </span>
                  </div>
                  
                  {userAnswer !== undefined && (
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">Ditt svar: </span>
                      <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                        {shuffledOptionsMap[index][userAnswer]?.text}
                      </span>
                    </div>
                  )}
                  
                  {!isCorrect && (
                    <div className="mb-3">
                      <span className="text-sm text-gray-600">Riktig svar: </span>
                      <span className="text-green-700">
                        {question.options[question.correct]}
                      </span>
                    </div>
                  )}
                  
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                    <span className="text-sm font-medium text-blue-900">Forklaring: </span>
                    <span className="text-blue-800">{question.explanation}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;