import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ name, description, status, githubLink, productionLink }) => (
  <div className="border p-4 rounded-lg mb-4" data-aos="fade-up">
   
    <h2 className="text-xl font-semibold text-center text-yellow-300">{name}</h2>
    <p className="text-white mb-2 text-justify">{description}</p>
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
      name: 'Medical Appointment',
      description: 'This is a straightforward medical appointment system built using Python Django...',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/MedicalAppointment',
      productionLink: 'nil'
    },
    {
      name: 'Password Generator',
      description: 'This project is a Password Generator web application built with React...',
      status: 'completed',
      githubLink: 'https://github.com/DJGuruji/PasswordGenerator',
      productionLink: 'https://djguruji.github.io/PasswordGenerator'
    },
    
  ];

 
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    });
  }, []);

  return (
    <div className="h-full bg-black mx-auto p-8">
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
