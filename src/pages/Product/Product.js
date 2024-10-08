import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner2 from "../../images/Artboard 1.png";
import banner3 from "../../images/Artboard 3 smart storage.png";
import banner4 from "../../images/Artboard 5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Subscribe from '../../component/banner/Subscribe';
import './Product.css';

// Utility function to render star ratings
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const totalStars = 5;

  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="text-yellow-500">&#9733;</span>);
  }
  if (halfStar) {
    stars.push(<span key="half" className="text-yellow-500">&#9733;</span>);
  }
  for (let i = fullStars + (halfStar ? 1 : 0); i < totalStars; i++) {
    stars.push(<span key={`empty-${i}`} className="text-gray-300">&#9734;</span>);
  }

  return stars;
};

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jd-products1.onrender.com/products');
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

  return (
    <>
      {/* Carousel */}
      <div className="w-full">
        <Slider {...settings}>
          <div>
            <img src={banner2} alt="Banner 2" className="w-full" />
          </div>
          <div>
            <img src={banner3} alt="Banner 3" className="w-full" />
          </div>
          <div>
            <img src={banner4} alt="Banner 4" className="w-full" />
          </div>
        </Slider>
      </div>

      <div className='m-auto text-center p-10 mt-20'>
        <h1 className='text-2xl text-center font-bold text-black'>Our Products</h1>
        <p className='text-green-700 font-semibold text-center mt-2'>Brighten Your Home, Simplify Your Life</p>
      </div>

      {/* Product Grid */}
      <div className="top-product-container">
        {products.map((product) => {
          const rating = parseFloat(product.rating) || 0;

          return (
            <div key={product._id} className="product-card">
              <img src={product.mainImage} alt={product.name} className="w-full h-1/2 m-auto" />
              <div className="p-4">
                <h2 className="product-name">{product.name}</h2>
                <p className="mt-2 text-2xl">
                  <span className='text-rose-600 font-bold text-2xl'>Price :</span> {product.price}₹
                </p>
                
                {/* Display Star Rating */}
                <div className="mt-2">
                  {renderStars(rating)}
                  {console.log(rating)}
                </div>

                <Link to={`/product/${product._id}`} className="mt-4 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">Add to Cart</Link>
              </div>
            </div>
          );
        })}
      </div>

      <Subscribe />
    </>
  );
};

export default Product;
