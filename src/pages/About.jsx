import React from "react";
import AboutDiscription from "../components/AboutDiscription";
import AboutImg from "../components/AboutImg";
import img from "../img/cube.jpeg";

const About = () => {
  return (
    <div className="h-screen text-white bg-black ">
      <div className=" md:flex lg:flex xl:flex justify-around">
        <div className=" flex flex-col justify-center items-center md:mt-10 lg:mt-10 xl:mt-10 ">
          <AboutImg />
        </div>
        <div className="pt-10 flex flex-col justify-center items-center ">
          <AboutDiscription></AboutDiscription>
        </div>
      </div>
    </div>
  );
};

export default About;
