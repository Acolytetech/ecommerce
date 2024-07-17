import React, { useState } from 'react';
import screen from '../../images/is.png'
import quoteimg from'../../images/quoteimg.png';
const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      quote:
        "An community outreach director to the Fort Lauderdale mayor said Trantalis has recommended that the information sent by Messam be reviewed by the public works department first.",
      author: "Raisa Habersham, Miami Herald, 27 June 2024",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac orci at ligula sagittis hendrerit vel eu nulla.",
      author: "John Doe, Example.com",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="container  m-auto ps-24 p-8 flex flex-col md:flex-row items-center justify-between">
      {/* Images section */}
      <div className="mb-8 md:mb-0 w-1/3">
        {/* Replace path with your actual image path */}
        <img src={screen} alt="customer" className=" w-40 h-40 md:w-80 md:h-80" />
      </div>

      {/* Testimonial carousel */}
      <div className="flex-1 text-center w-2/3  " style={{position:'relative'}}>
      <img src={quoteimg} alt='' style={{position:'absolute', top:'-100px', left:'90px', width:'150px', height:'150px'}}/>
        <div className="text-4xl font-bold mb-4 ps-40">What our customers say ?</div>
        <div className="text-lg italic   m-auto mb-2 ">{testimonials[currentTestimonial].quote}</div>
        <div className="text-md mb-4">—{testimonials[currentTestimonial].author}</div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`mx-1 w-4 h-4 rounded-full bg-gray-300 ${
                index === currentTestimonial ? 'bg-gray-600' : ''
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
