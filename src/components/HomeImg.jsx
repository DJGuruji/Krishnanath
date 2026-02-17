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
    <div className="flex items-center justify-center py-8 md:py-12 px-4 relative">
      <div 
        className="relative group animate-float"
        data-aos="zoom-in"
      >
        {/* Modern high-intensity glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/30 rounded-full blur-[80px] group-hover:bg-red-500/40 transition-all duration-700"></div>
        
        {/* Image container with perspective */}
        <div className="relative z-10 perspective-1000">
          <img
            src={img1}
            alt="Portrait"
            className="rounded-[2.5rem] object-cover border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                       w-64 h-80 
                       md:w-80 md:h-[450px]
                       lg:w-96 lg:h-[550px]
                       transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1"
          />
          
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/20"></div>
        </div>

        {/* Floating abstract element like in refer.webp */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-2xl rotate-12 -z-10 blur-xl opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HomeImg;
