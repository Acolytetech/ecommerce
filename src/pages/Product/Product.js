import React, { useEffect, useState } from 'react';
import axios from 'axios';
import banner2 from "../../images/Artboard 1 1 (1).png";
import banner3 from "../../images/Artboard 3 smart storage.png";
import banner4 from "../../images/Artboard 5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Product = () => {
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

     <div className='m-auto text-center p-10 mt-10'>
     <h1 className='text-2xl  text-center font-bold text-black'>Our Products</h1>
     <p className='text-green-500 font-semibold text-center  mt-2'>Brighten Your Home, Simplify Your Life</p>
     </div>

      {/* Product Grid */}
      <div className="w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
          {products.map((product) => (
            <div key={product._id} className="w-5/6 bg-white shadow-lg rounded-lg overflow-hidden" style={{height:"550px", marginLeft:'190px'}}>
              <img src={product.mainImage} alt={product.name} className="w-full h-1/2 m-auto" />
              <div className="p-4">
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="mt-2">Price: {product.price}</p>
                <p className="mb-5">Rating: {product.ratings}</p>

                <Link to={`/product/${product._id}`} className="mt-4 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">Add to Cart</Link>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </>
  );
};

export default Product;
