import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import NotFound from "../pages/PNF";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import { FaHome, FaUserCircle, FaLaptopCode, FaProjectDiagram, FaFileAlt, FaEnvelope } from "react-icons/fa";

const HomeRouter = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (dropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [dropdown]);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUserCircle /> },
    { name: "Skills", path: "/skills", icon: <FaLaptopCode /> },
    { name: "Services", path: "/service", icon: <FaLaptopCode /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[10001]">
          <NavLink to="/" className="group">
            <h1 className="text-2xl font-black tracking-tighter font-outfit text-white">
              KRISHNA<span className="text-red-600 group-hover:text-red-500 transition-colors">NATH</span>&nbsp;S
            </h1>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300
                  ${isActive ? "text-red-500" : "text-zinc-400 hover:text-white"}
                `}
              >
                {item.name}
              </NavLink>
            ))}
           
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setDropdown(!dropdown)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-white transition-all ${dropdown ? "rotate-45 translate-y-[9px]" : ""}`}></span>
              <span className={`w-full h-[2px] bg-white transition-all ${dropdown ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-[2px] bg-white transition-all ${dropdown ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-3xl transition-all duration-500 z-[10000] ${
          dropdown ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setDropdown(false)}
                className={({ isActive }) => `
                  text-2xl font-black uppercase tracking-widest transition-all
                  ${isActive ? "text-red-600 scale-110" : "text-zinc-600"}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default HomeRouter;
