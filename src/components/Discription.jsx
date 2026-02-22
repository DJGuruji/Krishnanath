import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Discription = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-12 lg:py-0">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-8" data-aos="fade-up">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-500 uppercase tracking-[0.3em] text-sm font-bold">
              Lead Software Engineer
            </span>
          </motion.div>

          <div className="space-y-4">
          

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter"
            >
              KRISHNA <span className="text-red-600">NATH</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-500 font-medium uppercase tracking-widest text-xs lg:text-sm"
          >
            <span>Indian Institute of Commerce, Lakshya</span>
            <span className="text-red-600">•</span>
            <span>Lead Full Stack Developer</span>
            <span className="text-red-600">•</span>
            <span>Kochi, Kerala</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl font-light"
          >
            Crafting high-performance web experiences with the{" "}
            <span className="text-white font-semibold">MERN Stack, Django, and Next.js.</span>{" "}
            Passionate about building modern, scalable, and user-centric applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              className="btn-modern"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>

            <button
              className="btn-outline"
              onClick={() => navigate("/contact")}
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Discription;
