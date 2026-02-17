import React, { useEffect, useState } from "react";
import SkillDiscription from "../components/SkillDiscription";
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
    <div className="min-h-screen bg-black py-24 px-6 relative overflow-hidden">
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16">
          <div className="space-y-4" data-aos="fade-down">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-red-500 uppercase tracking-widest text-sm font-bold">Expertise</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              Technical <br /> <span className="text-gradient">Abilities</span>
            </h1>
            <p className="mt-8 text-zinc-500 max-w-xl font-medium uppercase tracking-[0.2em] text-xs">
              A curated showcase of my technical expertise and professional capabilities developed throughout my software engineering career.
            </p>
          </div>
          
          <div className="w-full" data-aos="fade-up">
            <SkillDiscription />
          </div>
        </div>
      </div>
      
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default Skills;
