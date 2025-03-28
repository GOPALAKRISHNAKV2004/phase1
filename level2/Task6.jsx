import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./task6.css";
function Task6(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Age: {props.age}</h3>
      <h4>City: {props.city}</h4>
    </div>
  );
}

// ✅ Add PropTypes for validation
Task6.propTypes = {
  name: PropTypes.string.isRequired, // Must be a string
  age: PropTypes.number.isRequired,  // Must be a number
  city: PropTypes.string.isRequired, // Must be a string
};

// ✅ Set default props (in case values are missing)
Task6.defaultProps = {
  name: "Unknown",
  age: 0,
  city: "Not specified",
};

export default Task6;
