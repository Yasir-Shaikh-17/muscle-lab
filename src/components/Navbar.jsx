import React from "react";
import logo from "../assets/muscle_lab_logo.jpg";

const Navbar = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl w-2/3 px-8 py-2 flex justify-between shadow-xl rounded-full">
      <div className="left">
        <h2 className="text-4xl text-white font-bold">MuscleLab</h2>
      </div>

      <nav className="flex items-center">
        <ul className="flex items-center gap-10 uppercase">
          <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold"><a href="#hero">Home</a></li>
          <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold">About</li>
          <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold">Explore</li>
          <li className="text-white text hover:text-primary transition duration-500 cursor-pointer uppercase font-semibold">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
