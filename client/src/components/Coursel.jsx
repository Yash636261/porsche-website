import { useState, useEffect, useRef } from "react";
import { Highlightslides } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PModelSignature } from "@porsche-design-system/components-react";

const Coursel = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Highlightslides.length;
  const containerRef = useRef(null);

  useGSAP(() => {
    const containerWidth = containerRef.current.offsetWidth;
    gsap.to("#slider", {
      x: -current * containerWidth, // Translate horizontally by the width of each slide
      duration: 0.75, // Animation duration
      ease: "power2.inOut", // Easing function
    });
  }, [current]);

  const goToNextSlide = () => {
    if (current < totalSlides - 1) {
      setCurrent((prevSlide) => (prevSlide + 1) % totalSlides);
    }
  };

  const goToPrevSlide = () => {
    if (current > 0) {
      setCurrent((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }
  };
  return (
    <>
      <div className="pt-10">
        <div className="flex items-center text-white relative">
          <button
            onClick={goToPrevSlide}
            className="px-5 py-3 z-10 text-white opacity-80 max-md:text-sm max-md:px-2 max-md:py-1 shadow-2xl rounded-full bg-gray-100 text-2xl transition duration-200 hover:bg-black hover:text-white absolute left-5 my-auto  disabled:opacity-0"
            disabled={current === 0}
          >
            &lt;
          </button>

          <button
            onClick={goToNextSlide}
            className="px-5 py-3.5 z-10 text-white opacity-80 max-md:text-sm max-md:px-2 max-md:py-1 shadow-2xl rounded-full bg-gray-100 text-2xl transition duration-200 hover:bg-black hover:text-white absolute max-sm:right-5 right-0 my-auto  disabled:opacity-0"
            disabled={current === totalSlides - 1}
          >
            &gt;
          </button>
          {Highlightslides.map((slide, index) => (
            <div
              key={index} // Add key prop to descendant elements
              id="slider"
              onClick={() => setCurrent(index)}
              ref={containerRef}
              className={`slide ${
                index === current
                  ? "active relative sm:pr-20 pr-10"
                  : "relative sm:pr-20 pr-10"
              }`}
            >
              <div className="video-carousel_container ">
                <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                  <img
                    src={slide.imageURL} // Update image source property name
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-2 sm:top-6 md:top-12 left-[5%] object-contain ">
                <PModelSignature
                  size="small"
                  model={slide.description.title}
                  ModelSignatureColor="contrast-medium"
                  theme="dark"
                />
                {/* <p className="md:text-5xl sm:text-2xl text-lg font-bold">
                  {slide.description.title}
                </p> */}
                <p className="md:text-2xl sm:text-lg text-sm sm:mt-1">
                  {slide.description.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex justify-center items-center py-5 px-1 border-0 rounded-full">
            <div className="flex items-center">
              <div
                onClick={() => setCurrent(0)}
                className={` ${
                  current === 0 ? " bg-gray-100" : " bg-white"
                } w-3 h-3 md:w-4 md:h-4  rounded-full mx-1 border border-gray-200`}
              ></div>
              <div
                onClick={() => setCurrent(1)}
                className={` ${
                  current === 1 ? " bg-gray-100" : " bg-white"
                } w-3 h-3 md:w-4 md:h-4  rounded-full mx-1 border border-gray-200`}
              ></div>
              <div
                onClick={() => setCurrent(2)}
                className={` ${
                  current === 2 ? " bg-gray-100" : " bg-white"
                } w-3 h-3 md:w-4 md:h-4  rounded-full mx-1 border border-gray-200`}
              ></div>
              <div
                onClick={() => setCurrent(3)}
                className={` ${
                  current === 3 ? " bg-gray-100" : " bg-white"
                } w-3 h-3 md:w-4 md:h-4  rounded-full mx-1 border border-gray-200`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursel;
