import React, { useEffect, useRef } from "react";
import arrow from "../assets/arrow_right.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

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

  return (
    <main className="">
      {/* NAVBAR */}
      <div className="flex justify-center relative w-full">
        <div
          ref={navbarRef}
          className="bg-white/10 backdrop-blur-xl w-2/3 px-8 py-2 flex justify-between shadow-xl rounded-full fixed top-0 z-10 my-6"
        >
          <div className="left">
            <h2 className="text-4xl text-white font-bold">MuscleLab</h2>
          </div>

          <nav className="flex items-center">
            <ul className="flex items-center gap-10 uppercase">
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
          </nav>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <div id="hero" className="h-svh relative overflow-hidden">
        <div
          ref={heroRef}
          className="hero absolute h-full w-full bg-[url(/muscle_lab.jpg)] bg-cover bg-center bg-no-repeat"
        />
        <div className="w-full h-full bg-gradient-to-r from-surface/40 to-transparent px-10 py-20">
        <div ref={heroHeadingButtonRef} className="flex flex-col justify-end items-start gap-2 h-full">
          <h1
            ref={heroHeadingRef}
            className="text-text text-9xl uppercase font-teko leading-24"
          >
            More than a gym <br /> It's a lifestyle
          </h1>

          <button
            ref={heroButtonRef}
            className="text-teko text-surface text-2xl bg-primary px-6 py-2 rounded-full font-bold flex items-center gap-4 cursor-pointer"
          >
            Join Muscle Lab
            <img src={arrow} alt="arrow svg" className="h-6" />
          </button>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
