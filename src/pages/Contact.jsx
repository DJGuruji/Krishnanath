import React, { useState, useEffect } from "react";
import git from "../img/social/git.png";
import insta from "../img/social/insta.png";
import link from "../img/social/linkedin.png";
import mail from "../img/social/mail.png";
import Contactimg from "../components/Contactimg";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

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
      <div className="bg-zinc-900 p-4 rounded-full border border-zinc-700 shadow-lg hover:shadow-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300">
        <img
          src={src}
          alt={alt}
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
      <p className="text-center text-xs mt-2 text-zinc-400 font-light">{alt}</p>
    </motion.a>
  );
};

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-zinc-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-white inline-flex flex-col">
            Contact Me
            <span className="h-1 w-24 bg-yellow-400 mt-2 mx-auto"></span>
          </h2>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="flex flex-col items-center justify-center" data-aos="fade-up">
        

          <motion.div 
            className="card p-8 w-full max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center">
              Let's Connect
            </h3>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
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
              <a 
                href="mailto:nath93266@gmail.com" 
                className="btn-primary inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
