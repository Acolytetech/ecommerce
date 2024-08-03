import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner2 from "../../images/Artboard 1 1 (1).png";
import banner3 from "../../images/Artboard 3 smart storage.png";
import banner4 from "../../images/Artboard 5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './Topproduct.css'

const Topproduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jd-products1.onrender.com/');
        console.log(response.data); // Log the response data
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchProducts();
  }, []); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderStarRatings = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      // Replace with your star icon component or library usage
      // Example with FontAwesome:
      // stars.push(<FontAwesomeIcon icon={faStar} key={i} className="text-yellow-400" />);
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className='p-5'>
      {/* Carousel */}
      

     <div className='m-auto text-center  topmaincontiner'>
     <h1 className='text-1xl ps-10  text-left font-bold text-black-600 m-auto mb-10'>Our Product</h1>
     {/* <p className='text-black-500 font-semibold text-left ps-10   mt-2'>Brighten Your Home, Simplify Your Life</p> */}
     </div>

      {/* Product Grid */}
      <div className="top-product-container">
        
      {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.mainImage} alt={product.name} className="w-full h-1/2 m-auto" />
              <div className="p-4">
                <h2 className="product-name">{product.name}</h2>
                <p className="text-2xl"><span className='text-rose-600 font-bold text-2xl'>Price :</span> {product.price} ₹</p>
                {/* <p className="mb-5 text-1xl text-black-400 pt-2 font-bold">Rating:  {product.ratings}</p> */}
                <p className=" text-1xl pt-2 font-bold"><span className='text-black-400'>Rating : </span>  {renderStarRatings(product.ratings)}</p>
                <Link to={`/product/${product._id}`} className="mt-4 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">Add to Cart</Link>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Topproduct;
