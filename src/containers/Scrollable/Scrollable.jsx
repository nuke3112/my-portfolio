import React, { useState } from "react";
import Scroller from "react-page-scroller";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import "./Scrollable.css";
import { ReactComponent as CircleSvg } from "../../assets/cirlce.svg";

const Scrollable = (props) => {
  const [page, setPage] = useState(null);

  const handlePageChange = (number) => {
    setPage(number);
  };

  return (
    <div className="scrollable">
      <Scroller
        pageOnChange={handlePageChange}
        customPageNumber={page}
        animationTimer={1500}
        animationTimerBuffer={0}
        transitionTimingFunction="cubic-bezier(.58,0,.25,1)"
      >
        <Home />
        <Projects />
        <Contact />
      </Scroller>
      <div className="scroll">
        <CircleSvg
          className={`scroll__circle ${page === 0 ? "scroll__active" : null}`}
          onClick={() => handlePageChange(0)}
        />

        <CircleSvg
          className={`scroll__circle  ${page === 1 ? "scroll__active" : null}`}
          onClick={() => handlePageChange(1)}
        />

        <CircleSvg
          className={`scroll__circle  ${page === 2 ? "scroll__active" : null}`}
          onClick={() => handlePageChange(2)}
        />
      </div>
    </div>
  );
};
export default Scrollable;
