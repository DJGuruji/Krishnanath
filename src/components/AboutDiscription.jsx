import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutDiscription = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true, 
    });
  }, []);

  return (
    <>
      <div className=" border-2 border-yellow-300 p-2 bg-black">
        <p className="flex p-1 text-lg" data-aos="fade-up">
          <h1 className="text-yellow-300 mr-1 text-lg">Degree:</h1>
          Btech Computer Science And Engineering (2021-2025)
        </p>
        <p className="flex p-1 text-lg" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-yellow-300 mr-1 text-lg">College:</h1>
          Vidya Academy Of Science And Technology Technical Campus, Kilimanoor
        </p>
        <p className="flex p-1 text-lg" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-yellow-300 mr-1 text-lg">Language:</h1>
          Malayalam, English
        </p>
      
      </div>
      <div className="border-2 border-yellow-300  bg-black mt-4  p-2 rounded-lg">
        <p className="flex p-1 text-lg border-b-2 border-slate-700 p-2" data-aos="fade-up">
          <h1 className="text-yellow-300 mr-1 text-lg">Backend:</h1>
          Node JS, Express JS, Django, Fast API, Java, Deno JS, Nest JS
        </p>
        <p className="flex p-1 text-lg border-b-2 border-slate-700 p-2" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-yellow-300 mr-1 text-lg">Frontend:</h1>
          HTML5, CSS, Bootstrap, Tailwind CSS, React JS, Angular JS, Zustand, Typescript, Next JS
        </p>
        <p className="flex p-1 text-lg border-b-2 border-slate-700 p-2" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-yellow-300 mr-1 text-lg">Database:</h1>
          MongoDB, MySQL, PostgreSQL
        </p>
        <p className="flex p-1 text-lg border-b-2 border-slate-700 p-2" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-yellow-300 mr-1 text-lg">Cloud Services:</h1>
          Amazone Web Services(AWS), Deno Deploy, Vercel, Python Anywhere, Azure
        </p>
        <p className="flex p-1 text-lg border-b-2 border-slate-700 p-2" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-yellow-300 mr-1 text-lg">Programming Languages:</h1>
          C, Java, Python, Javascript, PHP
        </p>
        <p className="flex p-1 text-lg border-b-2 border-slate-700 p-2" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-yellow-300 mr-1 text-lg">Version Control:</h1>
          Git ,Github
        </p>
        <p className="flex p-1 text-lg border-b-2 border-slate-700 p-2" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-yellow-300 mr-1 text-lg">Soft Skills:</h1>
          Teamwork, Problem Solving, Bias For Action, Excel, Word, Power point
        </p>
      </div>
    </>
  );
};

export default AboutDiscription;
