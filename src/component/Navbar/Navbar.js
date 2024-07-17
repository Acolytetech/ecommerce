import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../images/JD LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 px-6 md:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
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
          <Link to="/contact" className="text-black hover:text-gray-400 font-bold md:ml-16">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex items-center font-bold">
          <Link to="/cart" className="text-black hover:text-gray-400 flex items-center">
            <FaShoppingCart className="mr-2" />
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
