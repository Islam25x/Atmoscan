import React from "react";
import CircleAnimation1 from "./CircleAnimation/CircleAnimation1";
import CircleAnimation2 from "./CircleAnimation/CircleAnimation2";
import { HashLink } from "react-router-hash-link";
const Home = () => {
  return (
    <section id="Home" className="bg-backgroundColor py-12">
      <div className="circle">
        <CircleAnimation1 />
        <CircleAnimation2 />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-delay="400"
        className="container mx-auto text-center pt-16 relative z-1"
      >
        <h1 className="text-gray-100 pt-60 lg:text-7xl md:text-5xl lg:tracking-superWide md:tracking-veryWide sm:text-3xl sm:tracking-veryWide">
          Atmoscan
        </h1>
        <p className="text-gray-100 pt-12">
        Your go-to weather companion for accurate and
        real-time updates.
        </p>
        <HashLink smooth to="#Weather">
          <i className="fa-solid fa-arrow-down-long text-gray-100 text-4xl mt-16 h-20 w-20 border-gray-100 border-2 rounded-full content-center hover:bg-white hover:text-black duration-300"></i>
        </HashLink>
      </div>
    </section>
  );
};

export default Home;
