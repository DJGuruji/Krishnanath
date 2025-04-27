import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  const pdfUrl = "/Krishnanaths_Resume.pdf";
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Krishnanaths_Resume.pdf";
    link.click();
  };

  const handlePreview = () => {
    setShowPreview(true); 
  };

  const handleClosePreview = () => {
    setShowPreview(false); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-12 px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h1 
          className="text-4xl font-serif text-yellow-200 text-center mb-12 pb-4 border-b border-yellow-700/30"
          data-aos="fade-down"
        >
          Professional Resume
        </h1>
        
        <div 
          className="border border-yellow-200 p-8 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg shadow-yellow-900/20 hover:shadow-yellow-700/30 transition-all duration-300 mb-8 flex flex-col items-center"
          data-aos="fade-up"
        >
          <p className="text-gray-300 leading-relaxed mb-8 text-center max-w-2xl">
            View or download my comprehensive resume highlighting my skills, experiences, and qualifications in the field of software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
            <button
              onClick={handlePreview}
              className="px-6 py-3 bg-gradient-to-r from-yellow-900 to-yellow-800 text-yellow-200 border border-yellow-700 rounded-md hover:shadow-md hover:shadow-yellow-900/40 transition-all duration-300 flex items-center gap-2"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
              Preview Resume
            </button>

            <button
              onClick={handleDownload}
              className="px-6 py-3 bg-yellow-800/30 border border-yellow-700 text-yellow-200 rounded-md hover:bg-yellow-800/50 transition-all duration-300 flex items-center gap-2"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-700 rounded-lg w-full max-w-4xl h-[85vh] flex flex-col">
            <div className="p-4 border-b border-yellow-700/30 flex justify-between items-center">
              <h2 className="text-xl font-serif text-yellow-200">Resume Preview</h2>
              <button
                onClick={handleClosePreview}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-yellow-900/20 text-yellow-300 hover:bg-yellow-900/40 transition-colors"
              >
                &times;
              </button>
            </div>
            <iframe
              src={pdfUrl}
              title="Resume Preview"
              className="flex-1 w-full rounded-b-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
