import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../img/krishna.jpg";


const HomeImg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex items-center justify-center py-8 md:py-12 px-4">
      <div 
        className="relative group"
        data-aos="zoom-in"
      >
        {/* Gradient border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        {/* Image container */}
        <div className="relative">
          <img
            src={img1}
            alt="Portrait"
            className="relative rounded-full object-cover border-4 border-white shadow-2xl
                       w-48 h-48 
                       sm:w-56 sm:h-56 
                       md:w-64 md:h-64 
                       lg:w-80 lg:h-80 
                       xl:w-96 xl:h-96
                       transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeImg;
