import React, { useState, useEffect } from 'react';

const QuizQuestion = ({
  question,
  shuffledOptions,
  selectedAnswer,
  onAnswerSelect,
  showPeek,
  results,
}) => {
  useEffect(() => {
    // Load Prism.js for syntax highlighting
    if (question.code && typeof window !== 'undefined' && !window.Prism) {
      const script = document.createElement('script');
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-core.min.js';
      script.onload = () => {
        const jsScript = document.createElement('script');
        jsScript.src =
          'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js';
        jsScript.onload = () => {
          const tsScript = document.createElement('script');
          tsScript.src =
            'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js';
          tsScript.onload = () => {
            if (window.Prism) {
              window.Prism.highlightAll();
            }
          };
          document.head.appendChild(tsScript);
        };
        document.head.appendChild(jsScript);
      };
      document.head.appendChild(script);

      // Load Prism CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href =
        'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
      document.head.appendChild(cssLink);
    } else if (question.code && window.Prism) {
      setTimeout(() => window.Prism.highlightAll(), 100);
    }
  }, [question.code]);

  const getOptionStatus = (optionIndex, originalIndex) => {
    if (results) {
      const isCorrect = originalIndex === question.correct;
      const isSelected = selectedAnswer === optionIndex;

      if (isCorrect) return 'correct';
      if (isSelected && !isCorrect) return 'incorrect';
      return 'default';
    }

    if (showPeek && originalIndex === question.correct) {
      return 'peek';
    }

    if (selectedAnswer === optionIndex) {
      return 'selected';
    }

    return 'default';
  };

  const getOptionClasses = (status) => {
    const baseClasses =
      'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 font-medium';

    switch (status) {
      case 'correct':
        return `${baseClasses} bg-green-50 border-green-500 text-green-800`;
      case 'incorrect':
        return `${baseClasses} bg-red-50 border-red-500 text-red-800`;
      case 'peek':
        return `${baseClasses} bg-yellow-50 border-yellow-400 text-yellow-800 animate-pulse`;
      case 'selected':
        return `${baseClasses} bg-blue-50 border-blue-500 text-blue-800`;
      default:
        return `${baseClasses} bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300`;
    }
  };

  // Determine language for syntax highlighting
  const getLanguage = () => {
    if (question.code) {
      if (
        question.code.includes('interface') ||
        question.code.includes('<T>') ||
        question.code.includes('?: ')
      ) {
        return 'typescript';
      }
      return 'javascript';
    }
    return 'javascript';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 leading-relaxed">
          {question.question}
        </h2>

        {question.code && (
          <div className="mb-6">
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm">
                <code className={`language-${getLanguage()}`}>
                  {question.code}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3">
        {shuffledOptions.map((option, index) => {
          const status = getOptionStatus(index, option.originalIndex);

          return (
            <button
              key={index}
              onClick={() => !results && onAnswerSelect(index)}
              disabled={results}
              className={getOptionClasses(status)}
            >
              <div className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-sm font-medium flex items-center justify-center mr-4">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option.text}</span>
                {status === 'correct' && (
                  <svg
                    className="w-5 h-5 text-green-600 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {status === 'incorrect' && (
                  <svg
                    className="w-5 h-5 text-red-600 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {status === 'peek' && (
                  <span className="ml-2 text-yellow-600 text-sm font-medium">
                    👁️
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {(results || showPeek) && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Forklaring:</h3>
          <p className="text-blue-800">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
