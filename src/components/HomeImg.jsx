import React from 'react'
import img from "../img/face.png"

const HomeImg = () => {
  return (
    <>
      <div className='w-full flex justify-center items-center'>
        <img src={img} alt="face" className='border-2 border-yellow-300 w-44 h-58 rounded-full md:mr-28 lg:mr-28 xl:mr-28' />

      </div>
    </>
  )
}

export default HomeImg