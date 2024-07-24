import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowAddressModel from './ShowAddressModel';
import ShowModel from './ShowModel';
import Navbar from '../Navbar/Navbar';
import Cart from '../../pages/cart/Cart'; // Adjust the import path as needed
import Home from '../../pages/home/Home'; // Create a Home component if you don't have one

function Model() {
    const [isLoginModelOpen, setIsLoginModelOpen] = useState(false);
    const [isAddressModelOpen, setIsAddressModelOpen] = useState(false);

    const openLoginModel = () => {
        setIsLoginModelOpen(true);
    };

    const closeLoginModel = () => {
        setIsLoginModelOpen(false);
    };

    const openAddressModel = () => {
        setIsAddressModelOpen(true);
    };

    const closeAddressModel = () => {
        setIsAddressModelOpen(false);
    };

    return (
        <Router>
            <Navbar openModel={openLoginModel} />
            <Routes>
                <Route path="/cart" element={<Cart openLoginModel={openLoginModel} openAddressModel={openAddressModel} />} />
                <Route path="/" element={<Home />} />
            </Routes>
            {isLoginModelOpen && <ShowModel closeModel={closeLoginModel} />}
            {isAddressModelOpen && <ShowAddressModel closeModel={closeAddressModel} />}
        </Router>
    );
}

export default Model;
