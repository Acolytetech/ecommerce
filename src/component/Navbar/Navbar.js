import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../images/logo.png';

const Navbar = ({ openModel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      const now = new Date();
      const lastLogin = localStorage.getItem('lastLogin');
      if (lastLogin) {
        const lastLoginDate = new Date(lastLogin);
        if (now - lastLoginDate < 24 * 60 * 60 * 1000) {
          setLoginMessage(`Welcome back, ${storedUser.name}!`);
        } else {
          setLoginMessage(`Welcome, ${storedUser.name}!`);
        }
      } else {
        setLoginMessage(`Welcome, ${storedUser.name}!`);
      }
      localStorage.setItem('lastLogin', now.toISOString());
    }
  }, []);

  useEffect(() => {
    if (loginMessage) {
      const timer = setTimeout(() => {
        setLoginMessage('');
        setIsRefreshed(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loginMessage]);

  const cartItems = useSelector(state => state.cart.cartItems);

  const getTotalPrice = (items) => {
    if (!Array.isArray(items)) {
      return 0;
    }
    return items.reduce((acc, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      if (!isNaN(price) && !isNaN(quantity)) {
        return acc + price * quantity;
      }
      return acc;
    }, 0);
  };

  const totalPrice = getTotalPrice(cartItems);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('lastLogin');
    setUser(null);
    setDropdownOpen(false);
  };

  const handleLoginClick = () => {
    if (openModel) {
      openModel();
    }
  };

  return (
    <nav className="bg-white p-4 px-6 md:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 gap-10 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="text-black hover:text-gray-400 font-bold md:ml-0">
            Home
          </Link>
          <Link to="/product" className="text-black hover:text-gray-400 font-bold md:ml-16">
            Product
          </Link>
          <Link to="/aboutus" className="text-black hover:text-gray-400 font-bold md:ml-16">
            About Us
          </Link>
          <Link to="/contactus" className="text-black hover:text-gray-400 font-bold md:ml-16">
            Contact
          </Link>
          {user ? (
            <div className="relative">
              <div 
                className="flex items-center cursor-pointer" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
              >
                <img 
                  src="https://via.placeholder.com/30" 
                  alt="Avatar" 
                  className="w-8 h-8 rounded-full z-10" 
                />
                <span className="ml-2 text-black">{user.name}</span>
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-48 z-20">
                  <div className="px-4 py-2">
                    <Link 
                      to="/orders"
                      className="hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Your Orders
                    </Link>
                    {' / '}
                    <Link 
                      to="/order-history"
                      className="hover:bg-gray-100"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Order History
                    </Link>
                  </div>
                  <button 
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <a href="#!" className="text-black hover:text-gray-400 font-bold md:ml-16" onClick={handleLoginClick}>
              Login
            </a>
          )}
        </div>
        <div className="hidden md:flex items-center font-bold relative">
          <Link to="/cart" className="text-black hover:text-gray-400 flex items-center">
            <FaShoppingCart className="mr-2" />
            Cart ({totalItems})
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center absolute -top-2 -right-2">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      {loginMessage && !isRefreshed && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 p-3 bg-green-500 text-white rounded-lg shadow-lg">
          {loginMessage}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
