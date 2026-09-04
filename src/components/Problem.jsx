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
  useGSAP(() => {
    let splitedHeading = SplitText.create(problemHeadingRef.current, {
      type: "lines",
    });

    let splitedPara = SplitText.create(problemParaRef.current, {
      type: "lines",
    });

    gsap.from(splitedHeading.lines, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power1",
      stagger: 0.3,
      scrollTrigger: {
        trigger: problemHeadingRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(splitedPara.lines, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power1",
      stagger: 0.3,
      scrollTrigger: {
        trigger: problemParaRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(boxesContainerRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 30,
      duration: 1.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: boxesContainerRef.current,
        toggleActions: "play none none reverse",
        start: "top 80%",
      },
    });
  });

  return (
    <main className="flex flex-col gap-10 py-20">
      {/* ============= PROBLEM HEADING & PARA ============= */}
      <div className="flex justify-center flex-col items-center gap-2">
        <h1
          ref={problemHeadingRef}
          className="text-8xl font-teko text-text text-center"
        >
          YOUR BODY ISN'T CHANGING<span className="text-primary">.</span> <br />{" "}
          YOUR APPROACH IS<span className="text-primary">.</span>
        </h1>

        <p
          ref={problemParaRef}
          className="text-muted text-2xl text-center mx-14"
        >
          You show up. You put in the work. But without the right training,
          consistency, and environment, your effort isn't translating into the
          results you want.
        </p>
      </div>

      {/* ============= PROBLEM BOXES ============= */}
      <div
        ref={boxesContainerRef}
        className="boxesContainer flex justify-evenly items-center"
      >
        <div
          className="box1 bg-surface w-1/4 px-4 py-8 rounded-lg flex flex-col gap-4 min-h-72 
        shadow-[0px_0px_10px_white]/20"
        >
          <h2 className="text-text text-6xl font-teko uppercase">
            <span className="text-primary">01</span> <br /> No Plan
          </h2>
          <p className="text-muted text-xl">
            Walking into the gym without knowing what to train, how much to
            lift, or how to progress.
          </p>
        </div>

        <div
          className="box2 bg-surface w-1/4 px-4 py-8 rounded-lg flex flex-col gap-4 min-h-72 
        shadow-[0px_0px_10px_white]/20"
        >
          <h2 className="text-text text-6xl font-teko uppercase">
            <span className="text-primary">02</span> <br /> No PROGRESS
          </h2>
          <p className="text-muted text-xl">
            You're working hard, but your strength, physique, and performance
            barely change.
          </p>
        </div>

        <div
          className="box3 bg-surface w-1/4 px-4 py-8 rounded-lg flex flex-col gap-4 min-h-72 
        shadow-[0px_0px_10px_white]/20"
        >
          <h2 className="text-text text-6xl font-teko uppercase">
            <span className="text-primary">03</span> <br /> NO PUSH
          </h2>
          <p className="text-muted text-xl">
            It's easy to quit when nobody pushes you.
          </p>
        </div>
      </div>

      <div className="h-svh"></div>
    </main>
  );
};

export default Problem;
