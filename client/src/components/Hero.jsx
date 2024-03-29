import Heroimg from "../assets/images/Heroimg.png";
import { PModelSignature } from "@porsche-design-system/components-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(()=>{
  // gsap.to('#title',{opacity:1,y:0,delay:0,ease:'power1.inOut'}),
    gsap.fromTo('#title',{opacity:0,y:60},{opacity:1,y:0,delay:0.3,stagger:0.1}
  );
  },[]);
  return (
    <section className='relative bg-white text-black w-full nav-height flex flex-col justify-center items-center'>
      <div className="absolute bottom-[65vh] flex flex-col justify-center items-center " id='title'>
        <p className=' font-sans md:text-xl'>The Timeless Machine</p>
        <PModelSignature size='small' model="911" ModelSignatureColor='contrast-medium' theme="light" />
        <button className="btn font-semibold">Build Your Own</button>
      </div>
      <div className="w-full h-full md:px-10 lg:px-40 object-contain flex justify-center items-center">
        <img src={Heroimg} className='w-full h-auto max-h-2/3' alt="Hero Image" />
      </div>
    </section>
  )
}

export default Hero;
