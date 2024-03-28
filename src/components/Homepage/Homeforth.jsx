import React from 'react'
import Home4 from "../../images/home4.png"
import ourhome from "../../images/our_1.png"
import home5 from "../../images/home5.png"

const Homeforth = () => {
    return (
        <>
            <div className='bg-cover' style={{ backgroundImage: `url(${Home4})` }} >
                <div className='flex flex-col justify-center items-end px-8 max-lg:items-center '>
                    <div className='w-[45%] max-lg:w-1/3'>

                   
                        <p className='text-white text-6xl max-lg:text-5xl max-sm:text-3xl font-bold '>
                            <p>  OUR
                                {/* <span className='text-white text-'>Make sure what is said
                                    about Win-Win partnership</span> */}
                            </p>
                        PARTNERS</p>
                    <div className='grid grid-cols-2 mt-5 '>
                        <div className=''>
                            <button class="bg-white h-7 w-7 rounded-full  text-black font-bold mr-2">01 </button>
                            <button class="  text-white font-bold mr-2">02 </button>
                            <button class="  text-white font-bold mr-2">03 </button>
                        </div>
                        <div className="h-20 w-20">
                            <img src={ourhome} alt="" />
                        </div>
                    </div>
                    <small className='text-white mt-5'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..

                    </small>

                    <p className='text-red-700 mt-5'>
                        More

                    </p>
                    <div className='flex mt-5 gap-10'>
                        <div>
                            <img src={home5} alt="" height={100} width={100} />
                        </div>
                        <div className='items-center align-middle'>
                            <p className='text-white font-semibold' >
                                Andrew Onishko
                            </p>
                            <p className='text-white'>
                                Co-founder & CMO at Digital Agency
                            </p>
                        </div>

                    </div>

                    <div className='flex gap-4 mt-5 mb-10'>
                        <div>
                            <p className='text-white'>
                                Reviewed On
                            </p>
                            <p className='text-white font-bold text-2xl'>
                                Clutch
                            </p>
                        </div>
                        <div className='mt-1'>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p className='text-white mt-1'>
                                50 Reviews
                            </p>

                        </div>
                    </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Homeforth