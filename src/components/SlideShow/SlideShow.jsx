import React from "react";
import { Carousel } from "react-responsive-carousel";

import Button from "../Button/Button";

import "./SlideShow.css";
import Img_1 from "../../assets/project_1.png";
import Img_2 from "../../assets/project_2.png";
import Img_3 from "../../assets/project_3.jpg";
import Img_4 from "../../assets/project_4.jpg";
import Card from "../Card/Card";

const SlideShow = (props) => {
  return (
    <div className="slideshow">
      <Card image={Img_1}>
        <a
          href="https://www.behance.net/gallery/121390839/JioMart-redesign-concept"
          className="slideshow__link project_1"
        >
          JioMart Redesign Concept
        </a>
      </Card>
      <Card image={Img_2}>
        <a
          href="https://www.behance.net/gallery/121195759/Epay-Payment-app-design"
          className="slideshow__link project_2"
        >
          EPay - The payment app
        </a>
      </Card>
      <Card image={Img_3}>
        <a
          href="https://www.behance.net/gallery/119541179/Music-Player"
          className="slideshow__link project_3"
        >
          Music Player UI
        </a>
      </Card>
      <Card image={Img_4}>
        <a
          href="https://www.behance.net/gallery/119500937/Landing-page-design"
          className="slideshow__link project_4"
        >
          Landing Page design
        </a>
      </Card>
    </div>
  );
};
export default SlideShow;
