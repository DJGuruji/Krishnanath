import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, HashRouter, useNavigate } from "react-router-dom"; 
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Projects from "../pages/Projects";
import NotFound from "../pages/PNF";
import Contact from "../pages/Contact";
import { FaHome } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

const HomeRouter = () => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleItemClick = () => {
    setDropdown(false);
  };

  return (
    <HashRouter>
      <>
        <nav className="bg-black h-16 border-b-2 border-slate-500 relative">
          <div className="flex justify-between w-screen items-center">
            <h1 className="text-yellow-300 text-2xl font-bold ml-3 font-slab">
              <NavLink to="/" onClick={handleItemClick} className="text-yellow-300">
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
                    className={({ isActive }) => (isActive ? 'flex underline font-bold ' : 'flex')}
                  >
                    <FaHome className="m-1" />
                    Home
                  </NavLink>
                </li>
                <li className="p-2 mt-2 text-white font-light hover:font-bold">
                  <NavLink 
                    to="/about" 
                    onClick={handleItemClick} 
                    className={({ isActive }) => (isActive ? 'flex underline font-bold' : 'flex')}
                  >
                    <FaFileAlt className="m-1" />
                    About
                  </NavLink>
                </li>
                <li className="p-2 mt-2 text-white font-light hover:font-bold">
                  <NavLink 
                    to="/service" 
                    onClick={handleItemClick} 
                    className={({ isActive }) => (isActive ? 'flex underline font-bold' : 'flex')}
                  >
                    <MdOutlineMiscellaneousServices className="m-1" />
                    Service
                  </NavLink>
                </li>
                <li className="p-2 mt-2 text-white font-light hover:font-bold">
                  <NavLink 
                    to="/projects" 
                    onClick={handleItemClick} 
                    className={({ isActive }) => (isActive ? 'flex underline font-bold' : 'flex')}
                  >
                    <FaDiagramProject className="m-1" />
                    Projects
                  </NavLink>
                </li>
                <li className="p-2 mt-2 text-white font-light hover:font-bold">
                  <NavLink 
                    to="/contact" 
                    onClick={handleItemClick} 
                    className={({ isActive }) => (isActive ? 'flex underline font-bold' : 'flex')}
                  >
                    <IoMdContact className="m-1 text-xl" />
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </HashRouter>
  );
};

export default HomeRouter;
