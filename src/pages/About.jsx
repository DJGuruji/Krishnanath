import React, { useRef, useEffect } from "react";
import AboutDiscription from "../components/AboutDiscription";
import Certification from "../components/Certfication";
import Internship from "../components/Internship";
import "aos/dist/aos.css";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";
import AOS from "aos";

const NavButton = ({ icon: Icon, text, onClick }) => (
  <button 
    data-aos="zoom-in"
    className="flex items-center glass-card font-black px-6 py-3 rounded-full 
    text-[10px] uppercase tracking-[0.2em] text-zinc-400
    hover:text-white hover:border-red-500/50 
    hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,49,49,0.2)] transition-all duration-300 group"
    onClick={onClick}
  >
    <Icon className="mr-3 scale-125 group-hover:text-red-500 transition-colors" />
    <span>{text}</span>
  </button>
);

const SectionHeader = ({ title }) => (
  <div className="flex flex-col items-center gap-4 mb-16" data-aos="fade-down">
    <div className="flex items-center gap-4">
      <span className="w-12 h-[2px] bg-red-600"></span>
      <span className="text-red-500 uppercase tracking-widest text-xs font-bold">Details</span>
    </div>
    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
      {title}
    </h1>
  </div>
);

const About = () => {
  const degreeRef = useRef(null);
  const internshipRef = useRef(null);
  const certificationRef = useRef(null);
  const [mounted, setMounted] = React.useState(false);
  const { showBackground, bgOpacity } = useBackground();

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const scrollToSection = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-black text-white py-24 relative overflow-hidden">
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      {/* Floating Navigation */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-50 px-6 py-4 glass-card rounded-full border border-white/5 backdrop-blur-2xl shadow-2xl">
        <NavButton icon={RiVerifiedBadgeFill} text="EXP" onClick={() => scrollToSection(internshipRef)} />
        <NavButton icon={PiCertificateFill} text="CERT" onClick={() => scrollToSection(certificationRef)} />
        <NavButton icon={IoSchool} text="EDU" onClick={() => scrollToSection(degreeRef)} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Experience Section */}
        <div ref={internshipRef} className="py-20 relative">
          <SectionHeader title="Professional Experience" />
          <div className="relative w-full">
            <Internship />
          </div>
        </div>

        {/* Certifications Section */}
        <div ref={certificationRef} className="py-20 relative">
          <SectionHeader title="Certifications" />
          <div className="relative w-full">
            <Certification />
          </div>
        </div>
        
        {/* Education Section */}
        <div ref={degreeRef} className="py-20 mb-20 relative">
          <SectionHeader title="Education" />
          <div className="relative w-full">
            <AboutDiscription />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-12 left-12 z-40 hidden md:block">
        <button 
          className="glass-card hover:bg-white/10 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          onClick={scrollToTop}
        >
          <BiSolidUpArrowCircle className="text-3xl" />
        </button>
      </div>

      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default About;
