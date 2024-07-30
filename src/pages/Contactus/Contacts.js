// import React from 'react';
// import './Contacts.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import slide1 from '../../images/contact-us-communication-support-service-assistance-concept.jpg'
// import slide2 from '../../images/contact-us-customer-support-enquiry-hotline-concept.jpg'

// const Contacts = () => {
//     return (
//         <>
//             <div className=" contacts bg-white mt-0 p-0  rounded-lg shadow-md">
//                 {/* <h2 className="text-2xl font-semibold mb-4">Our Gallery</h2> */}
//                 <Carousel showThumbs={false} autoPlay infiniteLoop>
//                     <div>
//                         <img src={slide1} alt="Image 1" className='contactimg' />
//                     </div>
//                     <div>
//                         <img src={slide2} alt="Image 2" className='contactimg' />
//                     </div>
//                     <div>
//                         <img src={slide1} alt="Image 3"  className='contactimg'/>
//                     </div>
//                 </Carousel>
//             </div>
            


//         </>
//     );
// };

// export default Contacts;


import React from 'react';
import './Contacts.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import slide1 from '../../images/contact-us-communication-support-service-assistance-concept.jpg';
import slide2 from '../../images/contact-us-customer-support-enquiry-hotline-concept.jpg';

const Contacts = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e705915-0ecd-4020-a244-01c2cd92320f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <>
      <div className="contacts bg-white mt-0 p-0 rounded-lg">
      <div>
            <img src={slide1} alt="Image 1" className="contactimg" />
          </div>
        {/* <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src={slide1} alt="Image 1" className="contactimg" />
          </div>
          <div>
            <img src={slide2} alt="Image 2" className="contactimg" />
          </div>
          <div>
            <img src={slide1} alt="Image 3" className="contactimg" />
          </div>
        </Carousel> */}
      </div>

      <div className="container mx-auto p-4" style={{backgroundImage:'slide1'}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-gray-600">1234 Street Name, City, State,</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>
        </div>
<div className="w-full sendmessage">
        <div className=" p-8 rounded-lg shadow-md w-full max-w-md mx-auto  " style={{backgroundColor:'rgb(100,100,100,0.7)'}}>
          <h3 className="text-2xl text-white font-bold font-semibold mb-6 underline">Send Us a Message</h3>
          <form onSubmit={onSubmit}>
          {/* <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/> */}
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-white font-bold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-white font-bold" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Send Message
            </button>
          </form>
          <span>{result}</span>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

