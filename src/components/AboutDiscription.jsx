import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationDetail = ({ title, value, delay = 0 }) => (
  <tr className="group hover:bg-yellow-900/10 transition-colors">
    <td className="py-2 text-left text-yellow-300 font-medium w-1/4 relative">
      {title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500/30 group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </td>
    <td className="py-2 text-left text-gray-200 transform group-hover:translate-x-1 transition-transform duration-300">{value}</td>
  </tr>
);

const AboutDiscription = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  const higherEducation = [
    { title: "Degree", value: "B.Tech in Computer Science and Engineering (2021-2025)" },
    { title: "College", value: "Vidya Academy Of Science And Technology Technical Campus, Kilimanoor" },
    { title: "CGPA", value: "8.3" }
  ];

  const highSchool = [
    { title: "Stream", value: "Biology Science (2018-2020)" },
    { title: "School", value: "Govt. Model Higher Secondary School, Varkala" },
    { title: "Percentage", value: "94.5" }
  ];

  return (
    <div 
      className="border border-yellow-200 p-8 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300 relative overflow-hidden" 
      data-aos="fade-up"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <h2 className="text-2xl font-serif text-yellow-200 mb-6 border-b border-yellow-700/30 pb-2 relative">
        <span className="inline-block transform transition-transform duration-300 hover:translate-y-[-2px] cursor-default">Education</span>
        <span className="absolute w-1/4 h-0.5 bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 bottom-0 left-0"></span>
      </h2>
      
      <div className="mb-8 relative">
        <h3 className="text-xl font-serif text-yellow-100 mb-3 flex items-center">
          <span className="w-2 h-2 inline-block bg-yellow-400 rounded-full mr-2"></span>
          Higher Education
        </h3>
        <div className="pl-2 border-l-2 border-yellow-700/40 relative">
          {/* Pulsing dot */}
          <div className="absolute -left-[5.5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full">
            <span className="absolute w-4 h-4 bg-yellow-400/30 rounded-full -left-1 -top-1 animate-ping"></span>
          </div>
          
          <table className="table-auto w-full text-white">
            <tbody>
              {higherEducation.map((item, index) => (
                <EducationDetail 
                  key={index} 
                  title={item.title} 
                  value={item.value} 
                  delay={index * 100}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="relative">
        <h3 className="text-xl font-serif text-yellow-100 mb-3 flex items-center">
          <span className="w-2 h-2 inline-block bg-yellow-400 rounded-full mr-2"></span>
          High School
        </h3>
        <div className="pl-2 border-l-2 border-yellow-700/40 relative">
          {/* Pulsing dot */}
          <div className="absolute -left-[5.5px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full">
            <span className="absolute w-4 h-4 bg-yellow-400/30 rounded-full -left-1 -top-1 animate-ping"></span>
          </div>
          
          <table className="table-auto w-full text-white">
            <tbody>
              {highSchool.map((item, index) => (
                <EducationDetail 
                  key={index} 
                  title={item.title} 
                  value={item.value} 
                  delay={(index + 3) * 100}
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
