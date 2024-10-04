import React, { useState, useEffect } from "react";
import git from "../img/social/git.png";
import insta from "../img/social/insta.png";
import link from "../img/social/linkedin.png";
import mail from "../img/social/mail.png";
import Contactimg from "../components/Contactimg";
import AOS from "aos";
import "aos/dist/aos.css";

const ImagLink = ({ src, alt, href, isHovered, handleHover }) => {
  return (
    <a
      href={href}
      className="border-2 border-white rounded-full ml-4"
      target="_blank"
      rel="noopener noreferrer"
      data-aos="zoom-in" 
    >
      <img
        src={src}
        alt={alt}
        className={`rounded-full ${isHovered ? "w-11 h-11" : "w-10 h-10"}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    </a>
  );
};

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center" data-aos="fade-up">
    
      <div
        className="flex flex-col justify-center items-center md:mt-10 lg:mt-10 xl:mt-10"
        data-aos="fade-down" 
      >
        <Contactimg />
      </div>
      <h1
        className="text-center text-yellow-300 text-xl mt-10 font-semibold"
        data-aos="flip-left" 
      >
        Get In Touch With Me On
      </h1>
      <div className="flex justify-center items-center mt-8">
   
        <ImagLink
          src={git}
          alt="GitHub"
          href="https://github.com"
          isHovered={isHovered}
          handleHover={handleHover}
        />
        <ImagLink
          src={insta}
          alt="Instagram"
          href="https://instagram.com"
          isHovered={isHovered}
          handleHover={handleHover}
        />
        <ImagLink
          src={link}
          alt="LinkedIn"
          href="https://linkedin.com"
          isHovered={isHovered}
          handleHover={handleHover}
        />
        <ImagLink
          src={mail}
          alt="Email"
          href="mailto:example@example.com"
          isHovered={isHovered}
          handleHover={handleHover}
        />
      </div>
    </div>
  );
};

export default Contact;
