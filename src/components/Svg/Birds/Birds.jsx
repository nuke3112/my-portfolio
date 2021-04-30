import React from "react";

import "./Birds.css";
import { ReactComponent as BirdSvg } from "../../../assets/Birds.svg";

const Birds = (props) => {
  return (
    <div className={`birds__container ${props.order}`}>
      <BirdSvg className="birds__svg" />
    </div>
  );
};
export default Birds;
