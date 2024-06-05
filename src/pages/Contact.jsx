import React, { useState } from "react";
import git from "../img/social/git.png";
import insta from "../img/social/insta.png";
import link from "../img/social/linkedin.png";
import mail from "../img/social/mail.png";
import Contactimg from "../components/Contactimg";

const ImagLink = ({ src, alt, href, isHovered, handleHover }) => {
  return (
    <a href={href} className="border-2 border-white rounded-full ml-4">
      <img
        src={src}
        alt={alt}
        target="_blank"
        className={`rounded-full ${isHovered ? "w-11 h-11" : "w-10 h-10"}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    </a>
  );
};

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center ">
    
      <div className=" flex flex-col justify-center items-center md:mt-3 lg:mt-3 xl:mt-3 ">
        <Contactimg />
      </div>
      <h1 className="text-center text-yellow-300 text-xl mt-10 font-semibold">Get In Touch With Me On </h1>
      <div className="flex justify-center items-center mt-8 ">
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
