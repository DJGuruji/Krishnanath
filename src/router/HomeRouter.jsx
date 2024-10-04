import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
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
    <>
      <nav className="bg-black h-16 border-b-2 border-slate-500 relative">
        <div className="flex justify-between w-screen items-center">
          <h1 className="text-yellow-300 text-2xl font-bold ml-3 font-slab">
            <Link to="/" onClick={handleItemClick}>
              Krishnanath.S
            </Link>
          </h1>
          <div className="w-1/2"></div>
          <div className="md:flex hidden">
            <ul className="flex text-lg">
              <li className="mt-2 p-2 text-white font-light hover:font-bold">
                <Link to="/" onClick={handleItemClick} className="flex">
                  <FaHome className="m-1" />
                  Home
                </Link>
              </li>
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <Link to="/about" onClick={handleItemClick} className="flex">
                  <FaFileAlt className="m-1" />
                  About
                </Link>
              </li>
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <Link to="/service" onClick={handleItemClick} className="flex">
                  <MdOutlineMiscellaneousServices className="m-1" />
                  Service
                </Link>
              </li>
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <Link to="/projects" onClick={handleItemClick} className="flex">
                  <FaDiagramProject className="m-1" />
                  Projects
                </Link>
              </li>
              <li className="p-2 mt-2 text-white font-light hover:font-bold">
                <Link to="/contact" onClick={handleItemClick} className="flex">
                  <IoMdContact className="m-1 text-xl" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button
              className="text-white mt-4 relative md:hidden mr-2"
              onClick={handleDropdown}
            >
              <div className="w-8 h-1 bg-white m-1 rounded-lg"></div>
              <div className="w-7 h-1 bg-white ml-2 rounded-lg"></div>
            </button>
            {dropdown && (
              <div
                className="absolute mt-5 rounded-md shadow-lg bg-black right-0 border-2 border-yellow-300 z-50"
                style={{ zIndex: 50 }} // Add high z-index
              >
                <ul className="flex flex-col text-lg mr-4">
                  <li className="mt-2 p-2 text-white font-light hover:font-bold text-center ">
                    <Link to="/" onClick={handleItemClick} className="flex">
                      <FaHome className="m-1" />
                      Home
                    </Link>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <Link to="/about" onClick={handleItemClick} className="flex">
                      <FaFileAlt className="m-1" />
                      About
                    </Link>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <Link to="/service" onClick={handleItemClick} className="flex">
                      <MdOutlineMiscellaneousServices className="m-1" />
                      Service
                    </Link>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <Link to="/projects" onClick={handleItemClick} className="flex">
                      <FaDiagramProject className="m-1" />
                      Projects
                    </Link>
                  </li>
                  <li className="p-2 mt-2 text-white font-light hover:font-bold text-center">
                    <Link to="/contact" onClick={handleItemClick} className="flex">
                      <IoMdContact className="m-1 text-xl" />
                      Contact
                    </Link>
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
        <Route path="/service" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default HomeRouter;
