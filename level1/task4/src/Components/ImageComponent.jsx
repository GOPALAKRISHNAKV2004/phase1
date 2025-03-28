import React from "react";
import NATURE from "../assets/NATURE.jpg";

const ImageComponent = () => {
  return (
    <div>
      <h3>Beautiful Nature</h3>
      <img 
        src={NATURE}
        alt="Placeholder Image of Nature" 
        width="300"
        height="200"
      />
    </div>
  );
};

export default ImageComponent;
