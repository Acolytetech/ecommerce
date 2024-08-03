import React, { useState } from 'react';
import screen from '../../images/is.png';
import quoteimg from '../../images/quoteimg.png';
import './Tesimonial.css';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      quote:
      "I recently purchased a set of storage racks and drawers from jd , and I couldn't be happier with my purchase. These items have significantly improved the organization in my home and added a stylish touch to my decor. The quality is top-notch, and they were easy to assemble. The customer service team was incredibly helpful and responsive to my questions. I highly recommend [Your Brand Name] for anyone looking to enhance their home storage solutions.",
      author: "Raisa Habersham, Miami Herald, 27 June 2024",
    },
    {
      quote:"I want to extend my heartfelt thanks to your entire team for creating products that not only meet but exceed expectations. Your dedication to quality and customer satisfaction truly shines through.Thank you once again for providing such exceptional products. I look forward to continuing to support your brand and recommending it to others.",
      author: "John Doe, Example.com",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="tesimonial container mx-auto p-20 flex flex-col md:flex-row items-center justify-between">
      {/* Images section */}
      <div className="mb-8 md:mb-0 w-1/3">
        <img src={screen} alt="customer" className="whatsayimg w-40 h-40 md:w-80 md:h-80" />
      </div>

      {/* Testimonial carousel */}
      <div className="flex-1  w-2/3 relative">
        
        <div className="whatsay-heading text-4xl flex font-bold mb-4"><img src={quoteimg} alt="quote" className="quote " /> What our customers say?</div>
        <div className="text-lg italic text-justify mb-2 mx-auto">{testimonials[currentTestimonial].quote}</div>
        <div className="text-md mb-4">— {testimonials[currentTestimonial].author}</div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`mx-1 w-4 h-4 rounded-full bg-gray-300 ${
                index === currentTestimonial ? 'bg-gray-600' : ''
              }`}
              aria-label={`Testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
