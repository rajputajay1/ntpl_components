import React from 'react'

const Proto_experince = () => {
    return (
        <>
            <div className='bg-black' >
                <div className=' px-8 '>
                    <p className='text-6xl text-white font-bold max-sm:text-center max-md:text-4xl max-sm:text-3xl pt-4 '>
                        What will the experience be like            </p>
               
                <div className='flex  pt-8 pb-8 gap-5 justify-between max-md:flex-col'>
                    {/* left div  */}
                    <div className='bg-gray-800 flex flex-col justify-between rounded-xl  px-2 max-md:flex-row max-md:p-4'>
                        <div>
                            <p className='text-white text-center'>
                                Week 1-2
                            </p>
                        </div>
                        <div>
                            <p className='text-white text-center'>+</p>
                        </div>

                    </div>
                    <div className='bg-white rounded-lg flex px-5 gap-14 pt-5 pb-9' >
                        {/* left div */}
                        <div>
                            <p className='text-black text-2xl font-semibold '>
                                Week 5-6
                            </p>
                            <p className='text-black text-1xl mt-3 font-semibold'>
                                MVP Feature Finalization

                            </p>
                            <small className='text-black '>Concluding the selection of essential features for the Minimum Viable Product.</small>
                            <p className='text-black text-1xl mt-7 font-semibold'>
                                Roadmap & Project Plan Creation

                            </p>
                            <small className='text-black'>
                                Developing a strategic roadmap and comprehensive project plan.
                            </small>
                        </div>
                        {/* right div */}
                        <div className='mt-8'>
                            <p className='text-black text-1xl mt-3 font-semibold'>
                                Architecture Design & Tech Stack Finalization
                            </p>
                            <small className='text-black'>Detailing the architectural design and finalizing the technology stack tailored to the project's requirements.</small>
                            <p className='text-black text-1xl mt-7 font-semibold max-sm:mt-12'>
                                Timeline & Cost Estimation
                            </p>
                            <small className='text-black'>
                                Estimating the timeline and costs required for the development of the Minimum Viable Product.                            </small>
                        </div>




                    </div>
                    <div className='bg-gray-800 flex flex-col justify-between rounded-xl  px-2 align-middle max-md:flex-row max-md:p-4'>
                        <div>
                            <p className='text-white pt-2 text-center' >
                                Week 5-6
                            </p>
                        </div>
                        <div>
                            <p className='text-white text-1xl text-center'>+</p>
                        </div>

                    </div>

                </div>

            </div>
            </div>
        </>
    )
}

export default Proto_experince