"use client";

import { useState, useEffect } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";

const ScrollarButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5  p-3 rounded-full  text-green-800 z-[100]"
          aria-label="Scroll to top"
        >
          <TfiArrowCircleUp className="w-8 h-8 text-3xl font-bold" />
        </button>
      )}
    </>
  );
};

export default ScrollarButton;
