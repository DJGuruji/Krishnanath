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
    <div className="space-y-6 px-4 sm:px-8">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="border-2 border-yellow-300 p-4 bg-black rounded-md"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-white text-sm sm:text-base">
              <tbody>
                <tr>
                  <td className="text-yellow-300 font-semibold">Name</td>
                  <td>: {cert.name}</td>
                </tr>
                <tr>
                  <td className="text-yellow-300 font-semibold">
                    Issuing Organization
                  </td>
                  <td>: {cert.organization}</td>
                </tr>
                <tr>
                  <td className="text-yellow-300 font-semibold">Issue Date</td>
                  <td>: {cert.issueDate}</td>
                </tr>
                <tr>
                  <td className="text-yellow-300 font-semibold">
                    Credential ID
                  </td>
                  <td>: {cert.credentialId}</td>
                </tr>
                <tr>
                  <td className="text-yellow-300 font-semibold">
                    Credential URL
                  </td>
                  <td>
                    :{" "}
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline break-all"
                      >
                        {cert.credentialUrl}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certification;
