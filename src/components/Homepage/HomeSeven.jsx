import React from 'react'
import home7 from "../../images/home7.png"

const HomeSeven = () => {
    return (
        <>
            <div className='px-8 bg-black'>


                <div className='max-lg:text-center'>

                    <p className='font-bold pt-14' style={{color:"#049AEF"}}>
                        TOP SERVICES
                    </p>
                    <p className='text-white text-6xl max-lg:text-5xl max-sm:text-3xl font-bold mt-5'>Bespoke Software Development Services for Next-Gen Businesses
                    </p>
                    <p className='text-white mt-8'>
                        We combine Microsoft's world-class technology with the brilliance of our globally sourced talent pool to deliver exceptional results. Our center stands as a beacon of innovation, where expertise in Microsoft technologies meets agile methodologies and a collaborative spirit.    </p>
                </div>


                <div className='grid grid-cols-4 gap-10 mt-7 max-lg:grid-cols-2 max-sm:grid-cols-1 pb-7'>
                    <div className=''>
                        <img src={home7} alt="" height={50} width={50} />
                        <p className='text-white font-bold text-2xl'>
                            Web app development
                        </p>
                        <p className='text-white'>
                            We form a team with our clients – deeply involved from ideation to execution. With ongoing, direct access to each team member, nearly all of our clients have offered us additional projects.
                        </p>
                    </div>
                    <div className=''>
                        <img src={home7} alt="" height={50} width={50} />
                        <p className='text-white font-bold text-2xl'>
                            Product prototyping
                        </p>
                        <p className='text-white'>
                            We are all makers, from the partners to the junior staff. It is this born-digital, hands-on talent that enable us to craft the best creative technology and studio production solutions.
                        </p>
                    </div>
                    <div className=''>
                        <img src={home7} alt="" height={50} width={50} />
                        <p className='text-white font-bold text-2xl'>
                            Mobile app development                        </p>
                        <p className='text-white'>
                            We do play a lot, but we also work hard and like to challenge ourselves with proposing new projects that will further better our skills and connect us as a team.
                        </p>
                    </div>
                    <div className=''>
                        <img src={home7} alt="" height={50} width={50} />
                        <p className='text-white font-bold text-2xl'>
                            Legacy System Modernization
                        </p>
                        <p className='text-white'>
                            No big reveals, no presentations and no wireframes. We deliver prototypes before pretty pixels. We craft stories before we design. And we do it quickly, leaving room to integrate again and again.
                        </p>
                    </div>
                </div>


            </div>
        </>
    )
}

export default HomeSeven