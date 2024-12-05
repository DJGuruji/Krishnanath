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

const HomeRouter = () => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (window.location.pathname !== "/") {
  //     navigate("/");
  //   }
  // }, []);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleItemClick = () => {
    setDropdown(false);
  };

  return (
    <>
      <nav className="bg-black h-16 border-b-2 border-slate-500 relative w-full">
        <div className="flex justify-between w-screen items-center">
          <h1 className="text-yellow-300 text-2xl font-bold ml-3 font-slab mt-4 md:mt-2 lg:mt-2 xl:mt-2">
            <NavLink
              to="/"
              onClick={handleItemClick}
              className="text-yellow-300"
            >
              Krishnanath.S
            </NavLink>
          </h1>

          <div className="w-1/2"></div>

          <div className="md:flex hidden">
            <ul className="flex text-lg">
              <li className="mt-2 p-2 text-white font-light hover:font-bold">
                <NavLink
                  to="/"
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    isActive ? "flex underline font-bold " : "flex"
                  }
                >
                  <FaHome className="m-1" />
                  Home
                </NavLink>
              </li>
              <li className="mt-2 p-2 text-white font-light hover:font-bold">
                <NavLink
                  to="/about"
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    isActive ? "flex underline font-bold" : "flex"
                  }
                >
                  <FaFileAlt className="m-1" />
                  About
                </NavLink>
              </li>
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <NavLink
                  to="/skills"
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    isActive ? "flex underline font-bold" : "flex"
                  }
                >
                  <GiSkills className="m-1" />
                  Skills
                </NavLink>
              </li>
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <NavLink
                  to="/service"
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    isActive ? "flex underline font-bold" : "flex"
                  }
                >
                  <MdOutlineMiscellaneousServices className="m-1" />
                  Services
                </NavLink>
              </li>
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <NavLink
                  to="/projects"
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    isActive ? "flex underline font-bold" : "flex"
                  }
                >
                  <FaDiagramProject className="m-1" />
                  Projects
                </NavLink>
              </li>
       
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <NavLink
                  to="/resume"
                  onClick={handleItemClick}
                  className={({ isActive }) =>
                    isActive ? "flex underline font-bold" : "flex"
                  }
                >
                  <BiSolidUserBadge className="m-1 text-xl" />
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <button
              className="text-white mt-3 relative md:hidden mr-2"
              onClick={handleDropdown}
            >
               <div className="w-8 h-1 bg-white m-1 rounded-lg"></div>
               <div className="w-7 h-1 bg-white ml-2 rounded-lg"></div>
             
            </button>
            {dropdown && (
              <div
                className="absolute mt-5 rounded-md shadow-lg bg-black right-0 border-2 border-yellow-300 z-50"
                style={{ zIndex: 70 }}
              >
                <ul className="flex flex-col text-lg mr-4">
                  <li className="mt-2 p-2 text-white font-light hover:font-bold text-center">
                    <NavLink
                      to="/"
                      onClick={handleItemClick}
                      className={({ isActive }) =>
                        isActive ? "flex underline font-bold" : "flex"
                      }
                    >
                      <FaHome className="m-1" />
                      Home
                    </NavLink>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <NavLink
                      to="/about"
                      onClick={handleItemClick}
                      className={({ isActive }) =>
                        isActive ? "flex underline font-bold" : "flex"
                      }
                    >
                      <FaFileAlt className="m-1" />
                      About
                    </NavLink>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <NavLink
                      to="/Skills"
                      onClick={handleItemClick}
                      className={({ isActive }) =>
                        isActive ? "flex underline font-bold" : "flex"
                      }
                    >
                      <GiSkills className="m-1" />
                      Skills
                    </NavLink>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <NavLink
                      to="/service"
                      onClick={handleItemClick}
                      className={({ isActive }) =>
                        isActive ? "flex underline font-bold" : "flex"
                      }
                    >
                      <MdOutlineMiscellaneousServices className="m-1" />
                      Services
                    </NavLink>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <NavLink
                      to="/projects"
                      onClick={handleItemClick}
                      className={({ isActive }) =>
                        isActive ? "flex underline font-bold" : "flex"
                      }
                    >
                      <FaDiagramProject className="m-1" />
                      Projects
                    </NavLink>
                  </li>
            
                  <li className="p-2 mt-2 mr-10 text-white font-light hover:font-bold text-center">
                    <NavLink
                      to="/resume"
                      onClick={handleItemClick}
                      className={({ isActive }) =>
                        isActive ? "flex underline font-bold" : "flex"
                      }
                    >
                      <BiSolidUserBadge className="m-1 text-xl" />
                      Resume
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default HomeRouter;
