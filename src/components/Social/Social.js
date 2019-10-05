import React from "react";
import Svg from "../Svg";

const Social = ({
  title,
  url,
  icon,
  className,
}) => {
  return (
    <a
      href={url}
      title={title}
      className={className}
    >
      <Svg
        className={className}
        d={icon}
      />
    </a>
  );
};

export default Social;
