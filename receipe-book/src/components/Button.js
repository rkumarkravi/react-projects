import React from "react";

const Button = ({text,disabled=false,onClick}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`${!disabled?"bg-yellow-500 hover:bg-yellow-600":"bg-gray-500"} text-black font-bold py-2 px-4 rounded`}>
      {text}
    </button>
  );
};

export default Button;
