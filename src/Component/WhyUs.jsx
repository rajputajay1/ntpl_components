import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


const WhyUs = () => {
    return (
        <>
           
                <div className='text-center mt-8'>
                <p className='text-5xl font-extrabold text-gray-700'>Why Us</p>
                    <p className='text-2xl font-bold text-gray-600 mt-3'>Reasons To Choose Our Resort</p>
                    </div>
                <div className='grid grid-cols-2 gap-10 my-9  px-10 text-[24px] '>
                <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                  
                    <div className='flex items-center gap-7 '>
                        <p>1.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p >You get the entire property to yourself.</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                    <p>2.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p >Complete privacy and offbeat location.</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                        <p>3.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p >Lip-smacking homely cooked food</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                        <p>4.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p >Our Hospitality is one of a kind</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                        <p>5.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p >Adjoining river</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                        <p>6.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p >Large spacious area with ample sitting space</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                        <p>7.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p > Owner personally looks after every service</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                    <p>8.</p>
                        <IoArrowForwardCircleOutline className='size-6' />
                    
                            <p >kitchen to cook type of</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-7 '>
                        <p>9.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p > Doctor on call</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className=' px-5 font-bold  flex items-center gap-5 justify-between shadow-md py-2' style={{ color: "#686868" }}>
                    <div className='flex items-center gap-6 '>
                        <p>10.</p>
                            <IoArrowForwardCircleOutline className='size-6' />
                            <p > Pet friendly</p>
                        </div>
                        <IoMdArrowDropdown />
                    </div>

                </div>
   
        </>
    )
}

export default WhyUs