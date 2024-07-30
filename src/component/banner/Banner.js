import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.png';
import image4 from '../../images/1.png';
import image5 from '../../images/2.png';
import image6 from '../../images/3.png';
import './Banner.css';
import Slider from "react-slick";


import { Link } from'react-router-dom';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
  
    <div className="banner flex flex-wrap flex-col md:flex-row items-center justify-between overflow-hidden" style={{ borderBottomRightRadius: "150px", width:'100%', height:'400px' }} >
      <div className="banner1 bg-gray-100 " style={{ backgroundColor: "rgb(55 111 61 / 59%)" , width:'60%'}}>
        <h1 className="text-1xl text-left  md:text-2xl text-white pe-5 ps-10 pr-10" style={{lineHeight:'70px', fontSize:'55px', fontWeight:'bold', fontFamily:'inira serif',paddingRight:'139px'  }}>
          Upgrade with Premium Plastic Home Essentials
        </h1>
        <Link to='/product' className=" bg-rose-500 text-white px-4 rounded hover:bg-rose-600">Shop Now</Link>

      </div>
      <div className="banner2" style={{  width:'40%', height:'400px'}}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          className="carousel"
        >
          <div className="flex">
            <img
              src={image4}
              alt="Image 1"
              className="object-fit" style={{  width:'100%', height:'400px'}}
            />
          </div>
          <div className="flex justify-center items-end">
            <img
              src={image5}
              alt="Image 2"
              className="object-fit" style={{  width:'100%', height:'400px'}}
            />
          </div>
          <div className="flex justify-center items-end">
            <img
              src={image6}
              alt="Image 3"
              className="object-fit" style={{  width:'100%', height:'400px'}}
            />
          </div>
        </Carousel>
      </div></div>


      {/* ///start mobile responsive banner/// */}
      
      {/* //////end responsive banner// */}
    <div className="bannerresponsive">
      <div className="w-full bannerslider">
      <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          className="carousel"
        >
          <div className="flex">
            <img
              src={image1}
              alt="Image 1"
              className="object-fit" 
            />
          </div>
          <div className="flex justify-center items-end">
            <img
              src={image2}
              alt="Image 2"
              className="object-fit" 
            />
          </div>
          <div className="flex justify-center items-end">
            <img
              src={image3}
              alt="Image 3"
              className="object-fit" 
            />
          </div>
        </Carousel>
      </div>
      </div>
     </>
  );
};

export default Banner;
