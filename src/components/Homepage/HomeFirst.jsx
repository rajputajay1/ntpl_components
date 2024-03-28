import React from 'react'
import HomeFirstimg from "../../images/HomeFirst.png"
import headerback from "../../images/headerback.png"
import logo from "../../images/logo.png"
import { FaBars } from 'react-icons/fa'; // Import the drawer icon


const HomeFirst = () => {
  return (
    <>
      {/* backgroundImage: `url(${HomeFirstimg}) */}
      <div className=' bg-cover'
        style={{ backgroundImage: `url(${HomeFirstimg})` }}
      >
        <div className=' flex justify-between px-8 items-center' style={{
          backgroundImage: `url(${headerback})`,
        }}>
          <div>
            <img src={logo} alt="" width={150} height={100} />
          </div>
          <FaBars className="text-white text-xl cursor-pointer lg:hidden" />

          <div className='flex justify-around gap-7 max-md:hidden'>
            <p className='text-white font-semibold'>
              SERVICES
            </p>
            <p className='text-white font-semibold'>
              HIRE DEVELOPERS
            </p>
            <p className='text-white font-semibold'>
              SOLUTIONS
            </p>
            <p className='text-white font-semibold'>
              OUR WORK
            </p>
            <p className='text-white font-semibold'>
              COMPANY
            </p>
            <div className='bg-blue-500 inline-block px-3 pt-1 pb-1 items-center text-center '>
              <p className=' text-white font-bold'>
                Let’s Work Together
              </p>
            </div>
          </div>

        </div>
        <div className=' grid grid-cols-2 max-lg:grid-cols-1 max-lg:text-center'>

          <div className='px-8'>
            <p className='text-white text-6xl max-lg:text-5xl max-sm:text-3xl font-bold mt-5 lg:w-1/2'>     Offshore
              Dedicated Development
            </p>
            <p className='text-white mt-6'>
              Fuel digital transformation initiatives &empower your business with expert team
            </p>
            <div className='bg-white text-center inline-block my-8 '>
              <p className='text-black px-5 py-1 font-semibold'>Let’s Work Together</p>
            </div>
          </div>
          <div>
            {/* <img src={HomeFirstimg} alt="" /> */}

          </div>
        </div>
      </div>
    </>
  )

}

export default HomeFirst