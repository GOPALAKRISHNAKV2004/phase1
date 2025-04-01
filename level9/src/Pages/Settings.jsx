import React, { useState, useMemo } from "react";

const Settings = () => {
  const [text, setText] = useState("");

  const expensiveComputation = (input) => {
    console.log("Computing...");
    return input.toUpperCase();
  };

  const computedText = useMemo(() => expensiveComputation(text), [text]);

  return (
    <div>
      <h2>Settings</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Processed Text: {computedText}</p>
    </div>
  );
};

export default Settings;
