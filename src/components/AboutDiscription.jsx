import React, { useState } from 'react';
import git from "../img/social/git.png";
import insta from "../img/social/insta.png";
import link from "../img/social/linkedin.png";
import mail from "../img/social/mail.png";
import { Link } from "react-router-dom";

const ImagLink = ({ src, alt, href, isHovered, handleHover }) => {
  return (
    <a href={href} className="border-2 border-white rounded-full">
      <img
        src={src}
        alt={alt}
        className={`rounded-full ${
          isHovered ? "w-11 h-11" : "w-10 h-10"
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    </a>
  );
};

const AboutDiscription = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
   <div className='border-2 border-yellow-300 p-2'>
    <p className='flex p-1 text-lg'>
      <h1 className='text-yellow-300  mr-1 text-lg'>Degree:</h1>
      Btech Computer Science And Engineering(2021-2025)
    </p>
    <p className='flex p-1 text-lg'>
      <h1 className='text-yellow-300  mr-1 text-lg'>College:</h1>
      Vidya Academy Of Science And Technology Technical Campus, Kilimanoor
    </p>
    <p className='flex p-1 text-lg'>
      <h1 className='text-yellow-300  mr-1 text-lg'>Language:</h1>
      malayalam, English
    </p>
    <p className='flex p-1 text-lg'>
      <h1 className='text-yellow-300  mr-1 text-lg'>Skills:</h1>
      MERN stack, Django, MySQL,PSQL,JavaScript,AWS,GIT, GitHub 
    </p>
   </div>
      <div className='flex justify-center items-center mt-8'>
        <ImagLink src={git} alt="GitHub" href="https://github.com" isHovered={isHovered} handleHover={handleHover} />
        <ImagLink src={insta} alt="Instagram" href="https://instagram.com" isHovered={isHovered} handleHover={handleHover} />
        <ImagLink src={link} alt="LinkedIn" href="https://linkedin.com" isHovered={isHovered} handleHover={handleHover} />
        <ImagLink src={mail} alt="Email" href="mailto:example@example.com" isHovered={isHovered} handleHover={handleHover} />
      </div>
      </>
    
  );
};

export default AboutDiscription;
