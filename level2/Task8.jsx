import React, { useState } from "react";
import "./task8.css"; // Import CSS file for styling

function Task8() {
  const [isVisible, setIsVisible] = useState(false); // Initialize state

  return (
    <div className="task8-container">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>

      {isVisible && <div className="toggle-content">This is the toggled content!hi i am krish i need books to read.</div>}
    </div>
  );
}

export default Task8;
