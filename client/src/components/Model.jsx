import gsap from "gsap";
import ModelView from "./helper/ModelView";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/images/image.png";

gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  const [isActive, setisActive] = useState(false);
  useEffect(() => {
    // Define GSAP animation
    const animation = gsap.to("#titl", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      paused: true, // Pause the animation initially
    });

    // Trigger animation when element comes into view
    ScrollTrigger.create({
      trigger: "#titl",
      start: "top 50%", // Start animation when the top of the trigger element is 80% in view
      onEnter: () => animation.play(), // Play the animation when triggered
      once: true, // Only trigger animation once
    });
  }, []);
  // camera control
  const cameracontrol = useRef();
  // model
  const scene = useRef(new THREE.Group());
  // rotation
  const [rotation, setRotation] = useState(0);

  const handlebutton = () => {
    setisActive(true);
  };

  return (
    <section className=" common-padding ">
      <div className="screen-max-width">
        <h1 id="titl" className="section-heading title">
          Take A Closer Look
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full flex justify-center items-center h-[75vh] md:h-[90vh] oveflow-hidden relative">
            {!isActive && (
              <button
                className=" px-5 py-7  shadow-2xl rounded-full bg-red-700 text-2xl transition duration-200 my-5 hover:bg-black border border-transparent hover:border hover:text-white hover:border-blue absolute right-1/2 top-1/2 "
                onClick={handlebutton}
              >
                360°
              </button>
            )}
            {isActive ? (
              <>
                <ModelView
                  index={1}
                  groupRef={scene}
                  gsapType={"model1"}
                  controlRef={cameracontrol}
                  setRotationalState={setRotation}
                />
                <Canvas
                  className="w-full h-full"
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: "hidden",
                  }}
                  eventSource={document.getElementById("root")}
                >
                  <View.Port />
                </Canvas>
              </>
            ) : (
                <img src={img} alt="" className=" object-cover overflow-hidden my-auto" />
              
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
