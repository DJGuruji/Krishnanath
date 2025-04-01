import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Internship = () => {
  const internships = [
    {
      title: "Software Engineer",
      company: "Simpita.ai",
      location: "Villupuram, Tamil Nadu",
      locationType: "Hybrid",
      startDate: "April 2025",
      endDate: "Current Position",
      description:
        " Developing AI-driven solutions to enhance business operations and decision-making. My work involves building machine learning models, AI-powered analytics platforms, and automation tools. I have contributed to projects focused on intelligent data processing, predictive analytics, and workflow optimization, helping businesses leverage AI for efficiency and growth.",
    },
    {
      title: "MERN Stack Developer Intern",
      company: "ZedSoftTech",
      location: "Tirur, Malappuram",
      locationType: "Work from Home",
      startDate: "December 2024",
      endDate: "April 2025",
     
      description:
        "developing a MERN stack e-commerce platform that allows businesses to purchase customizable admin panels, offering them tailored solutions to meet their specific needs. As part of the project, I am creating a modular and scalable admin panel using React with TypeScript, ensuring businesses can easily customize their panels. The user interface and experience are designed to be intuitive and responsive, leveraging Tailwind CSS to provide modern aesthetics and seamless interactions across all devices. On the backend, I am building a robust system with Node.js and Express, integrated with MongoDB to manage data efficiently and securely. To support dynamic customization, the admin panels allow businesses to adjust the features according to their requirements. Throughout the project, I focus on optimizing the platform’s performance by conducting thorough testing, debugging, and optimizing database queries. Additionally, I collaborate with cross-functional teams in an Agile environment to ensure the project meets deadlines while maintaining high standards of quality.",
    },
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
                   Type
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
                <td className="text-start text-yellow-300 font-semibold">
                  Description
                </td>
                <td className=" text-justify">: {internship.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Internship;
