import React, { useState } from 'react';
import QuizLanding from './components/QuizLanding';
import QuizApp from './components/QuizApp';
import * as webappsQuizzes from './quizzes/webapplikasjoner';
import * as mobilprogQuizzes from './quizzes/mobilprogrammering';
import './index.css';
import CourseLanding from "./components/CourseLanding.jsx";
import ThemeLanding from "./components/ThemeLanding.jsx";
import {webappsThemes} from "./quizzes/webapplikasjoner/webappsThemes.js";
import {mobilprogThemes} from "./quizzes/mobilprogrammering/mobilprogThemes.js";

const courses= ["webapplikasjoner", "mobilprogrammering"];

function App() {
    const [selectedOptions, setSelectedOptions] = useState({
        selectQuiz: null,
        selectedCourse: null,
        selectedTheme: null,
    });

    const handleSelectedOption = (key, value) => {
        setSelectedOptions((prev) => ({ ...prev, [key]: value }));
    }

  const handleBackToLanding = () => {
      setSelectedOptions({
          selectQuiz: null,
          selectedCourse: null,
          selectedTheme: null,
      })
  };

    if (selectedOptions.selectQuiz) {
        return (
            <QuizApp quiz={selectedOptions.selectQuiz} onBackToLanding={handleBackToLanding} />
        );
    }

    if (selectedOptions.selectedTheme) {
        return (
            <QuizLanding
                quizzes={Object.values(selectedOptions.selectedCourse === "webapplikasjoner" ? webappsQuizzes : mobilprogQuizzes)}
                theme={selectedOptions.selectedTheme}
                onSelect={handleSelectedOption}
            />
        )
    }

  if (selectedOptions.selectedCourse) {
      return (
          <ThemeLanding
              selectedCourse={selectedOptions.selectedCourse}
              themes={selectedOptions.selectedCourse === "webapplikasjoner" ? webappsThemes : mobilprogThemes}
              onSelect={handleSelectedOption} />
      )
  }

  return <CourseLanding courses={courses} onSelect={handleSelectedOption} />
}

export default App;
