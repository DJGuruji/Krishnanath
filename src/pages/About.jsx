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
    className="flex items-center bg-black font-bold px-1 md:px-3 py-2 rounded-md 
    hover:rounded-xl border-2 border-yellow-700/40 hover:border-yellow-500 
    transform hover:translate-y-[-3px] hover:shadow-lg hover:shadow-yellow-600/20 transition-all duration-300 relative overflow-hidden group"
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-yellow-600/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-md"></div>
    <Icon className="m-1 relative z-10" />
    <span className="relative z-10">{text}</span>
  </button>
);

const SectionHeader = ({ title }) => (
  <h1 
    className="text-xl text-yellow-300 text-center font-bold pt-8 relative inline-block mx-auto"
    data-aos="zoom-in"
  >
    <span className="relative">
      {title}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0"></span>
    </span>
  </h1>
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
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* 3D Background */}
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      {/* Fixed Navigation */}
      <div className="fixed top-12 left-0 w-full text-white flex justify-around py-4 z-40 backdrop-blur-sm bg-black/30">
        <NavButton 
          icon={RiVerifiedBadgeFill} 
          text="Experience" 
          onClick={() => scrollToSection(internshipRef)} 
        />
        <NavButton 
          icon={PiCertificateFill} 
          text="Certifications" 
          onClick={() => scrollToSection(certificationRef)} 
        />
        <NavButton 
          icon={IoSchool} 
          text="Education" 
          onClick={() => scrollToSection(degreeRef)} 
        />
      </div>

      {/* Experience Section */}
      <div ref={internshipRef} className="pt-32 relative">
        <div className="flex flex-col items-center">
          <SectionHeader title="Experience" />
          <div className="relative max-w-6xl mx-auto w-full pb-5 mt-8 flex flex-col justify-center items-center">
            <Internship />
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div ref={certificationRef} className="pt-20 relative">
        <div className="flex flex-col items-center">
          <SectionHeader title="Certifications" />
          <div className="relative max-w-6xl mx-auto w-full md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around">
            <div className="pb-5 mt-8 flex flex-col justify-center items-center w-full">
              <Certification />
            </div>
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div ref={degreeRef} className="pt-20 relative">
        <div className="flex flex-col items-center">
          <SectionHeader title="Education" />
          <div className="relative max-w-6xl mx-auto w-full md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around">
            <div className="pb-24 mt-8 flex flex-col justify-center items-center w-full">
              <AboutDiscription />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-5 left-5 z-40">
        <button 
          className="bg-yellow-800 hover:bg-yellow-700 text-yellow-200 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-yellow-600/20 hover:shadow-md"
          onClick={scrollToTop}
        >
          <BiSolidUpArrowCircle className="text-2xl" />
        </button>
      </div>

      {/* Background Toggle */}
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default About;
