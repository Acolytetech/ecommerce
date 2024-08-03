// CartItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../utils/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(updateCartItemQuantity(item.id, item.quantity + 1));
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateCartItemQuantity(item.id, item.quantity - 1));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-2 shadow-md rounded-lg">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-contain mr-4"
        />
        <div>
          <p className="font-bold">{item.name}</p>
          <div className="flex items-center mt-1">
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={handleDecreaseQuantity}
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={handleIncreaseQuantity}
            >
             <svg
  className="h-4 w-4 fill-current"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M19 13H5v-2h14v2z" />
  <path d="M12 5v14m-7-7h14" />
</svg>

            </button>
          </div>
          <p className="text-gray-700 mt-2">{ (item.price)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="text-red-500 focus:outline-none focus:text-red-600"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem




