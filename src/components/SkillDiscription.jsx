import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      skills: "Amazon Web Services (AWS), Deno Deploy, Vercel, Python Anywhere, Azure"
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
      className="border border-yellow-200 bg-gradient-to-b from-gray-900 to-black mt-4 p-6 rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300" 
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-serif text-yellow-200 mb-6 pb-2 border-b border-yellow-700/30">Technical Proficiencies</h2>
      
      <div className="grid gap-5">
        {skillCategories.map((skillSet, index) => (
          <div 
            key={index} 
            className="hover:bg-yellow-900/10 transition-all p-3 rounded-md"
          >
            <h3 className="text-lg font-serif text-yellow-300 mb-2">{skillSet.category}</h3>
            <div className="pl-2 border-l-2 border-yellow-700/40">
              <p className="text-gray-200">{skillSet.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillDiscription;
