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
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
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
  });

  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  const cards = [
    {
      ref: boxOneRef,
      heading: "Structured Workouts",
      subHeading: <>Know exactly what to do<span className="text-primary">.</span></>,
      para: <>Follow structured workouts built around your goals, with the right exercises, sets, reps, and progression<span className="text-primary">.</span></>,
      img: man1,
    },
    {
      ref: boxTwoRef,
      heading: "Track Your Progress",
      subHeading: <>See yourself getting stronger<span className="text-primary">.</span></>,
      para: <>Track your workouts, monitor your progress, and know when it's time to push harder<span className="text-primary">.</span></>,
      img: girl1,
    },
    {
      ref: boxThreeRef,
      heading: "Stay Accountable",
      subHeading: <>Don't train alone<span className="text-primary">.</span></>,
      para: <>Stay accountable, build consistency, and get the push you need to keep showing up<span className="text-primary">.</span></>,
      img: man2,
    },
  ];

  return (
    <main className="flex flex-col items-center lg:gap-10 w-full transition-all duration-200">
      {/* =============== HEADING =============== */}
      <div
        ref={headingContainerRef}
        className="flex flex-col items-center justify-center gap-2"
      >
        <h1
          ref={headingRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[90px] font-teko text-text text-center uppercase lg:leading-20"
        >
          None of that is your fault<span className="text-primary">.</span>{" "}
          <br />
          Here's the fix<span className="text-primary">.</span>
        </h1>
        <p
          ref={paraRef}
          className=" leading-tight sm:text-2xl lg:text-3xl text-muted text-center px-4 sm:px-10"
        >
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
          className="lg:relative flex flex-col gap-4 items-center lg:h-svh justify-center overflow-hidden lg:pt-10 px-4 py-4">

          {/* CARDS */}
          {cards.map((e, ind) => {
            return (
              <div
                key={ind}
                ref={e.ref}
                className="box1 lg:absolute lg:z-10 h-[60svh] sm:h-[70svh] lg:h-[80svh] w-[90svw] md:w-[60svw] lg:w-[90svw] shrink-0 flex flex-col lg:flex-row lg:gap-8 lg:p-10 rounded-2xl bg-surface/90 backdrop-blur-md border border-primary/20 shadow-primary/5 p-4"
              >
                {/* LEFT */}
                <div className="left h-1/2 lg:h-full w-full lg:w-2/3 flex flex-col justify-center lg:pr-10 gap-2 md:gap-4">
                  <h1 className="text-primary text-6xl sm:text-8xl font-bold font-teko leading-10 md:leading-20 lg:absolute lg:top-0 lg:left-0 lg:m-10">
                    0{ind+1}
                  </h1>
                  <div className="md:block flex flex-col gap-0">
                    <h2 className="text-2xl md:text-4xl lg:text-6xl text-white uppercase font-bold leading-tight">
                      {e.heading}
                    </h2>
                    <h3 className="text-xl md:text-2xl lg:text-4xl text-white capitalize leading-tight">
                      {e.subHeading}
                    </h3>
                  </div>
                  <p className="leading-tight sm:text-lg md:text-xl text-muted">
                    {e.para}
                  </p>
                </div>
                {/* RIGHT */}
                <div className="right h-1/2 w-full lg:w-fit lg:h-full bg-green-900">
                  <img src={e.img} alt="man 1" className="object-cover object-center h-full w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Solution;
