import React from 'react'
import discovery from "../../images/discovery.png"
import dis1 from "../../images/dis1.png"
import news from "../../images/news.png"

const Proto_Discovery = () => {
    return (
        <>
            <div className='bg-black'>
                <div className='px-8'>
                    <div className='pt-10'>
                        <p className='text-6xl text-white font-bold  max-md:text-4xl max-sm:text-3xl  '>
                            Consulting & Discovery Engagement Models
                        </p>
                        <p className='text-white mt-5'>
                            Based on your project's requirements, our team will propose the most suitable engagement model considering the complexity, vision, and product idea
                        </p>
                    </div>
                    <div className='grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4 mt-4'>
                        <div className='bg-white rounded-lg mt-5 pb-5'>
                            <div className='font-bold text-center text-2xl pt-4 '>
                                <p className='text-black '>Monthly <span className='text-blue-500'>Based</span> </p>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5">
                                    Hire offshore staff for up to 160 hours a month
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5">
                                    Manage the team using your own methodologies
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5">
                                    Get timely updates on work progress
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5">
                                    Monthly billing cycles
                                </span>
                            </div>
                            <div className='px-5 mt-12 mb-5'>
                                <div className='bg-blue-500  py-3 text-center '>
                                    <button className='text-white font-semibold '>Hire Us</button>
                                </div>
                            </div>


                        </div>
                        <div className=' rounded-lg mt-5 pb-5' style={{ backgroundColor: "#333333" }}>
                            <div className='font-bold text-center text-2xl pt-4 '>
                                <p className='text-white '>Monthly <span className='text-white'>Based</span> </p>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5 text-white">
                                    Hire offshore staff for up to 160 hours a month
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5 text-white">
                                    Manage the team using your own methodologies
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5 ">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5 text-white">
                                    Get timely updates on work progress
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5 text-white">
                                <img src={discovery} alt="" height={20} width={20} className='text-white' />
                                <span className="ml-5 text-white">
                                    Monthly billing cycles
                                </span>
                            </div>
                            <div className='px-5 mt-12 mb-5'>
                                <div className='bg-white  py-3 text-center '>
                                    <button className='text-blue-700 font-semibold '>Hire Us</button>
                                </div>
                            </div>


                        </div>
                        <div className=' rounded-lg mt-5 pb-5' style={{ backgroundColor: "#333333" }}>
                            <div className='font-bold text-center text-2xl pt-4 '>
                                <p className='text-white '>Monthly <span className='text-white'>Based</span> </p>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5 text-white">
                                    Hire offshore staff for up to 160 hours a month
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5 text-white">
                                    Manage the team using your own methodologies
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5 ">
                                <img src={discovery} alt="" height={20} width={20} />
                                <span className="ml-5 text-white">
                                    Get timely updates on work progress
                                </span>
                            </div>
                            <div class="flex items-center px-5 mt-5 text-white">
                                <img src={discovery} alt="" height={20} width={20} className='text-white' />
                                <span className="ml-5 text-white">
                                    Monthly billing cycles
                                </span>
                            </div>
                            <div className='px-5 mt-12 mb-5'>
                                <div className='bg-white  py-3 text-center '>
                                    <button className='text-blue-700 font-semibold '>Hire Us</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                {/* photo  */}
                <div className='' style={{ backgroundColor: "#333333" }}>
                    <div className=' grid grid-cols-2 mt-5 max-md:grid-cols-1 '>
                        <div className='flex justify-center mt-5'>
                            <div className=''>
                                <img src={dis1} alt="" height={100} width={100} />
                                <p className='text-white font-semibold text-2xl'>Brandon Fuller
                                </p>
                                <p className='text-blue-800'>128, london City</p>
                            </div>
                        </div>

                        {/* <p className="border-l border-white h-full w-100"></p> */}
                        <div className=' text-white mt-14  max-sm:text-center px-6  '>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div className='mt-5  pl-10 pb-10'>
                                <button class="bg-white h-6 w-6 rounded-full  text-black font-bold mr-2">1 </button>
                                <button class="bg-white h-6 w-6 rounded-full  text-blue-500 font-bold mr-2">2 </button>
                                <button class="bg-white h-6 w-6 rounded-full  text-blue-500 font-bold mr-2">3 </button>
                                <button class="bg-white h-6 w-6 rounded-full  text-blue-500 font-bold mr-2">4 </button>
                            </div>


                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-2 px-8 gap-10 mt-8 max-md:grid-cols-1 '>
                    <div className='  '>
                        <p className='text-white text-5xl max-md:text-4xl max-sm:text-3xl font-bold max-sm:text-center '>
                            Frequently Asked Questions (FAQ’s)
                        </p>
                        <p className='text-white mt-5 max-sm:text-center '>
                            Here are some frequently asked questions about our software product development services, answered to help you understand our process and capabilities better.
                        </p>
                    </div>
                    <div className=''>
                        <p className='text-white font-semibold text-2xl'>
                            01. What is a consulting and discovery phase in IT services?
                        </p>
                        <p className='text-white mt-2'>
                            The consulting and discovery phase is an initial stage in IT services where project stakeholders collaborate to understand project objectives, define scope, identify challenges, and determine viable solutions.
                        </p>
                        <hr className='mt-3' />
                        <p className='text-white font-semibold text-2xl mt-6'>
                            02. Why is a consulting phase crucial before starting a project?
                        </p>
                        <hr className='mt-3' />
                        <p className='text-white font-semibold text-2xl mt-6'>
                            03. What does the discovery phase typically involve?
                        </p>
                        <hr className='mt-3' />
                        <p className='text-white font-semibold text-2xl mt-6'>
                            04. How does the consulting phase ensure alignment with our business goals?
                        </p>
                        <hr className='mt-3' />
                        <p className='text-white font-semibold text-2xl mt-6'>
                            05. What happens if the project scope changes during this phase?
                        </p>
                        <hr className='mt-3' />



                    </div>
                </div>

                <div className=' mt-9 max-md:text-center px-8 '>
                    <p className='text-white text-5xl max-md:text-4xl max-sm:text-3xl font-bold  '>
                        Insights & News
                    </p>
                    <p className='text-white mt-5'>
                        Get the latest news and technology updates to stay ahead.
                    </p>
                </div>
                <div className='grid grid-cols-3 my-8 gap-14 max-lg:grid-cols-2 max-sm:grid-cols-1 px-8  max-md:gap-5 pb-10'>
                    <div className='border-gray-200 border rounded-lg'>
                        <div>
                            <img src={news} alt="" />
                            <p className='text-white text-2xl mt-5 font-bold px-5'>
                                30 Top Software Product Ideas for 2024
                            </p>
                            <p className='text-white mt-5 px-5 pb-5'>
                                The world is rapidly transitioning into a digital village, with numerous new businesses emerging and numerous failures due to poor execution, strategy, pivoting, market awareness, and insufficient
                            </p>
                        </div>
                    </div>
                    <div className='border-gray-200 border rounded-lg'>
                        <div>
                            <img src={news} alt="" />
                            <p className='text-white text-2xl mt-5 font-bold px-5'>
                                30 Top Software Product Ideas for 2024
                            </p>
                            <p className='text-white mt-5 px-5 pb-5'>
                                The world is rapidly transitioning into a digital village, with numerous new businesses emerging and numerous failures due to poor execution, strategy, pivoting, market awareness, and insufficient
                            </p>
                        </div>
                    </div>
                    <div className='border-gray-200 border rounded-lg'>
                        <div>
                            <img src={news} alt="" />
                            <p className='text-white text-2xl mt-5 font-bold px-5'>
                                30 Top Software Product Ideas for 2024
                            </p>
                            <p className='text-white mt-5 px-5 pb-5'>
                                The world is rapidly transitioning into a digital village, with numerous new businesses emerging and numerous failures due to poor execution, strategy, pivoting, market awareness, and insufficient
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default Proto_Discovery