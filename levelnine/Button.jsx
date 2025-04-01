import React from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering Button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

export default Button;
