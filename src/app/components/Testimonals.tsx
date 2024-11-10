'use client'

import React, { useState} from "react"; 

const Testimonals = () => {
  const testimonals = [
    {
      name: 'sarah M.',
      feedback: 'The. food us absolutely delicious!.The flavors were incredible, and the service was top-notch. I,11 definitely be coming back!',

    },


    {
      name: 'James L.',
      feedback:'A fantastic dining experience! The ambiance is lovely, and the staff is very attentive. Highly recommend the pasta dishes'!,

    },


    {
      name: 'Emily R.',
      feedback: ' I ordered from here for the first time, and I was blown away! The delivery was quick, everything was hot and fresh.',

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonals.length);
  };

  return(
    <section className="bg-gradient-to-r from-black to-gray-700 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-amber-400" >What Our Customers Say</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 transition duration-200">
          <p className="text-gray-600 italic">`{testimonals[currentIndex].feedback}`</p>
          <h3 className="">{testimonals[currentIndex].name}</h3>
        </div>
        <div className="flex justify-center mt-4">
          <button 
          onClick={nextTestimonal}
          className="bg-sky-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Next Testimonals
          </button>
        </div>
      </div>
    </section>
  );
}; 
export default Testimonals;
