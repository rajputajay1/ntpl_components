import React from 'react'
import HomeFirstimg from "../../images/HomeFirst.png"

const HomeFirst = () => {
  return (
    <>
      <div className='bg-black '>
        <div className=' grid grid-cols-2 max-lg:grid-cols-1 max-lg:text-center'>

        <div>
          <p className='text-white text-6xl max-lg:text-5xl max-sm:text-3xl font-bold mt-5'>     Offshore
            DedicatedDevelopment
          </p>
          <p className='text-white mt-6'>
            Fuel digital transformation initiatives &empower your business with expert team
          </p>
            <div className='bg-white text-center inline-block my-8 '>
            <p className='text-black px-5 py-1 font-semibold'>Let’s Work Together</p>
          </div>
        </div>
        <div>
          <img src={HomeFirstimg} alt="" />

        </div>
      </div>
      </div>
      </>
      )
    
}

export default HomeFirst