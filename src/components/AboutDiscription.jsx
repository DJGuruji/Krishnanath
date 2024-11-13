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
    <>
    <div className="border-2 border-yellow-300 p-4 bg-black rounded-md" data-aos="fade-up">
  <table className="table-auto w-full text-white">
    <tbody>
      <tr className="p-1" data-aos="fade-up">
        <td className="text-yellow-300 text-lg font-semibold">Degree</td>
        <td className="text-lg">: B.Tech in Computer Science and Engineering (2021-2025)</td>
      </tr>
      <tr className="p-1" data-aos="fade-up" data-aos-delay="100">
        <td className="text-yellow-300 text-lg font-semibold">College</td>
        <td className="text-lg">: Vidya Academy Of Science And Technology Technical Campus, Kilimanoor</td>
      </tr>
      <tr className="p-1" data-aos="fade-up" data-aos-delay="200">
        <td className="text-yellow-300 text-lg font-semibold mr-1">CGPA</td>
        <td className="text-lg">: 8.3</td>
      </tr>
      <tr className="p-1" data-aos="fade-up" data-aos-delay="300">
        <td className="text-yellow-300 text-lg font-semibold ">Languages</td>
        <td className="text-lg ">: Malayalam, English</td>
      </tr>
    </tbody>
  </table>
</div>

     
    </>
  );
};

export default AboutDiscription;
