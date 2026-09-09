import React from "react";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Testinomial from "./components/Testinomial";

const App = () => {
  
  return (
    <div className=" bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Testinomial />
      <div className="h-svh"></div>
    </div>
  );
};

export default App;
