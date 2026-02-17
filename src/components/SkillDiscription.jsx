import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillCategory = ({ skillSet, index }) => {
  return (
    <div 
      key={index} 
      className="glass-card p-6 group relative overflow-hidden transition-all duration-500 hover:border-red-500/30"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>
      
      <h3 className="text-sm font-black text-white font-outfit mb-6 flex items-center uppercase tracking-widest">
        <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
        {skillSet.category}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {skillSet.skills.split(', ').map((skill, i) => (
          <span 
            key={i} 
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white group-hover:border-red-500/50 transition-all duration-300"
          >
            {skill}
          </span>
        ))}
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
      category: "Backend Development",
      skills: "Node JS, Express JS, Django, Fast API, Java Spring Boot, Deno JS, Nest JS"
    },
    {
      category: "Frontend Architecture",
      skills: "HTML5, CSS, Tailwind CSS, React JS, Next JS, TypeScript, Zustand, Angular JS"
    },
    {
      category: "Database Systems",
      skills: "MongoDB, MySQL, PostgreSQL, Redis"
    },
    {
      category: "Cloud & DevOps",
      skills: "AWS, Docker, Azure, CI/CD, Kubernetes"
    },
    {
      category: "Programming",
      skills: "Python, JavaScript, Java, C++, PHP, Go"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-10" data-aos="fade-right">
        <h2 className="text-2xl font-black text-white font-outfit uppercase tracking-tighter">
          Technical <span className="text-red-600">Proficiencies</span>
        </h2>
        <div className="flex-1 h-[1px] bg-white/10"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((skillSet, index) => (
          <SkillCategory key={index} skillSet={skillSet} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillDiscription;
