import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Internship = () => {
  const internships = [
    {
      title: "Software Engineer",
      company: "Simplita.ai",
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
        "Developing a MERN stack e-commerce platform that allows businesses to purchase customizable admin panels, offering them tailored solutions to meet their specific needs. As part of the project, I am creating a modular and scalable admin panel using React with TypeScript, ensuring businesses can easily customize their panels. The user interface and experience are designed to be intuitive and responsive, leveraging Tailwind CSS to provide modern aesthetics and seamless interactions across all devices. On the backend, I am building a robust system with Node.js and Express, integrated with MongoDB to manage data efficiently and securely. To support dynamic customization, the admin panels allow businesses to adjust the features according to their requirements. Throughout the project, I focus on optimizing the platform's performance by conducting thorough testing, debugging, and optimizing database queries. Additionally, I collaborate with cross-functional teams in an Agile environment to ensure the project meets deadlines while maintaining high standards of quality.",
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
    <div className="flex flex-col justify-center items-center bg-black space-y-10 md:w-3/4 lg:w-3/4 xl:w-3/4 py-8">
      {internships.map((internship, index) => (
        <div
          key={index}
          className="border border-yellow-200 p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300 w-full"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="mb-4 border-b border-yellow-700/30 pb-2">
            <h3 className="text-2xl font-serif text-yellow-200 mb-1">{internship.title}</h3>
            <h4 className="text-lg font-light text-yellow-100/80">{internship.company}</h4>
          </div>
          
          <table className="table-auto w-full text-white mb-4">
            <tbody>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium w-1/4">Location</td>
                <td className="py-2 text-left text-gray-200">{internship.location} • {internship.locationType}</td>
              </tr>
              <tr className="hover:bg-yellow-900/10 transition-colors">
                <td className="py-2 text-left text-yellow-300 font-medium">Duration</td>
                <td className="py-2 text-left text-gray-200">{internship.startDate} — {internship.endDate}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 pt-3 border-t border-yellow-700/30">
            <p className="text-gray-300 leading-relaxed tracking-wide text-justify italic">
              {internship.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Internship;
