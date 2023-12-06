import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";
import "../css/scrollToTop.css"


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled down, and show/hide the button accordingly
  const handleScroll = () => {
    const scrolled = window.scrollY;
    const scrollThreshold = 200; // Adjust the threshold as needed

    setIsVisible(scrolled > scrollThreshold);
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <IoIosArrowDropupCircle className='icon' />

    </button>
  );
};

export default ScrollToTopButton;
