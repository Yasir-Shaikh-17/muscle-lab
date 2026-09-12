import React from "react";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Testinomial from "./components/Testinomial";
import Benefits from "./components/Benefits";
import Membership from "./components/Membership";
import Cta from "./components/Cta";

const App = () => {
  return (
    <div className=" bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Testinomial />
      <Membership />
      <Cta />
      <div className="h-svh"></div>
    </div>
  );
};

export default App;
