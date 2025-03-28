import React from "react";
import "./task12.css"; // Import CSS for styling

function Task12(props) {
  return (
    <div className="task12-container">
      <h2>{props.isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
    </div>
  );
}

// Default props (Optional)
Task12.defaultProps = {
  isLoggedIn: false, // Default to not logged in
};

export default Task12;
