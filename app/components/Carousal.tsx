"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Card from "./Card";
import { servicesData } from "../utils/data";

const Carousal = () => {
  return (
    <div className="w-full max-w-[350px] mt-5">
      <Carousel fullHeightHover={true} swipe animation="slide">
        {servicesData.map((item, i) => (
          <Card
            minImage
            styles="w-full p-0 max-w-[350px]"
            key={i}
            image={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Carousal;
