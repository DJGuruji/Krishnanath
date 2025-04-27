import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from 'aos';
import { motion } from 'framer-motion';
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [mounted, setMounted] = useState(false);
  const { showBackground, bgOpacity } = useBackground();

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex justify-center items-center relative overflow-hidden">
      {/* 3D Background */}
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none"></div>
      
      <div className="text-center relative z-10 backdrop-blur-sm bg-black/10 p-12 rounded-xl border border-yellow-700/20 shadow-lg transform hover:scale-105 transition-all duration-500" data-aos="zoom-out">
        <motion.h2 
          className="text-8xl font-sans mb-8 text-yellow-300 font-bold"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          4<span className="inline-block animate-bounce">😎</span>4
        </motion.h2>

        <motion.h1 
          className="text-3xl text-center text-white mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Page Not Found
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/" className="px-6 py-3 bg-gradient-to-r from-yellow-700 to-yellow-600 text-white rounded-md inline-flex items-center transform transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/20 hover:-translate-y-1">
            Back to Home
          </Link>
        </motion.div>
      </div>
      
      {/* Background Toggle */}
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default NotFound;
