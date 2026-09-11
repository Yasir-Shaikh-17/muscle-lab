import React, { useRef } from "react";
import amir from "../assets/amir.jpg";
import asfan from "../assets/asfan.jpg";
import wassay from "../assets/wassay.jpg";
import qureshi from "../assets/qureshi.jpg";
import star from "../assets/star.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testinomial = () => {
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;

    gsap.to(track, {
      x: -(track.scrollWidth / 2),
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
    <main className="flex flex-col gap-14 py-16">
      {/* HEADING */}
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-8xl font-teko text-text text-center uppercase leading-20">
          REAL PEOPLE<span className="text-primary">.</span> REAL PROGRESS
          <span className="text-primary">.</span>
        </h1>
        <h3 className="text-6xl font-teko text-center text-text uppercase">
          Don't take our word for it<span className="text-primary">.</span>
        </h3>
      </div>

      {/* CARDS */}
      <div className="cardContainer flex justify-evenly items-center">
        <div className="overflow-hidden w-full relative">
          <div className="pointer-events-none absolute inset-0 z-10 
          bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_0%,transparent_30%,transparent_70%,rgba(0,0,0,0.8)_100%)]"/>

          <div ref={trackRef} className="testimonial-track flex w-max">
            {[...testimonials, ...testimonials].map((e, ind) => (
              <div
                key={ind}
                className="w-87.5 shrink-0 rounded-lg bg-surface/90 backdrop-blur-md border border-primary/20 mr-6 px-3 py-4 flex flex-col justify-evenly min-h-60 gap-4"
              >
                {/* RATING STARS */}
                <div className="star-rating flex">
                  {Array.from({ length: e.rating }).map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <div>
                  <p className="text-white text-lg">{e.review}</p>
                </div>

                {/* NAME AND IMAGE */}
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src={e.image}
                      alt={e.name}
                      className="h-16 w-16 rounded-full object-cover object-center"
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
