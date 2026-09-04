import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";
import man1 from "../assets/ml_man1.jpg";
import man2 from "../assets/ml_man2.jpg";
import girl1 from "../assets/ml_girl1.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Solution = () => {
  let headingRef = useRef();
  let paraRef = useRef();

  // ================ GSAP ANIMATIONS ================
  useGSAP(() => {
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
  });

  return (
    <main className="flex flex-col items-center gap-10 w-full">
      {/* =============== HEADING =============== */}
      <div className="flex flex-col items-center justify-center gap-2">
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
      <div className="w-full overflow-x-auto scrollbar-none">
        <div className="flex">
          <div className="w-screen shrink-0 h-screen bg-red-200 text-8xl">
            01
          </div>

          <div className="w-screen shrink-0 h-screen bg-red-500 text-8xl">
            02
          </div>

          <div className="w-screen shrink-0 h-screen bg-red-800 text-8xl">
            03
          </div>
        </div>
      </div>

      <div className="h-svh"></div>
    </main>
  );
};

export default Solution;
