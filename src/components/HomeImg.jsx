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
      <div className='w-full flex flex-col justify-center items-center md:pl-36 lg:pl-36 xl:pl-36 md:mt-20 lg:mt-20 xl:mt-20 '>
        <img src={img} alt="face" className='border-2 border-yellow-300 w-48 lg:w-1/2 md:w-1/2 xl:w-1/2 h-58 rounded-full md:mr-28 ' data-aos="fade-up" />
      </div>
    </>
  );
}

export default HomeImg;
