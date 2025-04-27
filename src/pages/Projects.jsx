import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";

const Project = ({ name, description, status, githubLink, productionLink }) => (
  <div 
    className="border border-yellow-200 p-6 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300 mb-8" 
    data-aos="fade-up"
  >
    <div className="mb-4 border-b border-yellow-700/30 pb-3">
      <h2 className="text-2xl font-serif text-yellow-200">{name}</h2>
      <p className={`text-sm italic mt-1 ${status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>
        Status: {status.charAt(0).toUpperCase() + status.slice(1)}
      </p>
    </div>
    
    <p className="text-gray-300 leading-relaxed mb-6 text-justify">{description}</p>
    
    <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-3 border-t border-yellow-700/30 gap-4">
      <a 
        href={githubLink} 
        className="px-4 py-2 border border-yellow-700 text-yellow-200 rounded hover:bg-yellow-900/20 transition-colors flex items-center gap-2"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
        View Code
      </a>
      
      {productionLink !== 'nil' ? (
        <a 
          href={productionLink} 
          className="px-4 py-2 bg-yellow-800/30 border border-yellow-700 text-yellow-200 rounded hover:bg-yellow-800/50 transition-colors"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      ) : (
        <span className="px-4 py-2 bg-gray-800/30 border border-gray-700 text-gray-400 rounded cursor-not-allowed">
          Demo Unavailable
        </span>
      )}
    </div>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  productionLink: PropTypes.string,
};

Project.defaultProps = {
  productionLink: 'nil',
};

const ProjectsPage = () => {
  const [mounted, setMounted] = useState(false);
  const { showBackground, bgOpacity } = useBackground();
  
  const projects = [
    {
      name: 'Find My Client',
      description: 'Developed an AI-powered MERN stack application that connects skilled workers with clients, facilitating 100+ successful hires in just two months. The platform enables professionals to showcase their expertise by posting images and content related to their work, with media uploads optimized via Cloudinary, reducing load times by 40%. Users can connect with other professionals, follow profiles, and expand their network, fostering a dynamic professional community.',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/fmcFrontend',
      productionLink: 'https://fmc.deno.dev'
    },
    {
      name: 'AI Assisted Virtual Hospital',
      description: 'The AI-Assisted Virtual Hospital is an innovative platform that allows users to book appointments with doctors from any department across India. It features an AI assistant to answer health-related queries, helping users make informed decisions. The platform also enables users to track their appointments and allows doctors to manage and share health-related media, such as posts and videos, with patients. This comprehensive system provides convenient, nationwide access to healthcare services and personalized assistance.',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/AI-Assisted-Virtual-Hospital',
      productionLink: 'https://vmas.deno.dev'
    },
    {
      name: 'Ecommerce ( G-cart )',
      description: 'Experience the epitome of online shopping with our state-of-the-art e-commerce platform, meticulously crafted with React JS Tailwind CSS. Seamlessly blending functionality and aesthetics, our website offers a seamless browsing and purchasing experience for customers. With secure payment options seamlessly integrated into the checkout process, shopping has never been more convenient. Powered by React JS our platform ensures swift and secure transactions, while Tailwind CSS enhances the visual appeal with modern and responsive design elements providing a delightful shopping experience. Dive into a world of convenience and sophistication with our e-commerce website, designed to elevate your online shopping journey.',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/Ecommerce',
      productionLink: 'https://gcart.deno.dev'
    },
    {
      name: 'Vyuha',
      description: '**Vyuha** is a MERN stack project designed for seamless ticket booking for college day events, specifically catering to alumni and current students. The application provides a user-friendly interface to browse events, book tickets, and manage reservations, streamlining the booking process for college gatherings.',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/vyuha',
      productionLink: 'https://vidyavyuha.in'
    },
    {
      name: 'Medical Appointment',
      description: 'Developed a Django-based appointment system managing 500+ monthly bookings, with automated email reminders improving booking retention by 20%.  Enhance database performance, reducing transaction errors by 50% and Ensured cross-device compatibility, leading to a 35% rise in mobile',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/MedicalAppointment',
      productionLink: 'nil'
    },
    {
      name: 'KEAM Mock Entrance Web',
      description: 'Developed a React-based mock entrance exam platform with subject-specific quizzes and a real-time timer, attracting over 200 participants in 2024. Optimized the platform for scalability, enabling it to handle concurrent users without lag',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/EntranceReact',
      productionLink: 'https://keammock.deno.dev'
    },
    {
      name: 'Complaint Management System',
      description: 'Designed and implemented a comprehensive complaint management system for college use, leveraging React.js and Tailwind CSS. Provided features for real-time tracking, complaint submission, and admin management, improving resolution efficiency by 30%',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/cmsfront',
      productionLink: 'https://cmsreact.deno.dev'
    },
    {
      name: 'Complaint Portal',
      description: 'Enter the realm of efficient complaint resolution with our online portal, meticulously constructed using HTML5, Tailwind CSS, and JavaScript. Designed to streamline the complaint handling process, our platform offers comprehensive features tailored for administrators, including settings management and branch addition functionalities. Administrators can effortlessly navigate through options such as adding branches, configuring settings, and more, ensuring smooth operation and customization of the portal. With intuitive design and seamless functionality, our platform empowers administrators to efficiently manage complaints and deliver prompt resolutions. Experience the pinnacle of complaint management efficiency with our online portal, built to simplify administrative tasks and enhance user satisfaction.',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/Complaint-portal',
      productionLink: 'https://djguruji.github.io/Complaint-portal/dist/'
    },
    {
      name: 'Bookmark',
      description: 'Developed a dynamic bookmarking application using React, allowing users to save and manage their favorite links effectively. The app displays each bookmark with the date it was added and provides options for users to update existing links. With an intuitive interface, users can easily organize and edit their bookmarks, creating a streamlined experience for tracking and accessing frequently visited sites',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/Bookmark',
      productionLink: 'https://gbookmark.deno.dev'
    },
    {
      name: 'Password Generator',
      description: 'Developed a customizable password generator using React, allowing users to create strong, secure passwords based on selected criteria. The application enables users to tailor their password strength by choosing to include uppercase and lowercase letters, numbers, and special characters. The intuitive interface empowers users to set their security preferences easily, enhancing password robustness for a variety of use cases',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/PasswordGenerator',
      productionLink: 'https://passwordgenerator.deno.dev'
    },
    {
      name: 'Calculator React',
      description: 'It is a simple calculator built using ReactJS',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/Calculator',
      productionLink: 'https://djguruji.github.io/Calculator'
    },
    {
      name: 'Calculato-JS',
      description: 'In my first project, I have ventured into the realm of web development by creating a simple yet functional calculator using HTML, CSS, and JavaScript. Through this endeavor, I have delved into the fundamentals of front-end design and programming, honing my skills in crafting user interfaces and implementing logic to perform basic arithmetic operations. From addition to division, my calculator offers a seamless experience for users to perform calculations effortlessly. This project marks the beginning of my journey in web development, providing me with valuable hands-on experience and paving the way for future endeavors in the field',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/Calculator-js',
      productionLink: 'https://djguruji.github.io/Calculator-js/'
    },
  ];

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-12 px-6 relative overflow-hidden">
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 
          className="text-4xl font-serif text-yellow-200 text-center mb-12 pb-4 border-b border-yellow-700/30" 
          data-aos="fade-down"
        >
          Portfolio Projects
        </h1>
        
        {projects.map((project, index) => (
          <Project 
            key={index} 
            {...project} 
            data-aos-delay={index * 50}
          />
        ))}
      </div>
      
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default ProjectsPage;
