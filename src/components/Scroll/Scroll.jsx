import React from "react";

import "./Scroll.css";
import { ReactComponent as CircleSvg } from "../../assets/cirlce.svg";

const Scroll = (props) => {
  return (
    <div className="scroll">
      <CircleSvg className="scroll__circle" onSelect={props.handlePageChange} />
      <CircleSvg className="scroll__circle" onSelect={props.handlePageChange} />
      <CircleSvg className="scroll__circle" onSelect={props.handlePageChange} />
    </div>
  );
};
export default Scroll;
