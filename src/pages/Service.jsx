import React from 'react';

const ServicesPage = () => {
  return (
    <div className="h-full bg-black text-white">
      <h1 className="text-3xl font-bold  text-yellow-300 text-center p-5 ">Services</h1>
      <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Web Development</dt>
          <dd className='text-justify'>Create static websites, dynamic web applications, or e-commerce platforms using front-end and back-end technologies.</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Custom Web Application Development</dt>
          <dd className='text-justify'>Develop custom web applications tailored to clients' specific needs, including database-driven applications and content management systems.</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">API Development</dt>
          <dd className='text-justify'>Design and develop APIs for integrating different systems or services, such as RESTful APIs or GraphQL APIs.</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Maintenance and Support</dt>
          <dd className='text-justify'>Your journey with me doesn't end after the initial development phase. I offer ongoing maintenance and support services to ensure your applications remain secure, up-to-date, and performant. Whether it's fixing bugs, implementing new features, or scaling your application to handle increased traffic, I'm here to support you every step of the way.</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Custom Software Solutions</dt>
          <dd className='text-justify'>Need a custom software solution tailored to your specific business needs? I can help you design, develop, and deploy software applications that streamline your processes, boost efficiency, and drive growth. From requirement analysis to deployment and maintenance, I provide end-to-end software development services to turn your ideas into reality.</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Front-End Development Services</dt>
          <dd className='text-justify'>Crafting visually stunning, responsive websites and dynamic single-page applications using modern frameworks like React.js, Vue.js, or Angular. We ensure cross-browser compatibility and optimize performance for an exceptional user experience</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Back-End Development Services</dt>
          <dd className='text-justify'>Empowering your application with robust APIs using Node.js, Express.js, Django, or FastAPI, alongside efficient database solutions like MongoDB or PostgreSQL. We implement server-side rendering, authentication, and authorization for secure, scalable applications.</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">Full-Stack Development Services</dt>
          <dd className='text-justify'>Delivering end-to-end web development solutions with expertise in MERN stack and Django. We automate deployment with CI/CD pipelines, ensuring rapid feature delivery, while optimizing scalability and performance for growth.</dd>
        </div>
        <div className="border p-4 rounded-lg">
          <dt className="text-lg font-semibold mb-2 text-center text-yellow-300">DevOps and Cloud Solutions</dt>
          <dd className='text-justify'>From automating deployments to optimizing infrastructure scalability, I provide DevOps services to streamline your development workflows and improve your application's reliability and performance. I also specialize in cloud solutions using platforms like AWS, Azure, and Google Cloud Platform.</dd>
        </div>
    
      </dl>
    </div>
  );
};

export default ServicesPage;