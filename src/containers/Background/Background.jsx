import React from "react";
import { animated } from "react-spring";

import Trees from "../../components/Svg/Trees/Trees";
import Stars from "../../components/Svg/Stars/Stars";

import "./Background.css";

const trans2 = (x, y) => `translate3d(${-x / 40}px,${-y / 40}px,0)`;

const Background = (props) => {
  return (
    <div className="background">
      <Trees />
      <animated.div style={{ transform: props.mouse.to(trans2) }}>
        <Stars />
      </animated.div>
    </div>
  );
};
export default Background;
