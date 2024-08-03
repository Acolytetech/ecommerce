// src/pages/cart/Cart.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItemQuantity } from '../../utils/cartSlice';

function Cart({ openLoginModel, openAddressModel }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    let subtotal = 0;
    cartItems.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const gstRate = 0.18;
    const gst = subtotal * gstRate;
    const totalBill = subtotal + gst;

    const removeFromCart = (index) => {
        dispatch(removeItem(index));
    };

    const updateQuantity = (index, quantity) => {
        if (quantity === 0) {
            dispatch(removeItem(index));
        } else {
            dispatch(updateItemQuantity({ index, quantity }));
        }
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
    }, []);

    const checkOut = () => {
        if (user) {
            openAddressModel();
        } else {
            openLoginModel();
        }
    };

    return (
        <div className="container mx-auto py-5">
            <h1 className="text-center mb-4 text-3xl font-bold">Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p>Your cart is empty</p>
                    <Link to="/" className="btn btn-primary">Order Now</Link>
                </div>
            ) : (
                <div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Image</th>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">Quantity</th>
                                    <th className="py-2 px-4 border-b">Price</th>
                                    <th className="py-2 px-4 border-b">Total</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="py-2 px-4 border-b">
                                            <img src={item.mainImage} alt={item.name} className="w-20 h-20 object-cover"/>
                                        </td>
                                        <td className="py-2 px-4 border-b">{item.name}</td>
                                        <td className="py-2 px-4 border-b">
                                            <input 
                                                type="number" 
                                                min="0" 
                                                value={item.quantity} 
                                                onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                                className="w-16 text-center border rounded"
                                            />
                                        </td>
                                        <td className="py-2 px-4 border-b">{item.price}</td>
                                        <td className="py-2 px-4 border-b">{item.price * item.quantity}</td>
                                        <td className="py-2 px-4 border-b">
                                            <button 
                                                onClick={() => removeFromCart(index)} 
                                                className="text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 text-right">
                        <div className="text-xl">
                            <span className="font-bold">Subtotal:</span> ₹{subtotal.toFixed(2)}
                        </div>
                        <div className="text-xl">
                            <span className="font-bold">GST (18%):</span> ₹{gst.toFixed(2)}
                        </div>
                        <div className="text-2xl font-bold">
                            <span>Total:</span> ₹{totalBill.toFixed(2)}
                        </div>
                        <button 
                            onClick={checkOut} 
                            className="btn bg-rose-500 rounded-lg text-white px-2 py-4 mt-4"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;