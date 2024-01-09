import React from "react";
const Column = ({ children, className, style }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", flexDirection: "column" }}
    >
      {children}
    </div>
  );
};

export default Column;
