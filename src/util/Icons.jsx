import React from "react";

import Icons from "../assets/icons.svg";

const Icon = (props) => {
  return (
    <svg className={`${props.className} icon`}>
      <use href={`${Icons}#icon-${props.name}`} />
    </svg>
  );
};
export default Icon;
