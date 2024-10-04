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
      <div className="border-2 border-yellow-300 p-2">
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
        <p className="flex p-1 text-lg" data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-yellow-300 mr-1 text-lg">Skills:</h1>
          MERN stack, Django, MySQL, PSQL, JavaScript, AWS, GIT, GitHub
        </p>
      </div>
    </>
  );
};

export default AboutDiscription;
