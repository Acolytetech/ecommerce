import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
function Subscribe() {
  return (
    <div className='container mx-auto p-12 '>
      <h2 className='text-black text-2xl text-center mb-4'>
        Follow the latest trends and sales
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center mb-6'>
        <input
          type='email'
          placeholder='Enter your email'
          className='p-2 rounded-l-md w-full md:w-1/3 border'
        />
        <button className='p-2 bg-red-600 text-white rounded-r-md w-full md:w-auto'>
          Subscribe
        </button>
      </div>
      <div className='flex flex-col md:flex-row justify-around text-center text-black p-14'>
        <div className='mb-4 md:mb-0'>
          <FaMapMarkerAlt className='text-3xl text-red-600 mx-auto' />
          <div className='pt-1 pt-1 font-medium text-gray-500'>Find Us</div>
          <p style={{padding:'10%'}} className='text-gray-500'>134, New street,
          Jaipur, Rajasthan 302863</p>
        </div>
        <div className='mb-4 md:mb-0'>
          <FaPhoneAlt className='text-3xl text-red-600 mx-auto' />
          
          <div className='pt-1pt-1 font-medium text-gray-500'  >Call</div>
          <p style={{paddingTop:'30px'}} className='text-gray-500'>+91 6394624982 <br/>
          +91 8354026493</p>
        </div>
        <div>
          <FaEnvelope className='text-3xl text-red-600 mx-auto' />
          <div className='pt-1 font-medium text-gray-500'>Mail</div>
          <p style={{padding:'10%'}} className='text-gray-500'>Contact@JD.com
          Sales@JD.com</p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;