import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";
import man1 from "../assets/ml_man1.jpg";
import man2 from "../assets/ml_man2.jpg";
import girl1 from "../assets/ml_girl1.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Solution = () => {
  let headingRef = useRef();
  let paraRef = useRef();
  let headingContainerRef = useRef();
  let boxContainerRef = useRef();
  let boxOneRef = useRef();
  let boxTwoRef = useRef();
  let boxThreeRef = useRef();
  let mainContainerRef = useRef();

  // ================ GSAP ANIMATIONS ================
  useGSAP(
    () => {
      let splitedHeading = SplitText.create(headingRef.current, {
        type: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.from(splitedHeading.lines, {
        opacity: 0,
        yPercent: 30,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
      }).from(paraRef.current, {
        opacity: 0,
        yPercent: 30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.set(boxOneRef.current, {
        xPercent: 105,
        yPercent: 105,
      });

      gsap.set(boxTwoRef.current, {
        xPercent: 105,
        yPercent: 105,
      });

      gsap.set(boxThreeRef.current, {
        xPercent: 105,
        yPercent: 105,
      });

      const boxesTl = gsap.timeline({
        scrollTrigger: {
          trigger: boxContainerRef.current,
          start: "top 0%",
          end: "+=800%",
          pin: true,
          scrub: 0.5,
          markers: true,
          invalidateOnRefresh: true,
        },
      });

      boxesTl
        // BOX 1
        .to(boxOneRef.current, {
          xPercent: 0,
          yPercent: 0,
          duration: 1,
          ease: "none",
        })

        // BOX 2
        .to(boxTwoRef.current, {
          xPercent: 0,
          yPercent: 0,
          duration: 1,
          ease: "none",
        })

        // BOX 3
        .to(boxThreeRef.current, {
          xPercent: 0,
          yPercent: 0,
          duration: 1,
          ease: "none",
        });

      ScrollTrigger.refresh();
    },
    { scope: mainContainerRef },
  );

  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <main
      ref={mainContainerRef}
      className="flex flex-col items-center gap-10 w-full"
    >
      {/* =============== HEADING =============== */}
      <div
        ref={headingContainerRef}
        className="flex flex-col items-center justify-center gap-2"
      >
        <h1
          ref={headingRef}
          className="text-[90px] font-teko text-text text-center uppercase leading-20"
        >
          None of that is your fault<span className="text-primary">.</span>{" "}
          <br />
          Here's the fix<span className="text-primary">.</span>
        </h1>
        <p ref={paraRef} className="text-3xl text-muted text-center px-10">
          <span className="text-primary font-semibold">Muscle Lab</span> gives
          you a personalized plan, a coach who tracks your progress, and a
          program built to push you further than you'd go alone.
        </p>
      </div>

      {/* =============== SOLUTION WITH IMAGES =============== */}
      <div
        ref={boxContainerRef}
        className="solutionBoxContainer bg-purple-400 overflow-hidden w-full h-svh flex flex-col justify-center items-center relative"
      >
        <div
          ref={boxOneRef}
          className="box1 h-[80svh] w-[90svw] bg-red-200 shrink-0 absolute z-10"
        ></div>
        <div
          ref={boxTwoRef}
          className="box1 h-[80svh] w-[90svw] bg-red-400 shrink-0 absolute z-20"
        ></div>
        <div
          ref={boxThreeRef}
          className="box1 h-[80svh] w-[90svw] bg-red-600 shrink-0 absolute z-30"
        ></div>
      </div>

      {/* <div className="h-[400svh]"></div> */}
    </main>
  );
};

export default Solution;
