import React from 'react'
import linking1 from "../../images/client5.png"
import linking2 from "../../images/linking2.png"
import linking3 from "../../images/our5.png"
import linking4 from "../../images/linking3.png"
const Proto_linking = () => {
  return (
    <>
      <div className="bg-black  px-8"     >
        <div className=' text-center flex justify-center flex-col '>
          <div className='text-6xl text-white font-bold pt-5 max-lg:text-4xl max-sm:text-3xl'> Linking Customers, Business,
            <br />
            and Technology</div>
          <div className='text-white mt-5  text-center'>
            At Hidden Brains, we blend deep customer insights, strategic business alignment,
            <br />
            and the latest technology to transform your ideas into
            <br />
            exceptional products.
          </div>

        </div>
        <div className='grid grid-cols-3 gap-8 my-10 max-lg:grid-cols-2 max-sm:grid-cols-1 '>
          <div className='border border-blue-500  px-5 py-4  rounded-xl'>
            <p className='text-white text-2xl mb-3'>Understanding Customers

            </p>
            <small className='text-white '>We don't just understand your audience; we get into their shoes. Our approach is all about connecting deeply with their needs to craft experiences that truly resonate.</small>

          </div>
          <div className='border border-blue-500  px-5 py-4  rounded-xl'>
            <p className='text-white text-2xl mb-3'>Aligning with Business Goals

            </p>
            <small className='text-white '>
              Your business goals are our blueprint. Every solution we develop is in perfect sync with your objectives, driving growth and paving the way for success.</small>

          </div>
          <div className='border border-blue-500  px-5 py-4  rounded-xl'>
            <p className='text-white text-2xl mb-3'>Applying Advanced Technology
            </p>
            <small className='text-white '>We’re always at technology’s cutting edge, selecting tools that are not just advanced but also user-friendly and future-ready, ensuring your product stands out in the market.</small>

          </div>
        </div>

        <div className='grid grid-cols-2 max-lg:grid-cols-1 max-sm:text-center  '>
          <div className='text-6xl text-white font-bold max-lg:text-4xl max-sm:text-3xl'>
            <p>
              Hidden Brains' Three-Step Path to Prototyping Excellence
            </p>

          </div>
          <div className='mt-5'>
            <p className='text-white'>
              At Hidden Brains, we streamline your journey from idea to market with a three-step structured approach, ensuring personalized support every step of the way.
            </p>
          </div>

        </div>


        {/* table */}
        <div className='mt-16 grid grid-cols-2 max-lg:grid-cols-1 px-8 gap-10'>
          <div className='mt-10'>
            <p className='flex w-[80%] justify-between max-md:w-full'>
              <div>
                <p className='text-white text-3xl'>
                  Discovery Phase
                </p>
              </div>
              <div className='mt-2'>
                <img src={linking1} alt="" height={25} width={25} />
              </div>
            </p>
            <hr className='w-[80%] mt-5 max-md:w-full' />
            <p className='flex w-[80%] justify-between mt-5 max-md:w-full'>
              <div>
                <p className='text-blue-500 text-3xl'>
                  Proof of Concept
                </p>
              </div>
              <div className='mt-2'>
                <img src={linking2} alt="" height={25} width={25} />
              </div>
            </p>
            <hr className='w-[80%] mt-5 max-md:w-full' />
            <p className='flex w-[80%] justify-between mt-5 max-md:w-full'>
              <div>
                <p className='text-white text-3xl'>
                  MVP Development
                </p>
              </div>
              <div className='mt-2'>
                <img src={linking1} alt="" height={25} width={25} />
              </div>
            </p>
            <hr className='w-[80%] mt-5 max-md:w-full' />
          </div>
          <div className='bg-cover rounded-xl border-blue-500   max-lg:h-96' style={{ backgroundImage: `url(${linking3})`, }}>
            <div className='relative overflow-hidden'>
            <div className='text-white px-6  bottom-0 mb-3'>
              <div className='flex flex-col justify-end'>
                <p className='text-2xl font-bold mb-3'>Testing and Refining</p>
                <small className='text-white'>Next is the Proof of Concept. This critical phase involves in-depth market research and user need identification. We validate your ideas with lean methodologies, paving the way for tech selection, scalable architecture, and effective monetization strategies.</small>
              </div>
            </div>
            </div>
          </div>
        </div>


        <div className='mt-12 grid grid-cols-2 max-lg:grid-cols-1 pb-4'>
          <div className=''>
            <p className='text-6xl text-white font-bold max-lg:text-4xl max-sm:text-3xl max-sm:text-center '>
              What Will You Get?
            </p>
          </div>
          <div className=' mt-2'>
            <p className='text-white max-sm:text-center'>
              You will get a custom-made package containing everything you need to execute your product idea, knowing everything has been well thought out and that you will save time and money because you have taken the needed steps to reduce rework and unnecessary back and forth
            </p>
          </div>
        </div>




      </div>
    </>
  )
}

export default Proto_linking