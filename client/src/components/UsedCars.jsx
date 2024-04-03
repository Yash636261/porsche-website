import gsap from "gsap";
import Img from "../assets/images/image.png";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Correct import statement
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const UsedCars = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to("#head", {
      scrollTrigger: "#head",
      start: "top 95%",
      opacity: 1,
      y: 0,
      delay: 0,
      ease: "power1.inOut",
    });
    gsap.to("#img", {
      scrollTrigger: "#img",
      start: "top 99%",
      delay: 0.5,
      opacity: 1,
      x: 0,
      delay: 0.5,
      ease: "power1.inOut",
    });
    gsap.to("#txt", {
      scrollTrigger: "#txt",
      start: "top 99%",
      delay: 0.5,
      opacity: 1,
      x: 0,
      delay: 0.5,
      ease: "power1.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <section
      id="used"
      ref={sectionRef} // Assign ref to the section
      className="w-screen overflow-hidden common-padding bg-white text-black lg:px-28"
    >
      <div className="flex w-full max-md:flex-col-reverse justify-between items-center py-10">
        <div className="flex-grow px-5 max-w-xl">
          <div className="max-md:flex justify-between items-center">
            <div className="py-4">
              <h1 id="head" className="section-title">
                Pre-Owned Inventory
              </h1>
              <p id="txt" className="section-text">
                Find A PORSCHE
              </p>
              <p id="txt" className="section-text">
                Near You
              </p>
              <p id="txt" className="my-3 opacity-0 -translate-x-10">
                Making it easy to find your dream Porsche. Enter your location
                and browse the best car offers available near you.
              </p>

              <input
                type="text"
                placeholder="Enter City or ZIP Code"
                className="my-10  max-md:my-5 w-full xl:w-1/2 h-12 px-4 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center object-cover">
          <img
            id="img"
            src={Img}
            className="opacity-0 max-w-full md:max-w-2xl translate-x-20 "
            alt="ModelImage"
          />
        </div>
      </div>
    </section>
  );
};

export default UsedCars;
