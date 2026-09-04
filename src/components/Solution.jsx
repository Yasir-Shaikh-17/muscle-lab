import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const Solution = () => {
    
    let headingRef = useRef()

    // ================ GSAP ANIMATIONS ================
    useGSAP(()=>{

        let splitedHeading = SplitText.create(headingRef.current, {type: "lines"})

        gsap.from(splitedHeading.lines, {
            opacity: 0,
            stagger: 0.3,
            yPercent: 30,
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
            }
        })

    })

    
  return (
    <main className="">

      {/* =============== HEADING =============== */}
      <div className="flex justify-center">
        <h1 ref={headingRef} className="text-8xl font-teko text-text text-center uppercase w-full">
          None of that is your fault<span className="text-primary">.</span>
          <br />
          Here's the fix<span className="text-primary">.</span>
        </h1>
      </div>


<div className="h-svh"></div>

    </main>
  );
};

export default Solution;
