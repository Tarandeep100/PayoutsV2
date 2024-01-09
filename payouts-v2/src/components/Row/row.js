import React from "react";
const Row = ({ children, className, style }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", flexDirection: "row" }}
    >
      {children}
    </div>
  );
};

export default Row;
