import React from 'react';

const QuizNavigation = ({
  questions,
  currentIndex,
  answers,
  results,
  onNavigate,
}) => {
  const getQuestionStatus = (index) => {
    if (results) {
      const answer = answers[index];
      if (answer !== undefined) {
        return answer === questions[index].correct ? 'correct' : 'incorrect';
      }
      return 'unanswered';
    }

    if (answers[index] !== undefined) {
      return 'answered';
    }

    return 'unanswered';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'correct':
        return 'bg-green-500 text-white';
      case 'incorrect':
        return 'bg-red-500 text-white';
      case 'answered':
        return 'bg-blue-500 text-white';
      case 'unanswered':
        return 'bg-gray-200 text-gray-600 hover:bg-gray-300';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-4xl px-6 mx-auto flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          Spørsmål {currentIndex + 1} av {questions.length}
        </h3>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-200 rounded-full h-2 w-32">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
          <span className="text-sm text-gray-600">
            {Math.round(((currentIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 max-w-4xl px-6 mx-auto">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`
              w-8 h-8 rounded-full text-sm font-medium transition-colors
              ${currentIndex === index ? 'ring-2 ring-blue-400' : ''}
              ${getStatusColor(getQuestionStatus(index))}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizNavigation;
