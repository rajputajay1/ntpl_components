import React from 'react'
import { BiSolidBank } from "react-icons/bi";

const About = () => {
    return (
        <>

            <div className="px-10 py-8 ">
                <div className='flex gap-10'>
                    <div className='text-6xl font-bold'>
                        ABOUT

                        <div className='flex gap-3 mt-2'>
                            <p className='text-blue-500'> NTPL </p>
                            <p className='text-blue-500'>  World</p>
                        </div>
                    </div>

                    <div className="w ">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..
                        </p>

                        <p className='mt-6 text-1xl font-bold text-black'>More</p>
                        <div class="w-10 h-0 border-b-2 border-black   "></div>

                    </div>

                </div>

                <hr className="border-t border-gray-300 mt-8" />

                <div className='flex '>
                    {/* left div */}
                    <div className='pt-10 pl-6 pr-10 '>
                        <p className='text-black  mb-2 '>Of regular clients</p>
                        <span className='text-black  font-bold text-5xl '>90  <span className='italic'>%</span></span>
                        <p className='text-black mt-10 mb-2'>Proficient specialists</p>
                        <span className='text-black  font-bold text-5xl '>12</span>
                        <p className='text-black  mt-10 mb-2 whitespace-nowrap'>We have been unstoppable since</p>
                        <span className='text-black  font-bold text-5xl '>2004</span>

                    </div>
                    <div className="border-l border-gray-400 "> </div>
                    {/* right div */}
                    <div className='pt-6 pl-10'>
                        <p className='text-blue-500 font-semibold mb-2'>INDUSTRIES</p>
                        <div>
                            <div className='text-black  font-bold text-5xl '>Delivering Industry-Focused  </div>
                            <div className=' text-black  font-bold text-5xl mt-2'>Software Solutions</div>
                        </div>
                        <p className='  mt-4'>Our team of software development experts collaborates with clients to understand their roadblocks and objectives, enabling us to develop custom software development solutions that are efficient and scalable for diverse industries.</p>



                        <div class="pt-10">
                            <div class="grid grid-cols-6 gap-4">
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
                            </div>
                        </div>

                        {/* <!-- Second set of icons --> */}
                        <div class="pt-10">
                            <div class="grid grid-cols-6 gap-4">
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