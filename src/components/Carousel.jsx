import React, { useState } from "react";
import "../css/carousel.css";
import image2 from "../images/carousel/image2.jpg";
import next from "../images/carousel/next.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = [
    {
      image: image2,
      statement: "They bring out your business full potential!",
      name: "Christina",
      position: "VP of KRIMC",
    },
    {
      image: next,
      statement: "Embark on your path to success with a stunning website!",
      name: "Your Digital Identity",
      position: "Explore possibilities now",
    },
  ];
  const [isFadingOut, setIsFadingOut] = useState(false);
  const prevItem = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsFadingOut(false);
      setCurrentIndex((currentIndex - 1 + content.length) % content.length);
    }, 300); // Adjust the time to match the transition duration
  };
  const nextItem = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsFadingOut(false);
      setCurrentIndex((currentIndex + 1) % content.length);
    }, 300); // Adjust the time to match the transition duration
  };

  const currentContent = content[currentIndex];

  

  return (
    <div className="carousel-div">
      <div className={`carousel display ${isFadingOut ?'fadeout':'fadein'}`}>
        <img
          src={currentContent.image}
          className="carousel-pic-1"
          alt="mission"
         
        />
        <p className="carousel-statement">{currentContent.statement}</p>
        <p className="carousel-name" >{currentContent.name}</p>
        <p className="carousel-position" >{currentContent.position}</p>
      </div>
      <div className="carousel-control">
        <button onClick={prevItem}>
          <FaArrowCircleLeft className="carousel-control-button" />
        </button>
        <div>{`${currentIndex + 1}/${content.length}`}</div>
        <button onClick={nextItem} >
          <FaArrowCircleRight className="carousel-control-button" />
        </button>
      </div>
    </div>
  );
};
