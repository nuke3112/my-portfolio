import React from "react";
import { Carousel } from "react-responsive-carousel";

import Button from "../Button/Button";

import "./SlideShow.css";
import Img_1 from "../../assets/project_1.jpg";
import Img_2 from "../../assets/project_2.jpg";
import Img_3 from "../../assets/project_3.jpg";
import Img_4 from "../../assets/project_4.jpg";
import Card from "../Card/Card";

const SlideShow = (props) => {
  return (
    <div className="slideshow">
      <Card image={Img_1}>
        <a
          href="https://www.behance.net/gallery/119497889/Sign-up-login-design"
          className="slideshow__link project_1"
        >
          Sign up and Login UI design
        </a>
      </Card>
      <Card image={Img_2}>
        <a
          href="https://www.behance.net/gallery/119500937/Landing-page-design"
          className="slideshow__link project_2"
        >
          Landing page design
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
          href="https://recipebuddy-7923d.web.app/"
          className="slideshow__link project_4"
        >
          Recipe Buddy, a search engine for recipes!
        </a>
      </Card>
    </div>
  );
};
export default SlideShow;
