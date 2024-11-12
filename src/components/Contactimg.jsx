import React,{useEffect} from 'react'
import img from "../img/selfi.jpeg"
import "aos/dist/aos.css";
import AOS from 'aos';



const ContactImg = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,     
    });
  }, []);

  return (
    <div>
        <div className='w-full flex justify-center items-center'>
        <img src={img} alt="face" className='border-2 border-yellow-300 w-44 h-58 rounded-sm mt-3 ' data-aos="fade-up" />

      </div>
    </div>
  )
}

export default ContactImg