import React, { useEffect, useRef } from "react";
import arrow from "../assets/arrow_right.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import wassay from "../assets/wassay.jpg" 
import amir from "../assets/amir.jpg" 
import qureshi from "../assets/qureshi.jpg" 
import asfan from "../assets/asfan.jpg" 

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = () => {
  // ======================== REF DECLERATIONS ========================
  const heroHeadingRef = useRef();
  const heroButtonRef = useRef();
  const navbarRef = useRef();
  const heroRef = useRef();
  const heroHeadingButtonRef = useRef();

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 500));
    gsap.ticker.lagSmoothing(0);
    return () => lenis.destroy();
  }, []);

  // ======================== GSAP ANIMATION ========================
  let mm = gsap.matchMedia()

  mm.add("(min-width: 1024px)", ()=>{
    
    useGSAP(() => {
      const tl = gsap.timeline();
  
      const splitedHeading = SplitText.create(heroHeadingRef.current, {
        type: "lines",
      });
  
      // ======================== INTRO ANIMATION ========================
  
      tl.from(".hero", {
        scale: 1.2,
        duration: 1.5,
        delay: 0.5,
        ease: "power2",
      });
  
      tl.from(
        navbarRef.current,
        {
          opacity: 0,
          y: -30,
          duration: 1,
          ease: "power1",
          scale: 0.9,
        },
        "<+0.5",
      );
  
      tl.from(
        splitedHeading.lines,
        {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 1,
          ease: "power1",
        },
        "<+0.5",
      );
  
      tl.from(
        heroButtonRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power1",
        },
        "<+0.3",
      );
  
      // ======================== PARALLEX EFFECT ========================
      gsap.to(heroHeadingButtonRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

  })

  return (
    <main className="">
      {/* NAVBAR */}
      <div className="flex justify-center relative z-999 w-full">
        <div
          ref={navbarRef}
          className="bg-white/10 backdrop-blur-xl w-2/3 px-4 lg:px-8 py-2 flex items-center justify-between shadow-xl rounded-full fixed top-0 z-10 my-6"
        >
          <div className="">
            <h2 className="text-2xl lg:text-4xl text-white font-bold">MuscleLab</h2>
          </div>

          <nav className="flex items-center">
            <ul className="hidden lg:flex items-center gap-10 uppercase">
              <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold">
                <a href="#hero">Home</a>
              </li>
              <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold">
                About
              </li>
              <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold">
                Explore
              </li>
              <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold">
                Contact
              </li>
            </ul>
            <img src={arrow} alt="arrow" className="h-6 md:h-8 block lg:hidden invert" />
          </nav>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div id="hero" className="h-svh relative overflow-hidden">

        <div ref={heroRef} className="hero absolute h-full w-full bg-[url(/muscle_lab.jpg)] bg-cover bg-center bg-no-repeat"/>

        <div className="w-full h-full z-10 relative bg-linear-to-r from-surface/30 to-transparent px-2 sm:px-10 py-16">

          <div ref={heroHeadingButtonRef} className="flex flex-col justify-end items-center sm:items-start gap-1 sm:gap-0 h-full">
            
            <div className="bg-primary/60 rounded-full flex items-center gap-3 px-4 py-1 sm:py-1.5 mb-2 sm:mb-4">

              <div className="flex -space-x-7">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full relative z-40 ring ring-text">
                  <img src={amir} alt="" className="object-cover object-center rounded-full h-full w-full"/>
                </div>
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full relative z-30 ring ring-text">
                  <img src={asfan} alt="" className="object-cover object-center rounded-full h-full w-full"/>
                </div>
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full relative z-20 ring ring-text">
                  <img src={wassay} alt="" className="object-cover object-center rounded-full h-full w-full"/>
                </div>
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full relative z-10 ring ring-text">
                  <img src={qureshi} alt="" className="object-cover object-center rounded-full h-full w-full"/>
                </div>
              </div>

              <div>
                <p className="text-text font-semibold">500+ Members</p>
              </div>
              
            </div>

            <h1 ref={heroHeadingRef} className="text-text text-5xl sm:text-7xl lg:text-9xl uppercase font-teko leading-10 sm:leading-14 lg:leading-24 text-center sm:text-left">
              More than a gym <br /> It's a lifestyle
            </h1>

            <button className="bg-primary flex px-6 py-2 rounded-full gap-2 items-center">
              <p className="font-bold text-lg sm:text-xl">Join Muscle Lab</p>
              <img src={arrow} alt="arrow" className="h-8" />
            </button>
            
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
