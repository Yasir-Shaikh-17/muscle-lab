import React, { useRef } from "react";
import amir from "../assets/amir.jpg";
import asfan from "../assets/asfan.jpg";
import wassay from "../assets/wassay.jpg";
import qureshi from "../assets/qureshi.jpg";
import star from "../assets/star.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testinomial = () => {
  const trackRef = useRef(null);
  const headingContainerRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    useGSAP(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingContainerRef.current,
          start: "top 95%",
          end: "top 50%",
          scrub: true,
        },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        yPercent: 30,
      });

      tl.from(subHeadingRef.current, {
        opacity: 0,
        yPercent: 30,
      });

      const track = trackRef.current;
      if (!track) return;
      const cards = track.children;
      const firstDuplicate = cards[testimonials.length];
      // Exact distance between original set and duplicated set
      const distance = firstDuplicate.offsetLeft - cards[0].offsetLeft;

      gsap.to(track, {
        x: -distance,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, []);
  });

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.children;
    const firstDuplicate = cards[testimonials.length];
    // Exact distance between original set and duplicated set
    const distance = firstDuplicate.offsetLeft - cards[0].offsetLeft;

    gsap.to(track, {
      x: -distance,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const testimonials = [
    {
      name: "Asfan",
      tag: "Beginner",
      review:
        "MuscleLab gave me a proper plan to follow. I finally know what to train and how to improve every week.",
      rating: 5,
      image: asfan,
    },
    {
      name: "Wassay",
      tag: "Member",
      review:
        "Tracking my progress with MuscleLab keeps me motivated. I can actually see the difference in my strength.",
      rating: 4,
      image: wassay,
    },
    {
      name: "Amir",
      tag: "Member",
      review:
        "The accountability makes a huge difference. I’m more consistent with my workouts and don’t feel lost at the gym anymore.",
      rating: 5,
      image: amir,
    },
    {
      name: "Qureshi",
      tag: "Intermediate",
      review:
        "MuscleLab makes it much easier to stay consistent. Having everything in one place keeps me focused on my goals.",
      rating: 5,
      image: qureshi,
    },
  ];

  return (
    <main className="flex flex-col gap-4 sm:gap-14 py-16">
      {/* HEADING */}
      <div
        ref={headingContainerRef}
        className="flex flex-col justify-center items-center sm:gap-3"
      >
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-teko text-text text-center uppercase lg:leading-20"
        >
          REAL PEOPLE<span className="text-primary">.</span> REAL PROGRESS
          <span className="text-primary">.</span>
        </h1>
        <h3
          ref={subHeadingRef}
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-teko text-center text-text uppercase"
        >
          Don't take our word for it<span className="text-primary">.</span>
        </h3>
      </div>

      {/* CARDS */}
      <div className="cardContainer flex justify-evenly items-center">
        <div className="overflow-hidden w-full relative">
          <div
            className="pointer-events-none absolute inset-0 z-10 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_0%,transparent_30%,transparent_70%,rgba(0,0,0,0.8)_100%)]"
          />

          <div ref={trackRef} className="testimonial-track flex w-max">
            {[...testimonials, ...testimonials].map((e, ind) => (
              <div
                key={ind}
                className="w-72 sm:w-87.5 shrink-0 rounded-lg bg-surface/90 backdrop-blur-md border border-primary/20 mr-6 px-3 py-4 flex flex-col justify-evenly min-h-48 sm:min-h-60 gap-2 sm:gap-4"
              >
                {/* RATING STARS */}
                <div className="star-rating flex">
                  {Array.from({ length: e.rating }).map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt="star"
                      className="sm:w-5 sm:h-5 h-3 w-3"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <div>
                  <p className="text-white text-sm sm:text-lg">{e.review}</p>
                </div>

                {/* NAME AND IMAGE */}
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={e.image}
                      alt={e.name}
                      className="sm:h-16 sm:w-16 h-10 w-10 rounded-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="text-primary text-lg">{e.name}</h3>
                    <p className="text-sm text-muted">{e.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testinomial;
