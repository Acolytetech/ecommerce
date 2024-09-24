import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
function Subscribe() {
  return (
    <div className='container mx-auto pt-20 pb-16'>
      <h2 className='text-black text-2xl text-center mb-4'>
        Follow the latest trends and sales
      </h2>
      <div className='flex flex-col md:flex-row justify-center items-center '>
        <input
          type='email'
          placeholder='Enter your email'
          className='p-2 rounded-l-md w-full md:w-1/3 border'
        />
        <button className='p-2 bg-red-600 text-white rounded-r-md w-full md:w-auto'>
          Subscribe
        </button>
      </div>
      <div className='flex flex-col md:flex-row justify-around text-center text-black pt-10'>
        <div className=' md:mb-0'>
          <FaMapMarkerAlt className='text-3xl text-red-600 mx-auto' />
          <div className='pt-5 pt-1 font-medium text-gray-500'>Find Us</div>
          <p style={{width:'250px'}} className='text-gray-500 '>Rajkot, Gujarat - 360004</p>
        </div>
        <div className='mb-4 md:mb-0'>
          <FaPhoneAlt className='text-3xl text-red-600 mx-auto' />
          
          <div className='pt-5 font-medium text-gray-500'  >Call</div>
          <p  className='text-gray-500'>+91 9924276996 </p>
        </div>
        <div>
          <FaEnvelope className='text-3xl text-red-600 mx-auto' />
          <div className='pt-5 font-medium text-gray-500'>Mail</div>
          <p className='text-gray-500'>jdmultipro@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;