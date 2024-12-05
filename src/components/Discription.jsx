import React,{useState,useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ImagLink = ({ src, alt, href, isHovered, handleHover }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
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
      <div className="pt-20 pl-10 bg-black text-white px-5 " >
        <h2 className="font-sans text-xl font-semibold text-yellow-300" data-aos="fade-up">
          Hello!
        </h2>
        <h1 className="text-2xl font-sans " data-aos="fade-up">I Am Krishnanath S</h1>
        <p className="pt-3 text-lg text-justify " data-aos="fade-up">
        I'm a Full Stack web developer with extensive experience in building and developing websites using the MERN stack, Django, Java Spring Boot, Next.js, Nest.js, and FastAPI, as well as Android app development with Flutter and React Native
        </p>
      
      </div>
  
    
    </>
  );
};

export default Discription;