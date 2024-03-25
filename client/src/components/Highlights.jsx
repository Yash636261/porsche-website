import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Coursel from "./Coursel";

const Highlights = () => {
    useGSAP(()=>{
        gsap.to('#title',{opacity:1,y:0,delay:0,ease:'power1.inOut'})
    })
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden common-padding bg-white text-black"
    >
      <div className=" screen-max-width">
        <div className=" w-full">
          <h1 id="title" className="section-heading">
            Models
          </h1>
        </div>
        <Coursel />
      </div>
    </section>
  );
};

export default Highlights;
