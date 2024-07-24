// src/components/Orders.js
import React, { useState, useEffect } from 'react';
import { fetchOrders } from '../api';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders()
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  return (
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
  );
};

export default Order;
