import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import arrow from "./assets/arrow_right.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const App = () => {
  // ======================== REF DECLERATIONS ========================
  const heroHeadingRef = useRef();
  const heroButtonRef = useRef();
  const navbarRef = useRef();

  // ======================== GSAP ANIMATION ========================
  useGSAP(() => {
    const tl = gsap.timeline();
    
    const splitedHeading = SplitText.create(heroHeadingRef.current, {
      type: "lines",
    });

    tl.from(".hero", {
      scale: 1.2,
      duration: 1.5,
      delay: 0.5,
      ease: "power2",
    })

    tl.from(navbarRef.current, {
      opacity: 0,
      y:-30,
      duration: 1,
      ease: "power1"
    }, "<+0.5")

    tl.from(splitedHeading.lines, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power1",
    }, "<+0.5");

    tl.from(heroButtonRef.current, {
      opacity: 0,
      y:30,
      duration: 1,
      ease: "power1",
    }, "<+0.3")



  });

  return (
    <div className="overflow-hidden">
      {/* NAVBAR */}
      <div ref={navbarRef} className="fixed top-0 w-full p-6 z-10 flex justify-center">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <div
        id="hero"
        className="hero h-svh bg-[url(/muscle_lab.jpg)] bg-cover bg-center bg-no-repeat"
      >
        <div className="w-full h-full flex flex-col justify-end items-start gap-2 bg-gradient-to-r from-surface/40 to-transparent px-10 py-28">
          <h1
            ref={heroHeadingRef}
            className="text-text text-9xl uppercase font-teko leading-24"
          >
            More than a gym <br /> It's a lifestyle
          </h1>

          <button ref={heroButtonRef} className="text-teko text-surface text-2xl bg-primary px-6 py-2 rounded-full font-bold flex items-center gap-4 cursor-pointer">
            Join Muscle Lab
            <img src={arrow} alt="arrow svg" className="h-6" />
          </button>
        </div>
      </div>

      <div className="h-screen bg-background"></div>
    </div>
  );
};

export default App;
