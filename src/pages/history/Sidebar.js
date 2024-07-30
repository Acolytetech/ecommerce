// src/pages/history/Sidebar.js
import React from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li
          className={`cursor-pointer p-2 ${activeSection === 'orders' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          onClick={() => setActiveSection('orders')}
        >
          Your Orders
        </li>
        <li
          className={`cursor-pointer p-2 ${activeSection === 'address' ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          onClick={() => setActiveSection('address')}
        >
          Address
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
