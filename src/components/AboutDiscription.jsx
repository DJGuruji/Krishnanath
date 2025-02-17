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
      <tr className="p-1" >
        <td className="text-yellow-300 font-semibold">Degree</td>
        <td className="">: B.Tech in Computer Science and Engineering (2021-2025)</td>
      </tr>
      <tr className="p-1" >
        <td className="text-yellow-300 font-semibold">College</td>
        <td className="">: Vidya Academy Of Science And Technology Technical Campus, Kilimanoor</td>
      </tr>
      <tr className="p-1" >
        <td className="text-yellow-300 font-semibold mr-1">CGPA</td>
        <td className="">: 8.3</td>
      </tr>
      <tr className="p-1" >
        <td className="text-yellow-300 font-semibold ">Languages</td>
        <td className=" ">: Malayalam, English</td>
      </tr>
    </tbody>
  </table>
</div>

     
    </>
  );
};

export default AboutDiscription;
