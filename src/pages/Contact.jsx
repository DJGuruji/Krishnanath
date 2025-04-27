import React, { useState, useEffect } from "react";
import git from "../img/social/git.png";
import insta from "../img/social/insta.png";
import link from "../img/social/linkedin.png";
import mail from "../img/social/mail.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";

const SocialLink = ({ src, alt, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-3 transform transition-all duration-300 hover:scale-110"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      data-aos="zoom-in"
      data-aos-delay="50"
    >
      <div className="bg-zinc-900 p-4 rounded-full border border-zinc-700 shadow-lg hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 relative group">
        <div className="absolute inset-0 bg-yellow-500/10 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
        <img
          src={src}
          alt={alt}
          className="w-8 h-8 md:w-10 md:h-10 relative z-10"
        />
      </div>
      <p className="text-center text-xs mt-2 text-zinc-400 font-light group-hover:text-yellow-300 transition-colors">{alt}</p>
    </motion.a>
  );
};

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const { showBackground, bgOpacity } = useBackground();
  
  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-zinc-900 py-16 px-4 relative overflow-hidden">
      {/* 3D Background */}
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-500/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 relative inline-block">
            <span className="relative">
              Contact Me
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0"></span>
            </span>
          </h2>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto backdrop-blur-sm bg-black/5 p-4 rounded-lg">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="flex flex-col items-center justify-center" data-aos="fade-up">
          <motion.div 
            className="card p-8 w-full max-w-xl backdrop-blur-sm bg-black/10 rounded-xl border border-yellow-700/20 shadow-lg hover:shadow-yellow-700/10 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center">
              Let's Connect
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <SocialLink
                src={git}
                alt="GitHub"
                href="https://github.com/DJGuruji"
              />
              <SocialLink
                src={insta}
                alt="Instagram"
                href="https://www.instagram.com/__krishnanath/profilecard/?igsh=eXF3NTM4YTdzMGo="
              />
              <SocialLink
                src={link}
                alt="LinkedIn"
                href="https://www.linkedin.com/in/krishnanath-s-24055a227"
              />
              <SocialLink
                src={mail}
                alt="Email"
                href="mailto:nath93266@gmail.com"
              />
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-zinc-300 mb-6">Or send me a direct message</p>
              <motion.a 
                href="mailto:nath93266@gmail.com" 
                className="px-6 py-3 bg-gradient-to-r from-yellow-700 to-yellow-600 text-white rounded-md inline-flex items-center transform transition-all duration-300 hover:shadow-lg hover:shadow-yellow-600/20 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Toggle */}
      {mounted && <BackgroundToggle />}
    </section>
  );
};

export default Contact;
