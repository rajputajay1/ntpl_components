import React from 'react'
import proto_service from '.././../images/proto_service.png'
import our7 from "../../images/our7.png"
import proto_service1 from "../../images/proto_service1.png"
import proto_service2 from "../../images/proto_service2.png"
import proto_service3 from "../../images/proto_service3.png"
const PrototypeService = () => {
    return (
        <>
            <div className="bg-cover pb-8" style={{ backgroundImage: `url(${proto_service})` }}>
                <div className='grid grid-cols-2 max-lg:grid-cols-1'>
                    {/* left div  */}
                    <p className=' px-8 py-6  max-lg:text-center'>
                        <div className='lg:w-1/2 text-6xl font-extrabold text-white  max-sm:text-3xl max-lg:text-4xl max-lg:flex max-lg:justify-center gap-2'>
                            <p>Software Prototyping Services</p>
                     

                        </div>
                        <p className='text-white mt-4'>Our software prototyping services are your gateway to exploring new possibilities, testing groundbreaking ideas, and validating concepts with precision and speed. We blend creativity with technology to create perfect software prototypes that speak volumes about your brand's potential.</p>
                        <div className='bg-white text-center inline-block mt-8'>
                            <p className='text-black px-5 py-1'>Get in touch</p>
                        </div>
                    </p>
                    {/* right  div */}


           
                        <div className='bg-cover relative' style={{ backgroundImage: `url(${proto_service3})` }}>
                            {/* Inner div with flexbox */}
                            <div className='flex flex-col justify-end justify-items-end  bottom-0 gap-5   pt-11'>
                                <img src={proto_service1} alt="" height={150} width={250} className='pl-6' />
                                <img src={proto_service2} alt="" height={150} width={360} className='pl-32 pb-5' />
                            </div>
                        </div>
            

                    {/* <img src={proto_service3} alt="" /> */}
                </div>

            </div>
        </>
    )
}

export default PrototypeService