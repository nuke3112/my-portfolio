import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div
      className="project_card"
      style={{ backgroundImage: `url("${props.image}")` }}
    >
      {props.children}
    </div>
  );
};
export default Card;
