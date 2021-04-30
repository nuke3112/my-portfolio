import React from "react";

import SlideShow from "../../components/SlideShow/SlideShow";

import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projects">
      <div className="projects__text">
        <span className="projects__text--title title">
          My <br />
          Projects
        </span>
      </div>
      <SlideShow />
    </div>
  );
};
export default Projects;
