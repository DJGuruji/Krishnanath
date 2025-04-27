import React, { useEffect, useState } from "react";
import SkillDiscription from "../components/SkillDiscription";
// import AboutImg from "../components/AboutImg";
import AOS from "aos";
import "aos/dist/aos.css";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const { showBackground, bgOpacity } = useBackground();

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000, 
      once: true,   
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-12 relative overflow-hidden">
      {/* Only render Three.js background after component mounts to prevent SSR issues */}
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
            <h1 
              data-aos="fade-right" 
              className="text-3xl md:text-4xl font-serif text-yellow-200 pb-3 border-b border-yellow-700/30"
            >
              SKILLS
            </h1>
            
            <p 
              data-aos="fade-right" 
              data-aos-delay="100" 
              className="mt-6 text-gray-300 leading-relaxed hidden md:block"
            >
              A showcase of my technical expertise and professional capabilities that I've developed throughout my career.
            </p>
          </div>
          
          <div className="w-full md:w-3/4">
            <SkillDiscription />
          </div>
        </div>
      </div>
      
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default Skills;
