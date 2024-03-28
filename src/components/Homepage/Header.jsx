import React from 'react'
import logo from "../../images/logo.png"
const Header = () => {
    return (
        <>
            <div className='bg-black flex justify-between px-8 items-center'>
                <div>
                    <img src={logo} alt="" width={150} height={100} />
                </div>
                <div className='flex justify-around gap-7 max-md:hidden'>
                    <p className='text-white font-semibold'>
                        SERVICES
                    </p>
                    <p className='text-white font-semibold'>
                        HIRE DEVELOPERS
                    </p>
                    <p className='text-white font-semibold'>
                        SOLUTIONS
                    </p>
                    <p className='text-white font-semibold'>
                        OUR WORK
                    </p>
                    <p className='text-white font-semibold'>
                        COMPANY
                    </p>
                    <div className='bg-blue-500 inline-block px-3 pt-1 pb-1 items-center text-center '>
                        <p className=' text-white font-bold'>
                            Let’s Work Together
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header