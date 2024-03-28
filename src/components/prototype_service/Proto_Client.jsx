import React from 'react'
import client1 from "../../images/client1.png"
import client3 from "../../images/client3.png"
import client4 from "../../images/client4.png"
const Proto_Client = () => {
    return (
        <>
            <div className='bg-black '>
                <div className='text-6xl text-white font-bold text-center max-lg:text-4xl max-sm:text-3xl pt-4 '>
                    Client Success Stories
                </div>

                <div className='px-8 mt-10 flex  justify-between gap-5 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1
                '>
                    <div className='bg-cover relative' style={{ backgroundImage: `url(${client1})`, height: 270, width: 430 }}>
                        <div className='text-white px-6 absolute bottom-0 mb-5'>
                            <div className='flex flex-col justify-end'>
                                <p className='text-1xl font-bold '>Mr. Talal Benlahsen</p>
                                <p className='text-white'>California, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-cover relative' style={{ backgroundImage: `url(${client1})`, height: 270, width: 430 }}>
                        <div className='text-white px-6 absolute bottom-0 mb-5'>
                            <div className='flex flex-col justify-end'>
                                <p className='text-1xl font-bold '>Mr. Talal Benlahsen</p>
                                <p className='text-white'>California, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-cover relative' style={{ backgroundImage: `url(${client1})`, height: 270, width: 430 }}>
                        <div className='text-white px-6 absolute bottom-0 mb-5'>
                            <div className='flex flex-col justify-end'>
                                <p className='text-1xl font-bold '>Mr. Talal Benlahsen</p>
                                <p className='text-white'>California, USA</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='text-center flex justify-center mt-5 mb-2 pb-5'>
                    <img src={client3} alt="" height={30} width={40} className='mr-2' />
                    <div className='mt-1'>

                        <button class="bg-blue-500 h-4 w-4 rounded-full  text-white font-bold mr-2"> </button>
                        <button class="bg-blue-500 h-4 w-4 rounded-full  text-white font-bold mr-2"> </button>
                        <button class="bg-blue-500 h-4 w-4 rounded-full  text-white font-bold mr-2"> </button>
                    </div>
                    <img src={client4} alt="" height={30} width={40} />
                </div>


            </div>
        </>
    )
}

export default Proto_Client