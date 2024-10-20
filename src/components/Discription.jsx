import React,{useState,useEffect} from "react";
import git from "../img/social/git.png";
import insta from "../img/social/insta.png";
import link from "../img/social/linkedin.png";
import mail from "../img/social/mail.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ImagLink = ({ src, alt, href, isHovered, handleHover }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

    return (
      <span className="border-2 border-white rounded-full ml-4">
        <a href={href}>
          <img
            src={src}
            alt={alt}
            target="_blank"
            className={`rounded-full ${
              isHovered ? "w-11 h-11" : "w-10 h-10"
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          />
        </a>
      </span>
    );
  };



const Discription = () => {

    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
    
  return (
    <>
      <div className="pt-20 pl-10 bg-black text-white px-5 md:w-1/2 lg:w-1/2 xl:w-1/2 " >
        <h2 className="font-sans text-xl font-semibold text-yellow-300" data-aos="fade-up">
          Hello!
        </h2>
        <h1 className="text-2xl font-sans " data-aos="fade-up">I Am Krishnanath S</h1>
        <p className="pt-3 text-lg text-justify " data-aos="fade-up">
          I'm a Full Stack web developer with extensive experience for over 4 years. My
          expertise is to create and develop websites in MERN Stack, Django, and
          Fast API.
        </p>
      </div>
  
      <span className='flex justify-center items-center mt-10'data-aos="fade-up" >
      <ImagLink src={git} alt="GitHub" href="https://github.com"  isHovered={isHovered} handleHover={handleHover} />
      <ImagLink src={insta} alt="Instagram" href="https://instagram.com" isHovered={isHovered} handleHover={handleHover} />
      <ImagLink src={link} alt="LinkedIn" href="https://linkedin.com" isHovered={isHovered} handleHover={handleHover} />
      <ImagLink src={mail} alt="Email" href="mailto:example@example.com" isHovered={isHovered} handleHover={handleHover} />
      </span>
    </>
  );
};

export default Discription;