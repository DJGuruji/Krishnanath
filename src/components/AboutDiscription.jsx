import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutDiscription = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <div 
      className="border border-yellow-200 p-8 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300" 
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-serif text-yellow-200 mb-6 border-b border-yellow-700/30 pb-2">Education</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-serif text-yellow-100 mb-3">Higher Education</h3>
        <div className="pl-2 border-l-2 border-yellow-700/40">
          <table className="table-auto w-full text-white">
            <tbody>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium w-1/4">Degree</td>
                <td className="py-2 text-left text-gray-200">B.Tech in Computer Science and Engineering (2021-2025)</td>
              </tr>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium">College</td>
                <td className="py-2 text-left text-gray-200">Vidya Academy Of Science And Technology Technical Campus, Kilimanoor</td>
              </tr>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium">CGPA</td>
                <td className="py-2 text-left text-gray-200">8.3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-serif text-yellow-100 mb-3">High School</h3>
        <div className="pl-2 border-l-2 border-yellow-700/40">
          <table className="table-auto w-full text-white">
            <tbody>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium w-1/4">Stream</td>
                <td className="py-2 text-left text-gray-200">Biology Science (2018-2020)</td>
              </tr>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium">School</td>
                <td className="py-2 text-left text-gray-200">Govt. Model Higher Secondary School, Varkala</td>
              </tr>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium">Percentage</td>
                <td className="py-2 text-left text-gray-200">94.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutDiscription;
