// src/pages/HistoryPage.js

import React, { useState, useEffect } from 'react';
import Sidebar from '../../pages/history/Sidebar';
import Profile from '../../pages/history/Profile';
import { fetchOrders, fetchAddress } from '../../component/api'; // Ensure these API functions are implemented

const History = () => {
  const [activeSection, setActiveSection] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (activeSection === 'orders') {
      // Fetch orders from local storage or API
      const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
      setOrders(orderHistory);
    } else if (activeSection === 'address') {
      fetchAddress()
        .then(data => setAddress(data))
        .catch(err => console.error(err));
    }
  }, [activeSection]);

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 p-6">
        <Profile />
        {activeSection === 'orders' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            {orders.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orders.map((order, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow-md">
                    <h3 className="text-xl font-bold">Order #{index + 1}</h3>
                    <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    {/* Add more details about the order if needed */}
                  </div>
                ))}
              </div>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        )}
        {activeSection === 'address' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <div className="bg-gray-100 p-4 rounded border">
              <p><strong>Name:</strong> {address.name}</p>
              <p><strong>Email:</strong> {address.email}</p>
              <p><strong>Phone:</strong> {address.phone}</p>
              <p><strong>Address Line 1:</strong> {address.addressLine1}</p>
              <p><strong>Address Line 2:</strong> {address.addressLine2}</p>
              <p><strong>Landmark:</strong> {address.landmark}</p>
              <p><strong>City:</strong> {address.city}</p>
              <p><strong>State:</strong> {address.state}</p>
              <p><strong>Pincode:</strong> {address.pincode}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
