import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCategory = ({ skillSet, index }) => {
  return (
    <div 
      key={index} 
      className="hover:bg-yellow-900/10 transition-all p-4 rounded-md group relative overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Decorative dot */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-500/5 -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <h3 className="text-lg font-serif text-yellow-300 mb-2 flex items-center relative">
        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
        <span className="relative">
          {skillSet.category}
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-500/0 group-hover:w-full transition-all duration-500 ease-out"></span>
        </span>
      </h3>
      
      <div className="pl-4 border-l-2 border-yellow-700/40 transform group-hover:translate-x-1 transition-transform duration-300">
        <p className="text-gray-200 leading-relaxed">
          {skillSet.skills.split(', ').map((skill, i) => (
            <span 
              key={i} 
              className="inline-block mr-2 mb-2 px-2 py-1 bg-yellow-900/10 rounded border border-yellow-700/20 hover:border-yellow-700/40 hover:translate-y-[-2px] transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const SkillDiscription = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const skillCategories = [
    {
      category: "Backend",
      skills: "Node JS, Express JS, Django, Fast API, Java Spring Boot, Deno JS, Nest JS"
    },
    {
      category: "Frontend",
      skills: "HTML5, CSS, Bootstrap, Tailwind CSS, React JS, Angular JS, Zustand, TypeScript, Next JS"
    },
    {
      category: "Database",
      skills: "MongoDB, MySQL, PostgreSQL"
    },
    {
      category: "Cloud Services",
      skills: "Amazon Web Services (AWS), Docker, Azure"
    },
    {
      category: "Programming Languages",
      skills: "C, Java, Python, JavaScript, PHP"
    },
    {
      category: "Version Control",
      skills: "Git, GitHub"
    },
    {
      category: "Soft Skills",
      skills: "Teamwork, Problem Solving, Bias For Action, Excel, Word, PowerPoint"
    }
  ];

  return (
    <div 
      className="border border-yellow-200 bg-gradient-to-b from-gray-900 to-black mt-4 p-6 rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300 relative overflow-hidden" 
      data-aos="fade-up"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>
      
      <h2 className="text-2xl font-serif text-yellow-200 mb-6 pb-2 border-b border-yellow-700/30 relative">
        <span className="relative inline-block transform transition-transform duration-300 hover:translate-y-[-2px] cursor-default">
          Technical Proficiencies
          <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-400/0"></span>
        </span>
      </h2>
      
      <div className="grid gap-5 relative">
        {skillCategories.map((skillSet, index) => (
          <SkillCategory key={index} skillSet={skillSet} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillDiscription;
