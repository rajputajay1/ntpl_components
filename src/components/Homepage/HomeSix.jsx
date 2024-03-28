import React from 'react'
import home6 from "../../images/home8.png"

const HomeSix = () => {
    return (
        <>
            <div className="bg-cover mt-10 " style={{ backgroundImage: `url(${home6})` }}    >
                <div className=' text-center '>
                    <p className='text-white pt-5 font-bold'>CONTACT</p>
                    <p className='text-6xl text-white font-bold pt-2  max-lg:text-4xl max-sm:text-3xl'> Create great things together!</p>
                    <p className='text-white mt-5 '>
                        Big or small, we can help!                    </p>

                    <div className='bg-blue-500 text-center inline-block my-10  '>
                        <p className='text-white px-5 py-2 font-semibold'>Let’s Work Together</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeSix