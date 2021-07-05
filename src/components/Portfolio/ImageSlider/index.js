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
    <div className="w-full m-auto text-gray-300">
      <div className="flex flex-col h-screen justify-center items-center">
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
              className={
                index === current
                  ? "slide active flex items-center justify-center"
                  : "slide"
              }
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="travel"
                  className="image md:h-2/3"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
