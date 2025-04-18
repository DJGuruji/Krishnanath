import React, { useEffect } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 mt-auto w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-yellow-400 font-playfair">Krishnanath.S</h3>
            <p className="mt-2 text-sm text-zinc-400">Passionate about creating beautiful digital experiences</p>
          </div>
          
          <div className="flex space-x-4 md:space-x-6 items-center">
            <a 
              href="https://github.com/DJGuruji" 
              target="_blank" 
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
              data-aos="zoom-in"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/__krishnanath/profilecard/?igsh=eXF3NTM4YTdzMGo=" 
              target="_blank" 
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
              data-aos="zoom-in"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/krishnanath-s-24055a227" 
              target="_blank" 
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
              data-aos="zoom-in"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a 
              href="mailto:nath93266@gmail.com" 
              target="_blank" 
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
              data-aos="zoom-in"
            >
              <span className="sr-only">Email</span>
              <SiGmail className="h-5 w-5" />
            </a>
            <a 
              href="https://buymeacoffee.com/krishnanaths" 
              target="_blank" 
              className="text-zinc-400 hover:text-yellow-400 transition-colors duration-300"
              data-aos="zoom-in"
            >
              <span className="sr-only">Buy Me A Coffee</span>
              <PiCoffeeFill className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">&copy; {currentYear} Krishnanath.S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer