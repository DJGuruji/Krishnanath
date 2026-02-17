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
    className="relative group p-2 transition-all duration-300 transform hover:-translate-y-1"
    data-aos="zoom-in"
  >
    <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/20 rounded-xl transition-all duration-300 blur-lg scale-150"></div>
    <div className="relative z-10 text-zinc-500 group-hover:text-red-500 transition-colors duration-300">
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
    <footer className="bg-black border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-black font-outfit text-white tracking-tighter uppercase">
              KRISHNA<span className="text-red-600">NATH</span>
            </h3>
            <p className="text-zinc-600 max-w-xs font-medium uppercase tracking-widest text-[10px] leading-relaxed">
              Crafting state-of-the-art digital experiences with precision and speed.
            </p>
          </div>

          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>

          <div className="space-y-6 flex flex-col items-start md:items-end" data-aos="fade-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Social Connections</h4>
            <div className="flex gap-4">
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
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-700">
            &copy; {currentYear} KRISHNANATH.S • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
