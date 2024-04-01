import { useEffect, useState } from "react";
import gsap from "gsap";
import model from "../assets/images/Heroimg.png";
import taycan from "../assets/images/taycanbg.png";
import panamera from "../assets/images/panamerabg.png";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ModelsChooser = () => {
  const [models, setModels] = useState("911");
  const [Img, setImg] = useState(model);

  // Animation logic
  const animateModels = () => {
    gsap.set("#heading", { opacity: 0, y: -20 }); // Reset heading styles
    gsap.set("#text", { opacity: 0, x: -20 }); // Reset text styles
    gsap.set("#image", { opacity: 0, x: -10 }); // Reset image styles

    gsap.to("#heading", { opacity: 1, y: 0, delay: 0, ease: "power1.inOut" });
    gsap.to("#image", { opacity: 1, x:0, delay: 0.5 , ease: "power1.inOut" });
    gsap.to("#text", {
      opacity: 1,
      x: 0,
      delay: 0.5,
      ease: "power1.inOut",
      stagger: 0.1,
    });
  };

  // Trigger animation when models state changes
  useEffect(() => {
    animateModels();
  }, [models]);
  return (
    <section
      id="ModelsChooser"
      className="w-screen overflow-hidden common-padding bg-white text-black lg:px-28"
    >
      <div className="flex max-md:flex-col-reverse justify-between items-center py-10">
        <div className="flex-grow px-5">
          <div className="max-md:flex justify-between items-center">
            <div className="py-4">
              <h1 id="heading" className="section-title">
                CONFIGURATOR
              </h1>
              <p id="text" className="section-text">
                CREATE YOUR
              </p>
              <p id="text" className="section-text">
                {models.toUpperCase()}
              </p>
            </div>
            <button
              id="text"
              className="text-cneter max-md:mx-5 border border-gray-200 hover:border-black transition duration-400 h-min py-3 px-5 my-5 flex justify-center items-center rounded-full translate-x-20 opacity-0 font-bold text-2xl"
            >
              &gt;
            </button>
          </div>
          <div className="flex gap-2 capitalize py-4">
            <button
              className={`px-5 py-2 max-md:text-sm border-b transition duration-700  ${
                models === "taycan" ? " border-black" : " border-transparent"
              }  `}
              onClick={() => {
                setModels("taycan");
                setImg(taycan);
              }}
            >
              Taycan
            </button>
            <button
              onClick={() => {
                setModels("911");
                setImg(model);
              }}
              className={`px-5 py-2 max-md:text-sm border-b transition duration-700   ${
                models === "911" ? " border-black" : " border-transparent"
              }  `}
            >
              911
            </button>
            <button
              onClick={() => {
                setModels("panamera");
                setImg(panamera);
              }}
              className={`px-5 py-2 max-md:text-sm border-b transition duration-700   ${
                models === "panamera" ? " border-black" : " border-transparent"
              }  `}
            >
              Panamera
            </button>
          </div>
        </div>
        <div className="flex-grow object-cover">
          <img
            id="image"
            src={Img}
            className="opacity-0 max-w-full md:max-w-2xl -translate-x-20"
            alt="ModelImage"
          />
        </div>
      </div>
    </section>
  );
};

export default ModelsChooser;
