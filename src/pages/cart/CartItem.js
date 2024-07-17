// CartItem.js
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-2">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-contain mr-4"
        />
        <div>
          <p className="font-bold">{item.name}</p>
          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
          <div className="flex items-center mt-1">
            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button className="text-gray-500 focus:outline-none focus:text-gray-600">
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <p className="text-gray-700">${item.price}</p>
    </div>
  );
};

export default CartItem;
