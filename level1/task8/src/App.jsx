import React from "react";
import RoleMessage from "./Components/RoleMessage";
import "./App.css";

const App = () => {
  return (
    <div>
      <RoleMessage role="Admin" />
      <RoleMessage role="User" />
      <RoleMessage role="Guest" />
    </div>
  );
};

export default App;
