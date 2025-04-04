import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ name, description, status, githubLink, productionLink }) => (
  <div className="border p-4 rounded-lg mb-4" data-aos="fade-up">
   
    <h2 className="text-xl font-semibold text-center text-yellow-300">{name}</h2>
    <p className="text-white mb-2 text-justify text-center">{description}</p>

    <p className={`text-sm text-center ${status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>{status}</p>
    <span className="flex justify-center p-5">
      <a href={githubLink} className="text-blue-600 underline text-center" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </span>
    {productionLink !== 'nil' ? (
      <span className="flex justify-center p-5 text-white">
        Visit The Web Application : 
        <a href={productionLink} className="text-blue-400 underline text-center" target="_blank" rel="noopener noreferrer">
          click here
        </a>
      </span>
    ) : (
      <span className="flex justify-center p-5 text-white">
        Visit The Web Application : <p className='underline text-blue-500'> Nil</p>
      </span>
    )}
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
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <div className="h-full bg-black mx-auto p-8" >
      <h1 className="text-3xl font-bold mb-8 text-yellow-300 text-center" data-aos="fade-down">
      
        Projects
      </h1>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
