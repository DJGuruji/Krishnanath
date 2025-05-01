import React, { useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialIcon = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
    data-aos="zoom-in"
  >
    <span className="sr-only">{label}</span>
    <div className="absolute inset-0 bg-yellow-400/20 rounded-full scale-0 group-hover:scale-150 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    <div className="relative z-10 text-zinc-400 group-hover:text-yellow-400 transition-colors duration-300 transform group-hover:translate-y-[-3px] p-2">
      <Icon className="h-6 w-6" />
    </div>
  </a>
);

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/DJGuruji", icon: FaGithub, label: "GitHub" },
    {
      href: "https://www.instagram.com/__krishnanath/profilecard/?igsh=eXF3NTM4YTdzMGo=",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/krishnanath-s-24055a227",
      icon: FaLinkedinIn,
      label: "LinkedIn",
    },
    { href: "mailto:nath93266@gmail.com", icon: SiGmail, label: "Email" },
    {
      href: "https://buymeacoffee.com/krishnanaths",
      icon: PiCoffeeFill,
      label: "Buy Me A Coffee",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black border-t border-zinc-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div
            className="hidden md:block text-center md:text-left"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold text-yellow-400 font-playfair drop-shadow-lg">
              <span className="relative">
                Krishnanath.S
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500/0 via-yellow-500 to-yellow-500/0"></span>
              </span>
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Passionate about creating beautiful digital experiences
            </p>
          </div>

          <div className="flex space-x-6 items-center" data-aos="fade-left">
            {socialLinks.map((link, index) => (
              <SocialIcon
                key={index}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm">
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} Krishnanath.S. All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
