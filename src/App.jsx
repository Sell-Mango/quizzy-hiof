import React, { useState } from 'react';
import QuizLanding from './components/QuizLanding';
import QuizApp from './components/QuizApp';
import { quizzes } from './data/webapplikasjoner_ulearn/webapp';
import './index.css';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleBackToLanding = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    return (
      <QuizApp quiz={selectedQuiz} onBackToLanding={handleBackToLanding} />
    );
  }


  return <QuizLanding quizzes={quizzes} onSelectQuiz={handleSelectQuiz} />;
}

export default App;
