import React, { useState } from "react";
import "./task7.css"; // Import CSS file for styling

function Task7() {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <div className="task7-container">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Task7;
