import React, { useRef } from "react";
import AboutDiscription from "../components/AboutDiscription";
import Certification from "../components/Certfication";
import Internship from "../components/Internship";
import "aos/dist/aos.css";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const About = () => {
  const degreeRef = useRef(null);
  const internshipRef = useRef(null);
  const certificationRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-full bg-black">
      {/* Fixed Navigation */}
      <div className="fixed top-12 left-0 w-full text-white bg-opacity-1 shadow-md flex  md:justify-around lg:justify-around xl:justify-around py-4 z-50">
        <button
          className=" flex ml-1 bg-black  font-bold hover:bg-slate-800 px-3 py-2 rounded-md hover:rounded-xl border-2 border-slate-500 "
          onClick={() => scrollToSection(degreeRef)}
        ><IoSchool className="m-1"></IoSchool>
          Degree
        </button>
        <button
         className="flex md:ml-7 bg-black   lg:ml-7 xl:ml-7  font-bold hover:bg-slate-800 px-3 py-2 rounded-md hover:rounded-xl border-2 border-slate-500 "
          onClick={() => scrollToSection(internshipRef)}
        ><RiVerifiedBadgeFill className="m-1"></RiVerifiedBadgeFill>
          Internships
        </button>
        <button
          className="flex font-bold bg-black   hover:bg-slate-800 px-3 py-2 rounded-md hover:rounded-xl border-2 border-slate-500 "
          onClick={() => scrollToSection(certificationRef)}
        > <PiCertificateFill className="m-1"></PiCertificateFill>
          Certifications
        </button>
      </div>

      {/* Degree Section */}
      <div ref={degreeRef} className="pt-20">
        <h1 className="text-xl text-yellow-300 text-center font-bold pt-8" data-aos="zoom-in">
          Degree
        </h1>
        <div className="md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around">
          <div className="pb-5 mt-8 flex flex-col justify-center items-center">
            <AboutDiscription />
          </div>
        </div>
      </div>

      {/* Internship Section */}
      <div ref={internshipRef} className="pt-20">
        <h1 className="text-xl text-yellow-300 text-center font-bold pt-8" data-aos="zoom-in">
          Internship
        </h1>
        <div className="pb-5 mt-8 flex flex-col justify-center items-center">
          <Internship />
        </div>
      </div>

      {/* Certifications Section */}
      <div ref={certificationRef} className="pt-20">
        <h1 className="text-xl text-yellow-300 text-center font-bold pt-8" data-aos="zoom-in">
          Certifications
        </h1>
        <div className="md:flex lg:flex xl:flex md:justify-around lg:justify-around xl:justify-around">
          <div className="pb-5 mt-8 flex flex-col justify-center items-center">
            <Certification />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <span className="flex justify-center p-3">
        <BiSolidUpArrowCircle className="text-white font-bold text-2xl"  onClick={scrollToTop}></BiSolidUpArrowCircle>
       
      </span>
    </div>
  );
};

export default About;
