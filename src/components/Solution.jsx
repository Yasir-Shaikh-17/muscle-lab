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
  let transparentContainerRef = useRef();
  let boxOneRef = useRef();
  let boxTwoRef = useRef();
  let boxThreeRef = useRef();

  // ================ GSAP ANIMATIONS ================
  useGSAP(() => {
    // ================ HEADING ANIMATIONS ================
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

    // ================ BOXES ANIMATIONS ================

    // ================ BOXES ANIMATIONS ================

    // 1. BOXES ENTER BEFORE PIN
    const boxEntrance = gsap.timeline({
      scrollTrigger: {
        trigger: transparentContainerRef.current,
        start: "top 140%",
        end: "+=340%",
        scrub: 2,
      },
    });

    boxEntrance
      .fromTo(
        boxOneRef.current,
        {
          xPercent: 110,
          yPercent: 110,
        },
        {
          xPercent: 0,
          yPercent: 0,
          ease: "none",
        },
      )
      .fromTo(
        boxTwoRef.current,
        {
          xPercent: 110,
          yPercent: 110,
        },
        {
          xPercent: 1.5,
          yPercent: 1.5,
          ease: "none",
        },
      )
      .fromTo(
        boxThreeRef.current,
        {
          xPercent: 110,
          yPercent: 110,
        },
        {
          xPercent: 3,
          yPercent: 3,
          ease: "none",
        },
      );

    // 2. PIN STARTS WHEN SECTION REACHES TOP
    ScrollTrigger.create({
      trigger: transparentContainerRef.current,
      start: "top top",
      end: "+=250%",
      pin: true,
    });
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <main className="flex flex-col items-center gap-10 w-full">
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
          program built to push you further than you'd go alone
          <span className="text-primary">.</span>
        </p>
      </div>

      {/* =============== SOLUTION WITH IMAGES =============== */}
      <div ref={boxContainerRef} className="solutionBoxContainer w-full">
        <div
          ref={transparentContainerRef}
          className="relative flex flex-col items-center h-svh justify-center overflow-hidden pt-10"
        >
          {/* CARD 1 */}
          <div
            ref={boxOneRef}
            className="box1 absolute z-10 h-[80svh] w-[90svw] shrink-0 flex gap-8 p-10 rounded-2xl bg-surface/90 backdrop-blur-md border border-primary/20 shadow-primary/5"
          >
            {/* LEFT */}
            <div className="left h-full w-2/3 flex flex-col justify-center pr-10 gap-4">
              <h1 className="text-primary text-8xl font-bold font-teko leading-20 absolute top-0 left-0 m-10">
                01
              </h1>
              <div>
                <h2 className="text-6xl text-white uppercase font-bold">
                  Structured Workouts
                </h2>
                <h3 className="text-4xl text-white capitalize">
                  Know exactly what to do<span className="text-primary">.</span>
                </h3>
              </div>
              <p className="text-xl text-muted">
                Follow structured workouts built around your goals, with the
                right exercises, sets, reps, and progression
                <span className="text-primary">.</span>
              </p>
            </div>
            {/* RIGHT */}
            <div className="right h-full">
              <img src={man1} alt="man 1" className="h-full" />
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={boxTwoRef}
            className="box1 absolute z-10 h-[80svh] w-[90svw] shrink-0 flex gap-8 p-10 rounded-2xl bg-surface/90 backdrop-blur-md border border-primary/20 shadow-primary/5 "
          >
            {/* LEFT */}
            <div className="left h-full w-2/3 flex flex-col justify-center pr-10 gap-4">
              <h1 className="text-primary text-8xl font-bold font-teko leading-20 absolute top-0 left-0 m-10">
                02
              </h1>
              <div>
                <h2 className="text-6xl text-white uppercase font-bold">
                  Track Your Progress
                </h2>
                <h3 className="text-4xl text-white capitalize">
                  See yourself getting stronger
                  <span className="text-primary">.</span>
                </h3>
              </div>
              <p className="text-xl text-muted">
                Track your workouts, monitor your progress, and know when it's
                time to push harder<span className="text-primary">.</span>
              </p>
            </div>
            {/* RIGHT */}
            <div className="right h-full">
              <img src={girl1} alt="man 1" className="h-full" />
            </div>
          </div>

          {/* CARD 3 */}
          <div
            ref={boxThreeRef}
            className="box1 absolute z-10 h-[80svh] w-[90svw] shrink-0 flex gap-8 p-10 rounded-2xl bg-surface/90 backdrop-blur-md border border-primary/20 shadow-primary/5 ">
            {/* LEFT */}
            <div className="left h-full w-2/3 flex flex-col justify-center pr-10 gap-4">
              <h1 className="text-primary text-8xl font-bold font-teko leading-20 absolute top-0 left-0 m-10">
                03
              </h1>
              <div>
                <h2 className="text-6xl text-white uppercase font-bold">
                  Stay Accountable
                </h2>
                <h3 className="text-4xl text-white capitalize">
                  Don't train alone<span className="text-primary">.</span>
                </h3>
              </div>
              <p className="text-xl text-muted">
                Stay accountable, build consistency, and get the push you need
                to keep showing up<span className="text-primary">.</span>
              </p>
            </div>
            {/* RIGHT */}
            <div className="right h-full">
              <img src={man2} alt="man 1" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Solution;
