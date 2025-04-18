import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ImagLink = ({ src, alt, href, isHovered, handleHover }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <span className="overflow-hidden rounded-full border border-zinc-700 ml-4 shadow-md">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          className={`rounded-full transition-all duration-300 ${
            isHovered ? "w-12 h-12 scale-110" : "w-10 h-10"
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
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="font-sans text-xl font-medium text-yellow-400">
            Hello!
          </h2>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair">
            I am <span className="text-yellow-400">Krishnanath S</span>
          </h1>
          
          <div className="flex flex-wrap text-lg text-zinc-400 font-light">
            <span className="mr-2">Software Engineer</span>
            <span className="mr-2 text-yellow-400">|</span>
            <span className="mr-2">Simplita.ai</span>
            <span className="mr-2 text-yellow-400">|</span>
            <span>Villupuram, Tamil Nadu</span>
          </div>
          
          <p className="text-xl text-zinc-300 leading-relaxed mt-8 max-w-3xl">
            I'm a <span className="text-yellow-400 font-medium">Full Stack Web Developer</span> with extensive experience in building and developing websites using the MERN stack, Django, FastAPI and Next.js.
          </p>
          
          <div className="mt-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => navigate("/projects")}
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-transparent text-yellow-400 font-semibold rounded-sm border border-yellow-500 hover:bg-yellow-500/10 transition-colors duration-300"
              onClick={() => navigate("/contact")}
              >
              Contact Me

            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discription;