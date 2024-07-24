// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Account</h2>
      <ul>
        <li
          className={`cursor-pointer mb-2 p-2 ${activeSection === 'orders' ? 'bg-gray-600' : ''}`}
          onClick={() => setActiveSection('orders')}
        >
          Your Orders
        </li>
        <li
          className={`cursor-pointer mb-2 p-2 ${activeSection === 'address' ? 'bg-gray-600' : ''}`}
          onClick={() => setActiveSection('address')}
        >
          Address
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
