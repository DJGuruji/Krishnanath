import React, { useEffect } from "react";
import SkillDiscription from "../components/SkillDiscription";
// import AboutImg from "../components/AboutImg";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,   
    });
  }, []);

  return (
    <div className="h-[100vh] bg-black">
     
    <div className="md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around">
    
      <div className="pt-10 flex  justify-center items-center pl-5 ">
      {/* <AboutImg /> */}
      <h1 data-aos="fade-up" className="flex justify-center text-yellow-300 text-xl font-bold border-2 border-slate-300 p-2 rounded-lg ">SKILLS</h1>
      </div>
      <div className="pb-5 mt-10 md:mt-20 lg:mt-20 xl:mt-20 flex flex-col justify-center items-center">
      <SkillDiscription />
      </div>
    </div>
  </div>
  );
};

export default Skills;
