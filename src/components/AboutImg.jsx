import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../img/face.jpeg";

const AboutImg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div>
      <div className="w-s flex justify-center items-center">
        <img
          src={img}
          alt="face"
          className="border-2 border-yellow-300 w-44 h-58 rounded-sm mt-10"
          data-aos="zoom-in" 
        />
        
      </div>
    </div>
  );
};

export default AboutImg;
