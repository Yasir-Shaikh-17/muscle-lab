import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Problem = () => {
  const problemHeadingRef = useRef();
  const problemParaRef = useRef();
  const boxesContainerRef = useRef();

  // ====================== GSAP ANIMATION ======================
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    useGSAP(() => {
      let splitedHeading = SplitText.create(problemHeadingRef.current, {
        type: "lines",
      });

      let splitedPara = SplitText.create(problemParaRef.current, {
        type: "lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: problemHeadingRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      });

      tl.from(splitedHeading.lines, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.3,
      });

      // ====================== BOXES ANIMATION ======================
      tl.from(boxesContainerRef.current, {
        opacity: 0,
        yPercent: 30,
        scale: 0.95,
        ease: "power3.inOut",
        duration: 1,
      });
    });
  });

  return (
    <main className="flex flex-col gap-10 py-10 md:py-20">
      {/* ============= PROBLEM HEADING & PARA ============= */}
      <div className="flex justify-center flex-col items-center gap-2">
        <h1
          ref={problemHeadingRef}
          className="text-3xl sm:text-6xl lg:text-8xl font-teko text-text text-center uppercase"
        >
          YOUR BODY ISN'T PROBLEM<span className="text-primary">.</span> <br />
          YOUR APPROACH IS<span className="text-primary">.</span>
        </h1>
      </div>

      {/* ============= PROBLEM BOXES ============= */}
      <div
        ref={boxesContainerRef}
        className="boxesContainer flex flex-col gap-6 lg:flex-row justify-evenly items-center px-8"
      >
        <div className="box1 bg-surface w-full md:w-2/3  lg:w-1/4 px-4 py-8 rounded-lg flex flex-col gap-2 md:gap-4 
        shadow-[0px_0px_10px_white]/20 min-h-60">
          <h2 className="text-text text-3xl  md:text-6xl font-teko uppercase">
            <span className="text-[#FF474c]">01</span> <br /> No Plan
          </h2>
          <p className="text-muted text-lg md:text-xl">
            Walking into the gym without knowing what to train, how much to
            lift, or how to progress.
          </p>
        </div>

        <div
          className="box2 bg-surface w-full m  md:w-2/3 lg:w-1/4 px-4 py-8 rounded-lg flex flex-col gap-2 md:gap-4 
        shadow-[0px_0px_10px_white]/20 min-h-60">
          <h2 className="text-text text-3xl  md:text-6xl font-teko uppercase">
            <span className="text-[#FF474c]">02</span> <br /> No PROGRESS
          </h2>
          <p className="text-muted text-lg md:text-xl">
            You're working hard, but your strength, physique, and performance
            barely change.
          </p>
        </div>

        <div
          className="box3 bg-surface w-full m  md:w-2/3 lg:w-1/4 px-4 py-8 rounded-lg flex flex-col gap-2 md:gap-4 
        shadow-[0px_0px_10px_white]/20 min-h-60">
          <h2 className="text-text text-3xl  md:text-6xl font-teko uppercase">
            <span className="text-[#FF474c]">03</span> <br /> NO PUSH
          </h2>
          <p className="text-muted text-lg md:text-xl">
            It's easy to quit when nobody pushes you.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Problem;
