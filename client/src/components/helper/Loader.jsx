import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
      className=" text-black md:text-2xl font-semibold"
    >
      Loading...
    </Html>
  );
};

export default Loader;
