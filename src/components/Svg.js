import React from "react";

const Svg = ({
  d,
  className,
  viewBox = "0 0 24 24"
}) => {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={d} />
    </svg>
  );
};

export default Svg;
