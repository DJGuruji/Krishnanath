import React from 'react'
import img from "../img/stan.png"

const AboutImg = () => {
  return (
    <div>
        <div className='w-full flex justify-center items-center'>
        <img src={img} alt="face" className='border-2 border-yellow-300 w-44 h-58 rounded-sm mt-10 ' />

      </div>
    </div>
  )
}

export default AboutImg