import React from 'react'
import home13 from "../../images/home10.png"

const HomeNine = () => {
    return (
        <>
            <div className='bg-black items-center  px-8 text-center pb-8'>
                <div className=' items-center flex justify-center lg:px-52'>
                    <img src={home13} alt="" />
                </div>

                <p className='text-4xl font-bold text-white max-md:text-3xl max-sm:text-2xl mt-5'>

                    Ntpl world Global Network
                </p>
                <p className='text-white font-bold text-7xl mt-6 max-lg:text-5xl max-sm:text-3xl ' >LET’S DISCUSS HOW WE CAN BE
                    USEFUL TO YOU
                </p>
                {/* <p className='text-white font-bold text-7xl max-lg:text-5xl max-sm:text-3xl ' > USEFUL TO YOU
                   </p> */}

                <div className='flex mt-6 text-center items-center justify-center'>


                    <div className='border text-gray-500 px-5 py-2'>
                        <p className=''>
                            Your E- mail
                        </p>


                    </div>
                    <div className='bg-white'>
                        <p className=' font-bold text-black px-5 py-2'>
                            Schedule a Meeting
                        </p>

                    </div>


                    <p className='text-white font-semibold  pl-5 max-sm:hidden '>
                        info@ntplworld.com
                        <br />
                        Or Go to meet
                    </p>



                </div>


                <p className='text-gray-500  mt-6 max-lg:hidden'>
                    © 2024 www.ntplworld.com - All rights reserved.

                </p>

            </div>

        </>
    )
}

export default HomeNine