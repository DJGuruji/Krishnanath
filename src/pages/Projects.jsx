import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

const Project = ({ name, description, status, githubLink, productionLink }) => (
  <div
    className="glass-card p-8 group hover:border-red-500/50 transition-all duration-500 mb-8 relative overflow-hidden h-full flex flex-col justify-between"
    data-aos="fade-up"
  >
    {/* Subtle glow on hover */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-[80px] group-hover:bg-red-600/20 transition-all duration-700"></div>

    <div>
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-black text-white font-outfit leading-tight tracking-tighter">
          {name.toUpperCase()}
        </h2>
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
          status === "completed" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"
        }`}>
          {status}
        </span>
      </div>

      <p className="text-zinc-400 leading-relaxed font-light text-lg mb-8">
        {description}
      </p>
    </div>

    <div className="flex items-center gap-6 mt-auto">
      <a
        href={githubLink === "nil" ? "#" : githubLink}
        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all ${
          githubLink === "nil" ? "text-zinc-600 cursor-not-allowed" : "text-white hover:text-red-500"
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-xl" />
        <span>Source</span>
      </a>

      {productionLink !== "nil" && (
        <a
          href={productionLink}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="text-lg" />
          <span>Launch</span>
        </a>
      )}
    </div>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  productionLink: PropTypes.string,
};

const ProjectsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { showBackground, bgOpacity } = useBackground();

  const projects = [
    {
      name: "AnyTimeRequest Mock Server",
      description: "Full-fledged API testing suite with WebSocket relay for local/production bridging, multiple tabs, and assertion support.",
      status: "completed",
      githubLink: "https://github.com/DJGuruji/meshcore",
      productionLink: "https://anytimerequest.com",
    },
    {
      name: "Simplita.ai",
      description: "AI-powered automation platform enhancing business decision-making with high-performance data processing.",
      status: "completed",
      githubLink: "nil",
      productionLink: "https://app.simplita.ai",
    },
    {
      name: "Find My Client",
      description: "AI-powered MERN application connecting freelance workers with clients, optimized via Cloudinary.",
      status: "completed",
      githubLink: "https://github.com/DJGuruji/fmcFrontend",
      productionLink: "https://fmc.deno.dev",
    },
    {
      name: "Virtual Hospital",
      description: "Innovative platform for medical appointments with AI diagnostics and Nationwide access.",
      status: "completed",
      githubLink: "https://github.com/DJGuruji/AI-Assisted-Virtual-Hospital",
      productionLink: "https://vmas.deno.dev",
    },
    {
      name: "Vyuha",
      description: "College event ticket booking system for alumni and students using the MERN stack.",
      status: "completed",
      githubLink: "https://github.com/DJGuruji/vyuha",
      productionLink: "https://vidyavyuha.in",
    },
    {
      name: "Ecommerce ( G-cart )",
      description: "Modern retail platform with secure payments and responsive design powered by React.",
      status: "completed",
      githubLink: "https://github.com/DJGuruji/Ecommerce",
      productionLink: "https://gcart.deno.dev",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 lg:px-12 relative overflow-hidden">
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8" data-aos="fade-down">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-red-500 uppercase tracking-widest text-sm font-bold">Portfolio</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              Featured <br /> <span className="text-gradient">Projects</span>
            </h1>
          </div>

          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="FILTER PROJECTS..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-red-500/50 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-zinc-600 uppercase tracking-widest text-xs font-bold">No matches found</p>
          </div>
        )}
      </div>

      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default ProjectsPage;
