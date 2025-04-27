import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CertificationCard = ({ cert, index }) => {
  return (
    <div
      key={index}
      className="border border-yellow-200 p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 group transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex flex-col space-y-4">
        <div className="border-b border-yellow-700/30 pb-3 relative">
          <h3 className="text-xl font-serif text-yellow-200 group-hover:text-yellow-300 transition-colors">
            {cert.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-500/0 group-hover:w-full transition-all duration-500 ease-out"></span>
          </h3>
          <p className="text-yellow-100/70 text-sm mt-1 italic">
            <span className="inline-flex items-center">
              <span className="w-1.5 h-1.5 bg-yellow-500/70 rounded-full inline-block mr-1.5"></span>
              Issued by {cert.organization}
            </span>
            <span className="mx-2 text-yellow-600">•</span>
            <span className="text-yellow-100/60">{cert.issueDate}</span>
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-white text-sm sm:text-base">
            <tbody>
              <tr className="hover:bg-yellow-900/10 transition-colors duration-200">
                <td className="py-2 text-left text-yellow-300 font-medium w-1/4 relative group/item">
                  Credential ID
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400/30 group-hover/item:w-full transition-all duration-300"></span>
                </td>
                <td className="py-2 text-left text-gray-200 font-mono text-sm tracking-wider">
                  {cert.credentialId}
                </td>
              </tr>
              <tr className="hover:bg-yellow-900/10 transition-colors duration-200">
                <td className="py-2 text-left text-yellow-300 font-medium align-top relative group/item">
                  Verify
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-400/30 group-hover/item:w-full transition-all duration-300"></span>
                </td>
                <td className="py-2 text-left text-gray-200">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-200 hover:text-yellow-400 transition-colors underline decoration-dotted underline-offset-4 inline-flex items-center group/link"
                    >
                      <span>View Certificate</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3.5 w-3.5 ml-1 transform group-hover/link:translate-x-0.5 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Not Available</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Certification = () => {
  const certifications = [
    {
      name: "Full Stack Web Development",
      organization: "Internshala",
      issueDate: "October 2022",
      credentialId: "F81F181A-1860-86A6-D7AE-C88D7695736D",
      credentialUrl: "https://trainings.internshala.com/s/v/2254458/ff5a6bd0",
    },
    {
      name: "Web Development",
      organization: "Udemy",
      issueDate: "October 2022",
      credentialId: "UC-aaa3abc8-e3d7-4c4e-b616-bc2fbc8fd913",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-aaa3abc8-e3d7-4c4e-b616-bc2fbc8fd913",
    },
    {
      name: "Modern Javascript For React JS",
      organization: "Udemy",
      issueDate: "Nov 2024",
      credentialId: "UC-7859a414-1414-4e4a-a049-0e55fbe7dd83",
      credentialUrl:
        "https://www.udemy.com/certificate/UC-7859a414-1414-4e4a-a049-0e55fbe7dd83/",
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
    <div className="space-y-8 px-4 sm:px-8">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} cert={cert} index={index} />
      ))}
    </div>
  );
};

export default Certification;
