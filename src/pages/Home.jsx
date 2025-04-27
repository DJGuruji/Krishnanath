import React, { useState, useEffect } from "react";
import Discription from "../components/Discription";
import HomeImg from "../components/HomeImg";
import "aos/dist/aos.css";
import AOS from "aos";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { showBackground, bgOpacity } = useBackground();

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* 3D Background */}
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none"></div>
      
      <div className="md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around items-center h-full relative z-10">
        <div 
          className="pt-10 flex justify-center items-center pl-5 transform transition-all duration-500 hover:scale-105"
          data-aos="fade-right"
        >
          <HomeImg />
        </div>
        <div 
          className="pb-5 flex flex-col justify-center items-center"
          data-aos="fade-left"
        >
          <Discription />
        </div>
      </div>
      
      {/* Background Toggle */}
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default Home;
