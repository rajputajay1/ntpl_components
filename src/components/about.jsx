import React from 'react'
import { BiSolidBank } from "react-icons/bi";

const About = () => {
    return (
        <>

            <div className="lg:px-10 py-8 max-lg:px-5">
                <div class='grid grid-cols-2 max-lg:grid-cols-1  '>
                    <div class='text-6xl font-extrabold  max-lg:text-4xl max-sm:text-3xl max-lg:text-center max-lg:flex max-lg:justify-center gap-2  '>
                        <p className='text-black '>ABOUT  </p>
                        <p className='text-blue-500'> NTPL World</p>
                    </div>

                    <div class="  max-lg:mt-3  ">
                        <p >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..
                        </p>

                        <p class='mt-6 text-1xl font-bold text-black'>More</p>
                        {/* <div class="w-10 border-b-2 border-black max-md:text-center max-lg:flex-none" ></div> */}
                    </div>
                </div>


                <hr className="border-t border-gray-300 mt-8" />

                <div className='lg:flex max-lg:justify-start    '>
                    {/* left div */}
                    <div className='pt-10  max-lg:flex  max-lg:justify-between '>
                        <div className=''>
                            <p className='text-black max-lg:mb-3 font-semibold max-sm:text-1xl '>Of regular clients</p>
                            <span className='text-black font-bold text-5xl max-sm:text-4xl '>90 <span className='italic'>%</span></span>
                        </div>
                        <div className=''>
                            <p className='text-black max-lg:mb-3 font-semibold lg:mb-2 lg:mt-8 max-sm:text-1xl  '>Proficient specialists</p>
                            <span className='text-black font-bold text-5xl max-lg:mt-6 max-sm:text-4xl'>12</span>
                        </div>
                        <div className=''>
                            <p className='text-black  lg:whitespace-nowrap max-lg:mb-3 font-semibold lg:mb-2 lg:mt-8 pr-5 '>We have been unstoppable since</p>
                            <span className='text-black font-bold text-5xl max-sm:text-4xl'>2004</span>
                        </div>
                    </div>

                    <div className="border-l border-gray-400 max-lg:flex-none flex "> </div>
                    {/* right div */}
                    <div className='pt-6 lg:pl-10   max-lg:flex max-lg:flex-col max-lg:justify-around '>
                        <p className='text-blue-500 font-semibold mb-2'>INDUSTRIES</p>
                        <div>
                            <div className='text-black  font-bold text-5xl max-md:text-4xl max-sm:text-3xl'>Delivering Industry-Focused  </div>
                            <div className=' text-black  font-bold text-5xl mt-2 max-md:text-4xl max-sm:text-3xl'>Software Solutions</div>
                        </div>
                        <p className='  mt-4'>Our team of software development experts collaborates with clients to understand their roadblocks and objectives, enabling us to develop custom software development solutions that are efficient and scalable for diverse industries.</p>

                        <div class="pt-10">
                            <div class="grid grid-cols-6 gap-4  max-lg:grid-cols-4  max-lg:mt-5 max-md:grid-cols-3  max-lg:md-5">
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Oil & Gas</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Logistics & Distribution</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Finance & Insurance</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Retail & eCommerce</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Real Estate & Construction</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Travel & Hospitality</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Communication, Media, Entertainment</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Manufacturing</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Hi-Tech</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Utilities on Demand</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Healthcare</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <BiSolidBank className='h-10 w-10' />
                                    <p class="text-black mt-1 text-center">Education</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div >
            </div>
        </>

    )
}

export default About