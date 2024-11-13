import React,{useEffect} from "react";
import "aos/dist/aos.css";
import AOS from 'aos';

const NotFound = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
     <div className="h-screen w-full bg-black text-yellow-300 flex justify-center items-center"  >
      <div>
        <h2 className="text-8xl font-sans mb-5" data-aos="zoom-out">4😎4</h2>

        <h1 className="text-3xl text-center" data-aos="zoom-out">Page Not Found </h1>
      </div>
     </div>
  );
};

export default NotFound;
