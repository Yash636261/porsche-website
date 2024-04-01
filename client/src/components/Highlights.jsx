import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Coursel from "./Coursel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    const animate = gsap.to("#t1", {
      opacity: 1,
      y: 0,
      delay: 0,
      ease: "power1.inOut",
      paused: true,
    });
    ScrollTrigger.create({
      trigger: "#t1",
      start: "top 80%", // Adjusted start position
      onEnter: () => animate.play(),
      once: true,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding bg-white text-black"
    >
      <div className="screen-max-width">
        <div className="w-full">
          <h1 id="t1" className="section-heading">
            Models
          </h1>
        </div>
        <Coursel />
      </div>
    </section>
  );
};

export default Highlights;
