import React from "react";

const Option = ({ content, isCorrect, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`border-3 border-black rounded-xl w-full text-black font-bold px-4 py-2 mb-2 cursor-pointer flex items-center ${className}`}
    >
      {content}
    </button>
  );
};

export default Option;
