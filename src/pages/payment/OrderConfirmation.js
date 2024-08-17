// src/pages/order/OrderConfirmation.js

import React from 'react';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Order Confirmation</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-xl">Thank you for your purchase!</p>
        <p className="mt-2">Your order has been confirmed and is being processed.</p>
        <p className="mt-4">
          <a href="/" className="btn bg-rose-500 rounded-lg text-white px-2 py-4 mt-4 w-full">
            Continue Shopping
          </a>
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
