import React from "react";

const Testinomial = () => {
  return (
    <main className="flex flex-col gap-10">
      {/* HEAING */}
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

        <div className="card1 bg-[url(/asfan.jpg)] bg-cover bg-center bg-no-repeat h-120 w-60"></div>
        <div className="card1 bg-[url(/amir.jpg)] bg-cover bg-center bg-no-repeat h-120 w-60"></div>

      </div>
    </main>
  );
};

export default Testinomial;
