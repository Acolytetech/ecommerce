import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector from react-redux
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Redux integration
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart); // Assuming your cart state is stored in Redux

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://jd-api.onrender.com/${productId}`);
        const data = response.data;
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError(error);
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
      navigate('/cart'); // Navigate to the cart page after adding the product
    }
  };

  const handleImageClick = (imageUrl) => {
    // Update main image when an additional image is clicked
    setProduct({ ...product, mainImage: imageUrl });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading product details. Please try again later.</p>;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-wrap items-start">
      {/* Left Side - Main Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center">
        <div className="max-w-md">
          <img
            src={product.mainImage}
            alt={product.name}
            className="object-contain max-w-full h-auto w-full" 
            onError={(e) => { e.target.onerror = null; e.target.src = "fallback_image_url"; }}
          />
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/2 lg:w-2/3 p-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="mt-2">Rating: {product.ratings}</p>
        <p className="mt-2">Price: {product.price}</p>
        <p className="mt-2">Size: {product.sizeOptions.map(option => option.size).join(', ')}</p>
        <p className="mt-2">Materials: {product.material}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {/* Additional Images Grid */}
      <div className="w-full lg:w-2/3 p-4 hidden md:block">
        <div className="flex gap-4">
          {product.additionalImages.map((image, index) => (
            <div key={index} className="flex-1 cursor-pointer" onClick={() => handleImageClick(image)}>
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
