import React from "react";
import barbell from "../assets/barbell.svg";
import clock from "../assets/clock.svg";
import bolt from "../assets/bolt.svg";
import users from "../assets/users.svg";

const Benefits = () => {
  return (
    <main className="p-20">
      {/* HEADINGS */}
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-primary text-4xl font-bold uppercase">
          Why MuscleLab
        </h1>
        <h2 className="text-8xl font-teko text-text text-center uppercase leading-14">
          More than a place to work out<span className="text-primary">.</span>
        </h2>
        <p className="text-muted text-2xl">
          Everything around you is built to make training feel different.
        </p>
      </div>

      {/* BENEFITS */}
      <div className="cardContainer w-full flex flex-wrap gap-4 justify-evenly py-6">
        <div className="card w-[45%] bg-surface flex flex-col gap-4 rounded-xl px-6 py-8">
          <div className="bg-primary/40 w-fit p-2 rounded-xl">
            <img src={barbell} alt="barbell svg" className="h-10" />
          </div>

          <div>
            <h2 className="text-text text-4xl font-teko">Premium equipment</h2>
          </div>

          <div>
            <p className="text-xl text-muted">
              Modern equipment built for serious training, not the bare minimum.
            </p>
          </div>
        </div>

        <div className="card w-[45%] bg-surface rounded-xl p-4">
          <div className="bg-primary/40 w-fit p-2 rounded-xl">
            <img src={barbell} alt="barbell svg" className="h-10" />
          </div>

          <div>
            <h2 className="text-text text-4xl font-teko">Premium equipment</h2>
          </div>

          <div>
            <p className="text-xl text-muted">
              Modern equipment built for serious training, not the bare minimum.
            </p>
          </div>
        </div>

        {/* <div className="card h-96 w-[48%] bg-surface rounded-xl">
          <div className="bg-primary/40 w-fit p-2 m-4 rounded-xl">
            <img src={users} alt="barbell svg" className="h-10" />
          </div>
        </div>
        <div className="card h-96 w-[48%] bg-surface rounded-xl">
          <div className="bg-primary/40 w-fit p-2 m-4 rounded-xl">
            <img src={bolt} alt="barbell svg" className="h-10" />
          </div>
        </div>
        <div className="card h-96 w-[48%] bg-surface rounded-xl">
          <div className="bg-primary/40 w-fit p-2 m-4 rounded-xl">
            <img src={clock} alt="barbell svg" className="h-10" />
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default Benefits;
