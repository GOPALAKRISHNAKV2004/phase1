import React from "react";
import "./task11.css"; // Import CSS for styling

function Task11() {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  return (
    <div className="task11-container">
      <h2>List of Fruits</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task11;
