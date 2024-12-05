import React,{useEffect} from 'react'
import { FaGithub ,FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000, 
          easing: "ease-in-out",
          once: true,     
        });
      }, []);

  return (
    <>
    <div className='bg-black border-t border-slate-500 sticky bottom-0'>
        <ul className='flex justify-around py-2 '>
            <li><a href="https://github.com/DJGuruji" target='_blank'><FaGithub className='text-white text-4xl hover:text-black hover:bg-white hover:rounded-full' data-aos="zoom-in"></FaGithub></a></li>
            <li><a href="https://www.instagram.com/__krishnanath/profilecard/?igsh=eXF3NTM4YTdzMGo=" target='_blank'><FaInstagram className='text-white text-4xl hover:text-black hover:bg-white hover:rounded-full' data-aos="zoom-in"></FaInstagram></a></li>
            <li><a href="https://www.linkedin.com/in/krishnanath-s-24055a227" target='_blank'><FaLinkedinIn className='text-white text-4xl hover:text-black hover:bg-white hover:rounded-full ' data-aos="zoom-in"></FaLinkedinIn></a></li>
            <li><a href="mailto:nath93266@gmail.com" target='_blank'><SiGmail className='text-white text-4xl hover:text-black hover:bg-white hover:rounded-full' data-aos="zoom-in"></SiGmail></a></li>
        </ul>
    </div>

    </>
  )
}

export default Footer