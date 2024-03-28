import React from 'react'
import brain1 from "../../images/client4.png"


const Proto_Brain = () => {
    return (
        <>
            <div className='  bg-black px-8 mt-6'>
                <div >
                    <p className='text-6xl text-white font-bold max-md:text-center max-md:text-4xl max-sm:text-3xl pt-5  '>
                        Why Hidden Brains?
                    </p>
                    <p className='text-white mt-5 max-md:text-center'>
                        At Hidden Brains, our success lies in a comprehensive approach. We blend decades of global experience with a skilled pool of business analysts, UI/UX excellence, and an unwavering commitment to staying ahead in technology.
                    </p>
                </div>
                <div className='flex justify-between  mt-5'>
                    <div>
                        <p className='text-white text-4xl font-bold max-md:text-2xl  max-md:text-center lg:w-1/2'>
                            Unlock the Power of Strategic Consulting and
                            {/* </p> */}
                            {/* <p className='text-white text-4xl font-bold max-md:text-4xl max-sm:text-2xl max-md:text-center'> */}
                            Insightful Discovery with Hidden Brains
                        </p>
                    </div>
                    <div className='mt-3 text-right max-lg:hidden'>
                        <img src={brain1} alt="" height={50} width={50} className='mt-4' />
                    </div>

                </div>
                <div className='grid grid-cols-4 mt-7 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    <div className='border border-blue-500  px-5 py-4  rounded-xl'>
                        <p className='text-6xl text-white font-bold'>45+</p>
                        <p className='text-white text-2xl mb-4'>Expert Team

                        </p>
                        <small className='text-white '>Specialists in Discovery, Analysis & Rapid Application Development.</small>

                    </div>
                    <div className='border border-blue-500  px-5 py-4  rounded-xl'>
                        <p className='text-6xl text-white font-bold'>100</p>
                        <p className='text-white text-2xl mb-4'>Custom Solution

                        </p>
                        <small className='text-white '>Tailored solutions from comprehensive discovery insights.</small>

                    </div>
                    <div className='border border-blue-500  px-5 py-4  rounded-xl'>
                        <p className='text-6xl text-white font-bold'>15</p>
                        <p className='text-white text-2xl mb-4'>Funded Clients

                        </p>
                        <small className='text-white '>Prototypes securing funding for innovative ideas.</small>

                    </div>
                    <div className='border border-blue-500  px-5 py-4  rounded-xl mb-5'>
                        <p className='text-6xl text-white font-bold'>10+</p>
                        <p className='text-white text-2xl mb-4'>Success Stories

                        </p>
                        <small className='text-white '>Strategies shaped by meticulous Discovery & Analysis.</small>

                    </div>

                </div>
            </div>
        </>)
}

export default Proto_Brain