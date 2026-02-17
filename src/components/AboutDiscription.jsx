import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationDetail = ({ title, value }) => (
  <tr className="group transition-all duration-300">
    <td className="py-4 text-left text-zinc-500 font-bold w-1/3 uppercase tracking-[0.2em] text-[10px]">
      {title}
    </td>
    <td className="py-4 text-left text-white font-medium text-sm group-hover:text-red-500 transition-colors">
      {value}
    </td>
  </tr>
);

const AboutDiscription = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const higherEducation = [
    { title: "Degree", value: "B.Tech in Computer Science and Engineering (2021-2025)" },
    { title: "Institution", value: "Vidya Academy Of Science And Technology Technical Campus, Kilimanoor" },
    { title: "Performance (CGPA)", value: "8.3" }
  ];

  const highSchool = [
    { title: "Specialization", value: "Biology Science (2018-2020)" },
    { title: "Institution", value: "Govt. Model Higher Secondary School, Varkala" },
    { title: "Performance (%)", value: "94.5" }
  ];

  return (
    <div className="space-y-12">
      <div 
        className="glass-card p-10 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500" 
        data-aos="fade-up"
      >
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>
        
        <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tighter mb-8 flex items-center">
          <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
          Higher Education
        </h3>
        
        <div className="w-full">
          <table className="w-full">
            <tbody className="divide-y divide-white/5">
              {higherEducation.map((item, index) => (
                <EducationDetail 
                  key={index} 
                  title={item.title} 
                  value={item.value} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div 
        className="glass-card p-10 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500" 
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>
        
        <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tighter mb-8 flex items-center">
          <span className="w-8 h-[2px] bg-red-600 mr-4"></span>
          High School Diploma
        </h3>
        
        <div className="w-full">
          <table className="w-full">
            <tbody className="divide-y divide-white/5">
              {highSchool.map((item, index) => (
                <EducationDetail 
                  key={index} 
                  title={item.title} 
                  value={item.value} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutDiscription;
