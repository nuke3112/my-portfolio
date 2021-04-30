import React from "react";

import "./Trees.css";
import { ReactComponent as TreesSvg } from "../../../assets/Trees.svg";

const Trees = (props) => {
  return (
    <div className="trees__container">
      <TreesSvg className="trees__svg" preserveAspectRatio="none" />
    </div>
  );
};
export default Trees;
