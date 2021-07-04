import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "./imageSlider.scss";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <FiArrowLeftCircle
        className="left-arrow text-brand-light hover:text-brand transition duration-500 ease-in"
        onClick={prevSlide}
      />
      <FiArrowRightCircle
        className="right-arrow text-brand-light hover:text-brand transition duration-500 ease-in"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
