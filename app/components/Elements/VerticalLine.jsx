import React from "react";

const VerticalLine = ({ height, width, color }) => {
  return (
    <div style={{ width: width, height: height, backgroundColor: color }}></div>
  );
};

export default VerticalLine;
