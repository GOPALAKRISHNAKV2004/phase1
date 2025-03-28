import React from "react";

function Task4(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Set default props
Task4.defaultprops = {
  name: "World",
};

export default Task4;
