import React from 'react';
import ProductDetail from './ProductDetail';
import AddReview from './AddReview';

const ProductPage = ({ productId, userId }) => {
  return (
    <div>
      <ProductDetail productId={productId} />
      <AddReview productId={productId} userId={userId} />
    </div>
  );
};

export default ProductPage;
