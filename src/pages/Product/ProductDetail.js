import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

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

// Utility function to format product details
const formatDetails = (details) => {
  if (typeof details === 'object') {
    return Object.entries(details).map(([key, value]) => `${key}: ${value}`).join(', ');
  }
  return details;
};

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productId) return;

    console.log('Fetching product details for productId:', productId);

    axios.get(`https://jd-products1.onrender.com/products/${productId}`)
      .then(response => {
        const data = response.data;
        console.log('API response:', data);
        if (data) {
          setProduct(data);
          setSelectedImage(data.mainImage || '');
          if (data.sizeOptions && data.sizeOptions.length > 0) {
            setSelectedSize(data.sizeOptions[0].size || '');
            setSelectedPrice(data.sizeOptions[0].price || 0);
          } else {
            setSelectedPrice(data.price || 0); // Set default price if no size options
          }
        }
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError(error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      console.log('Adding to cart:', product);
      dispatch(addItem({ ...product, quantity: 1, size: selectedSize, price: selectedPrice }));
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSizeClick = (sizeOption) => {
    setSelectedSize(sizeOption.size);
    setSelectedPrice(sizeOption.price);
  };

  if (error) {
    return <p>Error loading product details. Please try again later.</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  console.log('Product details:', product);

  return (
    <div className="container mx-auto p-4 flex flex-wrap items-start">
      {/* Left Side - Main Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center">
        <div className="max-w-md">
          <img
            src={selectedImage}
            alt={product.name}
            className="object-contain w-8/12 h-auto ml-20"
            onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url"; }}
          />
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/2 lg:w-2/3 p-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="mt-2">Rating: {renderStars(product.rating)}</p>
        <hr />
        <div className='flex pt-8 pb-8 gap-48'>
          <p className="mt-2">Price: ₹{selectedPrice}</p>
          <button
            className="bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-400"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        <hr />
        {product.sizeOptions && product.sizeOptions.length > 0 && (
          <>
            <p className="mt-2"><span className='font-bold'>Size:</span></p>
            <div className="flex mt-2">
              {product.sizeOptions.map(option => (
                <button
                  key={option._id}
                  className={`px-4 py-2 mr-2 border ${selectedSize === option.size ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                  onClick={() => handleSizeClick(option)}
                >
                  {option.size}
                </button>
              ))}
            </div>
          </>
        )}
        <p className="mt-2"><span className='font-bold'>Material:</span> {product.material}</p>
        <p className="mt-2"><span className='font-bold'>Size:</span> {product.size}</p>
        {/* <p className="mt-2"><span className='font-bold'>Details:</span> {formatDetails(product.details)}</p> */}
      </div>

      {/* Additional Images Grid */}
      <div className="w-full hidden md:block mt-4" style={{ marginTop: '-127px' }}>
        <div className="flex ">
          {product.additionalImages && product.additionalImages.length > 0 ? (
            product.additionalImages.map((image, index) => (
              <div key={index} className="">
                <img
                  src={image || 'fallback_image_url'} // Add fallback URL here
                  alt={`Image ${index + 1}`}
                  className="object-contain w-24 h-24 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                  onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url"; }}
                />
              </div>
            ))
          ) : (
            <p>No additional images available.</p>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full mt-8">
        <h2 className="text-2xl font-bold">Reviews</h2>
        {/* Ensure the reviews data is in the expected format */}
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review._id} className="review p-4 border-b">
              <h4 className="font-semibold">{review.userId.name}</h4>
              <p>Rating: {renderStars(review.rating)}</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
