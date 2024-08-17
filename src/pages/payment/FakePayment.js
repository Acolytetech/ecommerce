// src/pages/payment/FakePayment.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FakePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment Successful');
      // Save order details to local storage or API
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      localStorage.setItem('orderHistory', JSON.stringify([...cartItems, { date: new Date(), status: 'Confirmed' }]));
      localStorage.removeItem('cartItems'); // Clear cart after payment
      navigate('/order-confirmation');
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Fake Payment</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name on Card</label>
          <input
            type="text"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          onClick={handlePayment}
          className="btn bg-rose-500 rounded-lg text-white px-2 py-4 mt-4 w-full"
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default FakePayment;
