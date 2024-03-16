

// import React, { useState } from 'react';

// const OurServicesSlider = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     return (
//         <div className="relative">
//             <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-[550px] h-[330px] object-cover" />
//             <div className=" flex justify-center mt-4">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`h-4 w-4 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };
// export default OurServicesSlider; 



import React, { useState, useEffect } from 'react';

const OurServicesSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); 

        return () => clearInterval(interval);
    }, [currentIndex]); 

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-[550px] h-[330px] object-cover" />
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-4 w-4 rounded-full mx-1 ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurServicesSlider;
