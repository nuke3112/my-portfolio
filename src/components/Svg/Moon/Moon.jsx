import React from "react";

import "./Moon.css";
import { ReactComponent as MoonSvg } from "../../../assets/Moon.svg";

const Moon = () => {
  return (
    <div className="moon__container">
      <MoonSvg className="moon__svg" />
    </div>
  );
};
export default Moon;
