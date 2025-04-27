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

  const services = [
    {
      title: "Web Development",
      description: "Create static websites, dynamic web applications, or e-commerce platforms using front-end and back-end technologies.",
      animation: "fade-up"
    },
    {
      title: "Custom Web Application Development",
      description: "Develop custom web applications tailored to clients' specific needs, including database-driven applications and content management systems.",
      animation: "fade-up"
    },
    {
      title: "API Development",
      description: "Design and develop APIs for integrating different systems or services, such as RESTful APIs or GraphQL APIs.",
      animation: "fade-up"
    },
    {
      title: "Maintenance and Support",
      description: "Your journey with me doesn't end after the initial development phase. I offer ongoing maintenance and support services to ensure your applications remain secure, up-to-date, and performant.",
      animation: "fade-right"
    },
    {
      title: "Custom Software Solutions",
      description: "Need a custom software solution tailored to your specific business needs? I provide end-to-end software development services to turn your ideas into reality.",
      animation: "fade-right"
    },
    {
      title: "Front-End Development Services",
      description: "Crafting visually stunning, responsive websites and dynamic single-page applications using modern frameworks like React.js, Vue.js, or Angular.",
      animation: "fade-right"
    },
    {
      title: "Back-End Development Services",
      description: "Empowering your application with robust APIs using Node.js, Express.js, Django, or FastAPI, alongside efficient database solutions like MongoDB or PostgreSQL.",
      animation: "fade-left"
    },
    {
      title: "Full-Stack Development Services",
      description: "Delivering end-to-end web development solutions with expertise in MERN stack and Django.",
      animation: "fade-left"
    },
    {
      title: "DevOps and Cloud Solutions",
      description: "From automating deployments to optimizing infrastructure scalability, I provide DevOps services to streamline your development workflows and improve your application's reliability.",
      animation: "fade-left"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 
          className="text-4xl font-serif text-yellow-200 text-center mb-12 pb-4 border-b border-yellow-700/30" 
          data-aos="fade-down"
        >
          Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border border-yellow-200 bg-gradient-to-b from-gray-900 to-black p-6 rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300 flex flex-col"
              data-aos={service.animation}
              data-aos-delay={index * 50}
            >
              <div className="mb-4 pb-3 border-b border-yellow-700/30">
                <h2 className="text-xl font-serif text-yellow-200">{service.title}</h2>
              </div>
              <p className="text-gray-300 leading-relaxed flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
