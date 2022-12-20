import React from "react";
import { Carousel } from "react-bootstrap";
import one from "./one.jpg";
const MainBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MainBanner;
