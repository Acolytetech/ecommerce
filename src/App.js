// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './utils/store'; // Import your Redux store
import Navbar from './component/Navbar/Navbar';
import Banner from './component/banner/Banner';
import Card from './component/banner/Card';
import Testimonials from './component/banner/Tesimonial';
import Whovr from './component/banner/Whovr';
import Subscribe from './component/banner/Subscribe';
import Line from './component/banner/Line';
import Footer from './component/footer/Footer';
import Product from './pages/Product/Product';
import Home from './pages/home/Home';
import ProductDetails from './pages/Product/ProductDetail';
import Cart from './pages/cart/Cart';
import Model from './component/model/Model';
import Address from './pages/address/Address'
import { CartProvider } from 'react-use-cart';
import ShowModel from './component/model/ShowModel';
import ShowAddressModel from './component/model/ShowAddressModel';
import History from './pages/history/History';

function App() {
    const [isLoginModelOpen, setIsLoginModelOpen] = React.useState(false);
    const [isAddressModelOpen, setIsAddressModelOpen] = React.useState(false);

    const openLoginModel = () => setIsLoginModelOpen(true);
    const closeLoginModel = () => setIsLoginModelOpen(false);
    const openAddressModel = () => setIsAddressModelOpen(true);
    const closeAddressModel = () => setIsAddressModelOpen(false);

    return (
    <Provider store={store}>
      <CartProvider>  
        <Router>
            <Navbar openModel={openLoginModel} />
            <Routes>
                <Route path="/cart" element={<Cart openLoginModel={openLoginModel} openAddressModel={openAddressModel} />} />
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/history" element={<History />} />
                <Route path="/address" element={<Address openAddressModel={openAddressModel} />} />
                
            </Routes>
            {isLoginModelOpen && <ShowModel closeModel={closeLoginModel} />}
            {isAddressModelOpen && <ShowAddressModel closeModel={closeAddressModel} />}
        </Router>
<Footer/>
      </CartProvider>
    </Provider>
  );
}

export default App;
