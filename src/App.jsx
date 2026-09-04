import React from "react";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

const App = () => {
  
  return (
    <div className="overflow-hidden bg-background">
      <Hero />
      <Problem />
      <Solution />
    </div>
  );
};

export default App;
