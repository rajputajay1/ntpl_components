import React from 'react'
import linking1 from "../../images/client5.png"
import linking2 from "../../images/linking2.png"
import linking3 from "../../images/our5.png"
import linking4 from "../../images/linking3.png"
const Proto_table = () => {
    return (
        <>
            <div className='bg-black '>
                <div className='mt-16 grid grid-cols-2 max-md:grid-cols-1 px-8 gap-10'>
                    <div className='mt-10'>
                        <p className='flex w-[80%] justify-between'>
                            <div>
                                <p className='text-white text-3xl'>
                                    Discovery Phase
                                </p>
                            </div>
                            <div className='mt-2'>
                                <img src={linking1} alt="" height={25} width={25} />
                            </div>
                        </p>
                        <hr className='w-[80%] mt-5' />
                        <p className='flex w-[80%] justify-between mt-5'>
                            <div>
                                <p className='text-blue-500 text-3xl'>
                                    Proof of Concept
                                </p>
                            </div>
                            <div className='mt-2'>
                                <img src={linking2} alt="" height={25} width={25} />
                            </div>
                        </p>
                        <hr className='w-[80%] mt-5' />
                        <p className='flex w-[80%] justify-between mt-5'>
                            <div>
                                <p className='text-white text-3xl'>
                                    MVP Development
                                </p>
                            </div>
                            <div className='mt-2'>
                                <img src={linking1} alt="" height={25} width={25} />
                            </div>
                        </p>
                        <hr className='w-[80%] mt-5' />
                    </div>
                    <div className='bg-cover rounded-xl border-blue-500 relative overflow-hidden' style={{ backgroundImage: `url(${linking3})`, }}>
                        <div className='text-white px-6 absolute bottom-0 mb-3'>
                            <div className='flex flex-col justify-end'>
                                <p className='text-2xl font-bold mb-3'>Testing and Refining</p>
                                <small className='text-white'>Next is the Proof of Concept. This critical phase involves in-depth market research and user need identification. We validate your ideas with lean methodologies, paving the way for tech selection, scalable architecture, and effective monetization strategies.</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Proto_table