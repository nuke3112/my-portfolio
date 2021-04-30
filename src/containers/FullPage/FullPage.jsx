import React from "react";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import "./FullPage.css";

const FullPage = (props) => {
  return (
    <div id="fullpage-wrapper">
      <div className="section section1">
        <Home />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Contact />
      </div>
    </div>
  );
};
export default FullPage;
