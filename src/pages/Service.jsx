import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThreeBackground from '../components/ThreeBackground';
import BackgroundToggle from '../components/BackgroundToggle';
import { useBackground } from '../context/BackgroundContext';
import { FaCode, FaLaptopCode, FaDatabase, FaServer, FaInfinity, FaLayerGroup } from 'react-icons/fa';

const ServicesPage = () => {
  const [mounted, setMounted] = useState(false);
  const { showBackground, bgOpacity } = useBackground();
  
  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Building high-performance static and dynamic web applications with state-of-the-art technologies.",
      icon: <FaCode />
    },
    {
      title: "Custom Applications",
      description: "Tailored software solutions designed to solve specific business challenges with scalable architecture.",
      icon: <FaLayerGroup />
    },
    {
      title: "API Systems",
      description: "Designing robust RESTful and GraphQL APIs for seamless system integration and data flow.",
      icon: <FaServer />
    },
    {
      title: "Front-End Mastery",
      description: "Crafting visually stunning, responsive user interfaces using modern frameworks like React and Next.js.",
      icon: <FaLaptopCode />
    },
    {
      title: "Back-End Power",
      description: "Developing secure and efficient server-side logic with Node.js, Django, and high-performance databases.",
      icon: <FaDatabase />
    },
    {
      title: "DevOps & Cloud",
      description: "Automating deployments and optimizing cloud infrastructure for maximum reliability and scale.",
      icon: <FaInfinity />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-4 mb-20" data-aos="fade-down">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-500 uppercase tracking-widest text-sm font-bold">Offerings</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
            My <br /> <span className="text-gradient">Services</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-10 group hover:border-red-500/50 transition-all duration-500 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all"></div>
              
              <div className="text-3xl text-red-600 mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              
              <h2 className="text-2xl font-black text-white font-outfit uppercase tracking-tight mb-4">
                {service.title}
              </h2>
              <p className="text-zinc-500 leading-relaxed font-medium text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {mounted && <BackgroundToggle />}
    </div>
  );
};

export default ServicesPage;
