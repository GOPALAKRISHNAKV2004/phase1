import React from "react";
import { FixedSizeList as List } from "react-window";

const itemCount = 10000; // Large list size
const itemHeight = 50; // Each row height in pixels

const Row = ({ index, style }) => (
  <div style={{ ...style, padding: "10px", borderBottom: "1px solid #ccc" }}>
    Item #{index + 1}
  </div>
);

const VirtualizedList = () => {
  return (
    <List
      height={500} // Viewport height
      itemCount={itemCount}
      itemSize={itemHeight}
      width="100%"
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
