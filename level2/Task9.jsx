import React, { useState } from "react";
import "./task9.css"; // Import CSS file for styling

function Task9() {
  const [inputText, setInputText] = useState(""); // State to hold input value

  return (
    <div className="task9-container">
      <h2>Dynamic Input</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update state on change
      />
      <p>You typed: {inputText}</p> {/* Display input dynamically */}
    </div>
  );
}

export default Task9;
