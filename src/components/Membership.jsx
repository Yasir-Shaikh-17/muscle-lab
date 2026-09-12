import React from "react";
import star from "../assets/star.svg";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";

const Membership = () => {
  const plans = [
    {
      name: "START",
      duration: "1 MONTH",
      price: 3000,
      savings: null,
      features: [
        { name: "Full Access", included: true },
        { name: "Equipment", included: true },
        { name: "Guidance", included: true },
        { name: "Locker", included: false },
        { name: "Personal Trainer", included: false },
      ],
      buttonText: "JOIN NOW",
      popular: false,
    },

    {
      name: "BUILD",
      duration: "3 MONTHS",
      price: 7500,
      savings: "SAVE 17%",
      features: [
        { name: "Full Access", included: true },
        { name: "Equipment", included: true },
        { name: "Guidance", included: true },
        { name: "Locker", included: true },
        { name: "Personal Trainer", included: false },
      ],
      buttonText: "JOIN NOW",
      popular: true,
    },

    {
      name: "FORGE",
      duration: "6 MONTHS",
      price: 13000,
      savings: "SAVE 28%",
      features: [
        { name: "Full Access", included: true },
        { name: "Equipment", included: true },
        { name: "Guidance", included: true },
        { name: "Locker", included: true },
        { name: "Personal Trainer", included: true },
      ],
      buttonText: "JOIN NOW",
      popular: false,
    },
  ];

  return (
    <main className="flex flex-col gap-4 sm:gap-10">
      {/* HEADING */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-teko text-text uppercase">
          Membership
        </h1>
        <h3 className="text-lg sm:text-xl lg:text-4xl text-text font-teko">
          TRAIN<span className="text-primary">.</span> COMMIT
          <span className="text-primary">.</span> TRANSFORM
          <span className="text-primary">.</span>
        </h3>
      </div>

      {/* CARD CONTAINER */}
      <div className="cardContainer flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-evenly items-center w-full px-8 sm:px-0">
        {/* CARD */}
        {plans.map((e, ind) => {
          return (
            <div key={ind} className={`card h-100 sm:h-120 w-full sm:w-[60%] lg:w-[28%] border ${e.popular? "border-primary/40": "border-border"} py-10 px-4 flex flex-col justify-around rounded-xl relative ${e.popular ? "bg-linear-to-t from-primary/20 to-transparent": "bg-surface" } ${e.popular?"scale-105": ""} hover:shadow-lg hover:shadow-primary/20 transition duration-200`}>
              {/* POPULAR */}
              {e.popular ? (
                <div className="popular flex items-center justify-center gap-1 absolute left-0 top-2 w-full">
                  <img src={star} alt="star" className="h-4" />
                  <p className="text-text text-lg font-bold">Most Popular</p>
                </div>
              ) : (
                ``
              )}

              {/* NAME */}
              <div className="name flex justify-center">
                <h1 className="uppercase text-4xl sm:text-6xl text-text font-teko">
                  {e.name}
                </h1>
              </div>

              {/* PRICE */}
              <div className="price">
                <h2 className="text-xl sm:text-3xl text-text uppercase font-bold">
                  pkr {e.price}
                </h2>
                <div className="flex gap-1 items-center">
                  <h4 className="text-base sm:text-xl text-text uppercase font-bold">
                    / {e.duration}
                  </h4>
                  <p className="text-primary text-sm font-semibold">
                    &nbsp;{e.savings}
                  </p>
                </div>
              </div>

              {/* FEATURES */}
              <div className="features">
                <ul className="my-2 flex flex-col gap-1">
                  {e.features.map((e, ind) => {
                    return (
                      <li key={ind} className="flex items-center gap-2">
                        <img src={e.included? check : cross} alt="check" className="h-3 sm:h-4" />
                        <p className="text-text sm:text-lg font-semibold">{e.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* BUTTON */}
              <div className="flex justify-center">
                <button className="w-2/3 bg-primary text-surface py-1.5 sm:py-2 rounded-full sm:text-2xl font-semibold uppercase cursor-pointer">
                  {e.buttonText}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Membership;
