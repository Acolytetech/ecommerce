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
      fetchOrders()
        .then(data => setOrders(data))
        .catch(err => console.error(err));
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
            <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
            {orders.length > 0 ? (
              <ul>
                {orders.map((order, index) => (
                  <li key={index} className="border-b py-2">
                    <p><strong>Order ID:</strong> {order.id}</p>
                    <p><strong>Item:</strong> {order.item}</p>
                    <p><strong>Quantity:</strong> {order.quantity}</p>
                  </li>
                ))}
              </ul>
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
