import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
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
  return (
    <View
      index={index}
      id={gsapType}
      className=" bg-black rounded-3xl w-full h-full"
    >
      <ambientLight intensity={0.1} 
      />

      <PerspectiveCamera makeDefault position={[0, 0, 5]} ref={controlRef} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={5}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>{
          setRotationalState(controlRef.current.getAzimuthalAngle());
        }}
      />

      <group ref={groupRef} name={`model`} position={[0,0,0]}>

      <Suspense fallback={null}>
        <GT3 
         scale={[.75 , .75 , .75]}
         />
      </Suspense>

      </group>
    </View>
  );
};

export default ModelView;
