import React from "react";

function Greeting() {
  const date = new Date();

  return (
    <h1>
      {date.getHours() >= 18 && date.getMinutes() >= 0
        ? "Good evening"
        : date.getHours() >= 12 && date.getMinutes() >= 0
        ? "Good afternoon"
        : "Good morning"}
    </h1>
  );
}

export default Greeting;
