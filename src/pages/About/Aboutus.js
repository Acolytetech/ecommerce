// src/components/Aboutus.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../images/Artboard 1 1 (2).png';
import image2 from '../../images/Artboard 3 smart storage (1).png';
import image3 from '../../images/Artboard 5.png';
import aboutimg from '../../images/about us.jpg';
import ordercycle from '../../images/order cycle.avif';
import vision from '../../asset/vision.json'
import missionimg from '../../images/mission.png';
import vissionimg from '../../images/vission.jpg';
import Subscribe from '../../component/banner/Subscribe';
// import Subscribe from '../../component/banner/Subscribe';

const Aboutus = () => {
    return (
        <>
            {/* Carousel Section */}
            <div className=" md:h-96 overflow-hidden">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    useKeyboardArrows
                    autoPlay
                >
                    <div className="flex justify-center items-center border rounded-br-2xl">
                        <img
                            src={image1}
                            alt="Image 2"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={image2}
                            alt="Image 2"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src={image3}
                            alt="Image 3"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </Carousel>
            </div>

            {/* About Us Section */}
            <div className='bg-white py-10 px-4'>
            <h1 className='text-4xl md:text-5xl text-black text-center font-bold mb-6'>
                            <span className='text-black-400'>About</span> Us
                        </h1>
                <div className='flex flex-col md:flex-row items-center gap-20 px-20 justify-between'>

                    <div className='w-full md:w-1/2 my-8 md:mb-0'>
                        <img src={aboutimg} alt='About Us' className='mx-auto rounded-3xl w-full h-1/2 object-cover' />
                    </div>
                    <div className='w-full md:w-1/2 text-center md:text-left'>
                        
                        <p className='text-lg md:text-xl text-black mb-6'>
                            Welcome to JD, we are dedicated to transforming your living spaces with premium quality home kitchen and room interior items from Godrej. Our mission is to bring elegance, functionality, and style to every corner of your home, making everyday living a delightful experience.
                        </p>
                        <h4 className='text-2xl md:text-3xl text-black-400 capitalize font-bold'>
                            "Elevate Your Home with Trusted Quality"
                        </h4>
                    </div>
                </div>
            </div>
            <img src={ordercycle} alt='order cycle' className='mx-auto rounded-3xl w-full h-auto object-cover' />

            {/* Why Choose Us Section */}
            {/* <div className='bg-white py-10 px-4'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-full md:w-2/3 text-center md:text-left m-auto'>
                        <h1 className='text-4xl md:text-5xl text-center text-blue-500 font-bold mb-6'>
                            Why Choose <span>Us</span>
                        </h1>
                        <ul className='text-lg md:text-xl text-black-600 list-disc list-inside space-y-4'>
                            <li>Premium Quality: We only offer products that meet our stringent quality criteria, ensuring you receive the best.</li>
                            <li>Customer-Centric Approach: Your satisfaction is our priority. We are here to assist you with personalized service and expert advice.</li>
                            <li>Wide Selection: Our extensive range of Godrej products means you’ll find everything you need to organize and beautify your home.</li>
                            <li>Affordable Prices: We believe that quality home solutions should be accessible to everyone. Our competitive pricing ensures value for your money.</li>
                        </ul>
                    </div>
                    
                </div>
            </div> */}


            {/* Our Mission Section */}
            <div className='bg-white py-10 px-10'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-full md:w-1/2 text-center md:text-left ms-10'>
                        <h1 className='text-4xl md:text-5xl text-black-500 font-bold mb-6'>
                            <span className='text-black-400'>Our</span> Mission
                        </h1>
                        <p className='text-lg md:text-xl text-black mb-6'>
                            Our mission is to provide our customers with top-notch Godrej products that are not only functional but also add a touch of sophistication to their homes. We are committed to offering exceptional customer service, ensuring a seamless shopping experience from start to finish.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={missionimg} alt='Our Mission' className='rounded-3xl w-full h-auto object-cover' />
                    </div>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className='bg-white py-10 px-10 '>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='w-full md:w-1/2 '>
                        <img src={vissionimg} alt='Our Vision' className='rounded-3xl w-full h-auto object-cover' />
                    </div>
                    <div className='w-full md:w-1/2 ms-10 text-center md:text-left'>
                        <h1 className='text-4xl md:text-5xl text-black-500 font-bold mb-6'>
                            Our <span className='text-black-400'>Vision</span>
                        </h1>
                        <p className='text-lg md:text-xl text-black mb-6'>
                            Our vision is to set new standards in the home improvement industry by continuously innovating and delivering exceptional Godrej products that elevate the living experience of our customers. We aim to be a trusted partner in creating beautiful and functional spaces.
                        </p>
                    </div>
                </div>
            </div>

            <Subscribe/>
        </>
    );
};

export default Aboutus;
