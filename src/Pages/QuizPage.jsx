import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Option from "../components/Option";

const QuizPage = ({ questions }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName || "Player";
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [finalScore, setFinalScore] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const correctAnswer = currentQuestion?.options.find(
    (opt) => opt.isCorrect
  )?.content;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const correct = option === correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 10);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setFinalScore(score + (correct ? 10 : 0));
        document.getElementById("final-score-modal").showModal();
      }
    }, 1500);
  };

  if (!questions || questions.length === 0) {
    return <div className="text-center mt-8">Loading questions...</div>;
  }

  return (
    <main className="h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] overflow-auto relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        {/* Bulb SVG 1 */}
        <img
          src="bulb.svg"
          alt="bulb"
          className="h-12 sm:h-16 opacity-25 absolute top-16 left-4 z-0"
        />

        {/* Cat SVG 1 */}
        <img
          src="cat1.svg"
          alt="cat1"
          className="h-8 sm:h-10 opacity-30 absolute top-8 right-4 z-0"
        />

        {/* Cat SVG 2 */}
        <img
          src="cat4.svg"
          alt="cat4"
          className="h-12 sm:h-14 opacity-20 absolute top-1/4 left-1/3 z-0"
        />

        {/* Bulb SVG 2 */}
        <img
          src="bulb.svg"
          alt="bulb"
          className="h-12 sm:h-16 opacity-30 absolute bottom-24 right-8 z-0"
        />

        {/* Bolt SVG 1 */}
        <img
          src="bolt2.svg"
          alt="bolt"
          className="h-6 sm:h-8 opacity-30 absolute bottom-2 md:bottom-32 left-1 z-0"
        />

        {/* Book SVG */}
        <img
          src="book.svg"
          alt="book"
          className="h-10 sm:h-12 opacity-30 absolute bottom-1 left-1/4 z-0"
        />

        {/* Bulb SVG 3 */}
        <img
          src="bulb.svg"
          alt="bulb"
          className="h-6 sm:h-8 opacity-30 absolute bottom-1/2 md:right-4 right-1 z-0"
        />

        {/* Bolt SVG 2 */}
        <img
          src="bolt2.svg"
          alt="bolt"
          className="h-6 sm:h-8 opacity-30 absolute bottom-[28%] right-12 z-0"
        />

        <header className="fixed top-0 left-0 right-0 h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 bg-white/80 backdrop-blur-sm z-30">
          <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black truncate max-w-[50%] text-wrap">
            Assalamualaikum,{" "}
            <span className="bg-[#8cecdc] border-3 border-black px-2 rounded-full inline-block">
              {userName}!
            </span>
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-black flex items-center justify-center bg-[#00b4fe] border-3 border-black rounded-full px-2">
            <img
              src="score.svg"
              alt="score"
              className="h-8 mr-2"
              onError={() => console.log("Failed to load score.svg")}
            />
            <span>{score}</span>
          </div>
        </header>

        <div className="flex flex-col items-center justify-center h-full pt-20 pb-4 mt-10">
          <div className="w-full max-w-2xl space-y-4 flex flex-col items-center">
            {/* Progress Bar */}
            <div className="w-full">
              <div className="bg-gray-200 border-2 border-black rounded-xl h-6 overflow-hidden">
                <div
                  className="bg-yellow-400 h-full border-r-2 border-black transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-center mt-2 text-black font-bold text-sm sm:text-base">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
            </div>

            <h1 className="font-extrabold text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
              {currentQuestion.question}
            </h1>

            <div className="bg-[#9454fe] w-full max-w-md mx-auto border-4 border-black rounded-2xl p-6 flex flex-col gap-3">
              {currentQuestion.options.map((option, index) => (
                <Option
                  key={index}
                  content={option.content}
                  isCorrect={option.isCorrect}
                  onClick={() => handleOptionClick(option.content)}
                  className={`
                    ${
                      selectedOption
                        ? option.isCorrect
                          ? "bg-green-400"
                          : selectedOption === option.content
                          ? "bg-red-400"
                          : "bg-gray-200"
                        : "bg-white"
                    } transition-colors duration-300
                  `}
                />
              ))}
            </div>

            <button
              onClick={() => navigate("/")}
              className="bg-yellow-300 border-3 border-black rounded-full inline-flex shadow-[4px_4px_0_black] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <img src="home.svg" alt="home" className="h-12 w-12" />
            </button>

            {isCorrect && (
              <div className="text-center text-sm sm:text-base font-semibold text-gray-800 max-w-md mx-auto">
                Reference: {currentQuestion.reference}
              </div>
            )}
          </div>
        </div>

        <dialog id="final-score-modal" className="modal">
          <div className="modal-box bg-white border-2 border-black rounded-2xl p-6 max-w-md">
            <div className="flex justify-center mb-4">
              {finalScore !== null && (
                <img
                  src={finalScore >= 80 ? "/good-score.svg" : "/bad-score.svg"}
                  alt={finalScore >= 80 ? "good score" : "bad score"}
                  className="h-12 w-12"
                />
              )}
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-black text-center mb-4">
              Quiz Finished, {userName}!
            </h3>
            <p className="text-center text-lg sm:text-xl mb-4 text-black">
              Your Final Score: {finalScore}
            </p>
            <div className="modal-action flex justify-center items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="bg-yellow-300 cursor-pointer border-3 border-black rounded-full inline-flex shadow-[4px_4px_0_black] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                <img src="home.svg" alt="home" className="h-9 w-9" />
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-yellow-300 h-10 w-32 border-2 cursor-pointer text-black font-semibold border-black rounded-xl shadow-[4px_4px_0_black] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Play Again
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </main>
  );
};

export default QuizPage;
