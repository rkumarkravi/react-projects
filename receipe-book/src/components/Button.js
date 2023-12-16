import React from "react";

const Button = ({text}) => {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default Button;
