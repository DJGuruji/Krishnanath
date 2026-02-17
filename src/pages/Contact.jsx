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
      className="flex flex-col items-center gap-4 group"
      whileHover={{ y: -10 }}
      data-aos="zoom-in"
    >
      <div className="glass-card p-6 rounded-3xl relative overflow-hidden transition-all duration-500 group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_rgba(255,49,49,0.2)] bg-white/5">
        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors"></div>
        <img
          src={src}
          alt={alt}
          className="w-10 h-10 md:w-12 md:h-12 relative z-10 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
        />
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-red-500 transition-colors">
        {alt}
      </span>
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
    <section className="min-h-screen bg-black py-24 px-6 relative overflow-hidden">
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4 mb-24 text-center" data-aos="fade-down">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-500 uppercase tracking-widest text-sm font-bold">Contact</span>
            <span className="w-12 h-[2px] bg-red-600"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
            Let's <br /> <span className="text-gradient">Talk</span>
          </h1>
          <p className="mt-8 text-zinc-500 max-w-xl mx-auto font-medium uppercase tracking-[0.2em] text-xs">
            I'm currently available for freelance projects and full-time opportunities. Reach out to start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
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

        <div className="mt-32 text-center" data-aos="fade-up">
          <p className="text-zinc-700 uppercase tracking-[0.4em] text-[10px] font-black mb-8">Direct Channel</p>
          <a
            href="mailto:nath93266@gmail.com"
            className="px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-red-600 hover:text-white transition-all duration-500 shadow-2xl inline-block"
          >
            Start a Direct Message
          </a>
        </div>
      </div>
      
      {mounted && <BackgroundToggle />}
    </section>
  );
};

export default Contact;
