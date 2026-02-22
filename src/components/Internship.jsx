import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const InternshipCard = ({ internship, index }) => (
  <div
    key={index}
    className="glass-card p-10 group relative overflow-hidden transition-all duration-500 hover:border-red-500/30 w-full"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-all duration-700"></div>
    
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <FaBriefcase className="text-red-600 text-sm hover:text-white" />
          <h3 className="text-2xl font-black text-white font-outfit hover:text-red-600 uppercase tracking-tighter">
            {internship.title}
          </h3>
        </div>
        <h4 className="text-zinc-400 font-bold uppercase tracking-widest text-xs">
          {internship.company}
        </h4>
      </div>
      
      <div className="flex flex-col items-end gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-600/50" />
          <span>{internship.location} • {internship.locationType}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-red-600/50" />
          <span>{internship.startDate} — {internship.endDate}</span>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="absolute left-0 top-0 w-1 h-full bg-red-600/20 rounded-full"></div>
      <p className="pl-6 text-zinc-400 leading-relaxed font-medium text-sm text-justify">
        {internship.description}
      </p>
    </div>
  </div>
);

const Internship = () => {
  const internships = [
        {
      title: "Lead Full Stack Developer",
      company: "Indian Institute of Commerce , Lakshya",
      location: "Kochi, Kerala",
      locationType: "On SIte",
      startDate: "January 2026",
      endDate: "Present",
      description:
        " Built in-house web applications to automate internal business workflows, replacing manual processes with scalable systems.Developed the Lakshya Aptitude Test & Scholarship Exam Platform with automated evaluation and reporting, integrated with LSQ CRM for lead and student data sync. Implemented ticketing and complaint management systems to streamline issue tracking, resolution workflows, and operational monitoring"
        },
    {
      title: "Full Stack Developer I",
      company: "Simplita.ai",
      location: "Villupuram, Tamil Nadu",
      locationType: "Hybrid",
      startDate: "April 2025",
      endDate: "January 2026",
      description:
        "Developing AI-driven solutions to enhance business operations and decision-making. My work involves building machine learning models, AI-powered analytics platforms, and automation tools. I have contributed to projects focused on intelligent data processing, predictive analytics, and workflow optimization, helping businesses leverage AI for efficiency and growth.",
    },
    {
      title: "MERN Stack Developer Intern",
      company: "ZedSoftTech",
      location: "Tirur, Malappuram",
      locationType: "Remote",
      startDate: "December 2024",
      endDate: "April 2025",
      description:
        "Developing a MERN stack e-commerce platform that allows businesses to purchase customizable admin panels. Creating a modular and scalable admin panel using React with TypeScript. Leveraging Tailwind CSS for modern aesthetics and seamless interactions. Building a robust backend with Node.js and Express, integrated with MongoDB. Focused on performance optimization, debugging, and cross-functional collaboration in an Agile environment.",
    },
    {
      title: "Software Developer Intern",
      company: "Internship Studio",
      location: "Remote",
      locationType: "Remote",
      startDate: "October 2024",
      endDate: "November 2024",
      description:
        "Developed a full-featured e-commerce application using the MERN stack. Responsibilities included user authentication, product listings, order management, payment gateway integration, and enhancing the user interface using React and Tailwind CSS.",
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
    <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto py-8 relative">
      {internships.map((internship, index) => (
        <InternshipCard key={index} internship={internship} index={index} />
      ))}
    </div>
  );
};

export default Internship;
