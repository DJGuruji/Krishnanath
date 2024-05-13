import React from 'react'
import img from "../img/sit.jpeg"

const HomeImg = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center md:pl-36 lg:pl-36 xl:pl-36'>
        <img src={img} alt="face" className='border-2 border-yellow-300 w-44 h-58 rounded-sm md:mr-28 lg:mr-28 xl:mr-28' />

      </div>
    </>
  )
}

export default HomeImg