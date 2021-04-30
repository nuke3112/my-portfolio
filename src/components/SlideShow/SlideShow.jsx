import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import "./SlideShow.css";
import Img_1 from "../../assets/project_1.jpg";
import Img_2 from "../../assets/project_2.jpg";
import Img_3 from "../../assets/project_3.jpg";

const SlideShow = (props) => {
  return (
    <Carousel className="slideshow" fade>
      <CarouselItem>
        <div>
          <img src={Img_1} alt="project_1" className="slideshow_image" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div>
          <img src={Img_2} alt="project_2" className="slideshow_image" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div>
          <img src={Img_3} alt="project_3" className="slideshow_image" />
        </div>
      </CarouselItem>
    </Carousel>
  );
};
export default SlideShow;
