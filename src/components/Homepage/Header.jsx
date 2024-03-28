import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the drawer icon
import logo from "../../images/logo.png";
import headerback from "../../images/headerback.png"


const Header = () => {
    const [showMenu, setShowMenu] = useState(false); // State to toggle menu

    return (
        <>
            <div className=' flex justify-between px-8 items-center bg-cover bg-no-repeat' style={{
                backgroundImage: `url(${headerback})`,
            }}>
                <div>
                    <img src={logo} alt="" width={150} height={100} />
                </div>
                <FaBars className="text-white text-xl cursor-pointer lg:hidden" />

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

export default Header;
