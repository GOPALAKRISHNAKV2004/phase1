import React from "react";

const Greeting = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h2>Hello from a functional component!</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Greeting;
