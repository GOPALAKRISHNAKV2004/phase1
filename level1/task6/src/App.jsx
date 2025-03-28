import React from "react";
import NameYear from "./Components/NameYear"; // Import the component

const App = () => {
  return (
    <div>
      <h1>Dynamic Year Color</h1>
      <NameYear name="Alice" year={2024} />  {/* Even year - Blue */}
      <NameYear name="Bob" year={2023} />    {/* Odd year - Red */}
      <NameYear name="Charlie" year={2018} />{/* Even year - Blue */}
      <NameYear name="David" year={2015} />  {/* Odd year - Red */}
    </div>
  );
};

export default App;
