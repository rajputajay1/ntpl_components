import React from 'react'
import grow from "../../images/grow.png"
const Proto_Grow = () => {
    return (
        <>
            <div className="bg-cover " style={{ backgroundImage: `url(${grow})` }}    >
                <div className=' text-center px-8'>
                    <p className='text-6xl text-white font-bold pt-10 max-lg:text-4xl max-sm:text-3xl'> Grow Your Business Today</p>
                    <p className='text-white mt-5 '>
                        Join over 500+ satisfied clients who have transformed their operations with  our Software solutions.
                    </p>
                 
                    <div className='bg-white text-center inline-block my-10  '>
                            <p className='text-black px-5 py-1 font-semibold'>Let’s Talk</p>
                        </div>
                </div>

            </div>
        </>
    )
}

export default Proto_Grow