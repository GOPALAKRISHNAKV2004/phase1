import React from "react";

const ExpensiveCalculation = React.memo(({ primes }) => {
  console.log("Rendering ExpensiveCalculation...");
  return (
    <div>
      <h2>Prime Numbers</h2>
      <ul>
        {primes.slice(0, 1000).map((prime, index) => (
          <li key={index}>{prime}</li>
        ))}
      </ul>
      <p>Showing first 1000 primes.</p>
    </div>
  );
});

export default ExpensiveCalculation;
