import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

import Moon from "../../components/Svg/Moon/Moon";
import Birds from "../../components/Svg/Birds/Birds";
import Button from "../../components/Button/Button";

import "./Home.css";
import Resume from "../../assets/JeetChauhan_Resume.pdf";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate(${-x / 15}px,${-y / 15}px)`;

const Home = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 550, friction: 140 }
  }));

  // const [x1, setX] = useState(null);
  // const [y1, setY] = useState(null);

  // useEffect(() => {
  //   window.addEventListener("devicemotion", (event) => {
  //     setX(event.accelerationIncludingGravity.x.toFixed(2));
  //     setY(event.accelerationIncludingGravity.y.toFixed(2));
  //   });
  // }, []);

  return (
    <div
      className="home"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="home__text">
        <span className="home__text--name title">
          Jeet <br />
          Chauhan
        </span>
        <p>&nbsp;&nbsp;UI/UX Designer</p>
        <Button className="button">
          <a href={Resume} download="JeetChauhan_Resume.pdf">
            Download resume
          </a>
        </Button>
      </div>
      <Birds order="home__bird-one" />
      <Birds order="home__bird-two" />
      <animated.div
        style={{ transform: props.xy.to(trans1), alignSelf: "flex-start" }}
      >
        <Moon />
      </animated.div>
    </div>
  );
};
export default Home;
