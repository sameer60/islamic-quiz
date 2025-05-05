import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleStart = () => {
    if (userName.trim()) {
      setError(""); // Clear error if name is provided
      navigate("/quiz", { state: { userName } });
      document.getElementById("name-modal").close();
    } else {
      setError("Please enter your name to start the quiz."); // Set error message if name is empty
    }
  };

  const openModal = () => {
    document.getElementById("name-modal").showModal();
  };

  return (
    <main className="bg-rose-200 min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Floating Elements */}
      <img
        src="bulb.svg"
        alt="bulb"
        className="h-16 opacity-25 rotate-[-30deg] absolute"
        style={{ top: "5%", left: "8%" }}
      />
      <img
        src="bolt2.svg"
        alt="bolt"
        className="h-10 opacity-30 rotate-[36deg] absolute"
        style={{ top: "8%", right: "10%" }}
      />
      <img
        src="book.svg"
        alt="book"
        className="h-14 opacity-20 rotate-[-30deg] absolute"
        style={{ top: "25%", left: "40%" }}
      />
      <img
        src="bulb.svg"
        alt="bulb"
        className="h-16 opacity-30 rotate-[-30deg] absolute"
        style={{ bottom: "10%", right: "15%" }}
      />
      <img
        src="bolt2.svg"
        alt="bolt"
        className="h-8 opacity-30 rotate-[36deg] absolute"
        style={{ bottom: "35%", left: "3%" }}
      />
      <img
        src="book.svg"
        alt="book"
        className="h-12 opacity-30 rotate-[33deg] absolute"
        style={{ bottom: "15%", left: "25%" }}
      />
      <img
        src="bulb.svg"
        alt="bulb"
        className="h-8 opacity-30 rotate-[-26deg] absolute"
        style={{ bottom: "50%", right: "2%" }}
      />
      <img
        src="bolt2.svg"
        alt="bolt"
        className="h-8 opacity-30 rotate-[20deg] absolute"
        style={{ bottom: "25%", right: "10%" }}
      />

      {/* Main Content */}
      <div className="bg-white border-2 border-black rounded-2xl py-10 px-6 md:px-10 flex flex-col gap-8 justify-center z-10 w-full max-w-xl">
        <img src="worship-islam.svg" alt="logo" className="h-40 mx-auto" />
        <div className="bg-amber-50 border-2 border-black rounded-2xl px-5 py-10 flex flex-col">
          <h1 className="font-extrabold text-4xl text-gray-900 md:text-5xl lg:text-6xl text-center text-nowrap">
            Quizan-e-Islam
          </h1>
          <p className="font-light tracking-tight italic text-black text-center text-md md:text-lg mt-2">
            "A challenge of faith, facts, and fundamentals of Islam."
          </p>
          <button
            onClick={openModal}
            className="cursor-pointer bg-yellow-300 h-10 w-32 text-black border-2 font-semibold border-black rounded-xl mt-4 mx-auto shadow-[4px_4px_0_black] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Play!
          </button>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <dialog id="name-modal" className="modal">
        <div className="modal-box bg-white border-2 border-black rounded-2xl p-6">
          <h3 className="font-bold text-black text-2xl text-center mb-4">
            Enter Your Name
          </h3>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleStart();
              }
            }}
            placeholder="Your Name"
            className="input input-bordered w-full text-black font-bold text-xl bg-white border-2 border-black rounded-xl mb-2"
          />
          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-semibold text-center mb-4">
              {error}
            </p>
          )}
          <div className="modal-action">
            <button
              onClick={handleStart}
              className="bg-yellow-300 text-black cursor-pointer h-10 w-32 border-2 font-semibold border-black rounded-xl shadow-[4px_4px_0_black] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Start
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
};

export default Home;
