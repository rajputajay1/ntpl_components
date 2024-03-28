import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the drawer icon
import logo from "../../images/logo.png";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false); // State to toggle menu

    return (
        <>
            <div className='bg-black flex justify-between px-8 items-center'>
                <div>
                    <img src={logo} alt="" width={150} height={100} />
                </div>
                <FaBars className="text-white text-xl cursor-pointer lg:hidden"  />

                <div className='flex justify-around gap-7 max-lg:hidden'>
                    {/* {showMenu ? null : <FaBars className="text-white text-xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />} */}
                    <p className={`text-white font-semibold ${showMenu ? 'hidden' : ''}`}>
                        SERVICES
                    </p>
                    <p className={`text-white font-semibold ${showMenu ? 'hidden' : ''}`}>
                        HIRE DEVELOPERS
                    </p>
                    <p className={`text-white font-semibold ${showMenu ? 'hidden' : ''}`}>
                        SOLUTIONS
                    </p>
                    <p className={`text-white font-semibold ${showMenu ? 'hidden' : ''}`}>
                        OUR WORK
                    </p>
                    <p className={`text-white font-semibold ${showMenu ? 'hidden' : ''}`}>
                        COMPANY
                    </p>
                    <div className={`bg-blue-500 inline-block px-3 pt-1 pb-1 items-center text-center ${showMenu ? 'hidden' : ''}`}>
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
