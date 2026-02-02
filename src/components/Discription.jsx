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
    <span className="overflow-hidden rounded-full border border-zinc-700 ml-4 shadow-md transform hover:translate-y-[-5px] transition-all hover:shadow-yellow-500/20 hover:shadow-lg">
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
    <section className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-yellow-500/5 backdrop-blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-yellow-500/5 backdrop-blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-yellow-400/10 backdrop-blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-6" data-aos="fade-up">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-xl font-medium text-yellow-400 text-shadow"
          >
            Hello!
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white font-playfair drop-shadow-xl"
          >
            I am <span className="text-yellow-400 relative">
              Krishnanath S
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0 transform translate-y-1"></span>
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap text-lg text-zinc-400 font-light"
          >
            <span className="mr-2">Lead Software Engineer</span>
            <span className="mr-2 text-yellow-400">|</span>
            <span className="mr-2">IIC Lakshya </span>
            <span className="mr-2 text-yellow-400">|</span>
            <span>Kochi, Kerala</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-zinc-300 leading-relaxed mt-8 max-w-3xl backdrop-blur-sm bg-black/5 p-4 rounded-md"
          >
            I'm a{" "}
            <span className="text-yellow-400 font-medium relative">
              Full Stack  Developer
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500/50"></span>
            </span>{" "}
            with extensive experience in building and developing websites using
            the MERN stack, Django, FastAPI and Next.js.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 mb-8 hidden md:flex"
          >
            <button
              className="btn-primary transform hover:translate-y-[-3px] hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
              onClick={() => navigate("/projects")}
            >
              View My Work
            </button>

            <button
              className="ml-4 px-6 py-2 bg-transparent text-yellow-400 font-semibold rounded-sm border border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg hover:shadow-yellow-500/20"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Discription;
