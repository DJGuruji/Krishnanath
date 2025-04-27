import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InternshipCard = ({ internship, index }) => (
  <div
    key={index}
    className="border border-yellow-200 p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300 group transform hover:-translate-y-1 relative overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-60 h-60 bg-yellow-400/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div className="mb-4 border-b border-yellow-700/30 pb-3 relative">
      <h3 className="text-2xl font-serif text-yellow-200 group-hover:text-yellow-300 transition-colors">
        {internship.title}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-500/0 group-hover:w-full transition-all duration-500 ease-out"></span>
      </h3>
      <h4 className="text-lg font-light text-yellow-100/80 mt-1">{internship.company}</h4>
    </div>
    
    <table className="table-auto w-full text-white mb-4">
      <tbody>
        <tr className="hover:bg-yellow-900/10 transition-colors duration-200">
          <td className="py-2 text-left text-yellow-300 font-medium w-1/4 relative group/item">
            Location
            <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400/30 group-hover/item:w-full transition-all duration-300"></span>
          </td>
          <td className="py-2 text-left text-gray-200 flex items-center">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {internship.location}
            </span>
            <span className="mx-2 text-yellow-600">•</span>
            <span className="text-gray-300/90">{internship.locationType}</span>
          </td>
        </tr>
        <tr className="hover:bg-yellow-900/10 transition-colors duration-200">
          <td className="py-2 text-left text-yellow-300 font-medium relative group/item">
            Duration
            <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400/30 group-hover/item:w-full transition-all duration-300"></span>
          </td>
          <td className="py-2 text-left text-gray-200 flex items-center">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-500/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {internship.startDate}
            </span>
            <span className="mx-2">—</span>
            <span className="text-gray-300/90">{internship.endDate}</span>
          </td>
        </tr>
      </tbody>
    </table>

    <div className="mt-4 pt-3 border-t border-yellow-700/30">
      <p className="text-gray-300 leading-relaxed tracking-wide text-justify italic backdrop-blur-sm bg-black/5 p-3 rounded-md">
        {internship.description}
      </p>
    </div>
  </div>
);

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
    <div className="flex flex-col justify-center items-center bg-black space-y-10 md:w-3/4 lg:w-3/4 xl:w-3/4 py-8 relative">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-yellow-500/2 backdrop-blur-3xl rounded-xl pointer-events-none"></div>
      
      <h2 className="text-2xl font-serif text-yellow-200 mb-6 pb-2 border-b border-yellow-700/30 self-start pl-4 relative">
        <span className="relative inline-block transform transition-transform duration-300 hover:translate-y-[-2px] cursor-default">
          Professional Experience
          <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-400/0"></span>
        </span>
      </h2>
      
      {internships.map((internship, index) => (
        <InternshipCard key={index} internship={internship} index={index} />
      ))}
    </div>
  );
};

export default Internship;
