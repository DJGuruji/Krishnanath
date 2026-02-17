import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const CertificationCard = ({ cert, index }) => {
  return (
    <div
      key={index}
      className="glass-card p-8 group relative overflow-hidden transition-all duration-500 hover:border-red-500/30"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <FaCertificate className="text-red-600 text-sm" />
            <h3 className="text-xl font-black text-white font-outfit uppercase tracking-tighter transition-colors group-hover:text-red-500">
              {cert.name}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <span className="text-zinc-400">Issued by {cert.organization}</span>
            <span className="w-1 h-1 bg-zinc-800 rounded-full hidden md:block"></span>
            <span>{cert.issueDate}</span>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3 min-w-fit">
          <div className="flex flex-col items-start md:items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">Credential ID</span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider bg-white/5 px-2 py-1 rounded">
              {cert.credentialId}
            </span>
          </div>
          
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-500 hover:text-red-400 transition-all group/link"
            >
              <span>Verify License</span>
              <FaExternalLinkAlt className="text-xs transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
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
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      {certifications.map((cert, index) => (
        <CertificationCard key={index} cert={cert} index={index} />
      ))}
    </div>
  );
};

export default Certification;
