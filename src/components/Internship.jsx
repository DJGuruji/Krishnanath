import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Internship = () => {
  const internships = [
    {
      title: "Software Developer Intern",
      company: "INTERNSHIP STUDIO",
      location: "Remote",
      locationType: "Work from Home",
      startDate: "October 2024",
      endDate: "November 2024",
      description:
        "Developed a full-featured e-commerce application using the MERN stack. Responsibilities included user authentication, product listings, order management, payment gateway integration, and enhancing the user interface using React and Tailwind CSS.",
    },
  
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center bg-black space-y-6 md:w-3/4 lg:w-3/4 xl:w-3/4 ">
      <h1 className="text-center text-yelow-300 ">Internships</h1>
      {internships.map((internship, index) => (
        <div
          key={index}
          className="border-2 border-yellow-300 p-4 bg-black rounded-md  "
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <table className="table-auto w-full text-white">
            <tbody>
              <tr className="p-1">
                <td className="text-left text-yellow-300  font-semibold">Title</td>
                <td className="text-left ">: {internship.title}</td>
              </tr>
              <tr className="p-1">
                <td className=" text-left text-yellow-300  font-semibold">Company</td>
                <td className=" text-left ">: {internship.company}</td>
              </tr>
              <tr className="p-1">
                <td className=" text-left text-yellow-300 font-semibold">Location</td>
                <td className=" text-left ">: {internship.location}</td>
              </tr>
              <tr className="p-1">
                <td className="text-left text-yellow-300  font-semibold">
                  Location Type
                </td>
                <td className="text-left ">: {internship.locationType}</td>
              </tr>
              <tr className="p-1">
                <td className="text-left text-yellow-300  font-semibold">Start Date</td>
                <td className=" text-left">: {internship.startDate}</td>
              </tr>
              <tr className="p-1">
                <td className="text-left text-yellow-300  font-semibold">End Date</td>
                <td className="text-left ">: {internship.endDate}</td>
              </tr>
              <tr className="p-1">
                <td className="text-left text-yellow-300 font-semibold">
                  Description
                </td>
                <td className="text-left text-justify">: {internship.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Internship;
