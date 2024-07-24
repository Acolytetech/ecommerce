import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productId) return;

    console.log('Fetching product details for productId:', productId);

    axios.get(`https://jd-api.onrender.com/${productId}`)
      .then(response => {
        const data = response.data;
        console.log('API response:', data);
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setError(error);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      console.log('Adding to cart:', product);
      dispatch(addItem({ ...product, quantity: 1 }));
    }
  };

  if (error) {
    return <p>Error loading product details. Please try again later.</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-wrap items-start">
      {/* Left Side - Main Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center">
        <div className="max-w-md">
          <img
            src={product.mainImage}
            alt={product.name}
            className="object-contain max-w-full h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url"; }}
          />
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/2 lg:w-2/3 p-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="mt-2">Rating: {product.ratings}</p>
        <p className="mt-2">Price: ${product.price}</p>
        <p className="mt-2">Size: {product.sizeOptions.map(option => option.size).join(', ')}</p>
        <p className="mt-2">Materials: {product.material}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {/* Additional Images Grid */}
      <div className="w-full lg:w-2/3 p-4 hidden md:block">
        <div className="flex gap-4">
          {product.additionalImages.map((image, index) => (
            <div key={index} className="flex-1">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="object-contain w-full h-24"
                onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
