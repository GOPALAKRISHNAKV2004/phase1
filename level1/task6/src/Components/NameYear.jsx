import React from "react";

const NameYear = ({ name, year }) => {
  // Dynamic text color based on the year (odd = red, even = blue)
  const yearStyle = {
    color: year % 2 === 0 ? "blue" : "red",
    fontWeight: "bold",
  };

  // Dynamic background color for the box
  const boxStyle = {
    backgroundColor: year % 2 === 0 ? "#e0f7fa" : "#ffebee", // Light blue for even, light red for odd
    padding: "15px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={boxStyle}>
      <h2>Name: {name}</h2>
      <p style={yearStyle}>Year: {year}</p>
    </div>
  );
};

export default NameYear;
