import React from "react";

const Tag = ({
  text = "",
  className,
}) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

export default Tag;
