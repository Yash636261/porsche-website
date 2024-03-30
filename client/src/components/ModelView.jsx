import { Suspense, useEffect,useState } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Loader from "./Loader";
import { AmbientLight, Group } from "three";
import Lights from "./Lights";
import GT3 from "./GT3";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationalState,
}) => {
  const [isWide, setIsWide] = useState(false);
  const handleEnd = () => {
    // Get the current vertical angle (polar angle) of the controls
    const verticalAngle = controlRef.current.getPolarAngle();

    // If the vertical angle is above a certain threshold, update the rotational state
    if (verticalAngle > Math.PI / 2) {
      setRotationalState(controlRef.current.getAzimuthalAngle());
    }
  };

  useEffect(() => {
    if (window.innerWidth > 750) {
      setIsWide(true);
    } else {
      setIsWide(false);
    }
  }, [window.innerWidth]);
  return (
    <View index={index} id={gsapType} className="rounded-3xl w-full h-full">
      <ambientLight intensity={0.2} />

      <PerspectiveCamera makeDefault position={[0, 0, 5]} ref={controlRef} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={1}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={handleEnd}
        maxPolarAngle={Math.PI / 2} // Restrict rotation to upper half only
      />

      <group ref={groupRef} name={`model`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          {isWide && <GT3 scale={[1, 1, 1]} />}
          {!isWide && <GT3 scale={[0.5, 0.5, 0.5]} />}
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
