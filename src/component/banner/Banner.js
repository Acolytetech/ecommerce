// src/components/Banner.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../images/Artboard 1 1 (2).png';
import image2 from '../../images/Artboard 3 smart storage (1).png';
import image3 from '../../images/Artboard 5.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100  md:h-96 overflow-hidden"style={{backgroundColor:"rgb(55 111 61 / 59%)", borderBottomRightRadius:"150px"}}>
      <div className="w-1/2 text-center px-32" >
        <h1 className="text-4xl font-bold w-full text-center text-white" style={{lineHeight:"3rem"}} >
          Upgrade with Premium Plastic Home Essentials
        </h1>
      </div>
      <div className="md:w-1/2 text-end bg-white   ">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
        >
          <div className=" flex justify-center items-end border rounded-br-2xl">
            <img
              src={image1}
              alt="Image 1"
              className=" md:max-h-full  md:h-96"
            />
          </div>
          <div className="h-full flex justify-center items-end">
            <img
              src={image2}
              alt="Image 2"
              className=" md:max-h-full  md:h-96"
            />
          </div>
          <div className="h-full flex justify-center items-end md:h-96">
            <img
              src={image3}
              alt="Image 3"
              className="max-h-64 md:max-h-full  md:h-96"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
