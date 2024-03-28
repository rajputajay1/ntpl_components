import React from 'react'
import home12 from "../../images/home12.png"

const HomeEight = () => {
  return (
    <>

      <div className='bg-black pb-5 grid grid-cols-2 gap-20 px-8  max-lg:grid-cols-1' >
        <div>
          <p className='text-white text-5xl font-bold max-lg:text-3xl max-sm:text-3xl'>
            Frequently Asked Questions (FAQ’s)
          </p>
          <p className='text-white mt-5'>
            Here are some frequently asked questions about our software product development services, answered to help you understand our process and capabilities better.
          </p>
          <p className='text-blue-500 mt-7'>
            Let’s talk
          </p>
          <p className='text-white mt-4  font-bold max-md:text mb-2'>
            01. What Makes Hidden Brains Unique in Enterprise Software Development?
          </p>
          <small className='text-white  '>
            At Hidden Brains, our uniqueness lies in merging business consulting, workflow automation, and data analytics to develop a unified dashboard, streamlining your entire enterprise operations. Also, we provide a spectrum of key parameters to cover end-to-end enterprise software development services:
            Enterprise Integration: We ensure seamless interconnectivity within your clustered software systems, facilitating smooth data exchange and operational harmony.
            Custom Solutions, Dynamic Flexibility: Tailor-made software created for your unique enterprise needs, adaptable and responsive to the ever-changing business landscape.

          </small>
          <hr className=' mt-3' />

          <p className='text-white  font-bold mt-5'>
            02. How Hidden Brains Add Strategic Value to Our Enterprise?
          </p>
          <hr className=' mt-3' />
          <p className='text-white  font-bold mt-5'>
            03. How Does Hidden Brains Handle Project Deadlines?            </p>
          <hr className=' mt-3' />
          <p className='text-white font-bold mt-5'>
            04. How Does Hidden Brains Stay Ahead with the Latest Technology Trends?            </p>
          <hr className=' mt-3' />


        </div>
        <div className=''>
          <img src={home12} alt="" />
        </div>
      </div>
    </>
  )
}

export default HomeEight