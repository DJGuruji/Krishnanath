import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../img/about.jpeg";

const HomeImg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center md:pl-36 lg:pl-36 xl:pl-36'>
        <img src={img} alt="face" className='border-2 border-yellow-300 w-48 lg:w-3/4 md:w-3/4 xl:w-3/4 h-58 rounded-sm md:mr-28 lg:mr-28 xl:mr-28' data-aos="flip-left" />
      </div>
    </>
  );
}

export default HomeImg;
