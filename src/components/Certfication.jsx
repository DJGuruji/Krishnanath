import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <div
          key={index}
          className="border border-yellow-200 p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="flex flex-col space-y-4">
            <div className="border-b border-yellow-700/30 pb-3">
              <h3 className="text-xl font-serif text-yellow-200">{cert.name}</h3>
              <p className="text-yellow-100/70 text-sm mt-1 italic">Issued by {cert.organization} • {cert.issueDate}</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-white text-sm sm:text-base">
                <tbody>
                  <tr className="hover:bg-yellow-900/10 transition-colors">
                    <td className="py-2 text-left text-yellow-300 font-medium w-1/4">Credential ID</td>
                    <td className="py-2 text-left text-gray-200">{cert.credentialId}</td>
                  </tr>
                  <tr className="hover:bg-yellow-900/10 transition-colors">
                    <td className="py-2 text-left text-yellow-300 font-medium align-top">Verify</td>
                    <td className="py-2 text-left text-gray-200">
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-200 hover:text-yellow-400 transition-colors underline decoration-dotted underline-offset-4 break-all"
                        >
                          View Certificate
                        </a>
                      ) : (
                        "Not Available"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certification;
