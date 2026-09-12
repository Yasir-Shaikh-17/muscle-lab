import React from "react";
import barbell from "../assets/barbell.svg";
import clock from "../assets/clock.svg";
import bolt from "../assets/bolt.svg";
import users from "../assets/users.svg";

const Benefits = () => {
  const cards = [
    {
      icon: barbell,
      heading: "Premium equipment",
      para: "Modern equipment built for serious training, not the bare minimum.",
    },
    {
      icon: users,
      heading: "Community",
      para: "Train around people who put in the work, so showing up gets easier.",
    },
    {
      icon: bolt,
      heading: "Atmosphere",
      para: "A clean, high-energy space with none of the usual boring gym feel.",
    },
    {
      icon: clock,
      heading: "Open access",
      para: "Extended hours and no waiting around for the equipment you need.",
    },
  ];

  return (
    <main className="md:p-20">
      {/* HEADINGS */}
      <div className="flex flex-col items-center gap-2 lg:gap-4 px-4 sm:px-0">
        <h1 className="text-primary text-xl sm:text-2xl lg:text-4xl font-bold uppercase">
          Why MuscleLab
        </h1>
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-teko text-text text-center uppercase sm:leading-16">
          More than a place to work out<span className="text-primary">.</span>
        </h2>
        <p className="text-muted leading-tight text-center text-lg sm:text-xl lg:text-2xl">
          Everything around you is built to make training feel different.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="cardContainer w-full flex flex-wrap gap-2 sm:gap-4 justify-center py-6">
        {cards.map((e, ind) => {
          return (
            <div key={ind} className="card shrink-0 w-[45%] sm:min-h-64 bg-surface flex flex-col gap-1 sm:gap-4 rounded-xl px-2 py-4 md:px-6 md:py-8  border border-border">
              <div className="bg-primary/40 w-fit p-1 sm:p-2 rounded sm:rounded-xl">
                <img src={e.icon} alt="barbell svg" className="h-4 sm:h-8 md:h-10" />
              </div>

              <div>
                <h2 className="text-text text-lg sm:text-2xl lg:text-4xl font-teko">
                  {e.heading}
                </h2>
              </div>

              <div>
                <p className="leading-tight text-sm sm:text-xl text-muted">
                  {e.para}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Benefits;
