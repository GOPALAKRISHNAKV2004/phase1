import React from "react";

const CalculationComponent = () => {
  const num1 = 10;
  const num2 = 5;
  const result = num1 * num2; // Calculation inside JavaScript

  return (
    <div>
      <h2>JSX Calculation</h2>
      <p>The result of {num1} × {num2} is: <strong>{result}</strong></p>
    </div>
  );
};

export default CalculationComponent;
