import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../../utils/cartSlice';

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

    axios.get(`https://jd-api.onrender.com/${productId}`)
      .then(response => {
        const data = response.data;
        console.log('API response:', data);
        if (data) {
          setProduct(data);
          setSelectedImage(data.mainImage || '');
          if (data.sizeOptions && data.sizeOptions.length > 0) {
            setSelectedSize(data.sizeOptions[0].size || '');
            setSelectedPrice(data.sizeOptions[0].price || 0);
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
        <p className="mt-2">Rating: {product.ratings}</p>
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
        <p className="mt-2"><span className='font-bold'>Size:</span></p>
        <div className="flex mt-2">
          {product.sizeOptions && product.sizeOptions.map(option => (
            <button
              key={option._id}
              className={`px-4 py-2 mr-2 border ${selectedSize === option.size ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => handleSizeClick(option)}
            >
              {option.size}
            </button>
          ))}
        </div>
        <p className="mt-2"><span className='font-bold'>Material:</span> {product.material}</p>
        <p className="mt-2"><span className='font-bold'>Number of Shelves:</span> {product.numberOfShelves}</p>
        <p className="mt-2"><span className='font-bold'>Special Feature:</span> {product.specialFeature}</p>
        <p className="mt-2"><span className='font-bold'>Product Dimensions:</span> {product.productDimensions}</p>
        <hr />
        <h3>About Product</h3>
      </div>

      {/* Additional Images Grid */}
      <div className="w-full hidden md:block mt-4" style= {{marginTop:'-280px'}}>
        <div className="flex gap-1">
          {product.additionalImages && product.additionalImages.length > 0 ? (
            product.additionalImages.map((image, index) => (
              <div key={index} className="mx-4">
                <img
                  src={image}
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
    </div>
  );
};

export default ProductDetails;
