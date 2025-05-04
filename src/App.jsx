import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import { quizData } from "./quizData";
import getRandomQuestions from "./utils";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionsData = getRandomQuestions(quizData, 15);
    setQuestions(questionsData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage questions={questions} />} />
    </Routes>
  );
}

export default App;
