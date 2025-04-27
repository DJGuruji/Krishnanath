import React, { useEffect } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project, index }) => {
  const { title, description, image, technologies, link, github } = project;
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.05)'
      }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-xl">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-800/80 text-white backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-3">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <Link
            to={link}
            className="flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

const RecentProjects = () => {
  const projectsData = [
    {
      title: "Portfolio Website",
      description:
        "Developed a personal portfolio website using React, Tailwind CSS, and Framer Motion to create a modern, responsive UI with smooth animations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMeyQCdMrXoVzk2Y9h-PNgR-r5gSKU9CjpeBRW0&s",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "/projects/portfolio",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Built a full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing features.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMeyQCdMrXoVzk2Y9h-PNgR-r5gSKU9CjpeBRW0&s",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Redux"],
      link: "/projects/ecommerce",
      github: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Task Management App",
      description:
        "Developed a task management application allowing users to create, organize, and track tasks with priority levels and due dates.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMeyQCdMrXoVzk2Y9h-PNgR-r5gSKU9CjpeBRW0&s",
      technologies: ["React", "Firebase", "Material UI"],
      link: "/projects/taskmanager",
      github: "https://github.com/yourusername/taskmanager",
    },
    {
      title: "Weather Dashboard",
      description:
        "Created a weather dashboard that fetches real-time weather data from an API and displays forecasts with interactive visualizations.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMeyQCdMrXoVzk2Y9h-PNgR-r5gSKU9CjpeBRW0&s",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeatherMap API"],
      link: "/projects/weather",
      github: "https://github.com/yourusername/weather-dashboard",
    },
    {
      title: "Blog Platform",
      description:
        "Developed a blog platform with features for creating, editing, and publishing articles, as well as user comments and social sharing.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMeyQCdMrXoVzk2Y9h-PNgR-r5gSKU9CjpeBRW0&s",
      technologies: ["Next.js", "GraphQL", "Tailwind CSS"],
      link: "/projects/blog",
      github: "https://github.com/yourusername/blog-platform",
    },
    {
      title: "Fitness Tracker",
      description:
        "Built a fitness tracking application that allows users to log workouts, track progress, and visualize performance metrics over time.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfMeyQCdMrXoVzk2Y9h-PNgR-r5gSKU9CjpeBRW0&s",
      technologies: ["React Native", "Firebase", "D3.js"],
      link: "/projects/fitness",
      github: "https://github.com/yourusername/fitness-tracker",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Recent Projects
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my latest work and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="flex justify-center items-center mt-10">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default RecentProjects; 