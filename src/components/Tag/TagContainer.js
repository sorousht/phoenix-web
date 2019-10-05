import React from "react";
import Tag from "./Tag";
import cx from "classnames";

const TagContainer = ({
  tags = [],
}) => {
  return (
    <ul className="flex flex-wrap">
      {
        tags.map((tag, index) => {
          const isFirst = index === 0;
          const isLast = index === tags.length - 1;
          return (
            <li key={tag}>
              <Tag
                text={tag}
                className={cx(
                  "inline-block py-1 px-3 m-1 border border-gray-400 rounded",
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

export default TagContainer;
