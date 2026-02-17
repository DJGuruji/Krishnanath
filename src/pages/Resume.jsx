import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ThreeBackground from "../components/ThreeBackground";
import BackgroundToggle from "../components/BackgroundToggle";
import { useBackground } from "../context/BackgroundContext";
import { FaEye, FaDownload } from "react-icons/fa";

const Resume = () => {
  const pdfUrl = "/Krishnanaths_Resume.pdf";
  const [showPreview, setShowPreview] = useState(false);
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Krishnanaths_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 flex flex-col items-center relative overflow-hidden">
      {mounted && showBackground && <ThreeBackground opacity={bgOpacity} />}
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-4 mb-20 text-center" data-aos="fade-down">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-red-600"></span>
            <span className="text-red-500 uppercase tracking-widest text-sm font-bold">Credential</span>
            <span className="w-12 h-[2px] bg-red-600"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
            Professional <br /> <span className="text-gradient">Resume</span>
          </h1>
        </div>
        
        <div 
          className="glass-card p-12 flex flex-col items-center text-center relative overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-[80px]"></div>
          
          <p className="text-zinc-500 leading-relaxed mb-12 max-w-2xl font-medium uppercase tracking-widest text-xs">
            View or download my comprehensive resume highlighting my technical expertise, professional journey, and software engineering qualifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => setShowPreview(true)}
              className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-3 shadow-2xl"
            >
              <FaEye className="text-lg" />
              Preview Document
            </button>

            <button
              onClick={handleDownload}
              className="px-10 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:border-red-500/50 hover:bg-red-600/10 transition-all duration-300 flex items-center gap-3"
            >
              <FaDownload className="text-lg" />
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {mounted && <BackgroundToggle />}

      {showPreview && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[200] p-6 lg:p-12">
          <div className="glass-card w-full max-w-5xl h-full flex flex-col relative overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Credential Preview</h2>
              <button
                onClick={() => setShowPreview(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-red-600 transition-all text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <iframe
              src={pdfUrl}
              title="Resume Preview"
              className="flex-1 w-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
