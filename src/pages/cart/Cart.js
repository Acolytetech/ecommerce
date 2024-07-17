// CartPage.js

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem'; // Create this component to display individual cart items

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          {/* Add total calculation and checkout button here */}
        </div>
      )}
    </div>
  );
};

export default CartPage;
