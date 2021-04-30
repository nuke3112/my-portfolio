import React from "react";

import "./Stars.css";
import { ReactComponent as StarSvg } from "../../../assets/Stars.svg";

const Stars = (props) => {
  return (
    <div className="stars__container">
      <StarSvg className="stars__svg" preserveAspectRatio="none" />
    </div>
  );
};
export default Stars;
