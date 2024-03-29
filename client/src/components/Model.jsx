import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
const Model = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      duration: 0.5,
    });
  });
  // camera control
  const cameracontrol = useRef();
  // model
  const scene = useRef(new THREE.Group());
  // rotation
  const [rotation, setRotation] = useState(0);

  return (
    <section className=" common-padding ">
      <div className="screen-max-width">
        <h1 id="title" className="section-heading title">
          Take A Closer Look
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] oveflow-hidden relative">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
