import React, { useEffect } from "react";
import AboutDiscription from "../components/AboutDiscription";
import AboutImg from "../components/AboutImg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,   
    });
  }, []);

  return (
    <div className="h-screen text-white bg-black">
      <div className="md:flex lg:flex xl:flex justify-around">
      
        <div
          className="flex flex-col justify-center items-center md:mt-10 lg:mt-10 xl:mt-10"
          data-aos="fade-right"
        >
          <AboutImg />
        </div>

        <div
          className="pt-10 flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <AboutDiscription />
        </div>
      </div>
    </div>
  );
};

export default About;
