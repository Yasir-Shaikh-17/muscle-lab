import React from "react";
import fb from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import x from "../assets/x.svg";
import whatsapp from "../assets/whatsapp.svg";

const Footer = () => {
  return (
    <main className="mt-4">

      <div className="px-20 py-10 flex flex-col md:flex-row justify-between">
        <div className="heading">
          <h1 className="text-text text-8xl font-teko">Muscle Lab</h1>
          <h3 className="text-text uppercase text-2xl tracking-wide font-semibold">
            More Than a Gym <br /> Its a Lifestyle
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-text font-bold text-2xl">Quick Links</h3>
          <ul className="text-text flex flex-col gap-1">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-text text-4xl font-bold">Connect with us</h3>
          <ul className="text-text flex gap-5 items-center">
            <li>
              <img src={insta} alt="insta" className="h-10" />
            </li>
            <li>
              <img src={fb} alt="fb" className="h-10" />
            </li>
            <li>
              <img src={x} alt="x" className="h-10" />
            </li>
            <li>
              <img src={whatsapp} alt="whatsapp" className="h-10" />
            </li>
          </ul>
        </div>
      </div>

      <p className="text-text mt-10 text-center text-xl border-t border-border py-4">&copy; 2026 MUSCLELAB. ALL RIGHTS RESERVED.</p>


    </main>
  );
};

export default Footer;
