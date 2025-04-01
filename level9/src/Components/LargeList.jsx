import React, { useState, useMemo } from "react";

const LargeList = () => {
  const [items] = useState(() => Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`));

  return (
    <div style={{ height: "300px", overflowY: "scroll", border: "1px solid black" }}>
      {items.slice(0, 100).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default React.memo(LargeList);
