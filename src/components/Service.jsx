import React from 'react'
import our2 from "../images/our2.png";
import our_1 from "../images/our_1.png";
import our3 from "../images/our3.png";
import our4 from "../images/our4.png";
import our5 from "../images/our5.png";
import our6 from "../images/our6.png";
import our8 from "../images/our8.png";
import our9 from "../images/our9.png";
import our10 from "../images/our10.png";
import our11 from "../images/our11.png";
import our12 from "../images/our12.png";

// import Swiper from 'swiper';
const images = [our3, our4, our5, our6];
const images2 = [our9, our10, our11, our12]
import OurServicesSlider from './OurServicesSlider';
const Service = () => {
    return (
        <>

            <div className=" bg-cover pb-8" style={{ backgroundImage: `url(${our2})` }} >
                <div className='flex justify-between pl-10 pr-10 pt-5  '>
                    <p className='text-blue-500'>OUR SERVICES</p>
                    <div className="h-20 w-20" >
                        <img src={our_1} alt="" />
                    </div>
                </div>
                <div className='flex    justify-between px-10'>
                    <div className=' w-[33%] '>
                        <p className='text-white text-5xl  '> Accelerate Technology
                            Innovation With Software Development Services</p>
                        <p className="text-white mt-6">
                            Whether you require a complex enterprise software development solution or seamless software integration, we will take your business to the next level of success with IT consulting services & software development solutions.
                        </p>
                        <p className='mt-6 text-1xl font-bold text-white'>More</p>
                        <p class="w-10 h-0 border-b-2 border-white   "></p>
                    </div>

                    <div className=''>

                        <OurServicesSlider images={images}></OurServicesSlider>
                    </div>
                </div>


                <div className='flex justify-between mt-8 px-10'>
                    <div className="h-20 w-20" >
                        <img src={our8} alt="" />
                    </div >
                    <p className='text-blue-500 w-[33%]'>OUR SOLUTIONS</p>

                </div>


                <div className='flex justify-between px-10 '>

                    <div className=' '>

                        <OurServicesSlider images={images2}></OurServicesSlider>
                    </div>

                    <div className=' w-[33%] '>
                        <p className='text-white text-5xl  '> Engineering Your Success Through Innovative Software Solutions</p>
                        <p className="text-white mt-6">
                            Whether you require a complex enterprise software development solution or seamless software integration, we will take your business to the next level of success with IT consulting services & software development solutions.
                        </p>
                        <p className='mt-6 text-1xl font-bold text-white'>More</p>
                        <p class="w-10 h-0 border-b-2 border-white   "></p>
                    </div>
                    {/* right div */}

                    {/* </div> */}

                </div>
            </div>
        </>
    )
}

export default Service