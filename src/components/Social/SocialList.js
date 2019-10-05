import React from "react";
import cx from "classnames";
import Social from "./Social";

const SocialList = ({
  socials = [],
}) => {
  return (
    <ul className="flex flex-wrap">
      {
        socials.map((social, index) => {
          const {
            title,
            url,
            icon,
          } = social;
          const isFirst = index === 0;
          const isLast = index === socials.length - 1;
          return (
            <li key={title}>
              <Social
                icon={icon}
                title={title}
                url={url}
                className={cx(
                  "inline-block m-1 w-8 h-8",
                  { "mr-0": isLast, "ml-0": isFirst },
                )}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default SocialList;
