import React from "react";

const Button = ({ children, className }) => {
  return (
    <div className={` min-w-44 fortnite mt-6 ${className}`}>
      <button className="bg-yellow-300 w-full text-black font-bold py-2 px-8 transform -skew-x-12 hover:bg-yellow-400 transition-colors duration-300">
        <span className="inline-block text-3xl m-auto text-center transform skew-x-12">{children}</span>
      </button>
    </div>
  );
};

export default Button;
