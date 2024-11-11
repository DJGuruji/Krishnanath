import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesPage = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: "ease-in-out",
      offset: 100, 
    });
  }, []);

  return (
    <div className="h-full bg-black text-white">
      <h1 className="text-3xl font-bold text-yellow-300 text-center p-5" data-aos="fade-down">
        Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Web Development</dt>
          <dd className="text-justify">
            Create static websites, dynamic web applications, or e-commerce platforms using front-end and back-end technologies.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Custom Web Application Development</dt>
          <dd className="text-justify">
            Develop custom web applications tailored to clients' specific needs, including database-driven applications and content management systems.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">API Development</dt>
          <dd className="text-justify">
            Design and develop APIs for integrating different systems or services, such as RESTful APIs or GraphQL APIs.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-right">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Maintenance and Support</dt>
          <dd className="text-justify">
            Your journey with me doesn't end after the initial development phase. I offer ongoing maintenance and support services to ensure your applications remain secure, up-to-date, and performant.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-right">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Custom Software Solutions</dt>
          <dd className="text-justify">
            Need a custom software solution tailored to your specific business needs? I provide end-to-end software development services to turn your ideas into reality.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-right">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Front-End Development Services</dt>
          <dd className="text-justify">
            Crafting visually stunning, responsive websites and dynamic single-page applications using modern frameworks like React.js, Vue.js, or Angular.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-left">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Back-End Development Services</dt>
          <dd className="text-justify">
            Empowering your application with robust APIs using Node.js, Express.js, Django, or FastAPI, alongside efficient database solutions like MongoDB or PostgreSQL.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-left">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Full-Stack Development Services</dt>
          <dd className="text-justify">
            Delivering end-to-end web development solutions with expertise in MERN stack and Django.
          </dd>
        </div>
        <div className="border p-4 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-left">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">DevOps and Cloud Solutions</dt>
          <dd className="text-justify">
            From automating deployments to optimizing infrastructure scalability, I provide DevOps services to streamline your development workflows and improve your application's reliability.
          </dd>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
