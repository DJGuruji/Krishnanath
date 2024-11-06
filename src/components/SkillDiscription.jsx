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

  return (
    <div className="border-2 border-yellow-300 bg-black mt-4 p-4 rounded-lg">
      <table className="table-auto w-full text-white">
        {/* <thead>
          <tr>
            <th className="text-left text-yellow-300 p-2">Category</th>
            <th className="text-left text-yellow-300 p-2">Skills</th>
          </tr>
        </thead> */}
        <tbody>
          <tr data-aos="fade-up">
            <td className="text-yellow-300 border-b border-slate-700 p-2">Backend</td>
            <td className="border-b border-slate-700 p-2">
              Node JS, Express JS, Django, Fast API, Java, Deno JS, Nest JS
            </td>
          </tr>
          <tr data-aos="fade-up" data-aos-delay="100">
            <td className="text-yellow-300 border-b border-slate-700 p-2">Frontend</td>
            <td className="border-b border-slate-700 p-2">
              HTML5, CSS, Bootstrap, Tailwind CSS, React JS, Angular JS, Zustand, TypeScript, Next JS
            </td>
          </tr>
          <tr data-aos="fade-up" data-aos-delay="200">
            <td className="text-yellow-300 border-b border-slate-700 p-2">Database</td>
            <td className="border-b border-slate-700 p-2">
              MongoDB, MySQL, PostgreSQL
            </td>
          </tr>
          <tr data-aos="fade-up" data-aos-delay="300">
            <td className="text-yellow-300 border-b border-slate-700 p-2">Cloud Services</td>
            <td className="border-b border-slate-700 p-2">
              Amazon Web Services (AWS), Deno Deploy, Vercel, Python Anywhere, Azure
            </td>
          </tr>
          <tr data-aos="fade-up" data-aos-delay="400">
            <td className="text-yellow-300 border-b border-slate-700 p-2">Programming Languages</td>
            <td className="border-b border-slate-700 p-2">
              C, Java, Python, JavaScript, PHP
            </td>
          </tr>
          <tr data-aos="fade-up" data-aos-delay="500">
            <td className="text-yellow-300 border-b border-slate-700 p-2">Version Control</td>
            <td className="border-b border-slate-700 p-2">
              Git, GitHub
            </td>
          </tr>
          <tr data-aos="fade-up" data-aos-delay="600">
            <td className="text-yellow-300 border-b border-slate-700 p-2">Soft Skills</td>
            <td className="border-b border-slate-700 p-2">
              Teamwork, Problem Solving, Bias For Action, Excel, Word, PowerPoint
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillDiscription;
