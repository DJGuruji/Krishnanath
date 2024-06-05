import React from 'react'
import img from "../img/selfi.jpeg"

const ContactImg = () => {
  return (
    <div>
        <div className='w-full flex justify-center items-center'>
        <img src={img} alt="face" className='border-2 border-yellow-300 w-44 h-58 rounded-sm mt-3 ' />

      </div>
    </div>
  )
}

export default ContactImg