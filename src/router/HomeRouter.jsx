import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom"; // Import NavLink
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import NotFound from "../pages/PNF";
import Resume from "../pages/Resume";
import { FaHome } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { BiSolidUserBadge } from "react-icons/bi";
import Contact from "../pages/Contact";
const HomeRouter = () => {
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleItemClick = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className={`sticky z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black'} h-16 border-b border-zinc-800 relative w-full`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-yellow-400 text-2xl font-bold font-slab flex items-center">
              <NavLink
                to="/"
                onClick={handleItemClick}
                className="hover:text-yellow-300 transition-colors duration-300"
              >
                Krishnanath.S
              </NavLink>
            </h1>

            <div className="md:flex hidden">
              <ul className="flex space-x-1 text-lg">
                <li>
                  <NavLink
                    to="/"
                    onClick={handleItemClick}
                    className={({ isActive }) =>
                      isActive ? "nav-link active flex items-center px-3 py-2" : "nav-link flex items-center px-3 py-2"
                    }
                  >
                    <FaHome className="mr-1" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={handleItemClick}
                    className={({ isActive }) =>
                      isActive ? "nav-link active flex items-center px-3 py-2" : "nav-link flex items-center px-3 py-2"
                    }
                  >
                    <FaFileAlt className="mr-1" />
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skills"
                    onClick={handleItemClick}
                    className={({ isActive }) =>
                      isActive ? "nav-link active flex items-center px-3 py-2" : "nav-link flex items-center px-3 py-2"
                    }
                  >
                    <GiSkills className="mr-1" />
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    onClick={handleItemClick}
                    className={({ isActive }) =>
                      isActive ? "nav-link active flex items-center px-3 py-2" : "nav-link flex items-center px-3 py-2"
                    }
                  >
                    <MdOutlineMiscellaneousServices className="mr-1" />
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    onClick={handleItemClick}
                    className={({ isActive }) =>
                      isActive ? "nav-link active flex items-center px-3 py-2" : "nav-link flex items-center px-3 py-2"
                    }
                  >
                    <FaDiagramProject className="mr-1" />
                    Projects
                  </NavLink>
                </li>
       
                <li>
                  <NavLink
                    to="/resume"
                    onClick={handleItemClick}
                    className={({ isActive }) =>
                      isActive ? "nav-link active flex items-center px-3 py-2" : "nav-link flex items-center px-3 py-2"
                    }
                  >
                    <BiSolidUserBadge className="mr-1" />
                    Resume
                  </NavLink>
                </li>
            
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="flex flex-col items-center justify-center p-2 rounded-md text-yellow-400 focus:outline-none"
                onClick={handleDropdown}
              >
                <span className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${dropdown ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${dropdown ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${dropdown ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {dropdown && (
          <div
            className="absolute w-full md:hidden bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 shadow-xl transition-all duration-300 slide-up"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  isActive ? "nav-link active flex items-center px-3 py-3" : "nav-link flex items-center px-3 py-3"
                }
              >
                <FaHome className="mr-2" />
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  isActive ? "nav-link active flex items-center px-3 py-3" : "nav-link flex items-center px-3 py-3"
                }
              >
                <FaFileAlt className="mr-2" />
                About
              </NavLink>
              <NavLink
                to="/skills"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  isActive ? "nav-link active flex items-center px-3 py-3" : "nav-link flex items-center px-3 py-3"
                }
              >
                <GiSkills className="mr-2" />
                Skills
              </NavLink>
              <NavLink
                to="/service"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  isActive ? "nav-link active flex items-center px-3 py-3" : "nav-link flex items-center px-3 py-3"
                }
              >
                <MdOutlineMiscellaneousServices className="mr-2" />
                Services
              </NavLink>
              <NavLink
                to="/projects"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  isActive ? "nav-link active flex items-center px-3 py-3" : "nav-link flex items-center px-3 py-3"
                }
              >
                <FaDiagramProject className="mr-2" />
                Projects
              </NavLink>
              <NavLink
                to="/resume"
                onClick={handleItemClick}
                className={({ isActive }) =>
                  isActive ? "nav-link active flex items-center px-3 py-3" : "nav-link flex items-center px-3 py-3"
                }
              >
                <BiSolidUserBadge className="mr-2" />
                Resume
              </NavLink>
            </div>
          </div>
        )}
      </nav>

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
    </>
  );
};

export default HomeRouter;
